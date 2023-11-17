"use client";

import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <button type="button" onClick={() => signOut()}>
      sign out
    </button>
  );
};
