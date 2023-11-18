"use client";

import { ChangeEventHandler, PropsWithChildren, useTransition } from "react";

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
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <select
      className="inline-flex text-primary p-1 cursor-pointer bg-secondary-accent rounded-md shadow"
      defaultValue={defaultValue}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {children}
    </select>
  );
};
