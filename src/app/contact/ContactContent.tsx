"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Send,
  CheckCircle,
  Users,
  MessageSquare,
  Calendar,
  Shield,
  Rocket,
  Building
} from "lucide-react";

export default function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully! We'll contact you within 24 hours.");
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          budget: "",
          message: ""
        });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "salman.nizam@coderlala.com", desc: "For general inquiries" },
    { icon: Phone, title: "Phone", value: "+91 7830836770, 8949541483", desc: "Mon-Fri, 9AM-6PM IST" },
    { icon: MapPin, title: "Location", value: "JMD Megapolis, Sec-48 Gurugram (India)", desc: "Serving clients globally" },
    { icon: Clock, title: "Response Time", value: "< 24 Hours", desc: "For all business inquiries" },
  ];

  const contactReasons = [
    { icon: Users, title: "Project Inquiry", desc: "Discuss new projects or partnerships" },
    { icon: MessageSquare, title: "Consultation", desc: "Free 30-min strategy session" },
    { icon: Calendar, title: "Meeting", desc: "Schedule a demo or presentation" },
    { icon: Shield, title: "Support", desc: "Technical assistance for existing projects" },
  ];

  const budgetOptions = [
    "Less than ₹25,000",
    "₹25,000 - ₹100,000",
    "₹100,000 - ₹500,000",
    "₹500,000+",
    "Not sure yet"
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-6">
          <MessageSquare className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Get in Touch</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            Let's Build
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
            Something Amazing
          </span>
        </h1>

        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Have a project in mind? Let's discuss how we can bring your vision to life
          with cutting-edge technology and expert engineering.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
      >
        {contactInfo.map((info, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10 group hover:scale-[1.02] transition-transform cursor-pointer">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-orange-500/10 mb-4">
              <info.icon className="w-6 h-6 text-blue-300 group-hover:text-orange-300 transition-colors" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
            <p className="text-white/90 mb-1">{info.value}</p>
            <p className="text-sm text-white/60">{info.desc}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

          <div className="relative glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-white/70">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Budget *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {budgetOptions.map((option, i) => (
                    <label key={i} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={form.budget === option}
                        onChange={handleChange}
                        className="hidden"
                        required={i === 0}
                      />
                      <div
                        className={`flex-1 px-3 py-2 text-sm rounded-lg text-center transition-all ${form.budget === option
                            ? "bg-blue-500/20 border-blue-500"
                            : "bg-white/5 border border-white/10 hover:border-white/20"
                          }`}
                      >
                        {option}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, requirements, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 rounded-xl text-white font-semibold 
                  bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
                  hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                  shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]
                  flex items-center justify-center gap-3 overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="relative">Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl ${status.includes("successfully")
                      ? "bg-green-500/10 border-green-500/20"
                      : "bg-blue-500/10 border-blue-500/20"
                    } border text-center`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {status.includes("successfully") && (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    )}
                    <span className="text-sm">{status}</span>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Why Contact Us */}
          <div className="glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
            <div className="space-y-4">
              {contactReasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-orange-500/10">
                    <reason.icon className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{reason.title}</h4>
                    <p className="text-sm text-white/70">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <div className="glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20">
                <Building className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold">Company Information</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-sm text-white/60 mb-1">Company Name</p>
                <p className="font-medium">CoderLala Technologies Pvt. Ltd.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-sm text-white/60 mb-1">Email Address</p>
                <p className="font-medium">salman.nizam@coderlala.com</p>
                <p className="text-sm text-white/60 mt-1">For business inquiries</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-sm text-white/60 mb-1">Support Email</p>
                <p className="font-medium">support@coderlala.com</p>
                <p className="text-sm text-white/60 mt-1">For existing clients</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-sm text-white/60 mb-1">Location</p>
                <p className="font-medium">JMD Megapolis, Sec-48 Gurugram (India)</p>
                <p className="text-sm text-white/60 mt-1">Serving clients globally</p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-orange-500/10">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-5 h-5 text-blue-300" />
                <h4 className="font-semibold">Quick Response Guarantee</h4>
              </div>
              <p className="text-sm text-white/70">
                We respond to all business inquiries within 24 hours. For urgent matters,
                please call our support line.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="glass-card p-8 rounded-3xl backdrop-blur-xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Frequently Asked</h3>
            <div className="space-y-4">
              {[
                { q: "What's your typical response time?", a: "Within 24 hours for all business inquiries." },
                { q: "Do you offer free consultations?", a: "Yes, we offer free 30-minute strategy sessions." },
                { q: "What industries do you serve?", a: "Startups, SaaS, Fintech, Healthcare, E-commerce, and more." },
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <p className="font-medium mb-2">{faq.q}</p>
                  <p className="text-sm text-white/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-32 text-center"
      >
        <div className="glass-card p-12 rounded-3xl backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Ready to Start Your Project?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation call with our experts to discuss your requirements
            and get a detailed project roadmap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open("https://calendly.com/coderlala/consultation", "_blank")
              }
              className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
                hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
                transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </button>

            <a
              href="mailto:salman.nizam@coderlala.com"
              className="group relative px-8 py-4 rounded-xl text-white font-semibold 
                bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800
                hover:from-orange-700 hover:via-orange-800 hover:to-orange-900
                transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Email Us Directly
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
