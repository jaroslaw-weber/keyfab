import PocketBase from "pocketbase";

const { POCKETBASE_URL } = process.env;
console.log(POCKETBASE_URL)
export const db = new PocketBase("http://127.0.0.1:8090");
