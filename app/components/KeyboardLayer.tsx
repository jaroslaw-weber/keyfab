import { useAtom } from "jotai";
import KeyboardKey from "./KeyboardKey";
//import { layerCssPropertiesAtom } from "../state";

export default function KeyboardLayer(props:{
  layer: Layer,
  keyboard: Keyboard,
layerIndex: number}
): JSX.Element {
	const {layer, keyboard, layerIndex} = props;
 // const [layerCssProperties] = useAtom(layerCssPropertiesAtom);
  const result: JSX.Element[] = [];
  for (let i = 0; i < keyboard.positions.length; i++) {
    const label = layer.legends[i];
    const position = keyboard.positions[i];
    result.push(KeyboardKey({ position, layer, keyboard,index:i, layerIndex }));
  }

  return (
    <div className="layer">
      {result}
    </div>
  );
}
