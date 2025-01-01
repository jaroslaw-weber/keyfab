"use client";

import React, { useEffect } from "react";
import KeyboardView from "./components/KeyboardView";
import { EditStylePanel } from "./components/EditStylePanel";
import { EditKeyPanel } from "./components/EditKeyPanel";
import { EditLayerCount } from "./components/EditLayerCount";
import { Print } from "./components/Print";
import { Steps } from "./components/Steps";
import { ResetButton } from "./components/ResetButton";
import { EditPhysicalLayout } from "./components/EditPhysicalLayout";
import { Labels } from "./components/Labels";
import { ImportPage } from "./pages/ImportPage";
import SaveLoadLayoutButtons from "./components/SaveLoadLayoutButtons";
import { useAtom } from "jotai";
import {
  currentKeyboardLayoutAtom,
  currentLayoutIdAtom,
  loadingAtom,
} from "./state";
import { db } from "./db";
import { keyboardLayoutCollection } from "./db/utils";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Home() {
  const [layoutId] = useAtom(currentLayoutIdAtom);
  const [currentLayout, setCurrentLayout] = useAtom(currentKeyboardLayoutAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  async function loadLayout() {
    if(!layoutId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    if (layoutId) {
      const layout = await keyboardLayoutCollection.getOne(layoutId);
      if (layout) {
        setCurrentLayout(layout);
      }
      setLoading(false);
    }
  }
  useEffect(() => {
    loadLayout();
  }, [layoutId]);
  return (
    <div>
      {loading && <LoadingSpinner />}
      {!loading && (
        <div>
          <div className="w-full py-8">
            <SaveLoadLayoutButtons />
            <Steps />
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex-1">
              <KeyboardView />
            </div>
            <div className="flex-1 flex flex-col gap-6 pr-8">
              <ImportPage />
              <EditLayerCount />
              <Labels />
              <EditKeyPanel />
              <EditStylePanel />
              <EditPhysicalLayout />
              <Print />
              <ResetButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
