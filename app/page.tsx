import Image from "next/image";
import { JsxElement } from "typescript";
import { piantor } from "./layouts/piantor";
import { CSSProperties } from "react";

function renderKey(
  position: Position,
  style: KeyStyle,
  label: string,
  layer: Layer,
  keyboard:Keyboard
): JSX.Element {
  const { spacingMultiplier } = keyboard;
  const spacing = (layer.order) *20;

  const css = parseCssString(style.css)
  /*
  console.log('spacing', spacing);
  console.log('position', position)
  console.log('label', label)
  */
  const top = ((position.y+1) * (spacingMultiplier) + spacing) + "rem"
 // console.log('top',top)
  const left = (position.x+1) * spacingMultiplier + "rem"

  const rotation = position.rotation??0
  const rotate = `rotate(${rotation}deg)`
  return (
    <div
      className={style.tailwind}
      style={{
        position: "absolute",
        top,
        left,
        transform: rotate,
        ...css
      }}
    >
      <p className={style.pTailwind}> {label}</p>
    </div>
  );
}

function renderLayer(
  layer: Layer,
  keyboard: Keyboard,
  style: KeyStyle
): JSX.Element {
  const result: JSX.Element[] = [];
  for (let i = 0; i < keyboard.positions.length; i++) {
    const label = layer.legends[i];
    const position = keyboard.positions[i];
    result.push(renderKey(position, style, label, layer, keyboard));
  }

  return <div className="">{result}</div>;
}
function renderKeyboard(keyboard: Keyboard): JSX.Element {

  const layers: Layer[] = [
    {
      name: "base",
      legends: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
      order: 0,
    },
    {
      name: "symbols",
      legends: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      order: 1,
      
    },
    {
      name: "symbols",
      legends: ["test1 test2", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      order: 2,
    },
  ];
  const style: KeyStyle = {
    tailwind: " flex items-center w-11 h-11 rounded-lg bold shadow shadow-gray-600",
    pTailwind: "mx-auto opacity-80 text-center",
    css: 'background-color: #33BBC5;color:#fff;font-size:0,9rem',
  };
  const result: JSX.Element[] = [];
  console.log(keyboard.positions.length);

  for (const layer of layers) {
    const rendered = renderLayer(layer, keyboard, style);
    result.push(rendered);
  }

  return <div className="" style={{

    
  }}>{result}</div>;
}


function parseCssString(cssString:string):CSSProperties {
  const styleObj = {};
  const declarations = cssString.split(';');

  for (const declaration of declarations) {
    const [property, value] = declaration.split(':');
    if (property && value) {
      styleObj[property.trim()] = value.trim();
    }
  }

  return styleObj;
}

export default function Home() {
  const pageStyle: PageStyle = {
    css: `background-color: white;height:200vh`,
  }
  const css = parseCssString(pageStyle.css);
  console.log('css', css);
  const renderdKeyboard = renderKeyboard(piantor);
  
  return <main  className="min-h-screen"  style={css}><div className="min-h-screen" style={css}>{renderdKeyboard}</div></main>;
}
