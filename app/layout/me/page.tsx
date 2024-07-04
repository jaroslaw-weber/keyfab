"use client";
import { db } from "@/app/db";
import { atom, useAtom } from "jotai";
import Link from "next/link";
import { useEffect } from "react";

const myLayoutsAtom = atom<any[]>([]);

export default function MyLayouts() {
  const [myLayouts, setMyLayouts] = useAtom(myLayoutsAtom);

  async function refresh() {
    try {
      const layouts = await db.collection("keyboard_layout").getList(0, 0, {
        filter: db.filter("created_by={:id}", {
          id: db.authStore.model?.id,
        }),
      });
      setMyLayouts(layouts.items);
    } catch (error) {
      console.error("Failed to fetch layouts:", error);
      // Optionally handle the error by setting state, showing a message, etc.
    }
  }

  refresh();

  return (
    <div className="h-full">
      {myLayouts.map((layout) => (
        <div key={layout.id}>
          <Link href={`/share/${layout.id}`}>{layout.name}</Link>
        </div>
      ))}
    </div>
  );
}
