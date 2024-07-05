"use client";
import Link from "next/link";
import { LoginButton } from "./LoginButton";
import { isLoggedIn } from "../db/utils";
import { useAtom } from "jotai";
import { styleAtom } from "../state";
import { useEffect } from "react";
import GlobalStyle from "./GlobalStyle";

export default function Navbar() {
  const logged = isLoggedIn();

  return (
    <div className="navbar px-6 sticky top-0 z-30 bg-base-100">
      <div className="flex-1">
        <Link className="uppercase text-xl pr-12" href="/">
          keyfab
        </Link>
        <a className=" normal-case text-sm">keyboard layout design made easy</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center  gap-6">
          {logged && (
            <li>
              <details>
                <summary>Keyboard Layouts</summary>
                <ul className="bg-base-100 rounded-t-none p-2 gap-2">
                  <li>
                    <Link href="/layout/me">My Saved Layouts</Link>
                  </li>

                  <li>
                    <Link href="/layout">Explore Keyboard Layouts</Link>
                  </li>
                </ul>
              </details>
            </li>
          )}

          <LoginButton />
        </ul>
      </div>
    </div>
  );
}
