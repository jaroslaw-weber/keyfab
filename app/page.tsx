"use client";

import { piantor } from "./layouts/piantor";
import React from "react";
import { EditMode, cssAtom, editModeAtom } from "./state";
import { useAtom } from "jotai";
import KeyboardView from "./components/KeyboardView";
import { EditStylePanel } from "./components/EditStylePanel";
import { EditKeyPanel } from "./components/EditKeyPanel";

export default function Home() {
  const renderdKeyboard = KeyboardView(piantor);

  const [css] = useAtom(cssAtom);

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
      <style>{css}</style>
      <div className="">
        <div className="flex justify-around py-2">
        <p className="">
          edit mode: {editMode}
        </p>
        <button className="border rounded py-1 px-2 bg-slate-800 text-white" onClick={toggleEditMode}>toggle edit mode</button></div>
        <div className="flex flex-row global gap-6">
          <div className="flex-1">{renderdKeyboard}</div>
          <div className="flex-1">{EditKeyPanel()}</div>
          <div className="flex-1">{EditStylePanel()}</div>
        </div>
      </div>
    </main>
  );
}
