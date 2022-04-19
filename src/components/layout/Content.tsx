import { FC, ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export const Content: FC<ContentProps> = ({ children }) => {
  return <div className="min-h-screen">{children}</div>;
};
