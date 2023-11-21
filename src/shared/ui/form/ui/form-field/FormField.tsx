import { useMemo } from "react";
import {
  Controller, type ControllerProps, type FieldPath, type FieldValues
} from "react-hook-form";

import { FormFieldContext } from "./FontField.context";

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    ...props
  }: ControllerProps<TFieldValues, TName>) => {
  const memoizedContextValue = useMemo(() => ({ name: props.name }), [props.name]);

  return (
    <FormFieldContext.Provider value={memoizedContextValue}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};
