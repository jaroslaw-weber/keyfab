import PocketBase from "pocketbase";

const { POCKETBASE_URL } = process.env;
console.log(POCKETBASE_URL)
const database = new PocketBase("http://keyfab.jarek-backend.top:8090/");
database.authStore.loadFromCookie(document?.cookie ?? "");

export const db = database