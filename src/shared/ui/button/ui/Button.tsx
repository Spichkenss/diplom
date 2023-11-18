import { ComponentProps } from "react";

import { cn } from "@/shared/lib/cn";

interface ButtonProps extends ComponentProps<"button"> {}

export const Button = ({
  children, className, type = "button", ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn("bg-controls text-controls font-semibold p-2 rounded-md", className)}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
