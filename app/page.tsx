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
import { ImportPage } from "./pages/ImportPage";

export default function Home() {
  const [css] = useAtom(styleAtom);

  return (
    <main className={`min-h-screen`}>
      <style>{css.css}</style>
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
        <div className="navbar px-6">
          <a className="normal-case text-xl pr-12">keyfab</a>
          <a className=" normal-case text-sm">keyboard layout design made easy</a>
        </div>
        <div className="w-full py-8 ">
          <Steps />
        </div>
        <div className="flex flex-row  gap-6">
          <div className="flex-1">
            <KeyboardView />
          </div>
          <div className="flex-1 flex flex-col gap-6 pr-8">
            <ImportPage/>
            <EditLayerCount />
            <Labels />
            <EditKeyPanel />
            <EditStylePanel />
            <EditPhysicalLayout />
            <ResetButton />
          </div>
        </div>
      </div>
    </main>
  );
}
