import { useAtom } from "jotai";
import KeyboardKey from "./KeyboardKey";
import { layerCssPropertiesAtom } from "../state";

export default function KeyboardLayer(props:{
  layer: Layer,
  keyboard: Keyboard,}
): JSX.Element {
	const {layer, keyboard} = props;
  const [layerCssProperties] = useAtom(layerCssPropertiesAtom);
  const result: JSX.Element[] = [];
  for (let i = 0; i < keyboard.positions.length; i++) {
    const label = layer.legends[i];
    const position = keyboard.positions[i];
    result.push(KeyboardKey({ position, label, layer, keyboard }));
  }

  return (
    <div className="keyboard-layer" style={layerCssProperties}>
      {result}
    </div>
  );
}
