import React, { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { RiGithubFill } from "react-icons/ri";

const GithubButton: FC = () => {
  return (
    <Link href="https://github.com/balcieren">
      <a
        target="_blank"
        className={clsx(
          "relative",
          "select-none",
          "transition duration-200 ease-in",
          "inline-flex items-center gap-1",
          "px-8 py-2.5",
          "rounded-2xl",
          "border-2 border-white",
          "bg-transparent hover:bg-white",
          "font-medium text-lg hover:text-black"
        )}
      >
        <RiGithubFill className={clsx("h-8 w-8")} />
        Github
      </a>
    </Link>
  );
};

export default GithubButton;
