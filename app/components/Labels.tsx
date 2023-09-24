import { useAtom } from "jotai";
import { Step, stepAtom } from "../state";

export function Labels() {
  const [step] = useAtom(stepAtom);
  if (step != Step.input) return null;
  return <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title justify-center">How to change label</h2>
      <div></div>
      <div className="card-actions justify-center">
        Click on key and type. Use tab to go to the next key.
      </div>
    </div>
  </div>;
}
