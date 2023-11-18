import Link from "next/link";

import { HOME_PAGE_URL } from "@/app/config/pages";
import ThemeSwitch from "@/app/config/providers/ui/ThemeSwitch";

import { UserAvatarMenu } from "@/widgets/user-avatar-menu";

import { SignInButton } from "@/features/auth/sign-in";
import { SignedIn } from "@/features/auth/SignedIn";
import { SignedOut } from "@/features/auth/SignedOut";

import { LocaleSwitcher } from "@/shared/components/language-switch";

export const Navbar = () => {
  return (
    <nav className="bg-secondary text-primary py-1 fixed left-0 top-0 right-0 border-b-[1px] border-b-neutral">
      <div className="container flex flex-row justify-between items-center">
        <Link href={HOME_PAGE_URL} className="font-extrabold text-xl">
          Planner.io
        </Link>
        <div className="flex flex-row gap-4">
          <ThemeSwitch />
          <LocaleSwitcher />
          <SignedIn>
            <UserAvatarMenu />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};
