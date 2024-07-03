import PocketBase from "pocketbase";

export const db = new PocketBase(process.env.POCKETBASE_URL);
