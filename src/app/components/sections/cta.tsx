"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl"
      >
         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-blue-500"> Let&apos;s Build Something </span>
            <span className="block text-transparent bg-clip-text bg-orange-500"> Amazing Together </span>
          </h2>
        

        <p className="mt-4 sm:mt-5 md:mt-6 opacity-80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Whether you need a full SaaS product, enterprise system, mobile app, or a
          blazing-fast website — CoderLala Technologies can deliver it with excellence.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 sm:mt-8 md:mt-10 px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 
          rounded-lg sm:rounded-xl md:rounded-2xl !text-white font-semibold 
          bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-blue-500/25 
          hover:scale-[1.03] sm:hover:scale-[1.05] transition-all duration-300 text-sm sm:text-base md:text-lg"
        >
          Start Your Project →
        </Link>
      </motion.div>

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 640px) {
          .glass-card {
            backdrop-filter: blur(5px);
          }
        }
      `}</style>
    </section>
  );
}