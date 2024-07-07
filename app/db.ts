import PocketBase from "pocketbase";

const { POCKETBASE_URL } = process.env;
console.log(POCKETBASE_URL)
const database = new PocketBase("https://keyfab.jarek-backend.top/");
database.authStore.loadFromCookie(document?.cookie ?? "");

export const db = database