"use client";

import { motion } from "framer-motion";

export default function AdminBlogPage() {
  return (
    <div className="p-8">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold gradient-text"
      >
        Blog Management
      </motion.h1>

      <p className="opacity-70 mt-3 mb-8">Create, edit, and delete blog posts.</p>

      <div className="glass-card p-6 rounded-2xl">
        <p className="opacity-70">CRUD functionality will be added here later.</p>
      </div>
    </div>
  );
}
