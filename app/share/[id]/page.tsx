"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import KeyboardView from "../../components/KeyboardView";
import { db } from "@/app/db";
import { atom, useAtom } from "jotai";
import { currentLayoutNameAtom, layersAtom } from "@/app/state";
import { KeyboardLayoutSchema } from "@/app/db/schema/KeyboardLayoutSchema";

const loadingAtom = atom(true);
export default function KeyboardPreview({
  params,
}: {
  params: { slug: string };
}) {
  const [layers, setLayers] = useAtom(layersAtom);
  const [layoutName, setLayoutName] = useAtom(currentLayoutNameAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  async function loadLayout(id: string) {
	console.log("loadLayout", id);
    const layout = await db
      .collection<KeyboardLayoutSchema>("keyboard_layout")
      .getOne(id);
	  console.log("layout", layout);
    if (layout) {
      setLayers(layout.layers);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadLayout(params.slug);
  }, [params.slug]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          <p>{params.slug}</p>
          <p>{layoutName}</p>
          <p></p>
          <KeyboardView />
        </div>
      )}
    </div>
  );
}
