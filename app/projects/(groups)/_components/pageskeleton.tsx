import StyledLink from "@/app/_components/styledlink";
import CardRowSkeleton from "../../_components/cardrowskeleton";
import {RefreshButton} from "../../_components/buttons";

export function PageSkeleton({title}:{title:string}) {
    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl">
                    {title}
                </h1>
            </div>
            <div className="flex flex-col overflow-auto">
                <CardRowSkeleton />
            </div>
            <div className="flex flex-row gap-2 justify-center">
                <StyledLink href="/projects" label="Back" />
                <RefreshButton />
            </div>
        </div>
    );
}