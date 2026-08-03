"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { HeroTitle2 } from "@/app/components/HeroTitle";

export default function PrivacyPolicyContent() {
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
          <ShieldCheck className="w-4 h-4 text-blue-500 dark:text-blue-300" />
          <span className="text-sm font-medium">
            Data &amp; Privacy
          </span>
        </div>

        <HeroTitle2 title1={"Privacy"} title2={"Policy"} />


        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
          Understand how{" "}
          <span className="font-semibold text-orange-400">
            CoderLala Technologies Pvt. Ltd.
          </span>{" "}
          collects, uses and protects your information when you use our website
          and services.
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

          <article className="prose prose-invert prose-sm max-w-none sm:prose-base prose-headings:text-slate-50 prose-a:text-emerald-300">
            <p>
              CoderLala Technologies Pvt. Ltd. (“CoderLala”, “we”, “us”)
              provides web, mobile and software development services to clients
              worldwide. This Privacy Policy describes how we collect, use and
              protect your information when you visit{" "}
              <a href="https://coderlala.com" className="text-orange-500"><strong>https://coderlala.com</strong></a> or work with us on a
              project.
            </p>

            <h2 className="text-xl mt-8 font-semibold mb-1">Information We Collect</h2>
            <p>
              We collect information that you provide directly (such as contact
              forms, project enquiries, email communication), information
              collected automatically (such as IP address, browser type, pages
              viewed, and time spent), and information from third‑party
              analytics or advertising tools.
            </p>

            <h2 className="text-xl mt-8 font-semibold mb-1">How We Use Your Information</h2>
            <p>We use this data to:</p>
            <ul>
              <li>Respond to enquiries and provide proposals</li>
              <li>Deliver and maintain our services</li>
              <li>Improve our website performance and user experience</li>
              <li>Communicate updates, offers or technical notices</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl mt-8 font-semibold mb-1">
              Sharing with Service Providers
            </h2>
            <p>
              We may share information with trusted service providers (for
              example, hosting, analytics, payment gateways) who process data on
              our behalf and are bound by confidentiality. We do not sell your
              personal data.
            </p>

            <h2 className="text-xl mt-8 font-semibold mb-1">Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect your information against unauthorized access, loss or
              misuse. However, no method of transmission over the Internet is
              100% secure.
            </p>

            <h2 className="text-xl mt-8 font-semibold mb-1">Your Rights</h2>
            <p>
              You may request access, correction or deletion of your personal
              data by contacting us at{" "}
              <a
                href="mailto:info@coderlala.com"
                className="font-medium text-orange-500"
              >
                info@coderlala.com
              </a>

            </p>

            <h2 className="text-xl mt-8 font-semibold mb-1">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with a revised “Last updated” date.
            </p>
          </article>

          {/* footer note */}
          <div className="mt-6 border-top border-t border-slate-800 pt-4 text-xs text-slate-400">
            <p>
              Last updated: {new Date().getFullYear()} · For questions about
              this Privacy Policy, contact{" "}
              <a
                href="mailto:info@coderlala.com"
                className="font-medium text-orange-500"
              >
                info@coderlala.com
              </a>

            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

