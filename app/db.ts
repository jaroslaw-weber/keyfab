import PocketBase from "pocketbase";

const { POCKETBASE_URL } = process.env;
console.log(POCKETBASE_URL)
export const db = new PocketBase("https://jarek-backend.duckdns.org/");
