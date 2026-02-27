import StyledLink from "@/app/_components/styledlink";
import { Suspense } from "react";
import CardRowSkeleton from "../../_components/cardrowskeleton";
import { status } from "../../_lib/enums";
import { getAllRows } from "../../_lib/neon";
import { RefreshButton } from "../../_components/buttons";
import { getProjectCount } from "../../_lib/neon";

export default async function Page({title, status}:{title:string, status:status}) {
  const projectCount = await getProjectCount(status);
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl">
          {title}
        </h1>
      </div>
      <div className="flex flex-col">
        {
          (getAllRows(status, projectCount)).map((projects, index) => {
            return <div key={index} className="flex flex-row p-1 gap-2 overflow-auto">
              <Suspense fallback={<CardRowSkeleton/ >}>
                {projects}
              </Suspense>
            </div>
          })
        }
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <StyledLink href="/projects" label="Back" />
        <RefreshButton />
      </div>
    </div>
  );
}
