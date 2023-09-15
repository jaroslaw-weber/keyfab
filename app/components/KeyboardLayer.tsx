import { useAtom } from "jotai";
import KeyboardKey from "./KeyboardKey";
import { layerCountAtom, layersAtom } from "../state";
//import { layerCssPropertiesAtom } from "../state";

export default function KeyboardLayer(props: {
  layer: Layer;
  keyboard: Keyboard;
  layerIndex: number;
}): JSX.Element {
  const [layerCount] = useAtom(layerCountAtom);
  const { layer, keyboard, layerIndex } = props;

  const [layers, setLayers] = useAtom(layersAtom);

  function setLayerName(layerName: string) {
    layers[layerIndex].name = layerName;
    setLayers(layers);
  }

  // const [layerCssProperties] = useAtom(layerCssPropertiesAtom);
  const result: JSX.Element[] = [];
  const className = layerIndex < layerCount ? "layer" : "invisible";
  for (let i = 0; i < keyboard.positions.length; i++) {
    if (!layer) {
      continue;
    }
    const position = keyboard.positions[i];
    result.push(KeyboardKey({ position, layer, index: i, layerIndex }));
  }

  return (
    <div className={className}>
      <input
        className="layer-name"
        value={layers[layerIndex]?.name}
        onChange={(e) =>{
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
