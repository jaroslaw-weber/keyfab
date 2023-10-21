import { useAtom } from "jotai";
import { Step, layerCountAtom, stepAtom } from "../state";

export function EditLayerCount() {
  const [layerCount, setLayerCount] = useAtom(layerCountAtom);
  const [step] = useAtom(stepAtom);
  if(step != Step.layers){
    return null;
  }
  const slider = (
    <input
      onChange={(e) => setLayerCount(parseInt(e.target.value))}
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
  return result2;
}
