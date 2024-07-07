import PocketBase from "pocketbase";

const { POCKETBASE_URL } = process.env;
console.log(POCKETBASE_URL)
const database = new PocketBase("https://jarek-backend.duckdns.org/");
database.authStore.loadFromCookie(document?.cookie ?? "");

export const db = database