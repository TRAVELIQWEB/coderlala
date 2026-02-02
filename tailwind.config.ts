import type { Config } from "tailwindcss";

export default {
  important: false,
  darkMode: "class",

  content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
],


  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#3B82F6",
          blueDark: "#1E40AF",
          indigo: "#3F3CBB",
          orange: "#F97316",
          orangeDark: "#EA580C",
        },
        surface: {
          light: "#F9FAFB",
          dark: "#020617",
        },
      },

      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #3B82F6, #1E40AF, #3F3CBB)",
        "brand-orange":
          "linear-gradient(135deg, #F97316, #EA580C)",
      },

      borderRadius: {
        "2xl": "1rem",
      },

      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.45)",
      },
    },
  },

  plugins: [],
} satisfies Config;
