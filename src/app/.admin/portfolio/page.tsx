"use client";

import { motion } from "framer-motion";

export default function AdminPortfolioPage() {
  return (
    <div className="p-8">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold gradient-text"
      >
        Portfolio Management
      </motion.h1>

      <p className="opacity-70 mt-3 mb-8">Manage your project showcases.</p>

      <div className="glass-card p-6 rounded-2xl">
        <p className="opacity-70">Project listing and editing will be available soon.</p>
      </div>
    </div>
  );
}
