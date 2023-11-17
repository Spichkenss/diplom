import { SignedIn } from "@/features/auth/SignedIn";
import { SignedOut } from "@/features/auth/SignedOut";

export default function HomePage() {
  return (
    <main className="page-wrapper bg-primary text-primary">
      <SignedIn>
        <span>Authed</span>
      </SignedIn>
      <SignedOut>
        <span>Not authed</span>
      </SignedOut>
    </main>
  );
}
