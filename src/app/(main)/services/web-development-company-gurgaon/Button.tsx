// components/Button.tsx
"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  target?: "_blank" | "_self";
  as?: "button" | "link";
  type?: "button" | "submit" | "reset";
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
}

export function Button({
  onClick,
  href,
  children,
  icon,
  className = "",
  variant = "primary",
  target = "_self",
  as,
  type = "button",
  size = "md", // Default to md
  iconPosition = "left", // Default to left
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-blue-900 shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]",
    secondary: "bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)]",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs sm:px-5 sm:py-2.5",
    md: "px-6 py-3 text-sm sm:px-8 sm:py-4",
    lg: "px-8 py-4 text-base sm:px-10 sm:py-5",
  };

  const iconSizeClasses = {
    sm: "w-3 h-3 sm:w-4 sm:h-4",
    md: "w-4 h-4 sm:w-5 sm:h-5",
    lg: "w-5 h-5 sm:w-6 sm:h-6",
  };

  const buttonInner = (
    <>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
      {iconPosition === "left" && icon && <span className="group-hover:scale-110 transition-transform">{icon}</span>}
      <span className="relative text-white! text-sm sm:text-base">{children}</span>
      {iconPosition === "right" && icon && <span className="group-hover:scale-110 transition-transform">{icon}</span>}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-blue-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </>
  );

  const buttonClasses = `group relative rounded-xl text-white! font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-2 sm:gap-3 overflow-hidden ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // If 'as' is explicitly set to 'link' or href is provided and as is not 'button'
  if (as === "link" || (href && as !== "button")) {
    return (
      <Link href={href || "#"} target={target} className={buttonClasses} aria-label={typeof children === 'string' ? children : 'Button'}>
        {buttonInner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses} aria-label={typeof children === 'string' ? children : 'Button'} >
      {buttonInner}
    </button>
  );
}