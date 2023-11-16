import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "var(--text-color)",
      },
      backgroundColor: {
        primary: "var(--bg-color)",
      },
    },
  },
  plugins: [],
};
export default config;
