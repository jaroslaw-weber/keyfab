/* eslint-disable react/no-unescaped-entities */
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { parseKleLayout } from "../service/kle";
import { validatePhysicalLayout } from "../service/physical";
import {
  Step,
  keyboardTypeAtom,
  layerCountAtom,
  layersAtom,
  stepAtom,
  currentKeyboardLayoutAtom,
} from "../state";
import { ChangeEventHandler } from "react";
import { readJsonFileAsObject } from "../service/file";
import { fixLayers } from "../service/layer";

export function ImportPage() {
  const step = useAtomValue(stepAtom);
  const setKeyboardType = useSetAtom(keyboardTypeAtom);
  const [layers, setLayers] = useAtom(layersAtom);
  const layerCount = useAtomValue(layerCountAtom);
  const [layout, setLayout] = useAtom(currentKeyboardLayoutAtom);
  const show = step === Step.import;

  const importKleLayout: ChangeEventHandler<HTMLInputElement> = async (
    e: any
  ) => {
    const kleSettings: any[][] = await readJsonFileAsObject(e);
    const parsed = parseKleLayout(kleSettings);
    validatePhysicalLayout(parsed.physicalLayout);
    console.log(parsed);
    setKeyboardType(parsed.physicalLayout);
    console.log(
      "counts",
      parsed.physicalLayout.positions.length,
      layers[0].legends.length
    );
    fixLayers({
      layers: parsed.layers,
      layerCount,
      keyCount: parsed.physicalLayout.positions.length,
    });
    setLayers(parsed.layers);
  };

  const handleImport: ChangeEventHandler<HTMLInputElement> = async (e: any) => {
    const layoutData: any = await readJsonFileAsObject(e);
    setLayout(layoutData);
  };

  const handleExport = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify({ ...layout, id: undefined }));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", layout.name + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const result = show && (
    <div className="flex flex-col gap-4">
      <p className="text-3xl">Import / Export</p>
      <p>
        You can save the layout as a json file and share it with someone. It is
        recommended to use the "share" function though.
      </p>
      <div className="flex flex-col gap-4">
        <button className="btn btn-neutral" onClick={handleExport}>
          Export
        </button>
        <div>
          <p>Import:</p>
          <input
            type="file"
            className="file-input file-input-bordered mt-4 w-full"
            onChange={handleImport}
          />
        </div>
      </div>
      <p className="text-3xl pt-6">Import from KLE</p>
      <p>You can skip this step if you don't want to import anything.</p>
      <p>You can import layout from http://www.keyboard-layout-editor.com/</p>
      <div>
        <input
          type="file"
          className="file-input file-input-bordered w-full"
          onChange={importKleLayout}
        />
      </div>
    </div>
  );
  return result;
}
