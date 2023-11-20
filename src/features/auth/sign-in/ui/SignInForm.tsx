"use client";

import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

import { useRouter } from "@/app/config/localization/localization-config";
import { Pages } from "@/app/config/pages";

import { SignInDto } from "@/features/auth/sign-in/model/types";

export const SignInForm = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState<SignInDto>({ email: "", password: "" });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false
    });
    router.replace(Pages.DASHBOARD);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="submit">submit</button>
    </form>
  );
};
