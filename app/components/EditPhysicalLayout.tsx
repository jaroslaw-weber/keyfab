import { atom, useAtom } from "jotai";
import { Step, keyboardTypeAtom, stepAtom } from "../state";
import { loadFromJson, saveToJson } from "../exportUtils";
import { ChangeEventHandler } from "react";

export function EditPhysicalLayout() {
  const [keyboardType, setKeyboardType] = useAtom(keyboardTypeAtom);
  const [step] = useAtom(stepAtom);

  const fileAtom = atom("");

  if (step != Step.move) {
    return null;
  }

  const slider = (
    <input
      type="range"
      min={0}
      max={10}
      step="any"
      value={keyboardType.spacing}
      className="range"
      onChange={(e) => {
        const newV = Number(e.target.value);
        const kt = { ...keyboardType };
        kt.spacing = newV;
        setKeyboardType(kt);
      }}
    />
  );
  const slider2 = (
    <input
      type="range"
      min={0}
      max={10}
      step="any"
      value={keyboardType.keySize}
      className="range"
      onChange={(e) => {
        const newV = Number(e.target.value);
        const kt = { ...keyboardType };
        kt.keySize = newV;
        setKeyboardType(kt);
      }}
    />
  );

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e: any) => {
    //read file to text
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = async (e: ProgressEvent<FileReader>) => {
      console.log("read ", e);
      const o = JSON.parse(e?.target?.result as string);
      console.log(o);
      setKeyboardType(o);
    };
  };

  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Settings</h2>
            <p>Key spacing (rem):</p>
            <div className="card-actions justify-center">{slider}</div>
            <p>Key size (rem):</p>
            <div className="card-actions justify-center">{slider2}</div>

            <button
              className="btn btn-primary mt-4 flex-1"
              onClick={() => saveToJson(keyboardType, "customKeyboard.json")}
            >
              export
            </button>
            <div>
              <p className="mt-4 text-center text-lg mb-4">import</p>
              <input
                type="file"
                className="file-input file-input-bordered w-full "
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
