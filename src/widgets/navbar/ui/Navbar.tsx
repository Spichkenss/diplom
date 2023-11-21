import Link from "next/link";

import { Pages } from "@/app/config/pages";
import ThemeSwitch from "@/app/config/providers/ui/ThemeSwitch";

import { UserAvatarMenu } from "@/widgets/user-avatar-menu";

import { SignedIn } from "@/features/auth/SignedIn";

import { LocaleSwitcher } from "@/shared/components/language-switch";
import { Text } from "@/shared/ui/typography";

export const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 border-b-[1px] border-b-neutral bg-secondary py-2.5 text-primary md:py-1">
      <div className="container flex flex-row items-center justify-between">
        <Link href={Pages.HOME} className="p-0 text-xl font-extrabold">
          <Text>Planner.io</Text>
        </Link>
        <div className="flex flex-row items-center gap-4">
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
