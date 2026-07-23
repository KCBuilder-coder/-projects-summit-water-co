import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1B2E",
          soft: "#14273F",
          deep: "#081420",
        },
        mist: "#F3F5F7",
        line: "#E3E7EB",
        slate: {
          DEFAULT: "#4E5A66",
          light: "#8592A0",
        },
        accent: {
          DEFAULT: "#4E7DA3",
          deep: "#33587A",
          soft: "#DCE6ED",
        },
        mineral: "#B08A5A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "42rem",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(11, 27, 46, 0.04), 0 8px 24px rgba(11, 27, 46, 0.05)",
        card: "0 2px 8px rgba(11, 27, 46, 0.06), 0 12px 32px rgba(11, 27, 46, 0.06)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
