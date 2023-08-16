"use client";

import { FC, ReactNode } from "react";

type HeaderProps = {
    children: ReactNode;
};

export const Header: FC<HeaderProps> = ({ children }) => {
    return <header className="py-8">{children}</header>;
};
