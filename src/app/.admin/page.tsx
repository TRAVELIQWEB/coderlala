"use client";

import { motion } from "framer-motion";

export default function AdminDashboard() {
  const menu = [
    { label: "Dashboard", path: "/admin" },
    { label: "Manage Blog", path: "/admin/blog" },
    { label: "Manage Services", path: "/admin/services" },
    { label: "Manage Portfolio", path: "/admin/portfolio" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* SIDEBAR */}
      <aside className="w-64 hidden md:block bg-black/30 border-r border-white/10 backdrop-blur-xl p-6">
        <h2 className="text-xl font-bold gradient-text">Admin Panel</h2>

        <nav className="mt-8 space-y-4 text-sm">
          {menu.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className="block opacity-80 hover:opacity-100 hover:translate-x-1 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold gradient-text"
        >
          Admin Dashboard
        </motion.h1>

        <p className="opacity-70 mt-2">Manage website content and data from here.</p>

        {/* OVERVIEW CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {["Blog Posts", "Services", "Portfolio Projects"].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="opacity-70 text-sm mt-1">Click a menu item to manage.</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
