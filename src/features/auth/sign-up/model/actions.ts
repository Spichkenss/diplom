"use server";

import { hash } from "bcrypt";

import prisma from "@/shared/lib/prisma/client";

export const SignUpAction = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!username || !email || !password) {
    return null;
  }

  const existingUserByUsername = await prisma.user.findUnique({ where: { name: username } });

  if (existingUserByUsername) {
    return null;
  }

  const existingUserByEmail = await prisma.user.findUnique({ where: { email } });

  if (existingUserByEmail) {
    return null;
  }

  const hashedPassword = await hash(password, 10);

  return new Promise((resolve) => {
    resolve(prisma.user.create({
      data: {
        name: username,
        email,
        hashedPassword
      }
    }));
  });
};
