import clsx from "clsx";
import { RiReactjsFill, RiVuejsFill } from "react-icons/ri";
import {
  SiCss3,
  SiExpress,
  SiFastify,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = () => {
  return (
    <section id="technology" className={clsx("flex flex-col gap-8")}>
      <div>
        <h1 className={clsx("text-4xl font-semibold")}>Technologies</h1>
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        )}
      >
        <TechnologyCard icon={<SiJavascript />} name="JavaScript" />
        <TechnologyCard icon={<SiTypescript />} name="TypeScript" />
        <TechnologyCard icon={<SiHtml5 />} name="HTML" />
        <TechnologyCard icon={<SiCss3 />} name="CSS" />
        <TechnologyCard icon={<SiSass />} name="Sass" />
        <TechnologyCard icon={<SiTailwindcss />} name="TailwindCSS" />
        <TechnologyCard icon={<RiReactjsFill />} name="React.JS" />
        <TechnologyCard icon={<SiNextdotjs />} name="Next.JS" />
        <TechnologyCard icon={<RiVuejsFill />} name="Vue.JS" />
        <TechnologyCard icon={<FaNodeJs />} name="Node.JS" />
        <TechnologyCard icon={<SiExpress />} name="Express" />
        <TechnologyCard icon={<SiFastify />} name="Fastify" />
        <TechnologyCard icon={<SiGraphql />} name="GraphQL" />
        <TechnologyCard icon={<SiMongodb />} name="MongoDB" />
        <TechnologyCard icon={<SiPostgresql />} name="PostgreSQL" />
        <TechnologyCard icon={<SiPrisma />} name="Prisma" />
      </div>
    </section>
  );
};

export default TechnologySection;
