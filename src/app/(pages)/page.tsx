import ThemeSwitch from "@/app/config/providers/theme/ThemeSwitch";

export default function HomePage() {
  return (
    <main className="page-wrapper bg-primary text-primary">
      Hello world!
      <ThemeSwitch />
    </main>
  );
}
