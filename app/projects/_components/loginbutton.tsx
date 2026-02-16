"use client"

import { authClient } from "@/app/_lib/auth-client"

export default function LoginButton() {
    async function login() {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/projects/edit",
            errorCallbackURL: "/projects/edit",
        })
    }

    return (
        <button className="cursor-pointer" onClick={login}>
            <div className="transition hover:text-gray-400">Login</div>
        </button>
    )
}