import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Project } from "../project/ProjectCard";
import { HomeHeroSection } from "./HomeHeroSection";
import { HomeProjectSection } from "./HomeProjectSection";
import { HomeQuestionSection } from "./HomeQuestionSection";
import { HomeResumeSection } from "./HomeResumeSection";

export const HomePage: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="flex flex-col gap-10">
      <Head>
        <title>Eren BALCI</title>
      </Head>
      <HomeHeroSection />
      <HomeProjectSection projects={projects} />
      <div className="flex flex-col gap-4 md:flex-row">
        <HomeResumeSection className="w-full md:w-1/2" />
        <HomeQuestionSection className="w-full md:w-1/2" />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await axios.get<Project[]>(
    "https://api.github.com/users/balcieren/repos?per_page=11"
  );

  return {
    props: { projects: projects.data.filter(({ fork }) => !fork) },
    revalidate: 5000,
  };
};

export default HomePage;
