"use client";

import React from "react";
import { styleAtom } from "./state";
import { useAtom } from "jotai";
import KeyboardView from "./components/KeyboardView";
import { EditStylePanel } from "./components/EditStylePanel";
import { EditKeyPanel } from "./components/EditKeyPanel";
import { EditLayerCount } from "./components/EditLayerCount";
import { Steps } from "./components/Steps";
import { ResetButton } from "./components/ResetButton";
import { EditPhysicalLayout } from "./components/EditPhysicalLayout";
import { Labels } from "./components/Labels";
import { ImportPage } from "./pages/ImportPage";
import { LoginButton } from "./components/LoginButton";
import SaveLoadLayoutButtons from "./components/SaveLoadLayoutButtons";
import Layout from "./layout";

export default function Home() {
  return (
    <div>
      <div className="w-full py-8">
        <Steps />
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex-1">
          <SaveLoadLayoutButtons />
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
  );
}
