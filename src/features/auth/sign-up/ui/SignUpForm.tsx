"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { Button } from "@/shared/ui/button";
import {
  FieldError,
  FormControl, FormField, FormItem, FormLabel
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { signUpFormFields } from "../model/fields";
import { signUpSchema, type SignUpSchemaType } from "../model/types";

export const SignUpForm = () => {
  const t = useTranslations("auth");

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = (data: SignUpSchemaType) => {
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-2">
        {signUpFormFields.map(({ type, name }) => (
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
          {t("sign-up.button")}
        </Button>
      </form>
    </FormProvider>
  );
};
