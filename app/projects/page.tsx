import Link from 'next/link';
import { Suspense } from 'react';
import { status } from './_lib/enums';
import CardRow from './_components/cardrow';
import CardRowSkeleton from './_components/cardrowskeleton';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col min-h-screen items-center justify-center font-sans">
        <div className="bg-zinc-800 p-3 rounded-lg">
          <div className="flex justify-center">
            <h1 className="text-3xl">
              Projects
            </h1>
          </div>
          <div className="flex">
            Past, present, and future projects.
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex">
                <h2 className="text-2xl">Current</h2>
              </div>
              <Suspense fallback={<CardRowSkeleton />}>
                <CardRow status={status.Current}></CardRow>
              </Suspense>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <h2 className="text-2xl">Past</h2>
              </div>
              <div className="flex flex-row gap-2">
                <Suspense fallback={<CardRowSkeleton />}>
                  <CardRow status={status.Past}></CardRow>
                </Suspense>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <h2 className="text-2xl">Future</h2>
              </div>
              <div className="flex flex-row gap-2">
                <Suspense fallback={<CardRowSkeleton />}>
                  <CardRow status={status.Future}></CardRow>
                </Suspense>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <Link href={"/"}>Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
