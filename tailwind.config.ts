import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "monospace"],
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        cyan: "#00d4ff",
        blue: "#0066ff",
        green: "#00ffaa",
      },
    },
  },
  plugins: [],
};

export default config;
