import { useAtom } from "jotai";
import KeyboardLayer from "./KeyboardLayer";
import { layerCountAtom, layersAtom } from "../state";
import { cloneDeep } from "lodash";

export default function KeyboardView(keyboard: KeyboardType): JSX.Element {
  const [layerCount] = useAtom(layerCountAtom);
  const result: JSX.Element[] = [];
  for (let i = 0; i < 10; i++) {

    const rendered = KeyboardLayer({ layerIndex: i });
    result.push(rendered);
  }

  return <div className="flex flex-col min-h-full">{result}</div>;
}
