"use client";
import { motion } from "framer-motion";
import { Map } from "lucide-react";
import Link from "next/link";
import { HeroTitle2 } from "@/app/components/HeroTitle";

export default function SitemapContent() {
  const mainPages = [
    { href: "/", title: "Home", desc: "Welcome to CoderLala Technologies", color: "text-orange-400" },
    { href: "/about", title: "About Us", desc: "Our journey, mission & vision", color: "text-orange-400" },
    { href: "/services", title: "Services", desc: "Web, mobile, cloud & AI solutions", color: "text-orange-400" },
    { href: "/portfolio", title: "Portfolio", desc: "Our enterprise & SaaS projects", color: "text-orange-400" },
    { href: "/careers", title: "Careers", desc: "Join our team of innovators", color: "text-orange-400" },
    { href: "/contact", title: "Contact", desc: "Get in touch with us", color: "text-orange-400" },
  ];

  const legalPages = [
    { href: "/privacy-policy", title: "Privacy Policy", desc: "How we protect your data", color: "text-blue-400" },
    { href: "/terms-of-service", title: "Terms of Service", desc: "Service agreements", color: "text-blue-400" },
    { href: "/cookie-policy", title: "Cookie Policy", desc: "Cookie usage information", color: "text-blue-400" },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:mt-10 mb-12 sm:mb-16 md:mb-20"
      >
        <div className="about-hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-emerald-500/10 to-sky-500/10 backdrop-blur-sm border border-black/10 dark:border-white/20 mb-4 md:mb-6">
          <Map className="w-4 h-4 text-blue-500 dark:text-blue-300" />
          <span className="text-sm font-medium">
            Site Navigation
          </span>
        </div>

        <HeroTitle2 title1={"Site"} title2={"Map"} />

        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
          Browse all important pages of{" "}
          <span className="font-semibold text-orange-400">
            CoderLala Technologies Pvt. Ltd.
          </span>{" "}
          and navigate to the content you're looking for.
        </p>

        {/* Content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-without-hover text-left mb-20 backdrop-blur-xl mt-6 rounded-lg border border-white/10 p-6 shadow-xl shadow-black/50 sm:p-8 relative"
        >
          {/* gradient glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-emerald-500/30 via-transparent to-sky-500/30 blur-2xl opacity-60" />

          <div className="prose prose-invert prose-sm max-w-none sm:prose-base prose-headings:text-slate-50 prose-a:text-emerald-300">
            <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {mainPages.map((page) => (
                <Link key={page.href} href={page.href} className="block p-4 rounded-lg glass-card-without-hover transition-all dark:bg-white/10 duration-300 border dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                  <h3 className={`font-semibold ${page.color} mb-1`}>{page.title}</h3>
                  <p className="text-sm">{page.desc}</p>
                </Link>
              ))}
            </div>

            <h2 className="text-xl mt-8 font-semibold mb-4">Legal & Policies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {legalPages.map((page) => (
                <Link key={page.href} href={page.href} className="block p-4 rounded-lg glass-card-without-hover transition-all dark:bg-white/10 duration-300 border dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                  <h3 className={`font-semibold ${page.color} mb-1`}>{page.title}</h3>
                  <p className="text-sm">{page.desc}</p>
                </Link>
              ))}
            </div>
          </div>

        </motion.div>
      </motion.div>
    </>
  );
}

