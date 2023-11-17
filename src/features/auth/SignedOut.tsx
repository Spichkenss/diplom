"use client";

import { PropsWithChildren } from "react";
import { useSession } from "next-auth/react";

interface SignedOutProps extends PropsWithChildren {}

export const SignedOut = ({ children }: SignedOutProps) => {
  const { status } = useSession();
  if (status !== "authenticated") return children;
  return null;
};
