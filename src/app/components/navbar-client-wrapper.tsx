// app/components/navbar-client-wrapper.jsx or .tsx
"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./navbar"), {
  ssr: false,
  loading: () => <div className="h-16 bg-transparent" />, // Optional loading fallback
});

export default function NavbarClientWrapper() {
  return <Navbar />;
}