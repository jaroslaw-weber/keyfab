import { db } from "../db";
import { KeyboardLayoutSchema } from "./schema/KeyboardLayoutSchema";

export function isLoggedIn() {
  // Add a check to ensure authStore and isValid exist
  if (db && db.authStore && typeof db.authStore.isValid !== 'undefined') {
    return db.authStore.isValid;
  }
  return false; // Default to false if authStore or isValid is not available
}

export function getUserId() {
  // Use optional chaining to safely access nested properties
  return db.authStore?.model?.id || null; // Return null if id is not available
}
export const keyboardLayoutCollection = db.collection<KeyboardLayoutSchema>("keyboard_layout");
