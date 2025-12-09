"use client";

import { motion } from "framer-motion";
import { Quote, Star, Building, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Ravinder",
    role: "Founder",
    company: "SkyYogaShala",
    text: "Working with CoderLala was a seamless experience. They built a clean, fast and fully mobile-optimized yoga platform that made it easier for our students to explore classes and schedules.",
    rating: 5,
    image: "RV",
    color: "from-blue-500 to-teal-500",
    stats: "Smooth User Experience"
  },

  {
    name: "Dr. (Maj) Chander Prakash",
    role: "Founder & Chief Dentist",
    company: "Kreative Dentistry",
    text: "CoderLala created a modern and professional website for our clinic. The layout, appointment system, and overall structure are intuitive, making it very easy for patients to find information.",
    rating: 5,
    image: "CP",
    color: "from-purple-500 to-pink-500",
    stats: "Improved Usability"
  },

  {
    name: "Dr. (Maj) Chander Prakash",
    role: "Director",
    company: "Kreative GCAD",
    text: "Our GCAD training platform required clarity, structure and a smooth experience for students. CoderLala delivered a fast, organized and easy-to-update website that works perfectly for our academic needs.",
    rating: 5,
    image: "CP",
    color: "from-indigo-500 to-blue-500",
    stats: "Enhanced Platform Structure"
  },

  {
    name: "Dr. (Maj) Chander Prakash",
    role: "Founder",
    company: "Kreative Aesthetics",
    text: "CoderLala built a premium-quality website for our aesthetics and cosmetic services. The design aligns well with our brand and presents our treatments in a clear and elegant way.",
    rating: 5,
    image: "CP",
    color: "from-pink-500 to-rose-500",
    stats: "Premium Design"
  },

  {
    name: "Dr. Sringari",
    role: "Medical Director",
    company: "Polaris Hospitals",
    text: "We partnered with  CoderLala to revamp the Polaris Hospitals website. The new version is clean, well-structured, and makes it easy for patients to explore departments and doctors.",
    rating: 5,
    image: "DS",
    color: "from-green-500 to-emerald-500",
    stats: "Improved Navigation"
  },

  {
    name: "Zahid Malik",
    role: "Founder",
    company: "RangRoganWala",
    text: "CoderLala designed a vibrant and high-performance website for our painting services. It showcases our work beautifully and provides visitors with a smooth browsing experience.",
    rating: 5,
    image: "ZM",
    color: "from-orange-500 to-amber-500",
    stats: "High-Performance Build"
  },

  {
    name: "Poonam Agrawal",
    role: "Co-Founder",
    company: "RiPRAP Health",
    text: "Our health & wellness platform required a clean, trustworthy and user-friendly interface. CoderLala delivered a well-structured website with excellent clarity and fast loading performance.",
    rating: 5,
    image: "PA",
    color: "from-red-500 to-orange-500",
    stats: "Fast Loading Speed"
  }
];


const stats = [
  { icon: Building, value: "10+", label: "Enterprise Clients", color: "text-blue-400" },
  { icon: TrendingUp, value: "99%", label: "Client Retention", color: "text-green-400" },
  { icon: Users, value: "25+", label: "Projects Delivered", color: "text-purple-400" },
  { icon: Award, value: "4.9/5", label: "Average Rating", color: "text-yellow-400" },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-blue-500/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Quote className="w-4 h-4" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
              Trusted by
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it — hear from businesses that transformed 
            their operations with our solutions.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl backdrop-blur-xl text-center group hover:scale-[1.02] transition-transform cursor-pointer">
              <div className={`inline-flex p-3 rounded-xl bg-white/5 mb-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-12"
        >
          <div className="absolute -top-6 -left-6 text-8xl opacity-10">
            <Quote className="w-24 h-24" />
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-3xl backdrop-blur-xl border border-white/10 relative overflow-hidden">
            {/* Gradient Background */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${testimonials[activeTestimonial].color} opacity-5 blur-3xl`} />
            
            <div className="relative">
              <div className="flex items-start gap-6 mb-8">
                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonials[activeTestimonial].color} flex items-center justify-center text-white text-2xl font-bold`}>
                  {testimonials[activeTestimonial].image}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-white/80 mb-1">{testimonials[activeTestimonial].role}</p>
                  <p className="text-sm text-white/60">{testimonials[activeTestimonial].company}</p>
                  <div className="flex gap-1 mt-3">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="ml-auto hidden md:block">
                  <div className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
                    {testimonials[activeTestimonial].stats}
                  </div>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic mb-8">
                "{testimonials[activeTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`w-3 h-3 rounded-full transition-all ${i === activeTestimonial ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="md:hidden">
                  <div className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
                    {testimonials[activeTestimonial].stats}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveTestimonial(i)}
              className={`glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10 cursor-pointer transition-all duration-300 hover:border-white/20 ${
                i === activeTestimonial ? 'ring-2 ring-white/20' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold`}>
                  {testimonial.image}
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-white/80 mb-6 line-clamp-3">
                "{testimonial.text}"
              </p>
              
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-white/60">{testimonial.role}</div>
                <div className="text-xs text-white/40 mt-1">{testimonial.company}</div>
              </div>
              
              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white/60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-12 border-t border-white/10"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-white/90">
            Trusted by Companies Worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {["Startups", "SaaS Companies", "Enterprise", "Healthcare", "Fintech", "E-commerce", "Education", "Government"].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-sm font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Ready to join our growing list of satisfied clients?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Start Your Success Story
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}