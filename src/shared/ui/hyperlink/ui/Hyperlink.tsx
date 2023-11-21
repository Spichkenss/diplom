import { type PropsWithChildren } from "react";

import { Link } from "@/app/config/localization/localization-config";

import { cn } from "@/shared/lib/cn";

interface HyperlinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}

export const Hyperlink = ({ children, className, href }: HyperlinkProps) => {
  return (
    <Link
      href={href}
      className={cn("text-sm text-hyperlink underline underline-offset-4", className)}
    >
      {children}
    </Link>
  );
};
