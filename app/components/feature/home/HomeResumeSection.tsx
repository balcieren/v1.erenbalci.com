"use client";

import { FC } from "react";
import { SectionLayout } from "../../layout";
import { List, ListItem } from "../../shared";

const designSkills = ["Product Design", "UI/UX Design"];
const developmentSkills = [
    "Full-Stack Development",
    "HTML5/CSS3/SASS",
    "JavaScript/TypeScript",
    "Next.JS/React.JS/Vue.JS",
    "Go",
    "PostgreSQL",
    "Docker",
];
const tools = [
    "Figma",
    "Notion",
    "Visual Studio Code",
    "Table Plus",
    "Postman",
    "Beekeeper Studio",
];

export type HomeResumeSectionProps = {
    className?: string;
};

export const HomeResumeSection: FC<HomeResumeSectionProps> = ({
    className,
}) => {
    return (
        <SectionLayout title="Resume" id="resume" className={className}>
            <div className="flex flex-col gap-4 justify-around lg:flex-row">
                <List title="Design" className="">
                    {designSkills.map((skill, index) => (
                        <ListItem key={index}>{skill}</ListItem>
                    ))}
                </List>
                <List title="Development" className="">
                    {developmentSkills.map((skill, index) => (
                        <ListItem key={index}>{skill}</ListItem>
                    ))}
                </List>
                <List title="Tools" className="">
                    {tools.map((tool, index) => (
                        <ListItem key={index}>{tool}</ListItem>
                    ))}
                </List>
            </div>
        </SectionLayout>
    );
};
