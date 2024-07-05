import { db } from "../db";

export function isLoggedIn() {
  return db.authStore.isValid;
}
