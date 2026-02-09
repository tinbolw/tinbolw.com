import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col min-h-screen items-center justify-center font-sans">
        <div className="bg-zinc-800 p-3 rounded-lg">
          <div className="flex justify-center">
            <h1 className="text-3xl">
              Projects
            </h1>
            {/* browser with projects, tag languages */}
          </div>
          <div className="flex">
            Past, present, and future projects.
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <Link href={"/"}>Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
