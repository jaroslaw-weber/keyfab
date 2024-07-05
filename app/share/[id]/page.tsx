"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import KeyboardView from "../../components/KeyboardView";
import { db } from "@/app/db";
import { atom, useAtom } from "jotai";
import { currentLayoutIdAtom, currentLayoutNameAtom, layersAtom } from "@/app/state";
import { KeyboardLayoutSchema } from "@/app/db/schema/KeyboardLayoutSchema";

const loadingAtom = atom(true);
export default function KeyboardPreview({
  params,
}: {
  params: { id: string };
}) {
	const { id} = params
	console.log("params", params);
  const [layers, setLayers] = useAtom(layersAtom);
  const [layoutId, setLayoutId] = useAtom(currentLayoutIdAtom);
  const [layoutName, setLayoutName] = useAtom(currentLayoutNameAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  async function loadLayout(id: string) {
	if(!id){
		console.error("no id", id);
		setLoading(false);
		return
	}
	console.log("loadLayout", id);
    const layout = await db
      .collection<KeyboardLayoutSchema>("keyboard_layout")
      .getOne(id);
	  console.log("layout", layout);
    if (layout) {
      setLayers(layout.layers);
	  setLayoutName(layout.name);
	  setLayoutId(layout.id);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadLayout(id);
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="flex flex-col justify-center items-center gap-4 py-8">
          <p className="text-xl uppercase">{layoutName}</p>
          <KeyboardView />
        </div>
      )}
    </div>
  );
}
