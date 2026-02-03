'use client';
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function TermsOfServiceContent() {

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
          <Code2 className="w-4 h-4 text-blue-500 dark:text-blue-300" />
          <span className="text-sm font-medium">
            Our Story
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
          <span className="text-transparent bg-clip-text bg-blue-500 inline md:mr-4 mr-2">
            Terms
          </span>
          <span className="text-transparent bg-clip-text bg-orange-500 inline">
            of Service
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
          Please read these terms carefully before using
          {" "}
          <span className="font-semibold text-orange-500">
            CoderLala
          </span>
        </p>
        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-without-hover text-left mb-20 backdrop-blur-xl mt-6 rounded-lg border border-white/10  p-6 shadow-xl shadow-black/50 sm:p-8"
        >

          {/* Card container */}
          {/* <div className="relative rounded-2xl border border-white/10  p-6 shadow-xl shadow-black/50 backdrop-blur-sm sm:p-8"> */}
            {/* faint gradient border glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-sky-500/30 via-transparent to-indigo-500/30 blur-2xl opacity-60" />

            {/* Content – use prose styles if you have @tailwindcss/typography */}
            <article className="prose prose-invert prose-sm max-w-none sm:prose-base prose-headings:text-slate-50 prose-a:text-sky-300">
              <p>
                These Terms of Service (“Terms”) govern your use of the website
                <a href="https://www.coderlala.com" className="text-orange-500"><strong> https://www.coderlala.com </strong></a>
                and any services offered by CoderLala Technologies Pvt. Ltd.
                (“CoderLala”, “we”, “us”). By accessing our website or engaging
                our services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-xl mt-8 font-semibold mb-1">Acceptable Use</h2>
              <p>
                You agree not to misuse our website, attempt to gain unauthorized
                access to any systems, or engage in any activity that could harm
                the site or other users.
              </p>

              <h2 className="text-xl mt-8 font-semibold mb-1">Proposals, Quotes &amp; Projects</h2>
              <p>
                All proposals, quotes and statements of work we provide are valid
                only for the period mentioned and become binding only when
                accepted in writing (including email) and after any specified
                advance payment is received. Project timelines depend on client
                communication, content delivery and approvals.
              </p>

              <h2 className="text-xl mt-8 font-semibold mb-1">Intellectual Property</h2>
              <p>
                Unless otherwise stated in a written agreement, all code, designs
                and deliverables created by CoderLala remain our intellectual
                property until full payment is received. After final payment,
                usage rights are granted to the client as described in the
                project agreement.
              </p>
              <p>
                The content on this site (text, graphics, logos, code) is owned by
                CoderLala or its licensors and may not be copied, modified or
                redistributed without our permission.
              </p>

              <h2 className="text-xl mt-8 font-semibold mb-1">Disclaimers &amp; Limitation of Liability</h2>
              <p>
                Our website and services are provided “as is” and “as available”.
                To the maximum extent permitted by law, we disclaim all warranties
                and shall not be liable for any indirect or consequential damages
                arising out of your use of this website or our services.
              </p>

              <h2 className="text-xl mt-8 font-semibold mb-1">Governing Law</h2>
              <p>
                These Terms are governed by the laws of India, with exclusive
                jurisdiction of courts in Gurugram, Haryana, unless otherwise
                required by applicable law.
              </p>
            </article>

            {/* small footer note */}
            <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-400">
              <p>
                Last updated: {new Date().getFullYear()} · For questions about
                these Terms, contact{" "}
                <a
                  href="mailto:info@coderlala.com"
                  className="font-medium text-orange-500"
                >info@coderlala.com</a>
                .
              </p>
            </div>
          {/* </div> */}


        </motion.div>
      </motion.div>
    </>
  )
}