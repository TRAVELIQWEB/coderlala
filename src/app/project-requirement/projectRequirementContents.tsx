"use client";

import { useState } from "react";
import { 
  Send, 
  Building, 
  Image as ImageIcon,
  MapPin,
  Phone,
  Mail,
  FileText,
  Code,
  Smartphone,
  Upload,
  X,
  Target,
  Users,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

type FormData = {
  companyName: string;
  companyLogo: File | null;
  companyAddress: string;
  companyPhone: string;
  alternatePhone: string;
  companyEmail: string;
  description: string;
  techStack: string;
};

const initialFormData: FormData = {
  companyName: "",
  companyLogo: null,
  companyAddress: "",
  companyPhone: "",
  alternatePhone: "",
  companyEmail: "",
  description: "",
  techStack: "",
};

export default function ProjectRequirementContents() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, companyLogo: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setFormData(prev => ({ ...prev, companyLogo: null }));
    setLogoPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form Data:", formData);
      
      // Show success message
      alert("🎉 Thank you! Your information has been submitted successfully.\n\nWe'll contact you within 24 hours.");
      
      // Reset form
      setFormData(initialFormData);
      setLogoPreview(null);
      setIsSubmitting(false);
    }, 1500);
  };

  // Check if required fields are filled
  const isFormValid = () => {
    return formData.companyName && 
           formData.companyAddress && 
           formData.companyPhone && 
           formData.companyEmail && 
           formData.description;
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-black/10 dark:border-white/20 mb-6">
          <Target className="w-4 h-4 text-blue-500 dark:text-blue-300" />
          <span className="text-sm font-medium">Company Details</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          <span className="text-transparent bg-clip-text bg-blue-500">
            Share Your
          </span>
          <span className="block text-transparent bg-clip-text  bg-orange-500 ">
            Project Requirements
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl  max-w-3xl mx-auto px-4 sm:px-0">
          Fill in your company information and project details. We'll get back to you with a customized proposal.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl border border-black/10 dark:border-white/10 mb-12 md:mb-16 bg-white/70 dark:bg-white/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "24h", label: "Response Time", icon: CheckCircle, color: "text-blue-500" },
            { value: "100%", label: "Confidential", icon: CheckCircle, color: "text-green-500" },
            { value: "Free", label: "Consultation", icon: CheckCircle, color: "text-orange-500" },
            { value: "Custom", label: "Proposal", icon: CheckCircle, color: "text-purple-500" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm mb-3 ${stat.color}`}>
                <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="text-xl md:text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm ">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-20"
      >
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-2/3"
          >
            <div className=" glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl border border-black/10 dark:border-white/10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Row 1: Company Name & Logo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Company Name */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      <span className="flex items-center gap-3">
                        <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Company Name <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <input
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      className="w-full px-4 py-3 rounded-xl  border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  {/* Company Logo */}
                  <div>
                    <label className="block text-lg font-semibold mb-3">
                      <span className="flex items-center gap-3">
                        <ImageIcon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        Company Logo (Optional)
                      </span>
                    </label>
                    
                    {logoPreview ? (
                      <div className="flex items-center gap-4 p-3 rounded-xl border border-gray-200 dark:border-gray-700 ">
                        <img 
                          src={logoPreview} 
                          alt="Logo preview" 
                          className="w-12 h-12 rounded-lg object-cover border border-gray-300 dark:border-gray-600"
                        />
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 dark:text-gray-300">Logo selected</p>
                        </div>
                        <button
                          type="button"
                          onClick={removeLogo}
                          className="p-2 rounded-lg  transition-colors"
                        >
                          <X className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700  hover:border-blue-500 dark:hover:border-blue-500 transition-colors cursor-pointer">
                        <Upload className="w-5 h-5 text-gray-500" />
                        <span className="">Upload logo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleLogoChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                {/* Company Address */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    <span className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                      Company Address <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <textarea
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    placeholder="Enter your company address"
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                {/* Contact Information */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    <span className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      Contact Information
                    </span>
                  </label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Primary Phone */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Primary Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          name="companyPhone"
                          type="tel"
                          value={formData.companyPhone}
                          onChange={handleChange}
                          placeholder="+91 9876543210"
                          className="w-full pl-10 pr-4 py-3 rounded-lg  border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Alternate Phone */}
                    <div>
                      <label className="block text-sm font-medium  mb-2">
                        Alternate Phone (Optional)
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          name="alternatePhone"
                          type="tel"
                          value={formData.alternatePhone}
                          onChange={handleChange}
                          placeholder="+91 9876543211"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Company Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          name="companyEmail"
                          type="email"
                          value={formData.companyEmail}
                          onChange={handleChange}
                          placeholder="contact@company.com"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-lg font-semibold  mb-3">
                    <span className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      Project Description <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your project idea, goals, requirements, timeline, and any specific details..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                {/* Technology Stack */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    <span className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                      Preferred Technology Stack (Optional)
                    </span>
                  </label>
                  <textarea
                    name="techStack"
                    value={formData.techStack}
                    onChange={handleChange}
                    placeholder="Any specific technologies, frameworks, or platforms you prefer? (e.g., React.js, Node.js, MongoDB, AWS, etc.)"
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <button
                    type="submit"
                    disabled={!isFormValid() || isSubmitting}
                    className={`group relative w-full px-8 py-4 rounded-xl font-bold text-lg
                      flex items-center justify-center gap-3 overflow-hidden transition-all duration-300
                      ${isFormValid() && !isSubmitting
                        ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-xl'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 !text-white" />
                        <span className="!text-white">Submit Company Details</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="inline-block !text-white"
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/3"
          >
            <div className="space-y-6">
              {/* Why Us Card */}
              <div className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-orange-500/10">
                    <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Why Choose Us?
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    "Expert team with 5+ years experience",
                    "100+ projects successfully delivered",
                    "Custom solutions for your business",
                    "Transparent pricing & timeline",
                    "24/7 support & maintenance",
                    "Source code ownership"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10">
                <h3 className="text-lg font-bold  mb-4">
                  Need Immediate Help?
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@coderlala.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium ">Email Us</div>
                      <div className="text-sm ">contact@coderlala.com</div>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                      <Phone className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <div className="font-medium ">Call </div>
                      <div className="text-sm ">+91 98765 43210</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Process Card */}
              <div className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Our Process
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Submit Details", desc: "Fill this form" },
                    { step: "2", title: "Expert Review", desc: "We analyze requirements" },
                    { step: "3", title: "Free Consultation", desc: "Schedule a call" },
                    { step: "4", title: "Get Proposal", desc: "Receive detailed quote" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border-1 text-white flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}