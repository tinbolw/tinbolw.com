"use server";

import { authClient } from "@/app/_lib/auth-client"
import { auth } from "@/app/_lib/auth";
import { headers } from "next/headers";

export async function getSession() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    return session;
}

export async function login() {
    await authClient.signIn.social({
        provider: "google",
        callbackURL: "/projects",
        errorCallbackURL: "/projects",
    })
}

export async function logout() {
    await authClient.signOut();
}