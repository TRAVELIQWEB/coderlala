"use client";

import { ContactFormData } from "@/app/components/ContactForm";
import { createContext, useContext, useState, ReactNode } from "react";

interface ContactFormContextType {
  globalContactForm: ContactFormData | null;
  setGlobalContactForm: (data: ContactFormData) => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [globalContactForm, setGlobalContactForm] = useState<ContactFormData | null>(null);

  return (
    <ContactFormContext.Provider value={{ globalContactForm, setGlobalContactForm }}>
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactFormContext() {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactFormContext must be used within a ContactFormProvider");
  }
  return context;
}