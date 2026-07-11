"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  index: number;
  title: string;
  desc: string;
  icon: ReactNode;
  iconBg: string;
}

export default function ServiceCard({
  index,
  title,
  desc,
  icon,
  iconBg,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl p-7 flex flex-col h-full overflow-hidden bg-background/60 backdrop-blur-xl border border-white/10 hover:border-brand/30 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Background Glow */}
      <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-blue-500 to-indigo-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />

      {/* Icon */}
      <div
        className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden flex items-center justify-center mx-auto shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${iconBg}`}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative text-white drop-shadow-md">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
        {desc}
      </p>
    </motion.div>
  );
}