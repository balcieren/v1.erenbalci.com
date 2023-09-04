"use client";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC } from "react";
import {
    RiGithubLine,
    RiInstagramLine,
    RiLinkedinLine,
    RiTwitterLine,
} from "react-icons/ri";

const socialMedias = [
    {
        href: "https://www.instagram.com/eren__balci/",
        icon: <RiInstagramLine />,
    },
    {
        href: "https://twitter.com/eren__balci",
        icon: <RiTwitterLine />,
    },
    {
        href: "https://github.com/balcieren",
        icon: <RiGithubLine />,
    },
    {
        href: "https://www.linkedin.com/in/erenbalci",
        icon: <RiLinkedinLine />,
    },
];

export const Footer: FC = () => {
    return (
        <footer className="flex flex-col-reverse items-center justify-between gap-y-4 border-t border-zinc-200 pb-12 pt-8 dark:border-zinc-600 sm:flex-row sm:gap-y-0">
            <ul className="flex gap-6 text-zinc-600 dark:text-zinc-200">
                {socialMedias.map(({ href, icon }, index) => (
                    <li key={index} className="cursor-pointer">
                        <Link href={href} target="_blank">
                            {icon}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-3">
                <div className="flex rounded-full border border-zinc-600 p-1.5">
                    <EnvelopeIcon className="h-5 w-5 text-zinc-900 dark:text-white" />
                </div>
                <h3 className="text-sm font-bold dark:text-white">
                    me@erenbalci.com
                </h3>
            </div>
        </footer>
    );
};
