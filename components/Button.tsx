import clsx from "clsx";
import { FC } from "react";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

const Button: FC<ButtonProps> = ({
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}) => {
  return (
    <button
      key="button"
      className={clsx(
        className,
        "relative",
        "select-none",
        "transition duration-300 ease-in",
        "inline-flex items-center gap-1",
        "px-8 py-2.5",
        "rounded-2xl",
        "border-2 border-white",
        "bg-transparent hover:bg-white",
        "font-medium text-xl hover:text-black"
      )}
      {...props}
    >
      {[iconLeft, children, iconRight]}
    </button>
  );
};

export default Button;
