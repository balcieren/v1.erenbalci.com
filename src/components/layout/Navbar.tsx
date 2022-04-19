import { MailIcon } from "@heroicons/react/outline";
import { FC, ReactNode } from "react";
import { Link } from "react-scroll";

const navigations = [
  {
    name: "Projects",
    to: "projects",
  },
  {
    name: "Resume",
    to: "resume",
  },
  {
    name: "Questions",
    to: "questions",
  },
];

export const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex rounded-full border border-zinc-600 p-1.5">
          <MailIcon className="h-5 w-5 text-black dark:text-white" />
        </div>
        <h3 className="text-sm font-bold dark:text-white">
          erenbalci3939@gmail.com
        </h3>
      </div>
      <Menu>
        {navigations.map(({ name, to }, index) => (
          <Link key={index} to={to} spy={true} smooth={true}>
            <MenuItem>{name}</MenuItem>
          </Link>
        ))}
      </Menu>
    </nav>
  );
};

type MenuProps = {
  children: ReactNode;
};

const Menu: FC<MenuProps> = ({ children }) => {
  return <ul className="hidden gap-8 md:flex">{children}</ul>;
};

type MenuItemProps = {
  children: ReactNode;
} & JSX.IntrinsicElements["li"];

const MenuItem: FC<MenuItemProps> = ({ children, ...others }) => (
  <li
    className="cursor-pointer text-sm font-semibold text-gray-600 transition ease-in hover:text-gray-900 dark:text-gray-200"
    {...others}
  >
    {children}
  </li>
);
