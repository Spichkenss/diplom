import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        icon: "var(--icon-color)",
      },
      borderColor: {
        neutral: "var(--border-color)",
      },
      textColor: {
        primary: "var(--text-color)",
        controls: "var(--controls-text-color)",
      },
      backgroundColor: {
        primary: "var(--bg-color-primary)",
        secondary: "var(--bg-color-secondary)",
        "secondary-accent": "var(--bg-color-secondary-accent)",
        controls: "var(--controls-color)",
      },
    },
  },
  plugins: [],
};
export default config;
