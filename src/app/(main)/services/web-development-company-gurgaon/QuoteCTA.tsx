import { Sparkles } from "lucide-react";
import { Button } from "./Button";

// components/QuoteCTA.tsx
export function QuoteCTA({ scrollToForm }: { scrollToForm: () => void }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mx-auto mt-10 pt-2">
      <Button onClick={scrollToForm} icon={<Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />} variant="secondary">
        Get a Free Quote
      </Button>
    </div>
  );
}