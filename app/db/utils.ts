import { db } from "../db";
import { KeyboardLayoutSchema } from "./schema/KeyboardLayoutSchema";

export function isLoggedIn() {
  return db.authStore.isValid;
}

export function getUserId(){
  return db.authStore.model?.id;
}

export async function createKeyboardLayout(p: KeyboardLayoutSchema){
  return await db.collection("keyboard_layout").create(p);
}

export async function updateKeyboardLayout(id: string, p: KeyboardLayoutSchema){
  return await db.collection("keyboard_layout").update(id, p);
}

export async function getKeyboardLayout(id: string):Promise<KeyboardLayoutSchema>{
  return await db.collection("keyboard_layout").getOne(id);
}