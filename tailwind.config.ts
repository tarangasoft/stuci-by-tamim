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
        "primary-light": "var(--c-primary-light)",
        "primary-dark": "var(--c-primary-dark)",
        accent: "var(--c-accent)",
        "accent-light": "var(--c-accent-light)",
        "accent-bright": "var(--c-accent-bright)",
        gold: "var(--c-gold)",
        "gold-light": "var(--c-gold-light)",
        void: "var(--c-bg-void)",
        deep: "var(--c-bg-deep)",
        surface: "var(--c-bg-surface)",
        bright: "var(--c-text-bright)",
        muted: "var(--c-text-muted)",
        coral: "var(--c-coral)",
        ink: "var(--c-ink)"
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
