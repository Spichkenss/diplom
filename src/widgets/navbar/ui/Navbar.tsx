import Link from "next/link";

import { Pages } from "@/app/config/pages";
import ThemeSwitch from "@/app/config/providers/ui/ThemeSwitch";

import { UserAvatarMenu } from "@/widgets/user-avatar-menu";

import { SignedIn } from "@/features/auth/SignedIn";

import { LocaleSwitcher } from "@/shared/components/language-switch";
import { Text } from "@/shared/ui/typography";

export const Navbar = () => {
  return (
    <nav className="bg-secondary text-primary py-2.5 md:py-1 fixed left-0 top-0 right-0 border-b-[1px] border-b-neutral">
      <div className="container flex flex-row justify-between items-center">
        <Link href={Pages.HOME} className="font-extrabold text-xl p-0">
          <Text>Planner.io</Text>
        </Link>
        <div className="hidden md:flex flex-row items-center gap-4">
          <ThemeSwitch />
          <LocaleSwitcher />
          <SignedIn>
            <UserAvatarMenu />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
