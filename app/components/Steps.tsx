import { useAtom } from "jotai";
import { Step, stepAtom } from "../state";

export function Steps() {
  const [step, setStep] = useAtom(stepAtom);

  let active = true;
  const stepClassMap = new Map<Step, boolean>();
  for (const s of [Step.move,Step.layers, Step.input, Step.keyType, Step.style, Step.preview]) {
	stepClassMap.set(s, active)
	if(s == step) active = false;
  }
  
  function getClasses(s: Step): string {
	const isStepActive = stepClassMap.get(s);
    if (isStepActive) {
      return "step step-primary";
    }
    return "step";
  }
  return (
    <ul className="steps w-full">
      <button className={getClasses(Step.move)} onClick={e =>setStep(Step.move)}>Key Placement</button>
      <button className={getClasses(Step.layers)} onClick={e =>setStep(Step.layers)}>Layers</button>
      <button className={getClasses(Step.input)} onClick={e =>setStep(Step.input)}>Labels</button>
      <button className={getClasses(Step.keyType)} onClick={e =>setStep(Step.keyType)}>Key Style</button>
      <button className={getClasses(Step.style)} onClick={e =>setStep(Step.style)}>Global Style</button>
      <button className={getClasses(Step.preview)} onClick={e =>setStep(Step.preview)}>Print</button>
    </ul>
  );
}
