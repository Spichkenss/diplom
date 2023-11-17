"use client";

import { PropsWithChildren } from "react";
import { useSession } from "next-auth/react";

interface SignedInProps extends PropsWithChildren {}

export const SignedIn = ({ children }: SignedInProps) => {
  const { status } = useSession();
  if (status === "authenticated") return children;
  return null;
};
