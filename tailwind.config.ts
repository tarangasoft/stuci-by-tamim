import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./i18n/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--c-primary)",
        accent: "var(--c-accent)",
        void: "var(--c-bg-void)",
        deep: "var(--c-bg-deep)",
        surface: "var(--c-bg-surface)",
        bright: "var(--c-text-bright)",
        muted: "var(--c-text-muted)",
        coral: "var(--c-coral)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      boxShadow: {
        glow: "var(--glow-primary)",
        gold: "var(--glow-accent)"
      }
    }
  },
  plugins: []
};

export default config;
