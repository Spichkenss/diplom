import { useFormField } from "./form-field/FontField.context";

export const FieldError = () => {
  const { error } = useFormField();

  return (
    <span className="ml-1 text-sm leading-3 text-error">
      {error?.message}
    </span>
  );
};
