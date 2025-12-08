"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Users, 
  Zap, 
  Code2,
  Award,
  Globe,
  Cpu,
  Palette,
  Cloud,
  Shield,
  Mail,
  Linkedin,
  Github,
  Calendar,
  MapPin,
  Briefcase,
  TrendingUp,
  Heart,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    role: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Remote / India",
    experience: "3-5 years",
    desc: "Lead development of production-grade SaaS platforms, APIs, microservices, and modern UIs using cutting-edge technologies.",
    tech: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    color: "from-blue-500 to-cyan-500",
    icon: Code2
  },
  {
    role: "Frontend Engineer (React/Next.js)",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 years",
    desc: "Build high-performance, SEO-optimized Next.js applications with world-class UI/UX and modern state management.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "GraphQL"],
    color: "from-orange-500 to-amber-500",
    icon: Palette
  },
  {
    role: "Backend Developer (Node/NestJS)",
    type: "Full-time",
    location: "Hybrid / Remote",
    experience: "3-6 years",
    desc: "Engineer scalable backend systems, REST/GraphQL APIs, authentication, payment gateways, and microservices architecture.",
    tech: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Docker", "AWS"],
    color: "from-purple-500 to-pink-500",
    icon: Cpu
  },
  {
    role: "DevOps & Cloud Engineer",
    type: "Full-time",
    location: "Remote",
    experience: "2-5 years",
    desc: "Design and manage cloud infrastructure, CI/CD pipelines, containerization, and deployment strategies at scale.",
    tech: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
    color: "from-green-500 to-emerald-500",
    icon: Cloud
  },
  {
    role: "UI/UX Designer",
    type: "Full-time",
    location: "Remote / Bangalore",
    experience: "2-4 years",
    desc: "Create beautiful, intuitive user interfaces and design systems for web and mobile applications.",
    tech: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "User Research"],
    color: "from-red-500 to-orange-500",
    icon: Shield
  },
  {
    role: "Product Manager",
    type: "Full-time",
    location: "Hybrid",
    experience: "3-6 years",
    desc: "Lead product strategy, roadmap planning, and execution for enterprise SaaS products.",
    tech: ["Product Strategy", "Roadmapping", "Agile", "Analytics", "User Stories"],
    color: "from-indigo-500 to-blue-500",
    icon: TrendingUp
  },
];

const benefits = [
  { icon: Zap, title: "Competitive Salary", desc: "Industry-leading compensation packages" },
  { icon: Globe, title: "Remote First", desc: "Work from anywhere with flexible hours" },
  { icon: Award, title: "Career Growth", desc: "Clear growth path and skill development" },
  { icon: Rocket, title: "Cutting-edge Tech", desc: "Work with latest technologies and tools" },
  { icon: Users, title: "Great Culture", desc: "Collaborative and supportive team environment" },
  { icon: Heart, title: "Health Benefits", desc: "Comprehensive health insurance coverage" },
];

const stats = [
  { value: "50+", label: "Team Members", icon: Users, color: "text-blue-400" },
  { value: "20+", label: "Countries", icon: Globe, color: "text-orange-400" },
  { value: "4.8★", label: "Glassdoor", icon: Award, color: "text-purple-400" },
  { value: "Flexible", label: "Work Hours", icon: Calendar, color: "text-green-400" },
];

export default function CareersContent() {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full 
          bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20">
          <Rocket className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Join Our Team</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            Build the Future
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
            With Us
          </span>
        </h1>

        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Join a team of passionate engineers and innovators building digital solutions 
          that transform businesses and impact millions of users worldwide.
        </p>
      </motion.div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 mb-20 rounded-3xl backdrop-blur-xl border border-white/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className={`inline-flex p-3 mb-4 rounded-xl bg-white/5 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* BENEFITS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Why Join CoderLala?
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We offer more than just a job — we offer a career with purpose, growth, and great perks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10 group cursor-pointer"
            >
              <div className="inline-flex p-3 mb-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-orange-500/10">
                <benefit.icon className="w-6 h-6 text-blue-300 group-hover:text-orange-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/70">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FEATURED JOB */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Featured Role
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Currently hiring for this exciting position. Apply now to join our growing team.
          </p>
        </div>

        <div className="relative group">
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${jobs[activeJob].color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />

          <div className="relative glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
            <div className="flex flex-col lg:flex-row gap-8">

              {/* LEFT */}
              <div className="lg:w-2/3">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{jobs[activeJob].role}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {jobs[activeJob].type}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {jobs[activeJob].location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {jobs[activeJob].experience}
                      </div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl bg-gradient-to-br ${jobs[activeJob].color}/20`}>
                    {(() => {
                      const IconComponent = jobs[activeJob].icon;
                      return <IconComponent className="w-8 h-8" />;
                    })()}
                  </div>
                </div>

                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  {jobs[activeJob].desc}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {jobs[activeJob].tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/careers/apply?role=${encodeURIComponent(jobs[activeJob].role)}`}
                    className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                      bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
                      hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
                      transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                      flex items-center justify-center gap-3"
                  >
                    <span className="relative">Apply Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                      bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800
                      hover:from-orange-700 hover:via-orange-800 hover:to-orange-900
                      transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                      flex items-center justify-center gap-3"
                  >
                    <span className="relative">Learn More</span>
                    <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* RIGHT NAVIGATION */}
              <div className="lg:w-1/3">
                <div className="glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10">
                  <h4 className="text-lg font-semibold mb-4">Open Positions</h4>

                  <div className="space-y-3">
                    {jobs.map((job, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveJob(i)}
                        className={`w-full text-left p-4 rounded-xl transition-all 
                          ${i === activeJob ? "bg-white/10" : "bg-white/5 hover:bg-white/10"}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {(() => {
                              const IconComponent = job.icon;
                              return <IconComponent className="w-5 h-5" />;
                            })()}
                            <div>
                              <div className="font-medium">{job.role}</div>
                              <div className="text-sm text-white/60 mt-1">
                                {job.type} • {job.location}
                              </div>
                            </div>
                          </div>

                          {i === activeJob && (
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-orange-500" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>

      {/* HIRING PROCESS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Our Hiring Process
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A straightforward process designed to find the best talent while respecting your time.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Application Review", desc: "We review your profile within 48 hours" },
            { step: "02", title: "Technical Interview", desc: "Live coding session & technical discussion" },
            { step: "03", title: "Culture Fit", desc: "Meet the team and discuss values alignment" },
            { step: "04", title: "Offer & Onboarding", desc: "Welcome to the team with full support" },
          ].map((item, i) => (
            <div key={i} className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                bg-gradient-to-br from-blue-500/20 to-orange-500/20 border border-white/10 mb-6"
              >
                <span className="text-2xl font-bold text-white">{item.step}</span>
              </div>

              <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
              <p className="text-sm text-white/60">{item.desc}</p>

              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-3/4 w-full h-px 
                  bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-transparent"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="glass-card p-12 rounded-3xl backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Ready to Join Our Team?
            </span>
          </h2>

          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals. 
            Send us your resume and let's explore opportunities together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <Link
              href="mailto:careers@coderlala.com"
              className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
                hover:scale-[1.02] hover:shadow-2xl transition-all flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              careers@coderlala.com
            </Link>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/coderlala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/coderlala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60">
              <span className="font-semibold text-white">Note:</span> We respond to all applications within 3–5 business days. 
              Feel free to follow up if you haven’t heard back.
            </p>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
