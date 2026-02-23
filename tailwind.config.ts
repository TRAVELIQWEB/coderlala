import type { Config } from "tailwindcss";

export default {
  darkMode: "class",

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#3B82F6",
          darkblue: "#1E40AF", // Renamed for consistency
          indigo: "#3F3CBB",
          orange: "#F97316",
          darkorange: "#EA580C",
        },
        surface: {
          light: "#F9FAFB",
          dark: "#020617",
        },
      },

      // Add semantic color mappings for better dark mode support
      textColor: {
        primary: {
          light: "#111827", // gray-900
          dark: "#F9FAFB",   // gray-50
        },
        secondary: {
          light: "#6B7280", // gray-500
          dark: "#9CA3AF",   // gray-400
        }
      },

      backgroundColor: {
        primary: {
          light: "#FFFFFF",
          dark: "#020617",
        },
        secondary: {
          light: "#F3F4F6", // gray-100
          dark: "#1F2937",   // gray-800
        }
      },

      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #3B82F6, #1E40AF, #3F3CBB)",
        "brand-orange": "linear-gradient(135deg, #F97316, #EA580C)",
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