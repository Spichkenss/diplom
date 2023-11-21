import { type HTMLInputTypeAttribute } from "react";

import { type SignInSchemaType } from "./types";

interface SignInFormField {
  name: keyof SignInSchemaType;
  type: HTMLInputTypeAttribute;
}

export const signInFormFields: SignInFormField[] = [
  { name: "email", type: "email" },
  { name: "password", type: "password" }
];
