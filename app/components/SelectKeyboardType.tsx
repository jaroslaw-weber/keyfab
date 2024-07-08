import { atom, useAtom } from "jotai";
import {
  Step,
  currentKeyboardLayoutAtom,
  currentLayoutIdAtom,
  keyboardTypeAtom,
  layerCountAtom,
  layersAtom,
  stepAtom,
} from "../state";
import { keyboardTypes } from "../keyboardType/list";
import { useEffect } from "react";
import { hardwareList } from "../db/utils";
import { HardwareSchema } from "../db/schema/KeyboardLayoutSchema";
import { useRouter } from "next/navigation";

const hardwareOptionsAtom = atom<HardwareSchema[]>([]);

export function SelectKeyboardType() {
  const router = useRouter();
  const [keyboardType, setKeyboardType] = useAtom(keyboardTypeAtom);
  const [layers, setLayers] = useAtom(layersAtom);
  const [step] = useAtom(stepAtom);
  const show = step == Step.move;
  const [hardwareOptions, setHardwareOptions] = useAtom(hardwareOptionsAtom);
  const [currentKeyboardLayout, setCurrentKeyboardLayout] = useAtom(
    currentKeyboardLayoutAtom
  );
  const [layoutId, setLayoutId] = useAtom(currentLayoutIdAtom);
  const [layerCount, setLayerCount] = useAtom(layerCountAtom);

  //

  const styleItems = [];

  styleItems.push(
    <option value="custom" key="custom">
      custom
    </option>
  );

  const hardwares = new Map<string, HardwareSchema | null>();
  for (const h of hardwareOptions) {
    hardwares.set(h.name, h);
  }
  for (const hardcoded of keyboardTypes) {
    if (hardwares.has(hardcoded.name)) {
      continue;
    }
    hardwares.set(hardcoded.name, null);
  }
  for (const [k, t] of Array.from(hardwares.entries())) {
    const styleItem = (
      <option
        value={k}
        onSelect={(e) => {
          const name = e.currentTarget.value;
          onSelected(name);
        }}
        key={k}
      >
        {k}
      </option>
    );

    styleItems.push(styleItem);
  }
  const selectStyle = (
    <select
      className="select select-bordered w-full max-w-xs my-2"
      value={keyboardType.name}
      onChange={(e) => {
        const name = e.currentTarget.value;
        onSelected(name);
      }}
    >
      {styleItems}
    </select>
  );

  function onSelected(name: string) {
    const hw = hardwares.get(name);

    if (hw) {
      //for layouts from db
      setLayoutId(hw.default_layout);
      console.log("loading layout", hw.default_layout);
      router.refresh();
    } else {
      //for hardcoded layouts
      setLayoutId("");
      const kt = keyboardTypes.find((t) => t.name === name);
      if (kt) {
        setKeyboardType(kt);
        setLayerCount(1);
        setLayers([
          {
            name: "layer",
            legends: [],
            order: 1,
          },
        ]);
      }
    }
  }

  async function loadAvailableKeyboardTypes() {
    const l = await hardwareList.getFullList();
    setHardwareOptions(l);
  }
  //
  useEffect(() => {
    loadAvailableKeyboardTypes();
  }, []);

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
