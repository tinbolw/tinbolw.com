"use server";

import { auth } from "@/app/_lib/auth";
import { headers } from "next/headers";

export async function getSession() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    return session;
}