import { Button } from "@components/shared";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { RiStarFill } from "react-icons/ri";

export type Project = {
    id: string;
    name: string;
    description?: string;
    stargazers_count: number;
    language?: string;
    fork?: boolean;
    html_url: string;
    homepage: string;
};

type ProjectCardProps = Project;

const ProjectCard: FC<ProjectCardProps> = ({
    description,
    name,
    stargazers_count,
    language,
    html_url,
    homepage,
}) => {
    return (
        <article
            className={clsx(
                "relative",
                "p-6",
                "transition duration-200 ease-in",
                "flex flex-col justify-center gap-y-2.5",
                "bg-white dark:bg-zinc-800",
                "rounded-3xl",
                "hover:-translate-y-1"
            )}
        >
            <div className={clsx("flex justify-self-start")}>
                <Link
                    href={html_url}
                    target="_blank"
                    className={clsx(
                        "text-2xl font-bold",
                        "transition duration-200 ease-in",
                        "text-black dark:text-white",
                        "cursor-pointer"
                    )}
                >
                    {name}
                </Link>
            </div>
            <div className={clsx("h-full")}>
                <p
                    className={clsx(
                        "text-base font-light text-zinc-600 dark:text-zinc-300"
                    )}
                >
                    {description}
                </p>
            </div>
            <div className={clsx("flex items-center justify-between pt-2")}>
                <div className={clsx("inline-flex gap-2")}>
                    <p className="font-semibold text-black dark:text-white">
                        {language}
                    </p>
                    <p
                        className={clsx(
                            "inline-flex items-center gap-1 dark:text-white"
                        )}
                    >
                        <RiStarFill /> {stargazers_count}
                    </p>
                </div>
                <div>
                    {homepage && (
                        <Link href={homepage} target="_blank">
                            <Button>Preview</Button>
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
