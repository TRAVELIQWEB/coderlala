"use client";
import { useState } from "react";

// FAQAccordion component: only one open at a time
export function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-1">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="glass-card transition-colors"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 font-semibold text-gray-900 dark:text-white focus:outline-none"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
            aria-controls={`faq-panel-${idx}`}
            type="button"
          >
            <span>{faq.q}</span>
            <span className={`transition-transform ${openIdx === idx ? "rotate-180" : ""}`}>
              <svg className="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
          </button>
          {openIdx === idx && (
            <div id={`faq-panel-${idx}`} className="px-6 pb-5 text-gray-600 dark:text-gray-400 animate-fade-in">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}