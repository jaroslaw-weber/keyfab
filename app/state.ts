import { PrimitiveAtom, atom } from "jotai";
import { defaultStyle } from "./style";
import { defaultUserLayout } from "./layer";
import { atomWithStorage } from "jotai/utils";
import { piantor } from "./keyboardType/piantor";
import { SelectedKey } from "./SelectedKey";
import { keyboardTypes } from "./keyboardType/list";


export const styleAtom = atomWithStorage("style", defaultStyle);

export const layersAtom = atomWithStorage("layers", defaultUserLayout);

export const keyboardTypeAtom = atomWithStorage('keyboardType',keyboardTypes[0]);

export const yamlAtom = atom('');

/** is editing physical layout? */
export const codeEditorFocusAtom = atom(false);

export enum EditMode {
  /**
   * when clicking on key, it will allow editing the label
   */
  input = "input",
  /**
   * when click on key, it will be selected an can be edited
   * */
  select = "select",
}

export enum Step {
  move = "move",
  input = "input",
  layers='layers',
  style = "style",
  keyType = "keyType",
  preview = "preview",
  import="import",
}
export const editModeAtom = atomWithStorage("edit-mode", true);

export const stepAtom = atomWithStorage("step", Step.move);

const defaultSelectedKey: SelectedKey = {
  layerIndex: 0,
  keyIndex: 0,
};
export const selectedKeyAtom = atom(defaultSelectedKey);

export const layerCountAtom = atomWithStorage("layer-count", 6);
