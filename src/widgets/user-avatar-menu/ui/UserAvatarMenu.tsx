"use client";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export const UserAvatarMenu = () => {
  const { data: session } = useSession();

  return (
    <Image
      src={session?.user?.image || ""}
      alt="user-avatar"
      width={40}
      height={40}
      className="rounded-full cursor-pointer"
      onClick={() => signOut()}
    />
  );
};
