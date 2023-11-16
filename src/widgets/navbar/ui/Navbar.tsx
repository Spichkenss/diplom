import Link from "next/link";

import { HOME_PAGE_URL } from "@/app/config/pages";
import ThemeSwitch from "@/app/config/providers/ui/ThemeSwitch";

export const Navbar = () => {
  return (
    <nav className="bg-secondary text-primary py-1 fixed left-0 top-0 right-0 border-b-[1px] border-b-neutral">
      <div className="container flex flex-row justify-between items-center">
        <Link href={HOME_PAGE_URL} className="font-extrabold text-xl">
          Planner.io
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
};
