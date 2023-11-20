"use server";

import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";

export const signInWithCredentials = async (formData: FormData) => {
  const session = await getServerSession();
  if (session) return;

  const email = formData.get("email");
  const password = formData.get("password");

  await signIn("credentials", { email, password });

  // redirect(Pages.DASHBOARD);
};
