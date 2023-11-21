import { useFormContext } from "react-hook-form";

import { cn } from "@/shared/lib/cn";
import { Slot } from "@/shared/ui/slot";

import { useFormField } from "./form-field/FontField.context";

export const FormControl = (({ ...props }) => {
  const {
    error, formItemId, formDescriptionId, formMessageId, name
  } = useFormField();
  const { clearErrors } = useFormContext();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      className={cn({ "ring-error": error })}
      onFocus={() => clearErrors(name)}
      {...props}
    />
  );
});
