"use client";

import Link from "next/link";
import { FC } from "react";
import { SectionLayout } from "../../layout";
import { Button } from "../../shared";
import ProjectCard, { Project } from "../project/ProjectCard";

export type HomeProjectSectionProps = {
    projects: Project[];
};

export const HomeProjectSection: FC<HomeProjectSectionProps> = ({
    projects,
}) => {
    return (
        <SectionLayout title="Projects" id="projects" className="relative">
            <div className="absolute right-0 top-0 flex justify-end">
                <Link
                    href="https://github.com/balcieren?tab=repositories"
                    target="_blank"
                >
                    <Button size="sm" variant="subtle">
                        View All
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {projects?.map((project) => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        stargazers_count={project.stargazers_count}
                        language={project.language}
                        html_url={project.html_url}
                        homepage={project.homepage}
                    />
                ))}
            </div>
        </SectionLayout>
    );
};
