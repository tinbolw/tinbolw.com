import StyledLink from "@/app/_components/styledlink";
import { Suspense } from "react";
import CardRowSkeleton from "../_components/cardrowskeleton";
import { status } from "../_lib/enums";
import { getAllRows } from "../_lib/neon";

export default async function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl">
          Current Projects
        </h1>
      </div>
      <div className="flex flex-col overflow-auto">
        {
          (await getAllRows(status.Current)).map((projects, index) => {
            return <div key={index} className="flex flex-row p-1 gap-2">
              <Suspense fallback={<CardRowSkeleton/ >}>
                {projects}
              </Suspense>
            </div>
          })
        }
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <StyledLink href="/projects" label="Back" />
      </div>
    </div>
  );
}
