import Link from "next/link";
import { db } from "../db";

import { useRouter } from "next/navigation";
export function LoginButton() {
  const router = useRouter();
  return (
    <div id="login">
      {db.authStore.isValid && (
        <div className="flex justify-center items-center gap-4">
          <p>hello {db.authStore.model?.username}!</p>
          <button className="btn btn-neutral"
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

      {!db.authStore.isValid && (
        <div>
          <Link href="/login" className="btn btn-neutral">login</Link>
        </div>
      )}
    </div>
  );
}
