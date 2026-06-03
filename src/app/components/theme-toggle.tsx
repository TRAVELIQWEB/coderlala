"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevents hydration mismatch

  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="glass-card grid place-items-center size-11 rounded-lg! hover:scale-105 transition-transform"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      {/* Optional: Theme Dropdown Menu */}
      {showThemeMenu && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
          <button
            onClick={() => { setTheme('light'); setShowThemeMenu(false); }}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-gray-700 dark:text-gray-200"
          >
            <Sun size={16} /> Light
          </button>
          <button
            onClick={() => { setTheme('dark'); setShowThemeMenu(false); }}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-gray-700 dark:text-gray-200"
          >
            <Moon size={16} /> Dark
          </button>
          <button
            onClick={() => { setTheme('system'); setShowThemeMenu(false); }}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-gray-700 dark:text-gray-200"
          >
            <Laptop size={16} /> System
          </button>
        </div>
      )}
    </>
  );
}


