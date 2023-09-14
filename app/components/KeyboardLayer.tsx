import { useAtom } from "jotai";
import KeyboardKey from "./KeyboardKey";
import { layerCountAtom } from "../state";
//import { layerCssPropertiesAtom } from "../state";

export default function KeyboardLayer(props: {
  layer: Layer;
  keyboard: Keyboard;
  layerIndex: number;
}): JSX.Element {
  const [layerCount] = useAtom(layerCountAtom);
  const { layer, keyboard, layerIndex } = props;
  // const [layerCssProperties] = useAtom(layerCssPropertiesAtom);
  const result: JSX.Element[] = [];
  const className = layerIndex<layerCount?'layer':'invisible'
  for (let i = 0; i < keyboard.positions.length; i++) {
    if(!layer){
      continue
    }
    const position = keyboard.positions[i];
    result.push(KeyboardKey({ position, layer, index: i, layerIndex }));
  }

  return <div className={className}>{result}</div>;
}
