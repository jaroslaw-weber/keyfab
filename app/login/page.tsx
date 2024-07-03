"use client";

import { db } from "@/app/db";
import { emailAtom, passwordAtom } from "@/app/state";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useAtom(passwordAtom);

  const handleLogin = async () => {
    try {
      const user = await db
        .collection("users")
        .authWithPassword(email, password);
      console.log("user", user);
      router.push("/");
    } catch (e) {
      window.alert((e as Error).message);
    }
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input
        type="text"
        placeholder="Enter your email"
        className="input input-bordered w-full max-w-xs"
        onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        onBlur={(e) => setEmail((e.target as HTMLInputElement).value)}
      />
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input
        type="password"
        placeholder="Enter your password"
        className="input input-bordered w-full max-w-xs"
        onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
        onBlur={(e) => setPassword((e.target as HTMLInputElement).value)}
      />
      <button className="btn btn-primary mt-4" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
