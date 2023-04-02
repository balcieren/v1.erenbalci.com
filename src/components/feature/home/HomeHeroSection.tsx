import { Button } from "@components/shared";
import Link from "next/link";
import { FC } from "react";
import { RiGithubFill } from "react-icons/ri";

export const HomeHeroSection: FC = () => {
  return (
    <section
      id="hero"
      className="flex min-h-[80vh] items-center justify-center"
    >
      <div className="flex flex-col max-w-full gap-6 text-center sm:max-w-3xl md:max-w-4xl">
        <h5 className="text-lg font-bold dark:text-white sm:text-3xl md:text-4xl">
          Hi, I am Eren 👋
        </h5>
        <h3 className="text-5xl font-extrabold dark:text-white sm:text-6xl md:text-7xl">
          I have been trying to be a good
          <span className="underline decoration-blue-400">developer</span> for
          +5 years.
        </h3>
        <p className="text-sm md:text-x dark:text-zinc-200 sm:text-lg">
          a{" "}
          <span className="font-bold dark:text-white">
            Full-Stack Developer
          </span>{" "}
          and an{" "}
          <span className="font-bold dark:text-white">
            Open Source Project Contributor
          </span>
          .
        </p>
        <div>
          <Link href="https://github.com/balcieren">
            <a target={"_blank"}>
              <Button size="xl" variant="outline">
                <RiGithubFill size={24} />
                GitHub
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
