"use client";

import { motion } from "framer-motion";

export default function DashboardPage() {
  const widgets = [
    { title: "Total Projects", value: "12" },
    { title: "Active Clients", value: "7" },
    { title: "Pending Tasks", value: "19" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* SIDEBAR */}
      <aside className="w-64 hidden md:block bg-black/20 border-r border-white/10 backdrop-blur-xl p-6">
        <h2 className="text-xl font-semibold gradient-text">Dashboard</h2>
        <nav className="mt-8 space-y-4 text-sm">
          <a className="block opacity-80 hover:opacity-100 cursor-pointer">Overview</a>
          <a className="block opacity-80 hover:opacity-100 cursor-pointer">Projects</a>
          <a className="block opacity-80 hover:opacity-100 cursor-pointer">Messages</a>
          <a className="block opacity-80 hover:opacity-100 cursor-pointer">Account</a>
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
          Welcome back 👋
        </motion.h1>

        {/* WIDGETS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {widgets.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <p className="text-sm opacity-70">{w.title}</p>
              <h3 className="text-3xl font-semibold mt-2">{w.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* PLACEHOLDER SECTIONS */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="glass-card p-6 rounded-2xl h-56">
            <h3 className="text-xl font-semibold mb-2">Recent Activity</h3>
            <p className="opacity-70 text-sm">Coming soon...</p>
          </div>

          <div className="glass-card p-6 rounded-2xl h-56">
            <h3 className="text-xl font-semibold mb-2">Notifications</h3>
            <p className="opacity-70 text-sm">Coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
