"use client";
import Link from "next/link";
import { db } from "../db";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { logout } from "../db/utils";
export function LoginButton() {
  const router = useRouter();
  const logged = db.authStore.isValid;

  return (
    <div id="login">
      {logged && (
        <div className="flex justify-center items-center gap-4">
          <p className="font-sm">{db.authStore.model?.username}</p>
          <button
            className="btn btn-link"
            onClick={() => {
              //

              logout();

              router.push("/");
              router.refresh();
            }}
          >
            logout
          </button>
        </div>
      )}

      {!logged && (
        <div>
          <Link href="/login" className="btn btn-link">
            login
          </Link>
        </div>
      )}
    </div>
  );
}
