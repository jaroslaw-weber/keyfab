import { atom } from "jotai";
import { defaultStyle } from "./style";
import { defaultUserLayout } from "./layer";
import { SelectedKey } from "./SelectedKey";
import { keyboardTypes } from "./keyboardType/list";
import { db } from "./db";
import { KeyboardLayoutSchema } from "./db/schema/KeyboardLayoutSchema";
import { atomWithStorage } from "jotai/utils";

export const styleAtom = atom(defaultStyle);

export const layersAtom = atom(defaultUserLayout);

export const keyboardTypeAtom = atom(keyboardTypes[0]);

export const yamlAtom = atom("");

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
  info = "info",
  move = "move",
  input = "input",
  layers = "layers",
  style = "style",
  keyType = "keyType",
  preview = "preview",
  import = "import",
}
export const editModeAtom = atom(true);

export const stepAtom = atom(Step.move);

const defaultSelectedKey: SelectedKey = {
  layerIndex: 0,
  keyIndex: 0,
};
export const selectedKeyAtom = atom(defaultSelectedKey);

export const layerCountAtom = atom(6);

export const emailAtom = atom("");
export const passwordAtom = atom("");
export const passwordConfirmAtom = atom("");
export const usernameAtom = atom("");
export const currentLayoutIdAtom = atomWithStorage("currentLayoutId", "j5op1pbknzw3jo8");
export const currentLayoutNameAtom = atom("");
export const layoutListAtom = atom<any[]>([]);
export const loadingLayoutsAtom = atom(false);
export const loadingAtom = atom(true);
const layoutDescriptionAtom = atom("");
const layoutCreatorAtom = atom("");
export const offsetAtom = atom({ x: 0, y: 0 });

export const currentKeyboardLayoutAtom = atom(
  (get) => {
    const currentLayoutName = get(currentLayoutNameAtom);
    const keyboardType = get(keyboardTypeAtom);
    const layers = get(layersAtom);

    return {
      id: get(currentLayoutIdAtom),
      description: get(layoutDescriptionAtom),
      name: currentLayoutName,
      hardware: keyboardType.name,
      created_by: get(layoutCreatorAtom),
      public: true,
      layers,
      positions: keyboardType.positions,
      spacing: keyboardType.spacing,
      key_size: keyboardType.keySize,
      offset_y: get(offsetAtom).y,
      offset_x: get(offsetAtom).x,
      layer_count: get(layerCountAtom),
    };
  },
  (get, set, update: KeyboardLayoutSchema) => {
    const currentLayoutName = update.name ?? get(currentLayoutNameAtom);
    const keyboardType: KeyboardType = {
      name: update.hardware,
      positions: update.positions,
      spacing: update.spacing!,
      keySize: update.key_size!,
    };
    const layers = update.layers ?? get(layersAtom);

    set(layoutDescriptionAtom, update.description ?? "");
    set(currentLayoutNameAtom, currentLayoutName);
    set(keyboardTypeAtom, keyboardType);
    set(layersAtom, layers);
    set(currentLayoutIdAtom, update.id!);
    set(layoutCreatorAtom, update.created_by!);
    set(layerCountAtom, update.layer_count!);
    set(offsetAtom, { x: update.offset_x ?? 0, y: update.offset_y ?? 0 });
  }
);
