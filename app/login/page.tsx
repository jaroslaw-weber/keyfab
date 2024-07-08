"use client";

import { db } from "@/app/db";
import { emailAtom, passwordAtom, passwordConfirmAtom } from "@/app/state";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveAuth } from "../db/utils";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const [passwordConfirm, setPasswordConfirm] = useAtom(passwordConfirmAtom);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");

  const handleLogin = async () => {
    try {
      const user = await db
        .collection("users")
        .authWithPassword(email, password);
      console.log("user", user);
      document.cookie = db.authStore.exportToCookie({ httpOnly: false });
      router.push("/");
      router.refresh()
    } catch (e) {
      window.alert((e as Error).message);
    }
  };

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      window.alert("Passwords do not match!");
      return;
    }
    if (!username) {
      window.alert("Please enter a username!");
      return;
    }
    try {
      //make new user
      const user = await db
        .collection("users")
        .create({ username, email, password, passwordConfirm });
      console.log("new user", user);
      //now login
      await db.collection("users").authWithPassword(email, password);
      document.cookie = db.authStore.exportToCookie({ httpOnly: false });
      router.push("/");
      router.refresh()
    } catch (e) {
      window.alert((e as Error).message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="form-control w-full max-w-xs">
        {!isLogin && (
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              autoComplete="username"
              placeholder="Enter your username"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) =>
                setUsername((e.target as HTMLInputElement).value)
              }
            />
          </div>
        )}
        <label className="label">
          <span className="label-text">Email</span>
        </label>

        <input
          type="text"
          autoComplete="email"
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
        />
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          autoComplete="password"
          placeholder="Enter your password"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
        />
        {!isLogin && (
          <>
            <label className="label">
              <span className="label-text">Repeat Password</span>
            </label>
            <input
              type="password"
              autoComplete="new-password"
              placeholder="Repeat your password"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) =>
                setPasswordConfirm((e.target as HTMLInputElement).value)
              }
            />
          </>
        )}
        <button
          className="btn btn-primary mt-4"
          onClick={isLogin ? handleLogin : handleRegister}
        >
          {isLogin ? "Login" : "Register"}
        </button>
        <button
          className="btn btn-link mt-2"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Need an account? Register"
            : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
}
