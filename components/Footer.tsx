import clsx from "clsx";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={clsx(
        "flex justify-between items-center",
        "py-8",
        "text-sm text-white/80"
      )}
    >
      <p>Copyright © 2022</p>
      <p>
        Created by{" "}
        <Link href="https://github.com/balcieren">
          <a
            target="_blank"
            className={clsx(
              "transition duration-100 ease-in",
              "text-indigo-300 hover:text-indigo-500 font-semibold"
            )}
          >
            Eren BALCI
          </a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
