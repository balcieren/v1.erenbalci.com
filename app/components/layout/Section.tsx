"use client";

import clsx from "clsx";
import { FC, ReactNode } from "react";

export type SectionLayoutProps = {
    title: string;
    id: string;
    children: ReactNode;
    titleClassName?: string;
    className?: string;
};

export const SectionLayout: FC<SectionLayoutProps> = ({
    id,
    title,
    children,
    titleClassName,
    className,
}) => {
    return (
        <div id={id} className={clsx("my-6 flex flex-col gap-8", className)}>
            <h4
                className={clsx(
                    "text-4xl font-extrabold underline decoration-blue-400 dark:text-white",
                    titleClassName
                )}
            >
                {title}
            </h4>
            {children}
        </div>
    );
};
