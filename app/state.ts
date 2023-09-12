import { atom, useAtom } from "jotai";
import { parseCssString } from "./cssUtils";
import {defaultStyle} from './style'

export const globalCssAtom = atom(defaultStyle.globalCss);
export const globalCssPropertiesAtom = atom((get) =>
  parseCssString(get(globalCssAtom))
);

export const layerCssAtom = atom(defaultStyle.layerCss);
export const layerCssPropertiesAtom = atom((get) =>
  parseCssString(get(layerCssAtom))
);

export const keyCssAtom = atom(defaultStyle.keyCss);
export const keyCssPropertiesAtom = atom((get) =>
  parseCssString(get(keyCssAtom))
);
