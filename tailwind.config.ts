import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/widgets/*.{js,ts,jsx,tsx}",
    "./src/entities/*.{js,ts,jsx,tsx}",
    "./src/features/*.{js,ts,jsx,tsx}",
    "./src/shared/*.{js,ts,jsx,tsx}",
  ],
  theme: {

  },
  plugins: [],
};
export default config;
