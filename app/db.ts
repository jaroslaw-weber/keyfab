import PocketBase from "pocketbase";

const database = new PocketBase("https://keyfab.jarek-backend.top/");

// Load auth store from cookie only if `document` is defined
if (typeof document !== 'undefined') {
  database.authStore.loadFromCookie(document.cookie);
}

export const db = database;
