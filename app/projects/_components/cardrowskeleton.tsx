export default function CardRowSkeleton() {
    return (
        <div className="flex flex-row gap-2">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}

function CardSkeleton() {
    return (
        <div className="flex flex-col bg-zinc-900 p-3 rounded-lg">
            <div className="flex flex-col animate-pulse gap-2">
                <div className="bg-zinc-700 w-40 h-5 rounded-lg"></div>
                <div className="bg-zinc-700 w-40 h-5 rounded-lg"></div>
                <div className="flex flex-row gap-1">
                    <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
                    <div className="bg-zinc-700 w-10 h-5 rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}