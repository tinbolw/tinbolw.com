import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col min-h-screen items-center justify-center font-sans">
        <div className="bg-zinc-800 p-3 rounded-lg">
          <div className="flex justify-center">
            <h1 className="text-3xl">
              Welcome
            </h1>
          </div>
          <div className="flex">
            Learn more about me and my projects below.
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <Link href={"/about"}>About Me</Link>
            <Link href={"/projects"}>Projects</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
