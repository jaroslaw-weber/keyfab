import { useAtom } from "jotai";
import KeyboardLayer from "./KeyboardLayer";
import { layerCountAtom, layersAtom } from "../state";
import { cloneDeep } from "lodash";

export default function KeyboardView(keyboard: Keyboard): JSX.Element {
  const [layers] = useAtom(layersAtom);
  const [layerCount] = useAtom(layerCountAtom);
  const result: JSX.Element[] = [];
  console.log(keyboard.positions.length);
  for (let i = 0; i < 10; i++) {
    let layer = layers[i];

    const rendered = KeyboardLayer({ layer, keyboard, layerIndex: i });
    result.push(rendered);
  }

  return <div className="flex flex-col min-h-full">{result}</div>;
}
