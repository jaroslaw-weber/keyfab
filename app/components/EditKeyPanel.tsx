import { useAtom } from "jotai";
import { layersAtom, selectedKeyAtom } from "../state";

export function EditKeyPanel() {
  const [key] = useAtom(selectedKeyAtom);
  const [layers, setLayers] = useAtom(layersAtom);
  const layer = layers[key.layerIndex];
  const label: string | null = layers[key.layerIndex]?.legends[key.keyIndex];

  function setCategory(v: string) {
    const n = Number(v);
    if (!layer.specialKeys) {
      layer.specialKeys = [];
    }
    //remove special key
    layer.specialKeys = layer.specialKeys.filter(
      (x) => x.index != key.keyIndex
    );
    if (n > 0) {
      layer.specialKeys.push({
        index: key.keyIndex,
        category: n,
      });
    }
    setLayers([...layers]);
  }

  const category = layer.specialKeys?.find(x=> x.index == key.keyIndex)?.category ?? 0;
  console.log('category', category);
  return (
    <div>
      <p>selected key info</p>
      <p>layer index: {key.layerIndex}</p>
      <p>key index: {key.keyIndex}</p>
      <p>label: {label}</p>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="0">basic key</option>
        <option value="1">special key 1</option>
        <option value="2">special key 2</option>
      </select>
    </div>
  );
}
