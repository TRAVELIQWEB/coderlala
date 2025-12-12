"use client";

import { motion } from "framer-motion";
import {
  Quote,
  Star,
  Building,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Building2,
  HeartPulse,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Landmark,
  Cloud,
} from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ravinder",
    role: "Founder",
    company: "SkyYogaShala",
    text: "Working with CoderLala was a seamless experience. They built a clean, fast and fully mobile-optimized yoga platform that made it easier for our students to explore classes and schedules.",
    rating: 5,
    image: "RV",
    color: "from-blue-500 to-teal-500",
    stats: "Smooth User Experience",
  },
  {
    name: "Dr. (Maj) Chander Prakash",
    role: "Founder & Chief Dentist",
    company: "Kreative Dentistry",
    text: "CoderLala created a modern and professional website for our clinic. The layout, appointment system, and overall structure are intuitive, making it very easy for patients to find information.",
    rating: 5,
    image: "CP",
    color: "from-purple-500 to-pink-500",
    stats: "Improved Usability",
  },
  {
    name: "Dr. (Maj) Chander Prakash",
    role: "Director",
    company: "Kreative GCAD",
    text: "Our GCAD training platform required clarity, structure and a smooth experience for students. CoderLala delivered a fast, organized and easy-to-update website that works perfectly for our academic needs.",
    rating: 5,
    image: "CP",
    color: "from-indigo-500 to-blue-500",
    stats: "Enhanced Platform Structure",
  },
  {
    name: "Dr. (Maj) Chander Prakash",
    role: "Founder",
    company: "Kreative Aesthetics",
    text: "CoderLala built a premium-quality website for our aesthetics and cosmetic services. The design aligns well with our brand and presents our treatments in a clear and elegant way.",
    rating: 5,
    image: "CP",
    color: "from-pink-500 to-rose-500",
    stats: "Premium Design",
  },
  {
    name: "Dr. Sringari",
    role: "Medical Director",
    company: "Polaris Hospitals",
    text: "We partnered with  CoderLala to revamp the Polaris Hospitals website. The new version is clean, well-structured, and makes it easy for patients to explore departments and doctors.",
    rating: 5,
    image: "DS",
    color: "from-green-500 to-emerald-500",
    stats: "Improved Navigation",
  },
  {
    name: "Zahid Malik",
    role: "Founder",
    company: "RangRoganWala",
    text: "CoderLala designed a vibrant and high-performance website for our painting services. It showcases our work beautifully and provides visitors with a smooth browsing experience.",
    rating: 5,
    image: "ZM",
    color: "from-orange-500 to-amber-500",
    stats: "High-Performance Build",
  },
  {
    name: "Poonam Agrawal",
    role: "Co-Founder",
    company: "RiPRAP Health",
    text: "Our health & wellness platform required a clean, trustworthy and user-friendly interface. CoderLala delivered a well-structured website with excellent clarity and fast loading performance.",
    rating: 5,
    image: "PA",
    color: "from-red-500 to-orange-500",
    stats: "Fast Loading Speed",
  },
];

const stats = [
  { icon: Building, value: "10+", label: "Enterprise Clients", color: "text-blue-400" },
  { icon: TrendingUp, value: "99%", label: "Client Retention", color: "text-green-400" },
  { icon: Users, value: "25+", label: "Projects Delivered", color: "text-purple-400" },
  { icon: Award, value: "4.9/5", label: "Average Rating", color: "text-yellow-400" },
];

// Colorful icons only - no background colors
const industries = [
  { 
    label: "Startups", 
    icon: Rocket,
    iconColor: "text-purple-400",
    hoverColor: "group-hover:text-purple-300"
  },
  { 
    label: "Enterprise", 
    icon: Building2,
    iconColor: "text-blue-400",
    hoverColor: "group-hover:text-blue-300"
  },
  { 
    label: "Healthcare", 
    icon: HeartPulse,
    iconColor: "text-green-400",
    hoverColor: "group-hover:text-green-300"
  },
  { 
    label: "Fintech", 
    icon: DollarSign,
    iconColor: "text-blue-500",
    hoverColor: "group-hover:text-blue-400"
  },
  { 
    label: "E-commerce", 
    icon: ShoppingCart,
    iconColor: "text-orange-400",
    hoverColor: "group-hover:text-orange-300"
  },
  { 
    label: "Education", 
    icon: GraduationCap,
    iconColor: "text-red-400",
    hoverColor: "group-hover:text-red-300"
  },
  { 
    label: "Government", 
    icon: Landmark,
    iconColor: "text-gray-400",
    hoverColor: "group-hover:text-gray-300"
  },
  { 
    label: "SaaS", 
    icon: Cloud,
    iconColor: "text-cyan-400",
    hoverColor: "group-hover:text-cyan-300"
  },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-blue-500/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 md:mb-6">
            <Quote className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">Client Success Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-blue-500"> Trusted by </span>
            <span className="block text-transparent bg-clip-text bg-orange-500"> Industry Leaders </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto px-4">
            Don&apos;t just take our word for it — hear from businesses that transformed their operations with our solutions.
          </p>
        </motion.div>

        {/* STATS CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-xl text-center group hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-white/5 mb-2 md:mb-4 ${stat.color}`}>
                <stat.icon className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/70 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* FEATURED TESTIMONIAL SLIDER */}
        <div className="relative mb-12 md:mb-16">
          {/* LEFT BUTTON */}
          <button
            onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full z-20 backdrop-blur-xl transition-all"
          >
            <ChevronLeft className="text-white w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => setActiveTestimonial(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1)}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full z-20 backdrop-blur-xl transition-all"
          >
            <ChevronRight className="text-white w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* CARD */}
          <div className="glass-card p-4 md:p-6 lg:p-10 rounded-2xl md:rounded-3xl backdrop-blur-xl border border-white/10 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br ${testimonials[activeTestimonial].color} opacity-10 blur-3xl`} />
            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 mb-6 md:mb-8">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${testimonials[activeTestimonial].color} flex items-center justify-center text-white text-xl md:text-2xl font-bold`}>
                  {testimonials[activeTestimonial].image}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-white/80 text-sm md:text-base">{testimonials[activeTestimonial].role}</p>
                  <p className="text-xs md:text-sm text-white/60">{testimonials[activeTestimonial].company}</p>
                  <div className="flex gap-1 mt-2 md:mt-3">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 text-sm md:text-base backdrop-blur-sm">
                    {testimonials[activeTestimonial].stats}
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-white/90 italic leading-relaxed mb-6">
                &ldquo;{testimonials[activeTestimonial].text}&rdquo;
              </p>

              {/* DOTS */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex gap-2 order-2 sm:order-1">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                        i === activeTestimonial ? "bg-white" : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
                <div className="md:hidden px-3 py-1.5 rounded-full bg-white/10 text-xs font-medium order-1 sm:order-2 backdrop-blur-sm">
                  {testimonials[activeTestimonial].stats}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE NAVIGATION BUTTONS */}
          <div className="flex justify-center gap-4 mt-4 sm:hidden">
            <button
              onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-xl transition-all"
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTestimonial(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1)}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-xl transition-all"
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TRUST BADGES & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-20 lg:mt-24 pt-6 md:pt-8 lg:pt-12 border-t border-white/10"
        >
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-center  mb-6 md:mb-8 text-white/80">
            Trusted by Companies Worldwide
          </h3>
          
          {/* COLORFUL ICONS ONLY - keeping your original card design */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6">
            {industries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/30 border border-white/80 hover:border-white/20 hover:bg-white/50 transition-all cursor-pointer">
                  <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${item.iconColor} ${item.hoverColor} transition-colors`} />
                  <span className="text-xs md:text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FINAL CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 md:mt-12"
          >
            <p className="text-base md:text-lg text-white/80 mb-4 md:mb-6 max-w-2xl mx-auto px-4">
              Ready to join our growing list of satisfied clients?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 !text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm md:text-base"
            >
              Start Your Success Story
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

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