import { atom, useAtom } from "jotai";
import {
  Step,
  codeEditorFocusAtom,
  keyboardTypeAtom,
  stepAtom,
  yamlAtom,
} from "../state";
import { loadFromJson, saveToJson } from "../exportUtils";
import {
  ChangeEventHandler,
  MouseEventHandler,
  SyntheticEvent,
  useEffect,
} from "react";
import CodeMirror from "@uiw/react-codemirror";
import YAML from "yaml";

import { materialLight } from "@uiw/codemirror-theme-material";
import { validatePhysicalLayout } from "../service/validatePhysicalLayout";
import { MoveKey } from "./MoveKey";
import { SelectKeyboardType } from "./SelectKeyboardType";

export function EditPhysicalLayout() {
  const [keyboardType, setKeyboardType] = useAtom(keyboardTypeAtom);
  const [step] = useAtom(stepAtom);

  const stringified = YAML.stringify(keyboardType);
  const [yaml, setYaml] = useAtom(yamlAtom);
  const sktc = SelectKeyboardType()
  const moveKeyComponent = MoveKey()

  useEffect(() => {
    // This code will run when the component mounts
    console.log("Component mounted");

    // You can perform any other actions here, like fetching data, etc.

    // If you want to update the Jotai atom's value, you can use the `setData` function
    setYaml(stringified);

    // Don't forget to clean up any subscriptions or resources if needed
    return () => {
      console.log("Component unmounted");
      // Clean up any subscriptions or resources here
    };
  }, [setYaml, stringified]);
  //yamlPhysicalEditorFocusAtom
  const [codeEditorFocus, setCodeEditorFocus] = useAtom(codeEditorFocusAtom);

  const fileAtom = atom("");

  if (step != Step.move) {
    return <div/>;
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
  const yamlEditor = (
    <CodeMirror
      className="w-full max-w-xl rounded"
      value={yaml}
      height="20rem"
      theme={materialLight}
      extensions={[]}
      onChange={(val, viewUpdate) => {
        setYaml(val);
        // console.log('setting yaml', val);
      }}
      onFocus={() => {
        setCodeEditorFocus(true);
      }}
      onBlur={() => {
        setCodeEditorFocus(false);
      }}
    />
  );
  function applyLayout(event: SyntheticEvent) {
    //console.log('yaml now', yaml);
    const parsed = YAML.parse(yaml);
    //console.log('parsed', parsed);
    validatePhysicalLayout(parsed);
    //console.log('applying layout', parsed);

    setKeyboardType(parsed);
  }

  const yamlEditorCard = (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Edit with yaml</h2>
        <p>{`Sometimes it's easier to edit yaml directly`}</p>
        {yamlEditor}
        <button className="btn btn-primary" onClick={applyLayout}>
          Apply
        </button>
      </div>
    </div>
  );

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e: any) => {
    //read file to text
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = async (e: ProgressEvent<FileReader>) => {
      console.log("read ", e);
      const o = JSON.parse(e?.target?.result as string);
      validatePhysicalLayout(o);
      console.log(o);
      setKeyboardType(o);
    };
  };

  const importExportCard = (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <button
          className="btn mt-4 flex-1"
          onClick={() => saveToJson(keyboardType, "customKeyboard.json")}
        >
          export to json
        </button>
        <div>
          <p className="btn w-full mt-4 text-center  mb-4">import from json</p>
          <input
            type="file"
            className="file-input file-input-bordered w-full "
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
  const settingsCard = (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Settings</h2>
        <p>Key spacing (rem):</p>
        <div className="card-actions justify-center">{slider}</div>
        <p>Key size (rem):</p>
        <div className="card-actions justify-center">{slider2}</div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="flex flex-col gap-4">
        {sktc}
        {moveKeyComponent}
        {settingsCard}
        {yamlEditorCard}
        {importExportCard}
      </div>
    </div>
  );
}
