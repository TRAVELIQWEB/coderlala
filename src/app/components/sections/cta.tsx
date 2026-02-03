"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          rounded-lg sm:rounded-xl md:rounded-2xl text-white! font-semibold 
          bg-linear-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-blue-500/25 
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

export const FinalCTA = () => {
  return (
    <>
      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 sm:px-0"
      >
        <div className="glass-card my-20 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-orange-400">
              Ready to Transform Your Business?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Let&apos;s discuss your project requirements and create a custom solution
            tailored to your business goals and technical needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white! font-semibold 
                         bg-linear-to-r from-blue-500 to-indigo-600
                         hover:from-blue-600 hover:to-indigo-700
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                         shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]
                         flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative text-white!">Start Your Project</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>

            <Link
              href="/contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white! font-semibold 
                         bg-linear-to-r from-orange-500 to-orange-600
                         hover:from-orange-600 hover:to-orange-700
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                         shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)]
                         flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative text-white!">Free Consultation</span>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}