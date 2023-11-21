import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/cn";

const buttonVariants = cva("w-full rounded-md p-2 font-medium text-primary-inverted", {
  variants: {
    variant: {
      default: "bg-controls hover:bg-opacity-90",
      ghost: "bg-transparent hover:bg-white/10"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {}

export const Button = ({
  children, className, variant, type = "button", ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant }), className)}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
