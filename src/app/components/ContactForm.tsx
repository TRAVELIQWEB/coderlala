"use client";

import { useState, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Send,
  AlertCircle,
  Check,
  X
} from "lucide-react";
import { submitContact } from "@/services/contact.service";

// Types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  budget: string;
  message: string;
  pageUrl?: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  submitButtonText?: string;
  showCompanyField?: boolean;
  showPhoneField?: boolean;
  showBudgetField?: boolean;
  className?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  size?: 'sm' | 'md' | 'lg'; // Input size
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  budget: string;
  company: string;
  message: string;
}

interface FormTouched {
  name: boolean;
  email: boolean;
  phone: boolean;
  budget: boolean;
  company: boolean;
  message: boolean;
}

// Budget options
const BUDGET_OPTIONS = [
  "Less than ₹25,000",
  "₹25,000 - ₹100,000",
  "₹100,000 - ₹500,000",
  "₹500,000+",
  "(Skip) Not sure yet"
];

// ✅ Use forwardRef to accept ref
const ContactForm = forwardRef<HTMLInputElement | null, ContactFormProps>(
  ({
    onSubmit,
    submitButtonText = "Send Message",
    showCompanyField = true,
    showPhoneField = true,
    showBudgetField = true,
    className = "",
    onSuccess,
    onError,
    size = 'md',
    ...props
  }, ref) => {
    // Form state
    const [form, setForm] = useState<ContactFormData>({
      name: "",
      email: "",
      company: "",
      phone: "",
      budget: "",
      message: "",
      pageUrl: ""
    });
    // Validation state
    const [errors, setErrors] = useState<FormErrors>({
      name: "",
      email: "",
      company: "",
      phone: "",
      budget: "",
      message: ""
    });

    const [touched, setTouched] = useState<FormTouched>({
      name: false,
      email: false,
      company: false,
      phone: false,
      budget: false,
      message: false
    });

    // UI state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();

    // Size configurations
    const sizeConfig = {
      sm: {
        padding: 'px-2 py-1.5 sm:px-3 sm:py-2',
        text: 'text-xs sm:text-sm',
        buttonPadding: 'px-4 py-2 sm:px-6 sm:py-3',
        buttonText: 'text-xs sm:text-sm',
        iconSize: 'w-3 h-3 sm:w-4 sm:h-4',
        label: 'text-xs sm:text-sm',
        gap: 'gap-1 sm:gap-2',
        radioPadding: 'px-2 py-1.5 text-xs',
        radioGap: 'gap-1',
        modalPadding: 'p-4 sm:p-6',
        modalTitle: 'text-xl sm:text-2xl',
        modalText: 'text-sm sm:text-base',
      },
      md: {
        padding: 'px-3 py-2 sm:px-4 sm:py-3',
        text: 'text-sm sm:text-base',
        buttonPadding: 'px-6 py-3 sm:px-8 sm:py-4',
        buttonText: 'text-sm sm:text-base',
        iconSize: 'w-4 h-4 sm:w-5 sm:h-5',
        label: 'text-sm sm:text-base',
        gap: 'gap-2 sm:gap-3',
        radioPadding: 'p-2 text-xs sm:text-sm',
        radioGap: 'gap-1',
        modalPadding: 'p-6 sm:p-8',
        modalTitle: 'text-2xl sm:text-3xl',
        modalText: 'text-sm sm:text-base',
      },
      lg: {
        padding: 'px-4 py-3 sm:px-6 sm:py-4',
        text: 'text-base sm:text-lg',
        buttonPadding: 'px-8 py-4 sm:px-10 sm:py-5',
        buttonText: 'text-base sm:text-lg',
        iconSize: 'w-5 h-5 sm:w-6 sm:h-6',
        label: 'text-base sm:text-lg',
        gap: 'gap-3 sm:gap-4',
        radioPadding: 'p-2 text-sm sm:text-base',
        radioGap: 'gap-1',
        modalPadding: 'p-8 sm:p-10',
        modalTitle: 'text-3xl sm:text-4xl',
        modalText: 'text-base sm:text-lg',
      }
    };

    const styles = sizeConfig[size];

    // Validation functions
    const validateField = (name: keyof FormErrors, value: string): string => {
      let error = "";

      switch (name) {
        case "name":
          if (!value.trim()) error = "Name is required";
          else if (value.trim().length < 2) error = "Name must be at least 2 characters";
          break;

        case "email":
          if (value.trim() && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            error = "Please enter a valid email address";
          }
          break;

        case "phone":
          if (!value.trim()) error = "Phone number is required";
          else if (!/^[0-9]{10}$/.test(value.replace(/\D/g, ''))) {
            error = "Phone number must be exactly 10 digits";
          }
          break;

        case "budget":
          // Budget is optional - no validation
          break;

        case "company":
          // Company is optional - no validation
          break;

        case "message":
          if (value.trim() && value.trim().length < 10) {
            error = "Please provide more details (at least 10 characters)";
          }
          break;
      }

      return error;
    };


    useEffect(() => {
      setForm(prev => ({
        ...prev,
        pageUrl: window.location.href,
      }));
    }, []);

    // Validate all fields
    const validateForm = (): boolean => {
      const newErrors: FormErrors = {
        name: validateField("name", form.name),
        email: validateField("email", form.email),
        phone: validateField("phone", form.phone),
        budget: validateField("budget", form.budget),
        company: validateField("company", form.company),
        message: validateField("message", form.message)
      };

      setErrors(newErrors);

      // Return true if no errors
      return !Object.values(newErrors).some(error => error !== "");
    };


    // Handle field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      let formattedValue = value;

      // Format phone number - only allow digits and limit to 10
      if (name === "phone") {
        formattedValue = value.replace(/\D/g, '').slice(0, 10);
      }

      setForm(prev => ({ ...prev, [name]: formattedValue }));

      // Validate field if it has been touched
      if (touched[name as keyof FormTouched]) {
        const error = validateField(name as keyof FormErrors, formattedValue);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    };

    // Handle blur
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = e.target;
      setTouched(prev => ({ ...prev, [name]: true }));

      // Validate the field
      const error = validateField(name as keyof FormErrors, (form[name as keyof ContactFormData] ?? "") as string);
      setErrors(prev => ({ ...prev, [name]: error }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const allTouched: FormTouched = {
        name: true, email: true, phone: true, budget: true, message: true, company: true
      };
      setTouched(allTouched);

      if (!validateForm()) {
        const firstErrorField = Object.keys(errors).find(key =>
          errors[key as keyof FormErrors] && touched[key as keyof FormTouched]
        );
        if (firstErrorField) {
          const element = document.getElementsByName(firstErrorField)[0];
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.focus();
          }
        }
        return;
      }

      setIsSubmitting(true);

      try {
        if (onSubmit) {
          await onSubmit(form);
        } else {
          await submitContact(form);
        }
        sessionStorage.setItem(
          "contact-success",
          JSON.stringify({
            name: form.name,
            email: form.email,
          })
        );

        setIsSubmitting(false);
        setIsRedirecting(true); // 👈 keep loader showing during redirect

        onSuccess?.();

        router.push(`/thank-you-for-contacting-us`);

      } catch (error: any) {
        setIsSubmitting(false);
        setErrorMessage(error.message || "Something went wrong. Please try again.");
        setShowErrorModal(true);
        if (onError) onError(error.message);
      }
    };

    const closeErrorModal = () => {
      setShowErrorModal(false);
      setErrorMessage("");
    };

    // Helper functions
    const isFieldValid = (fieldName: keyof FormTouched): boolean => {
      if (fieldName === 'company') {
        return touched[fieldName] && form.company.trim().length > 0;
      }
      if (fieldName === 'message') {
        return touched[fieldName] && form.message.trim().length > 0 && !errors[fieldName];
      }
      if (fieldName === 'email') {
        return touched[fieldName] && form.email.trim().length > 0 && !errors[fieldName];
      }
      if (fieldName === 'budget') return false;
      return touched[fieldName] && !errors[fieldName];
    };

    const hasError = (fieldName: keyof FormTouched): boolean => {
      if (fieldName === 'company' || fieldName === 'budget') return false;
      return touched[fieldName] && !!errors[fieldName];
    };

    const getFieldError = (fieldName: keyof FormTouched): string => {
      return errors[fieldName] || "";
    };

    const isRequired = (fieldName: keyof FormTouched): boolean => {
      return ['name', 'phone'].includes(fieldName);
    };

    // Render input field
    const renderInput = (
      name: keyof FormTouched,
      label: string,
      type: string = "text",
      placeholder: string = "",
      maxLength?: number
    ) => {
      const isPhone = name === 'phone';
      const isTextarea = type === 'textarea';
      const isCompany = name === 'company';
      const required = isRequired(name);
      const showValidation = touched[name] && ((isCompany || name === 'message') ? form[name].trim().length > 0 : name !== 'budget');
      const showError = hasError(name);
      const showCheck = isFieldValid(name);

      return (
        <div>
          <label htmlFor={name} className={`block font-medium mb-1! ${styles.label}`}>
            {label} {required && <span className="text-red-500!">*</span>}
          </label>
          <div className="relative">
            {isTextarea ? (
              <textarea
                id={name}
                name={name}
                required={required}
                value={form[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
                rows={4}
                className={`w-full ${styles.padding} rounded-md
                bg-white/5 border transition-colors ${styles.text} pr-10 resize-none
                ${showError ? 'border-red-500! focus:border-red-500!' :
                    showCheck ? 'border-green-500! focus:border-green-500!' :
                      'border-border!'}
                focus:outline-none`}
              />
            ) : (
              <input
                id={name}
                {...props}
                type={type}
                name={name}
                required={required}
                value={form[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
                maxLength={maxLength}
                // ✅ Pass ref to the first input (name field)
                ref={name === 'name' ? ref : undefined}
                className={`w-full ${styles.padding} rounded-md
                ${isPhone ? 'pl-10!' : ''}
                bg-white/5 border transition-colors ${styles.text} pr-10
                ${showError ? 'border-red-500! focus:border-red-500!' :
                    showCheck ? 'border-green-500! focus:border-green-500!' :
                      'border-border!'}
                focus:outline-none`}
              />
            )}

            {isPhone && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 text-sm font-medium">
                +91
              </div>
            )}

            {showValidation && !isTextarea && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {showError ? (
                  <X className="w-5 h-5 text-red-500" />
                ) : showCheck ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : null}
              </div>
            )}

            {showValidation && isTextarea && (
              <div className="absolute right-3 top-3">
                {showError ? (
                  <X className="w-5 h-5 text-red-500" />
                ) : showCheck ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : null}
              </div>
            )}

            {isPhone && form.phone && (
              <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-primary/40! text-xs">
                {form.phone.length}/10
              </div>
            )}
          </div>

          {showError && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {getFieldError(name)}
            </motion.p>
          )}

          {!showError && isPhone && form.phone && form.phone.length < 10 && form.phone.length > 0 && (
            <p className="text-orange-400 text-xs mt-1">
              Enter {10 - form.phone.length} more digit{10 - form.phone.length !== 1 ? 's' : ''}
            </p>
          )}

          {!showError && name === 'message' && form.message && (
            <p className={`text-xs mt-1 ${form.message.length < 10 ? 'text-orange-400' : 'text-green-400'}`}>
              {form.message.length} characters (minimum 10 if provided)
            </p>
          )}
        </div>
      );
    };

    return (
      <>
        {/* Full-screen loader while submitting or redirecting */}
        {(isSubmitting || isRedirecting) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background backdrop-blur-sm">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-linear-to-br from-orange-500/20 to-orange-600/20 mb-4">
                <div className="w-12 h-12 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
              </div>
              <h3 className="font-bold mb-2 text-xl sm:text-2xl">
                {isSubmitting ? "Processing..." : "Almost There!"}
              </h3>
              <p className="text-white/70 text-sm sm:text-base">
                {isSubmitting
                  ? "Kindly wait while we send your message."
                  : "Redirecting you to the confirmation page..."}
              </p>
            </div>
          </div>
        )}

        {/* Error Modal */}
        <AnimatePresence>
          {showErrorModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={closeErrorModal}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-md z-10"
              >
                <div className="absolute -inset-0.5 bg-linear-to-r from-red-500 to-orange-600 rounded-2xl blur opacity-60" />
                <div className={`relative glass-card ${styles.modalPadding} rounded-2xl backdrop-blur-xl border border-white/10`}>
                  <button
                    onClick={closeErrorModal}
                    className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-white/70!" />
                  </button>

                  <div className="text-center">
                    <div className="inline-flex p-3 rounded-full bg-linear-to-br from-red-500/20 to-orange-600/20 mb-4">
                      <AlertCircle className="w-12 h-12 text-red-400" />
                    </div>

                    <h3 className={`font-bold mb-2 ${styles.modalTitle}`}>Oops! Something Went Wrong</h3>
                    <p className={`text-white/80 mb-6 ${styles.modalText}`}>{errorMessage}</p>

                    <button
                      onClick={closeErrorModal}
                      className="w-full text-white! py-3 rounded-xl bg-linear-to-r from-red-500 to-orange-600 
                    hover:from-red-600 hover:to-orange-700 
                    transition-all duration-300 font-semibold"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Form — hidden while processing/redirecting */}
        {!isSubmitting && !isRedirecting && (
          <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
            <input type="hidden" name="pageUrl" value={form.pageUrl ?? ""} readOnly />

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6`}>
              {renderInput('name', 'Full Name', 'text', 'John Doe')}
              {renderInput('phone', 'Phone Number', 'tel', '9876543210', 10)}
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6`}>
              {showCompanyField && renderInput('company', 'Company Name', 'text', 'Your company')}
              {renderInput('email', 'Email Address', 'email', 'example@gmail.com')}
            </div>

            {showBudgetField && (
              <div>
                <label className={`block font-medium mb-1! ${styles.label}`}>
                  Project Budget
                </label>
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${styles.radioGap}`}>
                  {BUDGET_OPTIONS.map((option, i) => (
                    <label key={i} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={form.budget === option}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div
                        className={`w-full ${styles.radioPadding} rounded-md text-center transition-all opacity-80 flex items-center justify-between gap-2
                      ${form.budget === option
                            ? 'bg-blue-500/20 border border-blue-500'
                            : 'bg-white/5 border border-border!'
                          }`}
                      >
                        {option}
                        {form.budget === option && (
                          <div className="flex items-center justify-center w-4 h-4 rounded-full bg-green-500 border border-green-500">
                            <Check className="w-3 h-3 text-white!" />
                          </div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {renderInput('message', 'Project Details', 'textarea', 'Tell us about your project, requirements, and goals...')}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full relative px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-white! font-semibold bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2 sm:gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative text-sm sm:text-base">{submitButtonText}</span>
              <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-blue-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </button>
          </form>
        )}
      </>
    );
  });
// ✅ Set display name for better debugging
ContactForm.displayName = "ContactForm";

export default ContactForm;
