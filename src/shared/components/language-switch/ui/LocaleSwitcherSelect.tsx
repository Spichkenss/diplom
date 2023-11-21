"use client";

import { type ChangeEventHandler, type PropsWithChildren, useTransition } from "react";

import { usePathname, useRouter } from "@/app/config/localization/localization-config";

interface LocaleSwitcherSelectProps extends PropsWithChildren {
  defaultValue: string;
}

export const LocaleSwitcherSelect = ({ children, defaultValue }: LocaleSwitcherSelectProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.push(pathname, { locale: nextLocale });
    });
  };

  return (
    <select
      className="inline-flex cursor-pointer rounded-md bg-secondary-accent p-1 text-primary shadow"
      defaultValue={defaultValue}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {children}
    </select>
  );
};
