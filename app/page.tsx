import StyledLink from './_components/styledlink';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl">
          Welcome
        </h1>
      </div>
      <div className="flex">
        Learn more about me and my projects below.
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <StyledLink href="/projects" label="Projects" />
        <StyledLink href="https://wiki.tinbolw.com" label="Wiki" />
      </div>
    </div>
  );
}
