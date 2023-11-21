import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem"
      }
    },
    borderColor: {
      neutral: "rgba(var(--border-color), <alpha-value>)",
      accent: "rgba(var(--border-color-accent), <alpha-value>)"
    },
    ringColor: {
      neutral: "rgba(var(--border-color), <alpha-value>)",
      accent: "rgba(var(--border-color-accent), <alpha-value>)",
      error: "rgba(var(--border-error), <alpha-value>)"
    },
    textColor: {
      primary: "rgba(var(--text-color), <alpha-value>)",
      "primary-inverted": "rgba(var(--text-color-inverted), <alpha-value>)",
      controls: "rgba(var(--controls-text-color), <alpha-value>)",
      icon: "rgba(var(--icon-color), <alpha-value>)",
      white: "rgba(255, 255, 255, <alpha-value>)",
      black: "rgba(0, 0, 0, <alpha-value>)",
      hyperlink: "rgba(var(--text-hyperlink), <alpha-value>)",
      error: "rgba(var(--text-error), <alpha-value>)"
    },
    backgroundColor: {
      primary: "rgba(var(--bg-color-primary), <alpha-value>)",
      secondary: "rgba(var(--bg-color-secondary), <alpha-value>)",
      "secondary-accent": "rgba(var(--bg-color-secondary-accent), <alpha-value>)",
      controls: "rgba(var(--controls-color), <alpha-value>)"
    }
  },
  plugins: []
};
export default config;
