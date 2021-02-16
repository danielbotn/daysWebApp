import { writable } from "svelte/store";

export const userToken = writable(null);
export const userID = writable(null);
export const hardcodedStrings = writable(null);
export const language = writable(null);
export const displayName = writable(null);
