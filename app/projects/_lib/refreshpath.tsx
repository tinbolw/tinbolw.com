"use server"

import { revalidatePath } from "next/cache";

/**
 * Refresh the given path.
 * @param path The path
 */
export async function refreshPath(path:string) {
    revalidatePath(path);
}