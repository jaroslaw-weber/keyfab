import { useAtom } from "jotai";
import { keyboardTypeAtom } from "../state";
import { keyboardTypes } from "../keyboardType/list";

export function SelectKeyboardType() {
  const [keyboardType, setKeyboardType] = useAtom(keyboardTypeAtom);

  //

  const styleItems = [];
  for (const t of keyboardTypes) {
    const styleItem = (
      <option
        value={t.name}
        onSelect={(e) => {
          const name = e.currentTarget.value;
          console.log("name", name);
          const style = keyboardTypes.find((s) => s.name === name);
          if (!style) {
            throw new Error("style not found");
          }
          setKeyboardType(style);
        }}
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
        console.log("s", e.target.value);
        const selected = keyboardTypes.find((x) => x.name == e.target.value);
        console.log("name", selected);
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
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Keyboard Type</h2>
        <div className="card-actions justify-center">{selectStyle}</div>
      </div>
    </div>
  );

  return card;
}
