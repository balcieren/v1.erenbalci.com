import { Metadata } from "next";
import { HomeHeroSection } from "./components/feature/home/HomeHeroSection";
import { HomeProjectSection } from "./components/feature/home/HomeProjectSection";
import { HomeQuestionSection } from "./components/feature/home/HomeQuestionSection";
import { HomeResumeSection } from "./components/feature/home/HomeResumeSection";
import { Project } from "./components/feature/project/ProjectCard";

export const metadata: Metadata = {
    title: "EREN BALCI",
    description: "Personal website of Eren BALCI",
};

export default async function Page() {
    const projects = (await fetch(
        "https://api.github.com/users/balcieren/repos?per_page=50",
        {
            method: "GET",
            cache: "force-cache",
        }
    ).then(async (res) => await res.json())) as Project[];

    const filteredProjects = projects
        .sort((a, b) => {
            return b.stargazers_count - a.stargazers_count;
        })
        .filter(({ fork }) => !fork)
        .slice(0, 14);

    return (
        <div className="flex flex-col gap-10">
            <HomeHeroSection />
            <HomeProjectSection projects={filteredProjects} />
            <div className="flex flex-col gap-4 md:flex-row">
                <HomeResumeSection className="w-full md:w-1/2" />
                <HomeQuestionSection className="w-full md:w-1/2" />
            </div>
        </div>
    );
}
