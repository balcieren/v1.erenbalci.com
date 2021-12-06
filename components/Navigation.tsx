import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-scroll";

const Navigation: FC = () => {
  return (
    <nav
      className={clsx("relative", "py-8", "flex justify-between items-center")}
    >
      <div>
        <h1 className={clsx("font-bold text-xl")}>EREN BALCI</h1>
      </div>
      <ul className={clsx("relative", "flex gap-2")}>
        <li
          className={clsx(
            "transition duration-100 ease-in",
            "cursor-pointer",
            "hover:text-white/70"
          )}
        >
          <Link to="technology" spy={true} smooth={true}>
            Technologies
          </Link>
        </li>
        <li
          className={clsx(
            "transition duration-100 ease-in",
            "cursor-pointer",
            "hover:text-white/70"
          )}
        >
          <Link to="project" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
