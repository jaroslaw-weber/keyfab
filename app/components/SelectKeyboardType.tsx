import { useAtom } from "jotai";
import { Step, keyboardTypeAtom, stepAtom } from "../state";
import { keyboardTypes } from "../keyboardType/list";

export function SelectKeyboardType() {
  const [keyboardType, setKeyboardType] = useAtom(keyboardTypeAtom);
  const [step] = useAtom(stepAtom);
  if (step != Step.move) {
    return null;
  }

  //

  const styleItems = [];
  for (const t of keyboardTypes) {
    const styleItem = (
      <option
        value={t.name}
        onSelect={(e) => {
          const name = e.currentTarget.value;
          const style = keyboardTypes.find((s) => s.name === name);
          if (!style) {
            throw new Error("style not found");
          }
          setKeyboardType(style);
        }}
        key={t.name}
      >
        {t.name}
      </option>
    );
    styleItems.push(styleItem);
  }
  const selectStyle = (
    <select
      className="select select-bordered w-full max-w-xs my-2"
      value={keyboardType.name}
      onChange={(e) => {
        const selected = keyboardTypes.find((x) => x.name == e.target.value);
        if (!selected) return;
        setKeyboardType(selected);
      }}
    >
      {styleItems}
    </select>
  );
  //
  const dropdown = <div></div>;
  const card = (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Keyboard Type</h2>
          <div className="card-actions justify-center">{selectStyle}</div>
        </div>
      </div>
    </div>
  );

  return card;
}
