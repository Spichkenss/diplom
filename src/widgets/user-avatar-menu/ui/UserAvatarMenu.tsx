import Image from "next/image";
import { getServerSession } from "next-auth";

export const UserAvatarMenu = async () => {
  const session = await getServerSession();

  return (
    <Image
      src={session?.user?.image || ""}
      alt="user-avatar"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
};
