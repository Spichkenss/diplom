import { type ComponentProps } from "react";

import { cn } from "@/shared/lib/cn";

interface TextProps extends ComponentProps<"span"> {}

export const Text = ({ children, className, ...rest }: TextProps) => {
  return (
    <span
      className={cn("text-primary", className)}
      {...rest}
    >
      {children}
    </span>
  );
};
