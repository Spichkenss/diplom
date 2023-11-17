import { Fragment, PropsWithChildren } from "react";
import { getServerSession } from "next-auth";

interface SignedOutProps extends PropsWithChildren {}

export const SignedOut = async ({ children }: SignedOutProps) => {
  const session = await getServerSession();
  if (!session) return <Fragment>{children}</Fragment>;
  return null;
};
