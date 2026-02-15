import StyledLink from './_components/styledlink';

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
            <StyledLink href="/about" label="About Me"/>
            <StyledLink href="/projects" label="Projects"/>
          </div>
        </div>
      </main>
    </div>
  );
}
