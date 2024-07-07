import { useAtom } from "jotai";
import { db } from "../db";
import { HardwareSchema, KeyboardLayoutSchema } from "./schema/KeyboardLayoutSchema";

export function getUserId() {
  // Use optional chaining to safely access nested properties
  return db.authStore?.model?.id || null; // Return null if id is not available
}
export const keyboardLayoutCollection =
  db.collection<KeyboardLayoutSchema>("keyboard_layout");

export const hardwareList = db.collection<HardwareSchema>("hardware");
export function saveAuth() {
  document.cookie = db.authStore.exportToCookie();
}

export function logout() {
  db.authStore.clear();
  document.cookie = db.authStore.exportToCookie({ httpOnly: false });
}
export function loadAuth() {
  db.authStore.loadFromCookie(document.cookie);
}
