"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "orange";
  className?: string;
}) {
  const base =
    "px-6 py-3 rounded-2xl font-semibold text-white hover:scale-[1.03] transition-transform";

  const variants = {
    primary:
      "bg-[linear-gradient(135deg,#3B82F6,#1E40AF,#3F3CBB)] shadow-glow",
    orange: "bg-[linear-gradient(135deg,#F97316,#EA580C)]",
    secondary: "bg-white/10 border border-white/20",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
