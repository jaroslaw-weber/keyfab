"use client";

import { piantor } from "./layouts/piantor";
import React from "react";
import { EditMode, styleAtom, editModeAtom } from "./state";
import { useAtom } from "jotai";
import KeyboardView from "./components/KeyboardView";
import { EditStylePanel } from "./components/EditStylePanel";
import { EditKeyPanel } from "./components/EditKeyPanel";
import { EditLayerCount } from "./components/EditLayerCount";
import { SelectMode } from "./components/SelectMode";

export default function Home() {
  const renderdKeyboard = KeyboardView(piantor);

  const [css] = useAtom(styleAtom);

 

  return (
    <main className={`min-h-screen`}>
      <style>{css.css}</style>
      <div className="global min-h-full">
        <p className="text-center uppercase font-bold text-lg pt-4 tracking-wider">butter keys</p>
        <p className="text-center mb-6 mt-4 lowercase text-sm">Keyboard Layout Design Made Easy</p>
        <div className="flex flex-row  gap-6">
          <div className="flex-1">{renderdKeyboard}</div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex gap-4">

            {SelectMode()}
            {EditLayerCount()}
            </div>
            {EditKeyPanel()}
          </div>
          <div className="flex-1 mr-8">{EditStylePanel()}</div>
        </div>
      </div>
    </main>
  );
}
