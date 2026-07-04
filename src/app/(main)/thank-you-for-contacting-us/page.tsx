"use client";

import Link from "next/link";
import { contactInfo } from "@/data/ContactInfo";
import { useSearchParams } from "next/navigation";
import { CheckCircle, ArrowRight, Clock, Mail, Home, Sparkles, MessageCircle, Phone, Check, CheckCheckIcon } from "lucide-react";
import { Button } from "../services/web-development-company-gurgaon/Button";

export default function ThankYouPage() {
  const params = useSearchParams();
  const name = params.get("name") || "there";
  const email = params.get("email") || "";

  return (
    <div className="min-h-screen flex md:items-center justify-center p-3 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-green-800/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-blue-800/5 blur-3xl" />

      <div className="w-full max-w-md mt-12 md:mt-0 p-1 rounded-2xl bg-background-gradient relative">
        <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <div className="text-center mb-10">
            {/* Icon with Pulse Animation */}
            <div className="relative inline-flex items-center justify-center mb-4">
              <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
              <div className="relative inline-flex p-5 rounded-full bg-green-600 border-2 border-green-500 shadow-lg shadow-green-500/30">
                <CheckCheckIcon className="w-12 h-12 text-white!" />
              </div>
            </div>

            {/* Title */}
            <h1 className="font-bold mb-2 text-2xl sm:text-3xl text-primary">
              Thank You, {name}!
            </h1>

            {/* Description */}
            <p className="text-primary/80 mb-1 text-sm sm:text-base">
              We've received your message successfully.
            </p>
            <p className="text-color-muted text-xs sm:text-sm mb-4">
              Our team will respond within 24 hours.
            </p>

            {/* Email Confirmation */}
            {email && (
              <div className="inline-flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border/50 mb-4">
                <Mail className="w-3.5 h-3.5 text-color-muted" />
                <span className="text-color-muted text-xs">
                  Confirmation sent to{" "}
                  <span className="text-primary font-bold">{email}</span>
                </span>
              </div>
            )}

            {/* Next Steps Section */}
            <div className="bg-background rounded-xl p-4 mb-4 text-left border border-border/50">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                What Happens Next?
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <p className="text-sm text-primary/70">
                    We review your message and requirements
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <p className="text-sm text-primary/70">
                    An expert will contact you via email or phone
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <p className="text-sm text-primary/70">
                    We discuss your project in detail
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                href="/"
                icon={<Home className="w-4 h-4 sm:w-5 sm:h-5" />}
                variant="secondary"
                size="sm"
              >
                Back to Home
              </Button>

            </div>

            {/* Contact Support */}
            <div className="p-4 absolute bottom-0 left-0 right-0 bg-green-700 rounded-b-2xl border-t border-border/30">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-white!" />
                <span className="font-medium text-white!">WhatsApp us at:</span>
                <Link
                  href={`https://wa.me/${contactInfo.salmanNizamPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white! font-bold hover:underline"
                >
                  +91-{contactInfo.salmanNizamPhone}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}