import { type HTMLInputTypeAttribute } from "react";

import { type SignUpSchemaType } from "./types";

interface SignUpFormField {
  name: keyof SignUpSchemaType;
  type: HTMLInputTypeAttribute;
}

export const signUpFormFields: SignUpFormField[] = [
  { name: "username", type: "text" },
  { name: "email", type: "email" },
  { name: "password", type: "password" }
];
