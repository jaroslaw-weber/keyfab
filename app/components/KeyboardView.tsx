import { useAtom } from "jotai";
import KeyboardLayer from "./KeyboardLayer";
import { layersAtom } from "../state";

export default function KeyboardView(keyboard: Keyboard): JSX.Element {
	const [layers, setLayers]=useAtom(layersAtom)
	const style: KeyStyle = {
	  tailwind:
		" flex items-center w-11 h-11 rounded-lg bold shadow shadow-gray-600",
	  pTailwind: "mx-auto opacity-80 text-center",
	  css: "background-color: #33BBC5;color:#fff;font-size:0,9rem",
	};
	const result: JSX.Element[] = [];
	console.log(keyboard.positions.length);
  
	for (let i =0 ; i < layers.length; i++) {
		const layer = layers[i];
	  const rendered = KeyboardLayer({layer, keyboard, layerIndex:i });
	  result.push(rendered);
	}
  
	return (
	  <div className="flex flex-col h-full">
		{result}
	  </div>
	);
  }