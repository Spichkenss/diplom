"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

import { useRouter } from "@/app/config/localization/localization-config";
import { Pages } from "@/app/config/pages";

import { Button } from "@/shared/ui/button";
import {
  FieldError, FormControl, FormField, FormItem, FormLabel
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { signInFormFields } from "../model/fields";
import { signInSchema, type SignInSchemaType } from "../model/types";

export const SignInForm = () => {
  const router = useRouter();
  const t = useTranslations("auth");

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: SignInSchemaType) => {
    const { email, password } = data;
    await signIn("credentials", {
      email,
      password,
      redirect: false
    });
    router.replace(Pages.DASHBOARD);
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {signInFormFields.map(({ type, name }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t(`${name}.label`)}
                </FormLabel>
                <FormControl>
                  <Input
                    variant="accent"
                    type={type}
                    placeholder={t(`${name}.placeholder`)}
                    {...field}
                  />
                </FormControl>
                <FieldError />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="mt-6">
          {t("sign-in.button")}
        </Button>
        <button onClick={() => signIn("github")}>test</button>
      </form>
    </FormProvider>
  );
};
