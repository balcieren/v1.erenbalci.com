"use client";

import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

type ContentProps = {
    children: ReactNode;
};

export const Theme: FC<ContentProps> = ({ children }) => {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
