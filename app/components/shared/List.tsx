"use client";

import clsx from "clsx";
import { FC, ReactNode } from "react";

export type ListProps = {
    title?: ReactNode;
    children: ReactNode;
    titleClassName?: string;
    className?: string;
};

export const List: FC<ListProps> = ({
    children,
    title,
    titleClassName,
    className,
}) => {
    return (
        <div className="flex flex-col gap-4">
            {title && (
                <h3
                    className={clsx(
                        "text-3xl font-bold dark:text-white",
                        titleClassName
                    )}
                >
                    {title}
                </h3>
            )}
            <ul
                className={clsx(
                    "flex flex-col gap-1 font-semibold text-zinc-600 dark:text-zinc-400",
                    className
                )}
            >
                {children}
            </ul>
        </div>
    );
};

export type ListItemProps = {
    children: ReactNode;
};

export const ListItem: FC<ListItemProps> = ({ children }) => (
    <li>{children}</li>
);
