"use client";
import Link from "next/link";
import { LoginButton } from "./LoginButton";
import { db } from "../db";
import { logout } from "../db/utils";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const logged = db.authStore.isValid;

  const router = useRouter();
  return (
    <div className="navbar px-6 sticky top-0 z-30 bg-base-100">
      <div className="flex-1">
        <Link className="uppercase text-xl pr-12" href="/">
          keyfab
        </Link>
        <a className=" normal-case text-sm">keyboard layout design made easy</a>
      </div>
      <div className="flex-none">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {logged && (
              <li>
                <Link className="" href="/layout/me">
                  my layouts
                </Link>
              </li>
            )}
            <li>
              <Link className="" href="/layout">
                explore
              </Link>
            </li>
            {logged && (
              <li>
                <p className="font-sm">{db.authStore.model?.username}</p>
              </li>
            )}
            {logged && (
              <li>
                <button
                  className=""
                  onClick={() => {
                    //

                    logout();

                    router.push("/");
                    router.refresh();
                  }}
                >
                  logout
                </button>
              </li>
            )}
            {!logged && (
              <li>
                <Link href="/login" className="">
                  login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
