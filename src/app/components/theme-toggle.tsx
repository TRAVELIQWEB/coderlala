"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevents hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="glass-card grid place-items-center size-12 rounded-lg! hover:scale-105 transition-transform"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
