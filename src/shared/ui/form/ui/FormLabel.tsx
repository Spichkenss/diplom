import { type ComponentProps } from "react";

import { cn } from "@/shared/lib/cn";

import { useFormField } from "./form-field/FontField.context";

interface FormLabelProps extends ComponentProps<"label"> {}

export const FormLabel = (({ ...props }: FormLabelProps) => {
  const { error, formItemId } = useFormField();

  return (
    <label
      className={cn("text-sm ml-1 text-primary", { "text-error": error })}
      htmlFor={formItemId}
      {...props}
    />
  );
});
