"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Users,
  MessageSquare,
  Calendar,
  Shield,
  Rocket,
  Building,
  X,
  Star,
  AlertCircle,
  Check,
  XCircle
} from "lucide-react";
import { submitContact } from "@/services/contact.service";
import HeroTitle from "@/app/components/HeroTitle";
import { contactInfo as contactInfo2 } from "@/data/ContactInfo";
import ContactForm from "@/app/components/ContactForm";
import { useScrollToForm } from "@/hooks/useScrollToForm";
import Link from "next/link";

export default function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    budget: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState(5);
  const { inputRef } = useScrollToForm({
    delay: 650,
    block: "start",
  });
  // Validation functions
  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;

      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "phone":
        if (value && !/^[0-9]{10}$/.test(value.replace(/\D/g, ''))) {
          error = "Phone number must be exactly 10 digits";
        }
        break;

      case "budget":
        if (!value.trim()) error = "Please select a budget option";
        break;

      case "message":
        if (!value.trim()) error = "Project details are required";
        else if (value.trim().length < 10) error = "Please provide more details (at least 10 characters)";
        break;
    }

    return error;
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      phone: validateField("phone", form.phone),
      budget: validateField("budget", form.budget),
      message: validateField("message", form.message)
    };

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some(error => error !== "");
  };

  // Countdown timer for modal auto-close
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showSuccessModal && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowSuccessModal(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [showSuccessModal, countdown]);

  // Reset countdown when modal opens
  useEffect(() => {
    if (showSuccessModal) {
      setCountdown(5);
    }
  }, [showSuccessModal]);

  // Handle field changes with validation
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // Format phone number - only allow digits and limit to 10
    let formattedValue = value;
    if (name === "phone") {
      // Remove all non-digit characters
      formattedValue = value.replace(/\D/g, '');
      // Limit to 10 digits
      formattedValue = formattedValue.slice(0, 10);
    }

    setForm(prev => ({ ...prev, [name]: formattedValue }));

    // Validate field if it has been touched
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, formattedValue);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setCountdown(5);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setErrorMessage("");
  };
  type ContactInfo = {
    icon: React.ElementType;
    title: string;
    value: React.ReactNode; // Changed to support HTML
    value2?: React.ReactNode; // Changed to support HTML
    desc: string;
  };


  const contactInfo: ContactInfo[] = [
    { icon: Mail, title: "Email", value: <a href={`mailto:${contactInfo2.email}`}>{contactInfo2.email}</a>, desc: "For general inquiries" },
    { icon: Phone, title: "Phone", value: <a href={`tel:${contactInfo2.salmanNizamPhone}`}>+91 {contactInfo2.salmanNizamPhone}</a>, value2: <a href={`tel:${contactInfo2.achalSinghPhone}`}>+91 {contactInfo2.achalSinghPhone}</a>, desc: "Mon-Fri, 9AM-6PM IST" },
    { icon: MapPin, title: "Location", value: <a target="_blank" href={contactInfo2.mapLocationLink}>{contactInfo2.websiteAddress}</a>, desc: "Serving clients globally" },
    { icon: Clock, title: "Response Time", value: "24x7 Hours", desc: "For all business inquiries" },
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

  // Helper function to check if a field is valid
  const isFieldValid = (fieldName: string) => {
    return touched[fieldName as keyof typeof touched] && !errors[fieldName as keyof typeof errors];
  };

  // Helper function to check if a field has error
  const hasError = (fieldName: string) => {
    return touched[fieldName as keyof typeof touched] && errors[fieldName as keyof typeof errors];
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 relative">
      <AnimatePresence>
        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeSuccessModal}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md z-10"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-60" />
              <div className="relative glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-white/10">
                {/* Close button */}
                <button
                  onClick={closeSuccessModal}
                  className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>

                {/* Success content */}
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-linear-to-br from-green-500/20 to-emerald-600/20 mb-4">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>

                  <p className="text-white/80 mb-6">
                    Thank you for contacting us. We've received your message and will get back to you within 24 hours.
                  </p>

                  {/* Countdown timer */}
                  <div className="mb-6">
                    <div className="text-sm text-white/60 mb-2">This modal will close in:</div>
                    <div className="flex justify-center">
                      <div className="px-4 py-2 rounded-lg bg-white/10">
                        <span className="text-lg font-mono">{countdown}</span>
                        <span className="ml-2">seconds</span>
                      </div>
                    </div>
                  </div>

                  {/* Continue button */}
                  <button
                    onClick={closeSuccessModal}
                    className="w-full py-3 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 
                      hover:from-green-600 hover:to-emerald-700 
                      transition-all duration-300 font-semibold"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Error Modal */}
        {showErrorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeErrorModal}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md z-10"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-red-500 to-orange-600 rounded-2xl blur opacity-60" />
              <div className="relative glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-white/10">
                {/* Close button */}
                <button
                  onClick={closeErrorModal}
                  className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>

                {/* Error content */}
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-linear-to-br from-red-500/20 to-orange-600/20 mb-4">
                    <AlertCircle className="w-12 h-12 text-red-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">Oops! Something Went Wrong</h3>

                  <p className="text-white/80 mb-6">
                    {errorMessage}
                  </p>

                  <div className="space-y-3">
                    <button
                      onClick={closeErrorModal}
                      className="w-full py-3 rounded-xl bg-linear-to-r from-red-500 to-orange-600 
                        hover:from-red-600 hover:to-orange-700 
                        transition-all duration-300 font-semibold"
                    >
                      Try Again
                    </button>

                    <button
                      onClick={closeErrorModal}
                      className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 
                        transition-all duration-300 font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 lg:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4 lg:mb-6">
          <MessageSquare className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Contact Our Software Development Team</span>
        </div>


        <HeroTitle title1="Contact Our" title2="Web Development Company" />

        <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto px-4">
          Ready to start your digital transformation? Contact our mobile app development and SaaS development experts in Gurgaon for custom software development services.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-20"
      >
        {contactInfo.map((info, i) => (
          <div key={i} className="glass-card p-4 sm:p-6 rounded-xl lg:rounded-2xl backdrop-blur-xl border border-white/10 group hover:scale-[1.02] transition-transform cursor-pointer">
            <div className="inline-flex p-2 sm:p-3 rounded-xl bg-linear-to-br from-blue-500/10 to-orange-500/10 mb-3 sm:mb-4">
              <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 group-hover:text-orange-300 transition-colors" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{info.title}</h3>
            <p className="text-white/90 text-sm sm:text-base mb-1">{info.value}</p>
            <p className="text-white/90 text-sm sm:text-base mb-1">{info.value2}</p>
            <p className="text-xs sm:text-sm text-white/60">{info.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Contact Form */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl lg:rounded-3xl blur opacity-0  transition duration-500" />

            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-xl">
              <div className="h-1 w-full bg-linear-to-r from-blue-600 to-orange-500"></div>
              <div className="p-6">
                <div className="mb-5">
                  <h3 className="text-2xl font-bold tracking-tight text-primary">
                    🏢 Get Your Custom Software Quote
                  </h3>
                  <p className="text-muted-foreground text-sm mt-4">
                    Contact our technology solutions experts and get a detailed project roadmap within 24 hours.
                  </p>
                  <div className="mt-5 h-px w-full border-border border-t"></div>
                </div>
                <ContactForm size={'sm'} ref={inputRef} />
              </div>
            </div>



          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:space-y-8"
        >
          {/* Why Contact Us */}
          <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 lg:mb-6">Why Contact Our Software Development Company?</h3>
            <div className="space-y-3 sm:space-y-4">
              {contactReasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-linear-to-br from-blue-500/10 to-orange-500/10 shrink-0">
                    <reason.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">{reason.title}</h4>
                    <p className="text-xs sm:text-sm text-white/70">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="p-2 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/20">
                <Building className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">About CoderLala Technologies</h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 sm:p-4 rounded-xl bg-white/5">
                <p className="text-xs sm:text-sm text-white/60 mb-1">Company Name</p>
                <p className="font-medium text-sm sm:text-base">CoderLala Technologies Pvt. Ltd.</p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white/5">
                <p className="text-xs sm:text-sm text-white/60 mb-1">Email Address</p>
                <p className="font-medium text-sm sm:text-base">info@coderlala.com</p>
                <p className="text-xs sm:text-sm text-white/60 mt-1">For business inquiries</p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white/5">
                <p className="text-xs sm:text-sm text-white/60 mb-1">Support Email</p>
                <p className="font-medium text-sm sm:text-base">support@coderlala.com</p>
                <p className="text-xs sm:text-sm text-white/60 mt-1">For existing clients</p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white/5">
                <p className="text-xs sm:text-sm text-white/60 mb-1">Location</p>
                <p className="font-medium text-sm sm:text-base">JMD Megapolis, Sec-48 Gurugram (India)</p>
                <p className="text-xs sm:text-sm text-white/60 mt-1">Serving clients globally</p>
              </div>
            </div>

            <div className="mt-6 p-4 sm:p-6 rounded-xl lg:rounded-2xl bg-linear-to-r from-blue-500/10 to-orange-500/10">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                <h4 className="font-semibold text-sm sm:text-base">IT Consulting Response Guarantee</h4>
              </div>
              <p className="text-xs sm:text-sm text-white/70">
                We respond to all business inquiries within 24 hours. For urgent matters,
                please call our support line.
              </p>
            </div>
          </div>

          {/* Review Us Section */}
          <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-yellow-600">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white!" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Review Us</h3>
            </div>
            <h3 className="text-xl font-bold text-white/70">
              Your feedback helps us grow!
            </h3>
            <p className="text-white/70 my-4">
              If you've had a great experience with CoderLala Technologies, please consider leaving us a review.
            </p>
            <Link
              href={contactInfo2.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#e38239] text-white font-semibold transition-colors duration-300 shadow-md hover:shadow-lg group"
            >
              <Star className="w-4 h-4 text-white!" />
              <span className="text-sm text-white!">Review Us on Google</span>
            </Link>
          </div>

          {/* FAQ */}
          <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 lg:mb-6">Software Development Services FAQ</h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                { q: "What's your typical response time?", a: "Within 24 hours for all business inquiries." },
                { q: "Do you offer free consultations?", a: "Yes, we offer free 30-minute strategy sessions." },
                { q: "What industries do you serve?", a: "Startups, SaaS, Fintech, Healthcare, E-commerce, and more." },
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-3 sm:pb-4 last:border-0 last:pb-0">
                  <p className="font-medium text-sm sm:text-base mb-1 sm:mb-2">{faq.q}</p>
                  <p className="text-xs sm:text-sm text-white/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div >

      {/* CTA */}
      < motion.div
        initial={{ opacity: 0, y: 30 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 lg:mt-32 text-center"
      >
        <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-orange-400">
              Ready to Start Your Digital Transformation?
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-6 lg:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Schedule a free consultation with our web development and mobile app development experts to discuss your custom software development needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() =>
                window.open("https://calendly.com/salman-nizam-coderlala/30min", "_blank")
              }
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg lg:rounded-xl text-white! font-semibold 
                bg-linear-to-r from-blue-500 to-indigo-600
                hover:from-blue-600 hover:to-indigo-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white!" />
              Schedule Technology Consultation
            </button>

            <a
              href="mailto:info@coderlala.com"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg lg:rounded-xl text-white! font-semibold 
                bg-linear-to-r from-orange-500 to-orange-600
                hover:from-orange-600 hover:to-orange-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white!" />
              Contact Software Development Experts
            </a>
          </div>
        </div>
      </motion.div >
    </div >
  );
}
