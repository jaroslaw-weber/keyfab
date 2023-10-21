import { useAtom } from "jotai";
import KeyboardKey from "./KeyboardKey";
import { keyboardTypeAtom, layerCountAtom, layersAtom } from "../state";
//import { layerCssPropertiesAtom } from "../state";

export default function KeyboardLayer(props: {
  layerIndex: number;
}): JSX.Element {
  const [layerCount] = useAtom(layerCountAtom);
  const [layers, setLayers] = useAtom(layersAtom);

  const { layerIndex } = props;

  const result: JSX.Element[] = [];
  const className = layerIndex < layerCount ? "layer" : "invisible";
  for (let i = 0; i < 100; i++) {
    const key = <KeyboardKey index={i} layerIndex={layerIndex} />;
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
