"use client"

import { authClient } from "@/app/_lib/auth-client"
import { redirect } from "next/navigation";

export default function LogoutButton() {
    async function logout() {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    redirect("/projects/edit");
                },
            },
        });
    }

    return (
        <button className="cursor-pointer" onClick={logout}>
            <div className="transition hover:text-gray-400">Logout</div>
        </button>
    )
}