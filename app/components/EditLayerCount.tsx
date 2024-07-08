import { useAtom } from "jotai";
import {
  Step,
  keyboardTypeAtom,
  layerCountAtom,
  layersAtom,
  stepAtom,
} from "../state";
import { fixLayers, getEmptyLayer } from "../service/layer";

export function EditLayerCount() {
  const [layerCount, setLayerCount] = useAtom(layerCountAtom);
  const [keyboardType] = useAtom(keyboardTypeAtom)
  const [layers, setLayers] = useAtom(layersAtom);
  const [step] = useAtom(stepAtom);
  const show = step == Step.layers;
  function onChange(e: any) {
    setLayerCount(parseInt(e.target.value));
    fixLayers({layers, layerCount,keyCount: keyboardType.positions.length})
    setLayers(layers);
  }
  const slider = (
    <input
      onChange={onChange}
      type="range"
      min={1}
      max={10}
      value={layerCount}
      className="range range-primary"
    />
  );
  const result2 = (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Layers</div>
        <div className="stat-value py-2">{layerCount}</div>
        <div className="stat-desc">{slider}</div>
      </div>
    </div>
  );
  return show &&result2;
}
