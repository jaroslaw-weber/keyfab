"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import KeyboardView from "../../components/KeyboardView";
import { db } from "@/app/db";
import { atom, useAtom } from "jotai";
import {
  currentKeyboardLayoutAtom,
  currentLayoutIdAtom,
  currentLayoutNameAtom,
  layersAtom,
} from "@/app/state";
import { KeyboardLayoutSchema } from "@/app/db/schema/KeyboardLayoutSchema";
import { keyboardLayoutCollection, getUserId } from "@/app/db/utils";

const loadingAtom = atom(true);
export default function KeyboardPreview({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { id } = params;
  console.log("params", params);
  const [layoutName, setLayoutName] = useAtom(currentLayoutNameAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [currentKeyboardLayout, setCurrentKeyboardLayout] = useAtom(
    currentKeyboardLayoutAtom
  );
  async function loadLayout(id: string) {
    if (!id) {
      console.error("no id", id);
      setLoading(false);
      return;
    }
    console.log("loadLayout", id);
    const layout = await keyboardLayoutCollection.getOne(id);
    console.log("layout", layout);
    if (layout) {
      await setCurrentKeyboardLayout(layout);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadLayout(id);
  }, []);

  async function duplicateLayout() {
    const newLayout = { ...currentKeyboardLayout } as any;
    newLayout.id = undefined;
    newLayout.created_by = getUserId();

    await keyboardLayoutCollection.create(newLayout);
    router.push("/");
  }

  async function editLayout() {
    router.push(`/`);
  }
  const isMyLayout = currentKeyboardLayout.created_by === getUserId();
  console.log("isMyLayout", isMyLayout);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="flex flex-col justify-center items-center gap-4 py-8">
          <p className="text-xl uppercase">{layoutName}</p>
          <p>clone this layout and start editing it!</p>
          <div className="flex mx-auto gap-4">
          <button className="btn btn-neutral" onClick={() => duplicateLayout()}>
            clone
          </button>
          {isMyLayout && (
            <button className="btn btn-neutral" onClick={() => editLayout()}>
              edit
            </button>
          )}
          </div>
          <KeyboardView />
        </div>
      )}
    </div>
  );
}
