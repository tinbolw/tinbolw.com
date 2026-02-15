"use client";

import { useState } from "react";
import { refreshProjects } from "../_lib/refreshprojects";

export default function RefreshButton() {
    function Refresh() {
        return (
            <button className="cursor-pointer" onClick={handleRefresh}>
                <div className="transition hover:text-gray-400">Refresh</div>
            </button>
        )
    }

    const [RefreshState, setRefreshState] = useState(<Refresh />);
    async function handleRefresh() {
        setRefreshState(<div>
            Refreshing...
        </div>);
        await refreshProjects();
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