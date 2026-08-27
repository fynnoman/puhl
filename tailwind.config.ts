import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050914",
          900: "#080D1C",
          800: "#0C1428",
          700: "#111C3A",
        },
        rail: {
          50: "#EEF3FF",
          100: "#D9E3FF",
          200: "#B0C1FA",
          300: "#7C97F0",
          400: "#4C6EE0",
          500: "#2A4DC7",
          600: "#1B3AA6",
          700: "#153087",
          800: "#0F2469",
          900: "#0A1A50",
        },
        signal: {
          50: "#FFEDEE",
          100: "#FFD2D5",
          200: "#FFA6AC",
          300: "#FF7079",
          400: "#F53340",
          500: "#E11D2C",
          600: "#B71422",
          700: "#8F0F1B",
          800: "#6A0B14",
          900: "#48070D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(21,48,135,0.35), transparent 60%)",
        "signal-glow":
          "radial-gradient(ellipse at bottom right, rgba(225,29,44,0.20), transparent 55%)",
      },
      boxShadow: {
        glass:
          "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 30px 60px -30px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
