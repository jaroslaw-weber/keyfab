import { PrimitiveAtom, atom } from "jotai";
import { defaultStyle } from "./style";
import { defaultUserLayout } from "./layer";
import { atomWithStorage } from "jotai/utils";
import { piantor } from "./layouts/piantor";
import { SelectedKey } from "./SelectedKey";

export const cssAtom = atomWithStorage("style", defaultStyle);

export const layersAtom = atomWithStorage("layers", defaultUserLayout);


export const keyboardAtom = atom(piantor);

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
export const editModeAtom = atomWithStorage("edit-mode","input");

const defaultSelectedKey: SelectedKey = {
  layerIndex: 0,
  keyIndex: 0,
};
export const selectedKeyAtom = atom(defaultSelectedKey);
