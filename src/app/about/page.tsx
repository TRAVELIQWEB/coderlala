import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About CoderLala Technologies | Our Journey, Mission & Vision",
  description:
    "Learn about CoderLala Technologies — our mission, vision, core values, achievements, and global journey in building digital products for enterprises and startups.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">

      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 
            bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 
            bg-gradient-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <AboutContent />
      </div>

    </div>
  );
}
