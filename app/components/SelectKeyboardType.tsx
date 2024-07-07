import { atom, useAtom } from "jotai";
import { Step, currentKeyboardLayoutAtom, currentLayoutIdAtom, keyboardTypeAtom, stepAtom } from "../state";
import { keyboardTypes } from "../keyboardType/list";
import { useEffect } from "react";
import { hardwareList } from "../db/utils";
import { HardwareSchema } from "../db/schema/KeyboardLayoutSchema";
import { useRouter } from "next/navigation";

const hardwareOptionsAtom = atom<HardwareSchema[]>([]);

export function SelectKeyboardType() {
  const router = useRouter();
  const [keyboardType, setKeyboardType] = useAtom(keyboardTypeAtom);
  const [step] = useAtom(stepAtom);
  const show = step == Step.move
  const [hardwareOptions, setHardwareOptions] = useAtom(hardwareOptionsAtom);
  const [currentKeyboardLayout, setCurrentKeyboardLayout] = useAtom(currentKeyboardLayoutAtom);
  const [layoutId, setLayoutId] = useAtom(currentLayoutIdAtom)

  //

  const styleItems = [];
  /*
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
    */
   styleItems.push(<option value="custom" key="custom">custom</option>)
  for (const t of hardwareOptions) {
    const styleItem = (
      <option
        value={t.name}
        onSelect={(e) => {
          const name = e.currentTarget.value;
          const hw = hardwareOptions.find((s) => s.name === name);
          if (!hw) {
            return
          }
          setLayoutId(hw.default_layout)
          console.log('loading layout', hw.default_layout)
          router.refresh()
          
          
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
        /*
        const selected = keyboardTypes.find((x) => x.name == e.target.value);
        if (!selected) return;
        setKeyboardType(selected);
        */
        const name = e.currentTarget.value;
        const hw = hardwareOptions.find((s) => s.name === name);
        if (!hw) {
          return
        }
        setLayoutId(hw.default_layout)
        console.log('loading layout', hw.default_layout)
        router.refresh()
      }}
    >
      {styleItems}
    </select>
  );

  async function loadAvailableKeyboardTypes() {
    const l = await hardwareList.getFullList()
    setHardwareOptions(l)
  }
  //
  useEffect(()=>{
    loadAvailableKeyboardTypes()
  },[])

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

  return show && card;
}
