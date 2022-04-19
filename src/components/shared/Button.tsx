import clsx from "clsx";
import { forwardRef } from "react";

export type ButtonProps = {
  variant?: "filled" | "outline" | "default" | "subtle";
  size?: "sm" | "md" | "lg" | "xl";
  block?: boolean;
} & JSX.IntrinsicElements["button"];

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, block, size = "md", variant = "default", className, ...others },
    ref
  ) => (
    <button
      ref={ref}
      className={clsx(
        "inline-flex select-none items-center justify-center gap-px rounded-2xl font-semibold transition-all duration-100 ease-in",
        { "w-full": block },
        {
          "bg-black text-white dark:bg-white dark:text-black":
            variant == "filled" || variant == "default",
          "border-2 border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white hover:dark:bg-white hover:dark:text-black":
            variant == "outline",
          "text-black hover:bg-black hover:text-white  dark:bg-transparent dark:text-white hover:dark:bg-white hover:dark:text-black":
            variant == "subtle",
        },
        {
          "px-2 py-1 text-xs": size == "sm",
          "px-4 py-1.5 text-sm": size == "md",
          "px-6 py-2 text-base": size == "lg",
          "px-8 py-2 text-lg": size == "xl",
        },
        className
      )}
      {...others}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
