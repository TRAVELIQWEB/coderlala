import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass-card p-6 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}
