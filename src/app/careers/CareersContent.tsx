"use client";

import { useState, useRef } from "react";
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
  ArrowRight,
  Book,
  Megaphone,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    role: "Junior Full Stack Developer",
    type: "Full-time",
    location: "Gurugram / India",
    experience: "0-1 year",
    desc: "Lead development of production-grade SaaS platforms, APIs, microservices, and modern UIs using cutting-edge technologies.",
    tech: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    color: "bg-blue-500",
    icon: Code2
  },
  {
    role: "Frontend Engineer (React/Next.js)",
    type: "Full-time",
    location: "Gurugram / India",
    experience: "0-1 year",
    desc: "Build high-performance, SEO-optimized Next.js applications with world-class UI/UX and modern state management.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "GraphQL"],
    color: "bg-orange-500",
    icon: Palette
  },
  {
    role: "UI/UX Designer",
    type: "Full-time",
    location: "Gurugram / India",
    experience: "0-1 years",
    desc: "Create beautiful, intuitive user interfaces and design systems for web and mobile applications.",
    tech: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "User Research"],
    color: "bg-red-500",
    icon: Shield
  },
  {
    role: "Digital Marketing Intern",
    type: "Internship",
    location: "Gurugram / India",
    experience: "0-1 year",
    desc: "Assist with content creation, brand communication, basic analytics, and managing company digital presence across platforms.",
    tech: ["Content Writing", "Social Media", "Basic Analytics", "Brand Communication"],
    color: "bg-teal-500",
    icon: Megaphone
  }
];

const benefits = [
  { icon: Zap, title: "Competitive Salary", desc: "Industry-leading compensation packages" },
  { icon: Globe, title: "Flexible Work Culture", desc: "Balanced schedule with flexible working hours" },
  { icon: Award, title: "Career Growth", desc: "Clear growth path and skill development" },
  { icon: Rocket, title: "Cutting-edge Tech", desc: "Work with latest technologies and tools" },
  { icon: Users, title: "Great Culture", desc: "Collaborative and supportive team environment" },
  { icon: Book, title: "Learning Budget", desc: "Yearly budget for courses, tools, and certifications" },
];

const stats = [
  { value: "12+", label: "Team Members", icon: Users, color: "text-blue-400" },
  { value: "2+", label: "Countries", icon: Globe, color: "text-orange-400" },
  { value: "4.8★", label: "Glassdoor", icon: Award, color: "text-purple-400" },
  { value: "Flexible", label: "Work Hours", icon: Calendar, color: "text-green-400" },
];

export default function CareersContent() {
  const [activeJob, setActiveJob] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);


  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

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
          bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20">
          <Rocket className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Join Our Team</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-blue-500">
            Build the Future
          </span>
          <span className="block text-transparent bg-clip-text bg-orange-500">
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
            <span className="text-transparent bg-clip-text bg-orange-500">
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
              <div className="inline-flex p-3 mb-4 rounded-xl bg-linear-to-br from-blue-500/10 to-orange-500/10">
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
            <span className="text-transparent bg-clip-text bg-orange-500">
              Featured Role
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Currently hiring for this exciting position. Apply now to join our growing team.
          </p>
        </div>

        {/* MOBILE: Scrollable Job Selection */}
        <div className="lg:hidden mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Select a Role</h3>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-3 pb-4 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {jobs.map((job, i) => (
                <button
                  key={i}
                  onClick={() => setActiveJob(i)}
                  className={`shrink-0 w-64 p-4 rounded-xl border transition-all ${i === activeJob
                      ? "bg-white/10 border-white/30 shadow-lg"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${job.color} bg-opacity-20 mt-1`}>
                      {(() => {
                        const IconComponent = job.icon;
                        return <IconComponent className="w-5 h-5 text-white" />;
                      })()}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-white mb-1 line-clamp-1">{job.role}</div>
                      <div className="text-xs text-white/70 flex items-center gap-1">
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>

        <div className="relative group">
          <div className={`absolute -inset-0.5 bg-linear-to-r ${jobs[activeJob].color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />

          <div className="relative glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* LEFT - Job Details */}
              <div className="lg:w-2/3">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-4 lg:hidden">
                      <div className={`p-3 rounded-xl ${jobs[activeJob].color} bg-opacity-20`}>
                        {(() => {
                          const IconComponent = jobs[activeJob].icon;
                          return <IconComponent className="w-6 h-6 text-white" />;
                        })()}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white/70">Current Role</div>
                        <div className="text-lg font-bold text-white">{jobs[activeJob].role}</div>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold mb-2 hidden lg:block">{jobs[activeJob].role}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-white/70" />
                        <span className="text-white/80">{jobs[activeJob].type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-white/70" />
                        <span className="text-white/80">{jobs[activeJob].location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-white/70" />
                        <span className="text-white/80">{jobs[activeJob].experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`hidden lg:flex p-4 rounded-xl bg-linear-to-br ${jobs[activeJob].color}/20`}>
                    {(() => {
                      const IconComponent = jobs[activeJob].icon;
                      return <IconComponent className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                </div>

                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  {jobs[activeJob].desc}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-white">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {jobs[activeJob].tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    // href={`
                    //   /careers/apply?role=${encodeURIComponent(jobs[activeJob].role)}
                    //   `}
                    href={`
                     /contact
                      `}
                    className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                      bg-linear-to-r from-blue-500 to-indigo-600
                      hover:from-blue-600 hover:to-indigo-700
                      transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                      flex items-center justify-center gap-3"
                  >
                    <span className="relative text-white!">Apply Now</span>
                    <ArrowRight className="w-5 h-5 text-white! group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group relative px-8 py-4 rounded-xl text-white! font-semibold 
                      bg-linear-to-r from-orange-500 to-orange-600
                      hover:from-orange-600 hover:to-orange-700
                      transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                      flex items-center justify-center gap-3"
                  >
                    <span className="relative text-white!">Learn More</span>
                    <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* DESKTOP: Open Positions on RIGHT SIDE */}
              <div className="hidden lg:block lg:w-1/3">
                <div className="glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10">
                  <h4 className="text-lg font-semibold mb-4 text-white">Open Positions</h4>

                  <div className="space-y-3">
                    {jobs.map((job, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveJob(i)}
                        className={`w-full text-left p-4 rounded-xl transition-all 
                          ${i === activeJob ? "bg-white/10 border border-white/20" : "bg-white/5 hover:bg-white/10 border border-transparent"}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {(() => {
                              const IconComponent = job.icon;
                              return <IconComponent className="w-5 h-5 text-white/70" />;
                            })()}
                            <div>
                              <div className="font-medium text-white">{job.role}</div>
                              <div className="text-sm text-white/60 mt-1">
                                {job.type} • {job.location}
                              </div>
                            </div>
                          </div>

                          {i === activeJob && (
                            <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-orange-500" />
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
            <span className="text-transparent bg-clip-text bg-orange-500">
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
                bg-linear-to-br from-blue-500/20 to-orange-500/20 border border-white/10 mb-6"
              >
                <span className="text-2xl font-bold text-white">{item.step}</span>
              </div>

              <h4 className="text-lg font-semibold mb-3 text-white">{item.title}</h4>
              <p className="text-sm text-white/70">{item.desc}</p>

              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-3/4 w-full h-px 
                  bg-linear-to-r from-blue-500/20 via-orange-500/20 to-transparent"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* FINAL CTA - FIXED */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="relative group">
          {/* Glow background */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500/20 to-orange-500/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

          {/* Card */}
          <div className="relative glass-card p-6 sm:p-10 md:p-12 rounded-3xl backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-orange-400">
                Ready to Join Our Team?
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Don't see the perfect role? We're always looking for talented individuals.
              Send us your resume and let's explore opportunities together.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col items-center gap-6 mb-10">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                {/* Mail button */}
                <Link
                  href="mailto:salman.nizam@coderlala.com"
                  className="group relative
                    px-6 py-3 sm:px-8 sm:py-4
                    rounded-xl text-white! font-semibold
                    bg-linear-to-r from-blue-600 to-blue-700
                    hover:from-blue-700 hover:to-blue-800
                    transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                    flex items-center justify-center gap-3
                    w-full sm:w-auto sm:min-w-[280px]"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span className="break-all text-center text-white!">
                    salman.nizam@coderlala.com
                  </span>
                </Link>

                {/* Contact form button */}
                <Link
                  href="/contact"
                  className="group relative
                    px-6 py-3 sm:px-8 sm:py-4
                    rounded-xl text-white! font-semibold
                    bg-linear-to-r from-orange-600 to-orange-700
                    hover:from-orange-700 hover:to-orange-800
                    transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                    flex items-center justify-center gap-3
                    w-full sm:w-auto sm:min-w-[280px]"
                >
                  <ArrowRight className="w-5 h-5 shrink-0 " />
                  <span className="text-white!">Contact Form</span>
                </Link>
              </div>

              {/* Social icons */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://linkedin.com/company/coderlala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-xl bg-white/5 border border-white/10 
                    hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />

                </a>

                <a
                  href="https://github.com/coderlala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-xl bg-white/5 border border-white/10 
                    hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />

                </a>
              </div>
            </div>

            {/* Footer note */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-start gap-3 max-w-2xl mx-auto">
                <div className="p-2 rounded-lg bg-blue-500/20 shrink-0">
                  <Heart className="w-5 h-5 text-blue-300" />
                </div>
                <p className="text-sm text-white/60 text-left">
                  <span className="font-semibold text-white">We respond to all applications</span>{" "}
                  within 3–5 business days. Feel free to follow up if you haven't heard back from us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>


    </div>
  );
}