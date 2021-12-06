import clsx from "clsx";
import React, { FC } from "react";
import ProjectCard from "./ProjectCard";

type ProjectSectionProps = {
  projects?: any;
};

const ProjectSection: FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="project" className={clsx("flex flex-col gap-8")}>
      <div>
        <h1 className={clsx("text-4xl font-semibold")}>Projects</h1>
      </div>
      <div className={clsx("grid grid-cols-1 lg:grid-cols-2 gap-8")}>
        {projects?.map((project: any) => (
          <ProjectCard
            key={project.id}
            image="/before-new-year.jpg"
            name={project.name}
            description={project.description}
            stargazersCount={project.stargazers_count}
            language={project.language}
            htmlURL={project.html_url}
            homePage={project.homepage}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
