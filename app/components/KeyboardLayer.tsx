import { useAtom } from "jotai";
import KeyboardKey from "./KeyboardKey";
import { keyboardTypeAtom, layerCountAtom, layersAtom } from "../state";
//import { layerCssPropertiesAtom } from "../state";

export default function KeyboardLayer(props: {
  layerIndex: number;
}): JSX.Element {
  const [layerCount] = useAtom(layerCountAtom);
  const [keyboardType] = useAtom(keyboardTypeAtom);
  const [layers, setLayers] = useAtom(layersAtom);

  const { layerIndex } = props;

  const layer = layers[layerIndex];
  const keyCount = keyboardType.positions.length

  const result: JSX.Element[] = [];
  const className = layerIndex < layerCount ? "layer" : "invisible";
  console.log("positions: ", keyboardType.positions);
  for (let i = 0; i < keyCount; i++) {
    
      const key = KeyboardKey({ index: i, layerIndex });
      result.push(key);
    
  }

  return (
    <div className={className}>
      <input
        className="layer-name"
        value={layers[layerIndex]?.name}
        onChange={(e) => {
          const newName = e.target.value;
          const newLayers = [...layers];
          newLayers[layerIndex].name = newName;
          setLayers(newLayers);
        }}
      />
      {result}
    </div>
  );
}
