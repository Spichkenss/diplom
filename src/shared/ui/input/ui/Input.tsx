import { type ComponentProps, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/cn";

const inputVariants = cva("h-9 w-full rounded-md bg-secondary px-3 py-1 text-sm shadow-sm", {
  variants: {
    variant: {
      default: "",
      accent: "ring-1 ring-accent/20 focus:ring-2 focus:ring-accent"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

interface InputProps extends ComponentProps<"input">, VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className, type, variant, ...props
}, ref) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";
