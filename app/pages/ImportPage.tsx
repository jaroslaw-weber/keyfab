/* eslint-disable react/no-unescaped-entities */
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { parseKleLayout } from "../service/kle";
import { validatePhysicalLayout } from "../service/physicalLayout";
import {
  Step,
  keyboardTypeAtom,
  layerCountAtom,
  layersAtom,
  stepAtom,
} from "../state";
import { ChangeEventHandler } from "react";
import { readJsonFileAsObject } from "../service/file";
import { fixLayers } from "../service/layer";

export function ImportPage() {
  const step = useAtomValue(stepAtom);
  const setKeyboardType = useSetAtom(keyboardTypeAtom);
  const [layers, setLayers] = useAtom(layersAtom);
  const layerCount = useAtomValue(layerCountAtom);

  if (step != Step.import) {
    return null;
  }

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (
    e: any
  ) => {
    const kleSettings: any[][] = await readJsonFileAsObject(e);
    const parsed = parseKleLayout(kleSettings);
    validatePhysicalLayout(parsed.physicalLayout);
    console.log(parsed);
    setKeyboardType(parsed.physicalLayout);
    fixLayers(parsed.layers, layerCount);
    setLayers(parsed.layers);
  };
  const result = (
    <div className="flex flex-col gap-4">
      <p className="text-3xl">Import</p>
      <p>You can skip this step if you don't want to import anything.</p>
      <p>You can import layout from http://www.keyboard-layout-editor.com/</p>
      <div>
        <input
          type="file"
          className="file-input file-input-bordered w-full "
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
  return result;
}
