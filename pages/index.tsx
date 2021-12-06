import type { GetServerSideProps, NextPage } from "next";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Navigation from "../components/Navigation";
import ProjectSection from "../components/ProjectSection";
import TechnologySection from "../components/TechnologySection";
import axios from "axios";
import clsx from "clsx";

const Home: NextPage<{ projects: any }> = ({ projects }) => {
  return (
    <main id="home">
      <Navigation />
      <HeaderSection />
      <div className={clsx("flex flex-col gap-24")}>
        <TechnologySection />
        <ProjectSection projects={projects} />
      </div>
      <Footer />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await axios.get(
    "https://api.github.com/users/balcieren/repos"
  );

  return { props: { projects: projects.data } };
};

export default Home;
