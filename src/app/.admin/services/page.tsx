"use client";

import { motion } from "framer-motion";

export default function AdminServicesPage() {
  return (
    <div className="p-8">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold gradient-text"
      >
        Services Management
      </motion.h1>

      <p className="opacity-70 mt-3 mb-8">Add, edit, or remove services.</p>

      <div className="glass-card p-6 rounded-2xl">
        <p className="opacity-70">CRUD UI will be implemented here later.</p>
      </div>
    </div>
  );
}
