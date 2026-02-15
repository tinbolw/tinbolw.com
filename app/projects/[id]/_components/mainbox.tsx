import StyledLink from "@/app/_components/styledlink"

export default function MainBox({ children }:{ children:React.ReactNode }) {
    return (
        <div>
            <main className="flex flex-col min-h-screen items-center justify-center font-sans">
                <div className="bg-zinc-800 p-3 rounded-lg">
                    <div className="flex flex-col items-center justify-center gap-1">
                        {children}
                        <StyledLink href="/projects" label="Back"/>
                    </div>
                </div>
            </main>
        </div>
    )
}