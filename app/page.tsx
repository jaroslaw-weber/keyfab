"use client";

import { piantor } from "./keyboardType/piantor";
import React from "react";
import {
  EditMode,
  styleAtom,
  editModeAtom,
  stepAtom,
  Step,
  emailAtom,
  passwordAtom,
  currentLayoutAtom,
  currentLayoutNameAtom,
  currentLayoutIdAtom,
} from "./state";
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
import { db } from "./db";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginButton } from "./components/LoginButton";

export default function Home() {
  const [css] = useAtom(styleAtom);
  const [currentLayoutName, setcurrentLayoutName] = useAtom(
    currentLayoutNameAtom
  );
  const [currentLayoutId, setcurrentLayoutId] = useAtom(currentLayoutIdAtom);

  async function saveLayout() {
    try {
      const id = currentLayoutId;
      if (id) {
        await db.collection("keyboard_layout").update(id, {
          //todo
          name: currentLayoutName, 
          "hardware": "test",
          "created_by": db.authStore.model?.id,
          "public": true,
          "positions": "{}",
          "layers": "{}",
          "spacing": 123,
          "key_size": 123
        });
      } else {
        const item = await db.collection("keyboard_layout").create({
          "hardware": "test",
          "created_by": db.authStore.model?.id,
          "public": true,
          "positions": "{}",
          "layers": "{}",
          "spacing": 123,
          "key_size": 123});
        setcurrentLayoutId(item.id);
      }
    } catch (e) {
      window.alert(e);
    }
  }

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
          <div className="flex-1">
            <a className="normal-case text-xl pr-12">keyfab</a>
            <a className=" normal-case text-sm">
              keyboard layout design made easy
            </a>
          </div>
          <div className="flex-none">
            <LoginButton />
          </div>
        </div>

        <div className="w-full py-8 ">
          <Steps />
        </div>
        <div className="flex flex-row  gap-6">
          <div className="flex-1">
            {" "}
            <div id="save" className="flex gap-4 max-w-lg  mx-auto mb-8">
              {currentLayoutId && <p>Layout ID: {currentLayoutId}</p>}
              <input
                type="text"
                className="file-input file-input-bordered w-full px-4 "
                placeholder="Input layout name"
                value={currentLayoutName}
                onChange={(e) => {
                  const newName = e.target.value;
                  setcurrentLayoutName(newName);
                }}
              />
              <button className="btn btn-neutral" onClick={() => saveLayout()}>
                Save layout
              </button>
              <button className="btn btn-neutral" onClick={() => setcurrentLayoutId("")}>
                Clear
              </button>
            </div>
            <KeyboardView />
          </div>
          <div className="flex-1 flex flex-col gap-6 pr-8">
            <ImportPage />
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
