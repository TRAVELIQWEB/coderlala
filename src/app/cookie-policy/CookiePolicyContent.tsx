"use client";
import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookiePolicyContent() {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:mt-10 mb-12 sm:mb-16 md:mb-20"
      >
        <div className="about-hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-black/10 dark:border-white/20 mb-4 md:mb-6">
          <Cookie className="w-4 h-4 text-orange-500 dark:text-orange-300" />
          <span className="text-sm font-medium">
            Cookies & Tracking
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
          <span className="text-transparent bg-clip-text bg-blue-500 inline md:mr-4 mr-2">
            Cookie
          </span>
          <span className="text-transparent bg-clip-text bg-orange-500 inline">
            Policy
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
          This Cookie Policy explains how{" "}
          <span className="font-semibold text-orange-500">
            CoderLala Technologies Pvt. Ltd.
          </span>{" "}
          uses cookies and similar technologies when you visit our website.
        </p>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-without-hover text-left mb-20 backdrop-blur-xl mt-6 rounded-lg border border-white/10 p-6 shadow-xl shadow-black/50 sm:p-8 relative"
        >
          {/* gradient glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-sky-500/30 via-transparent to-indigo-500/30 blur-2xl opacity-60" />

          <article className="prose prose-invert prose-sm max-w-none sm:prose-base prose-headings:text-slate-50 prose-a:text-sky-300">
            <p>
              This Cookie Policy describes how CoderLala Technologies Pvt. Ltd.
              (“CoderLala”, “we”, “us”) uses cookies and similar technologies
              when you visit{" "}
              <a
                href="https://www.coderlala.com"
                className="text-orange-500 font-semibold"
              >
                https://www.coderlala.com
              </a>{" "}
              (the “Website”). It should be read together with our Privacy
              Policy.
            </p>

            <h2 className="text-xl mt-8 font-semibold mb-1">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They help the site recognize your device and
              remember certain information about your visit, such as your
              preferences or pages you view.
            </p>

            <h2 className="text-xl mt-8 font-semibold mb-1">
              Types of Cookies We Use
            </h2>
            <p>We may use the following types of cookies on our Website:</p>
            <ul>
              <li>
                <strong>Essential cookies</strong> – Required for the Website to
                function properly (for example, security and basic navigation).
              </li>
              <li>
                <strong>Analytics cookies</strong> – Help us understand how
                visitors use the Website (for example, pages visited, time
                spent, device information) so we can improve performance and
                user experience.
              </li>
              <li>
                <strong>Preference cookies</strong> – Remember your choices and
                settings (such as language or region) to provide a more
                personalized experience.
              </li>
              <li>
                <strong>Marketing / advertising cookies</strong> – Used in
                connection with third‑party tools to measure campaigns or show
                relevant content, where applicable.
              </li>
            </ul>

            <h2 className="text-xl mt-8 font-semibold mb-1">
              Third‑Party Cookies
            </h2>
            <p>
              We may use third‑party services such as analytics or advertising
              providers that set cookies on our Website. These providers may
              collect information about your online activities over time and
              across different websites, according to their own privacy
              policies.
            </p>

            <h2 className="text-xl mt-8 font-semibold mb-1">
              How You Can Manage Cookies
            </h2>
            <p>
              You can control or disable cookies through your browser settings.
              Most browsers allow you to block or delete cookies, or to receive
              a warning before a cookie is stored. Please note that if you
              disable certain cookies, some features of the Website may not
              function correctly.
            </p>
            <p>
              Where required by law, we will also present a cookie banner or
              consent tool that allows you to accept or reject non‑essential
              cookies.
            </p>

            <h2 className="text-xl mt-8 font-semibold mb-1">
              Updates to This Cookie Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in our use of cookies or applicable laws. Any updates will
              be posted on this page with a revised “Last updated” date.
            </p>

            <h2 className="text-xl mt-8 font-semibold mb-1">Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy or our use of
              cookies, you can contact us at{" "}
              <a
                href="mailto:info@coderlala.com"
                className="font-medium text-orange-500 hover:text-orange-300"
              >
                info@coderlala.com
              </a>
              .
            </p>
          </article>

          {/* Footer note */}
          <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-400">
            <p>
              Last updated: {new Date().getFullYear()} · For cookie and tracking
              questions, contact{" "}
              <a
                href="mailto:info@coderlala.com"
                className="font-medium text-orange-500 hover:text-orange-300"
              >
                info@coderlala.com
              </a>
              .
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
