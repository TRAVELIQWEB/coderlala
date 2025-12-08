"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 text-center max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-12 rounded-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Let’s Build Something Amazing Together
        </h2>

        <p className="mt-6 opacity-80 text-lg max-w-3xl mx-auto">
          Whether you need a full SaaS product, enterprise system, mobile app, or a
          blazing-fast website — CoderLala Technologies can deliver it with excellence.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-10 px-8 py-4 rounded-2xl text-white font-semibold bg-[linear-gradient(135deg,#3B82F6,#1E40AF,#3F3CBB)] shadow-glow hover:scale-[1.05] transition-transform"
        >
          Start Your Project → 
        </Link>
      </motion.div>
    </section>
  );
}
