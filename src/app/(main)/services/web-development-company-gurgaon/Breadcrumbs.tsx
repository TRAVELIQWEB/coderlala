// app/components/Breadcrumbs.tsx
'use client';

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="inline-flex items-center gap-1 text-sm text-muted-foreground py-3 px-4 bg-card/50 rounded-lg border border-border/50 mb-4 overflow-x-auto" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors min-w-fit">
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1 min-w-fit">
          <ChevronRight className="w-4 h-4" />
          {item.active ? (
            <span className="text-primary font-medium">{item.label}</span>
          ) : (
            <Link href={item.href || '#'} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}