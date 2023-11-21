import { z } from "zod";

export const signUpSchema = z.object({
  username:
    z.string()
      .min(1, "Минимальная длина: 1 симовол"),
  email:
    z.string()
      .email("Неверный формат почты"),
  password:
    z.string()
      .min(8, "Минимальная длина: 8 симоволов")
      .max(16, "Максимальная длина: 16 симоволов")
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
