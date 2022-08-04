import { Button } from "@components/shared";
import { MailIcon, MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
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
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex rounded-full border border-zinc-600 p-1.5">
          <MailIcon className="w-5 h-5 text-black dark:text-white" />
        </div>
        <h3 className="text-sm font-bold dark:text-white">
          erenbalci3939@gmail.com
        </h3>
      </div>
      <div className="flex gap-x-8">
        <Menu>
          {navigations.map(({ name, to }, index) => (
            <Link key={index} to={to} spy={true} smooth={true}>
              <MenuItem>{name}</MenuItem>
            </Link>
          ))}
        </Menu>
        <Button
          onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          className="!p-1.5 !rounded-full flex items-center justify-center transition-all ease-in duration-300"
        >
          {theme == "light" ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </Button>
      </div>
    </nav>
  );
};

type MenuProps = {
  children: ReactNode;
};

const Menu: FC<MenuProps> = ({ children }) => {
  return <ul className="items-center hidden gap-8 md:flex">{children}</ul>;
};

type MenuItemProps = {
  children: ReactNode;
} & JSX.IntrinsicElements["li"];

const MenuItem: FC<MenuItemProps> = ({ children, ...others }) => (
  <li
    className="text-sm font-semibold text-gray-600 transition ease-in cursor-pointer hover:text-gray-900 dark:text-gray-200"
    {...others}
  >
    {children}
  </li>
);
