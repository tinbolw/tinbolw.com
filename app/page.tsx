import StyledLink from "./_components/styledlink";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-2">
      <div className="flex justify-center">
        <h1 className="text-3xl">{`Hi, I'm Thomas Van`}</h1>
      </div>
      <div className="flex space-x-3">
        <div>
          <p>
            {`I'm a web developer specializing in full-stack development with several years of
              experience from personal projects. I've worked on projects with the open source
              community, and maintained apps with feedback from real users.`}
          </p>
          <br />
          <p>
            {`Feel free to reach out at `}
            <a className="underline" href="mailto:tvvan06@gmail.com">
              tvvan06@gmail.com
            </a>
            {`, or visit my `}
            <a
              className="underline"
              href="https://linkedin.com/in/thomas-van-b15b77338"
            >
              LinkedIn
            </a>
            {` or `}
            <a className="underline" href="https://github.com/tinbolw">
              GitHub
            </a>
            {`.`}
          </p>
        </div>
        <Image
          className="rounded-lg"
          loading="eager"
          src="/pfp.jpg"
          width="200"
          height="200"
          alt="Profile picture"
        />
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <StyledLink href="/projects" label="Projects" />
        <StyledLink href="https://wiki.tinbolw.com" label="More About Me" />
      </div>
    </div>
  );
}
