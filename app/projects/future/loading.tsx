import StyledLink from "@/app/_components/styledlink";
import CardRowSkeleton from "../_components/cardrowskeleton";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl">
          Future Projects
        </h1>
      </div>
      <div className="flex flex-col overflow-auto">
        <CardRowSkeleton />
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <StyledLink href="/projects" label="Back" />
      </div>
    </div>
  );
}
