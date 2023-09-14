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

  const [editMode, setEditMode] = useAtom(editModeAtom);

  function toggleEditMode() {
    if (editMode == EditMode.input) {
      setEditMode(EditMode.select);
    } else {
      setEditMode(EditMode.input);
    }
  }

  return (
    <main className={`min-h-screen`}>
      <style>{css.css}</style>
      <div className="">
        <div className="flex flex-row global gap-6">
          <div className="flex-1">{renderdKeyboard}</div>
          <div className="flex-1 flex flex-col gap-6">{SelectMode()}
            {EditKeyPanel()}
            {EditLayerCount()}
          </div>
          <div className="flex-1">{EditStylePanel()}</div>
        </div>
      </div>
    </main>
  );
}
