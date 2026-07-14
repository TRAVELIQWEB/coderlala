// app/components/FinalCTA.tsx
'use client';

import { Phone, Sparkles, Rocket } from "lucide-react";
import { contactInfo } from "@/data/ContactInfo";
import { Button } from "./Button";

interface FinalCTAProps {
  scrollToForm: () => void;
}

export function FinalCTA({ scrollToForm }: FinalCTAProps) {
  return (
    <section className="max-w-4xl px-4 sm:px-6 lg:px-8 p-6 mt-10 mb-5 sm:p-8 mx-auto rounded-3xl">
      <div className="glass-card max-w-4xl p-4 sm:p-6 lg:p-8 flex flex-col items-center gap-8 text-center">
        <div>
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600 mx-auto mb-4">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Rocket className="relative h-7 w-7 text-white! drop-shadow-md" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-[1.2] mb-4 md:mb-6">
            <span className="text-transparent! bg-clip-text! bg-blue-500!">
              Ready to Transform Your Business
            </span>
            <span className="block! text-[#ff6900]! bg-clip-text! bg-orange-500!">
              with a Leading Development Company?
            </span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
            Let's discuss your project and unlock your business's digital potential with a free, no-obligation quote from Gurgaon's leading technology experts.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            href={`tel:${contactInfo.salmanNizamPhone}`}
            icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white!" />}
            variant="primary"
          >
            Call Now
          </Button>

          <Button
            onClick={scrollToForm}
            icon={<Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white!" />}
            variant="secondary"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}