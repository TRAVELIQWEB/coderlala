// components/SectionBadge.tsx
import { ReactNode } from "react";

interface SectionBadgeProps {
  icon?: ReactNode;
  text: string;
  className?: string;
}

export function SectionBadge({
  icon,
  text,
  className = ""
}: SectionBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4 lg:mb-6 ${className}`}>
      {icon && <span className="text-sm">{icon}</span>}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}