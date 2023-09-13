import { useAtom } from "jotai";
import { layersAtom, selectedKeyAtom } from "../state";
import KeyboardKey from "./KeyboardKey";

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
	<div className="bg-white rounded-lg shadow-lg p-4 mx-auto max-w-md">
	  <h2 className="text-2xl font-semibold mb-4">Selected Key</h2>
	  <div className="space-y-2">
		<p className="text-gray-600">Layer Number: {key.layerIndex}</p>
		<p className="text-gray-600">Key Number: {key.keyIndex}</p>
		<p className="text-gray-600">Label: {label}</p>
	  </div>
	  <div className="mt-4">
		<label className="block text-gray-700 pb-2">Category:</label>
		<select
		  className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
		  value={category}
		  onChange={(e) => setCategory(e.target.value)}
		>
		  <option value="0">Basic Key</option>
		  <option value="1">Special Key 1</option>
		  <option value="2">Special Key 2</option>
		</select>
	  </div>
	</div>
  );
  
}
