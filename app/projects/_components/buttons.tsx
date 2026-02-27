"use client"

import { authClient } from "@/app/_lib/auth-client"
import { redirect } from "next/navigation"
import { useState } from "react";
import { refreshPath } from "../_lib/refreshpath";
import { usePathname } from "next/navigation";


export function LoginButton() {
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

export function LogoutButton() {
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

export function RefreshButton({ path = usePathname() }: { path?: string }) {
    function Refresh() {
        return (
            <button className="cursor-pointer" onClick={() => handleRefresh(path)}>
                <div className="transition hover:text-gray-400">Refresh</div>
            </button>
        )
    }

    const [RefreshState, setRefreshState] = useState(<Refresh />);
    async function handleRefresh(path: string) {
        setRefreshState(<div>
            Refreshing...
        </div>);
        await refreshPath(path);
        setRefreshState(<div>
            Done!
        </div>);
        setTimeout(() => {
            setRefreshState(<Refresh />);
        }, 2000);
    }

    return (
        RefreshState
    )
}
