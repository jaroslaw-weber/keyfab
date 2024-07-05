import { db } from "../db";
import { KeyboardLayoutSchema } from "./schema/KeyboardLayoutSchema";

export function isLoggedIn() {
  return db.authStore.isValid;
}

export function getUserId() {
  return db.authStore.model?.id;
}

export const keyboardLayoutCollection = db.collection<KeyboardLayoutSchema>("keyboard_layout");
