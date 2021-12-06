import { FC } from "react";
import clsx from "clsx";
import { RiStarFill } from "react-icons/ri";
import Link from "next/link";

type ProjectCardProps = {
  image: string;
  name: string;
  description?: string;
  stargazersCount?: number;
  language?: string;
  htmlURL: string;
  homePage: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  description,
  name,
  stargazersCount,
  language,
  htmlURL,
  homePage,
}) => {
  return (
    <article
      className={clsx(
        "relative",
        "p-6",
        "transition duration-200 ease-in",
        "flex flex-col justify-center gap-y-2.5",
        "bg-gray-800",
        "rounded-3xl",
        "hover:-translate-y-2"
      )}
    >
      <div className={clsx("flex justify-self-start")}>
        <Link href={htmlURL}>
          <a
            target="_blank"
            className={clsx(
              "font-semibold text-2xl",
              "transition duration-200 ease-in",
              "text-white hover:text-gray-300",
              "cursor-pointer"
            )}
          >
            {name}
          </a>
        </Link>
      </div>
      <div className={clsx("h-full")}>
        <p className={clsx("font-light text-base text-gray-200")}>
          {description}
        </p>
      </div>
      <div className={clsx("flex justify-between items-center pt-2")}>
        <div className={clsx("inline-flex gap-2")}>
          <p className="text-white">{language}</p>
          <p className={clsx("inline-flex gap-1 items-center")}>
            <RiStarFill /> {stargazersCount}
          </p>
        </div>
        <div>
          {homePage && (
            <Link href={homePage}>
              <a
                target="_blank"
                className={clsx(
                  "px-6 p-2",
                  "rounded-xl",
                  "transition duration-300 ease-in",
                  "font-medium",
                  "bg-blue-500 hover:bg-blue-600"
                )}
              >
                Preview
              </a>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
