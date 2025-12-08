"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/90 border-b border-black/10" />
    );
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/90 dark:bg-black/40 border-b border-black/10 dark:border-white/10 transition-colors">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold gradient-text text-xl">
          CoderLala
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          {/* <Link href="/blog">Blog</Link> */}
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
          <ThemeToggle />
        </div>

        <button
          className="md:hidden px-3 py-1 rounded-lg bg-white/10 border border-white/20"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/50 dark:bg-black/70 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-4">
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          {/* <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link> */}
          <Link href="/careers" onClick={() => setOpen(false)}>Careers</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
