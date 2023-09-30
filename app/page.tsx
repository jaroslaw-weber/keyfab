"use client";

import { piantor } from "./keyboardType/piantor";
import React from "react";
import { EditMode, styleAtom, editModeAtom, stepAtom, Step } from "./state";
import { useAtom } from "jotai";
import KeyboardView from "./components/KeyboardView";
import { EditStylePanel } from "./components/EditStylePanel";
import { EditKeyPanel } from "./components/EditKeyPanel";
import { EditLayerCount } from "./components/EditLayerCount";
import { SelectKeyboardType } from "./components/SelectKeyboardType";
import { Steps } from "./components/Steps";
import { ResetButton } from "./components/ResetButton";
import { MoveKey } from "./components/MoveKey";
import { EditPhysicalLayout } from "./components/EditPhysicalLayout";
import { Labels } from "./components/Labels";

export default function Home() {
  const renderdKeyboard = KeyboardView(piantor);

  const [css] = useAtom(styleAtom);

  const [step] = useAtom(stepAtom);

  const resetButton = ResetButton();
  const stepsComponent = Steps();
  //const selectModeComponent = SelectMode();
  const editLayerCountComponent = EditLayerCount();
  const editKeyPanelComponent = EditKeyPanel();
  const editStylePanelComponent = EditStylePanel();

  return (
    <main className={`min-h-screen`}>
      <style>
        {css.css}
      </style>
      <style>{`
        .cm-scroller {
          border-radius: 0.25rem;
        padding: 0.5rem;
        }
        .cm-editor{
          border-radius: 0.25rem;
          padding: 0.5rem;
          border-width: 1px;
        }
      `}</style>
      <div className="global min-h-full">
        <p className="text-center uppercase font-bold text-lg pt-4 tracking-wider">
          keyfab
        </p>
        <p className="text-center mb-6 mt-4 lowercase text-sm">
          Keyboard Layout Design Made Easy
        </p>
        <div className="flex flex-row  gap-6">
          <div className="flex-1">{renderdKeyboard}</div>
          <div className="flex-1 flex flex-col gap-6 pr-8">
            {stepsComponent}
            {editLayerCountComponent}
            {Labels()}
            {editKeyPanelComponent}
            {editStylePanelComponent}
            {EditPhysicalLayout()}
            {resetButton}
          </div>
        </div>
      </div>
    </main>
  );
}
