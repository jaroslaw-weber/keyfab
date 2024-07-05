import Link from "next/link";
import { db } from "../db";

import { useRouter } from "next/navigation";
import { isLoggedIn } from "../db/utils";
export function LoginButton() {
  const router = useRouter();
  const logged = isLoggedIn();
  return (
    <div id="login">
      {logged && (
        <div className="flex justify-center items-center gap-4">
          <p className="font-sm">{db.authStore.model?.username}</p>
          <button
            className="btn btn-link"
            onClick={() => {
              //
              db.authStore.clear();
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
