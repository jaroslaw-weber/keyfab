import { useAtom } from "jotai";
import {
  Step,
  keyboardTypeAtom,
  layersAtom,
  selectedKeyAtom,
  stepAtom,
} from "../state";

export function EditKeyPanel() {
  const [key] = useAtom(selectedKeyAtom);
  const [layers, setLayers] = useAtom(layersAtom);
  const [step] = useAtom(stepAtom);
  const layer = layers[key.layerIndex];
  const label: string | null = layers[key.layerIndex]?.legends[key.keyIndex];

  if (step != Step.keyType) return null;

  const showEmpty = step != Step.keyType
  //

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

  const category =
    layer.specialKeys?.find((x) => x.index == key.keyIndex)?.category ?? 0;

  const result = (
    <div className=" sticky top-20">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Selected Key</h2>
          <div></div>
          <div className="card-actions justify-center">
            <kbd className="kbd">{label}</kbd>
          </div>
          <select
            className="select select-bordered w-full mt-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="0">Basic Key</option>
            <option value="1">Special Key 1</option>
            <option value="2">Special Key 2</option>
          </select>
        </div>
      </div>
      <p className="mt-4 ml-4">
        Click on key to select it and change key type.
      </p>
    </div>
  );
  return (!showEmpty && result)
}
