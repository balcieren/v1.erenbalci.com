import clsx from "clsx";
import { FC } from "react";

type TechnologyCardProps = {
  icon: JSX.Element;
  name: string;
};

const TechnologyCard: FC<TechnologyCardProps> = ({ icon, name }) => {
  return (
    <article
      className={clsx(
        "relative",
        "py-4 px-8",
        "transition duration-200 ease-in",
        "flex flex-col justify-center items-center gap-y-2",
        "bg-gray-800",
        "rounded-3xl",
        "hover:-translate-y-2"
      )}
    >
      <div className={clsx("text-[192px]")}>{icon}</div>
      <div>
        <h3 className={clsx("font-semibold text-2xl")}>{name}</h3>
      </div>
    </article>
  );
};

export default TechnologyCard;
