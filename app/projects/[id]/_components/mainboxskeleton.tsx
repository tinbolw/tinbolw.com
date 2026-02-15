export default function MainBoxSkeleton() {
    return (
        <div>
            <main className="flex flex-col min-h-screen items-center justify-center font-sans">
                <div className="bg-zinc-800 p-3 rounded-lg">
                    <div className="flex flex-col items-center gap-3 animate-pulse justify-center">
                        <div className="bg-zinc-700 w-40 h-8 rounded-lg"></div>
                        <div className="bg-zinc-700 w-40 h-5 rounded-lg"></div>
                        <div className="flex flex-row gap-1">
                            <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
                            <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
                            <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
                        </div>
                        <div className="bg-zinc-700 w-50 h-20 rounded-lg"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}