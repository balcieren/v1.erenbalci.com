import clsx from "clsx";
import GithubButton from "./ButtonGithub";

const HeaderSection = () => {
  return (
    <section
      id="header"
      className={clsx(
        "relative",
        "min-h-[50vh]",
        "flex justify-center items-center",
        "py-2.5 sm:py-0 my-0 mb-12 sm:my-24"
      )}
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-7xl leading-snug text-center font-black text-transparent ">
          <p className="bg-gradient-to-r from-indigo-100 to-violet-500 bg-clip-text">
            Hi 👋, I am Eren.
          </p>
          <span className="bg-gradient-to-r from-indigo-100 to-violet-500 bg-clip-text">
            I try to be a good{" "}
            <span className="bg-white text-trueGray-900">developer</span> since
            +5 years.
          </span>
        </h1>
        <div className="flex justify-center items-center">
          <GithubButton />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
