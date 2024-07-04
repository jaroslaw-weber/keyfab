import Link from "next/link";
import { LoginButton } from "./LoginButton";

export default function Navbar() {
  return (
    <div className="navbar px-6 sticky top-0 z-30 bg-base-100">
      <div className="flex-1">
        <a className="normal-case text-xl pr-12">keyfab</a>
        <a className=" normal-case text-sm">keyboard layout design made easy</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center  gap-6">
          <li>
            <details>
              <summary>Keyboard Layouts</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link href="/layout/me">My Saved Layouts</Link>
                </li>
                <li>
                  <Link href="/layout">Explore Keyboard Layouts</Link>
                </li>
              </ul>
            </details>
          </li>

          <LoginButton />
        </ul>
      </div>
    </div>
  );
}
