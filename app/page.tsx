"use client";

import Image from "next/image";
import { JsxElement } from "typescript";
import { piantor } from "./layouts/piantor";
import React, { use } from "react";
import {
  globalCssAtom,
  globalCssPropertiesAtom,
  globalTailwindAtom,
  keyCssAtom,
  keyCssPropertiesAtom,
  layerCssAtom,
  layersAtom,
} from "./state";
import { useAtom } from "jotai";
import { parseCssString } from "./cssUtils";
import KeyboardKey from "./components/KeyboardKey";
import KeyboardLayer from "./components/KeyboardLayer";


function renderKeyboard(keyboard: Keyboard): JSX.Element {
  const [layers, setLayers]=useAtom(layersAtom)
  const style: KeyStyle = {
    tailwind:
      " flex items-center w-11 h-11 rounded-lg bold shadow shadow-gray-600",
    pTailwind: "mx-auto opacity-80 text-center",
    css: "background-color: #33BBC5;color:#fff;font-size:0,9rem",
  };
  const result: JSX.Element[] = [];
  console.log(keyboard.positions.length);

  for (const layer of layers) {
    const rendered = KeyboardLayer({layer, keyboard});
    result.push(rendered);
  }

  return (
    <div className="flex flex-col h-full">
      {result}
    </div>
  );
}
export default function Home() {
  const renderdKeyboard = renderKeyboard(piantor);
  const [globalCss, setGlobalCss] = useAtom(globalCssAtom);
  const [layerCss, setLayerCss] = useAtom(layerCssAtom);
  const [keyCss, setKeyCss] = useAtom(keyCssAtom);

  const textareaClasses = `border rounded px-2 py-1 mt-1 mb-2`
  const editLayerCssPanel = (
    <div className="flex flex-col h-full spacing-10 p-8">
      <div>
        <p className="text-2xl mb-4">edit layout in real time!</p>
        <p>global style (css)</p>
        <textarea
          className={textareaClasses}
          onChange={(e) => setGlobalCss(e.target.value)}
          value={globalCss}
          rows={2}
        />
      </div>
      <div>
        <p>layer style (css)</p>
        <textarea
          className={textareaClasses}
          onChange={(e) => setLayerCss(e.target.value)}
          value={layerCss}
          rows={7}
        />
      </div>
      <div>
        <p>key style (css)</p>
        <textarea
          className={textareaClasses}
          onChange={(e) => setKeyCss(e.target.value)}
          value={keyCss}
        rows={8}
        />
      </div>
    </div>
  );

  const [globalCssProperties] = useAtom(globalCssPropertiesAtom);

  return (
    <main className={`min-h-screen flex flex-row`} style={globalCssProperties}>
      <div className="flex-1">{renderdKeyboard}</div>
      <div className="flex-1">{editLayerCssPanel}</div>
    </main>
  );
}
