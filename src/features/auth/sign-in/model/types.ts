import { z } from "zod";

export const signInSchema = z.object({
  email:
    z.string()
      .email("Неверный формат почты"),
  password:
    z.string()
      .min(8, "Минимальная длина: 8 симоволов")
      .max(16, "Максимальная длина: 16 симоволов")
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
