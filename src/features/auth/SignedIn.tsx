import { Fragment, PropsWithChildren } from "react";
import { getServerSession } from "next-auth";

interface SignedInProps extends PropsWithChildren {}

export const SignedIn = async ({ children }: SignedInProps) => {
  const session = await getServerSession();
  if (session) return <Fragment>{children}</Fragment>;
  return null;
};
