// app/mobile-app-development-gurgaon/MobileAppDevelopmentClient.tsx
'use client';

// ============================================================
// SECTION 1: IMPORTS
// ============================================================
import { useEffect, useState } from "react";
import {
  Users,
  Zap,
  Phone,
  Star,
  Sparkles,
  Rocket,
  ShoppingCart,
  Building2,
  Heart,
  Briefcase,
  Quote,
  Smartphone,
  Palette,
  Server,
  Layers,
  AppWindow,
  Cloud,
  Layout,
  Send,
} from "lucide-react";
import { HeadingTitle2, HeroTitleLocation } from "@/app/components/HeroTitle";
import { FAQAccordion } from "../component/ServiceFAQAccordion";
import { FaAws } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiJest,
  SiAppium,
  SiXcode,
  SiAndroidstudio
} from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/app/constants";
// import { generateFAQs, generateFAQSchema } from "./faqs";
import { services } from "@/app/(main)/services/data/services/service";

// import { mobileAppServices } from "@/app/(main)/services/data/services/mobile-app-services";
// import { ServiceCardLocation, ServicesButton } from "@/app/components/services/ServiceCard";
import { contactInfo } from "@/data/ContactInfo";
import { useScrollToForm } from "@/hooks/useScrollToForm";
// import ContactForm from "../web-development-company-gurgaon/ContactForm";
import { generateFAQs, generateFAQSchema } from "./faqs"; // Keep this as it is local
import Breadcrumbs from "../component/location/Breadcrumbs"; // Change to local import
import { Button, QuoteCTA } from "../component/location/Button"; // Change to local import
// import { QuoteCTA } from "../component/location/QuoteCTA"; // Change to local import
import { SectionBadge } from "../component/location/SectionBadge"; // Change to local import
import ServiceProcessSection from "./ServiceProcessSection";
import ContactForm from "@/app/components/ContactForm";
import { FinalCTA } from "../component/location/FinalCTA";
import { SliderBadge } from "../component/location/SliderBadge";
import ClientLogoSlider from "../component/location/ClientLogoSlider";
import ServiceCard from "../component/location/FeatureCard";

// ============================================================
// SECTION 2: CONSTANTS & CONFIGURATION
// ============================================================
const CITY = "Gurgaon";
const CITY_SLUG = "gurgaon";
const HERO_TAGS = ["iOS & Android Apps", "Cross-Platform", "UI/UX Design", "App Store Launch"];
const Related_Services = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Custom SaaS Development",
    desc: "Scalable, multi-tenant SaaS platforms with subscription management and seamless user experiences.",
    iconBg: "bg-blue-500"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "B2B SaaS Solutions",
    desc: "Enterprise-grade B2B platforms with team collaboration, role-based access, and advanced analytics.",
    iconBg: "bg-indigo-500"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "B2C SaaS Products",
    desc: "Consumer-focused SaaS applications with intuitive interfaces and engaging user experiences.",
    iconBg: "bg-purple-500"
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "SaaS E-Commerce",
    desc: "Feature-rich SaaS e-commerce solutions with multi-vendor support and subscription billing.",
    iconBg: "bg-orange-500"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "API-First Architecture",
    desc: "Scalable API-first SaaS architectures with microservices and real-time data synchronization.",
    iconBg: "bg-teal-500"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "SaaS UI/UX Design",
    desc: "User-centric SaaS design focused on intuitive workflows and delightful user experiences.",
    iconBg: "bg-violet-500"
  }
];


// ============================================================
// SECTION 3: OFFICE & CONTACT INFORMATION
// ============================================================
const OFFICE = {
  address: contactInfo.websiteAddress,
  phone: contactInfo.salmanNizamPhone,
  email: contactInfo.email,
  mapUrl: contactInfo.mapLocationLink
};

// ============================================================
// SECTION 4: INDUSTRIES DATA
// ============================================================
const INDUSTRIES = [
  { name: "Startups", icon: Rocket },
  { name: "Healthcare", icon: Heart },
  { name: "Education", icon: GraduationCap },
  { name: "Real Estate", icon: Building2 },
  { name: "FinTech", icon: Briefcase },
  { name: "E-Commerce", icon: ShoppingCart },
];

// ============================================================
// SECTION 5: TESTIMONIALS DATA
// ============================================================
const testimonials = [
  {
    name: "Ravinder",
    role: "Founder",
    company: "SkyYogaShala",
    text: "CoderLala built a beautiful mobile app for our yoga platform. The app is smooth, intuitive, and our students love the seamless class booking experience.",
    rating: 5,
    image: "RV",
    color: "from-blue-500 to-teal-500",
  },
  {
    name: "Dr. (Maj) Chander Prakash",
    role: "Founder & Chief Dentist",
    company: "Kreative Dentistry",
    text: "The mobile app CoderLala developed for our clinic has transformed how we manage appointments. Patients find it incredibly easy to book and manage their visits.",
    rating: 3,
    image: "CP",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Dr. Sringari",
    role: "Medical Director",
    company: "Polaris Hospitals",
    text: "Our hospital app has made patient engagement seamless. The team at CoderLala understood our requirements perfectly and delivered a robust solution.",
    rating: 5,
    image: "DS",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Zahid Malik",
    role: "Founder",
    company: "RangRoganWala",
    text: "The mobile app for our painting services allows customers to browse our work and request quotes instantly. It's been a game-changer for our business.",
    rating: 3,
    image: "ZM",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Poonam Agrawal",
    role: "Co-Founder",
    company: "RiPRAP Health",
    text: "Our health & wellness app needed to be trustworthy and user-friendly. CoderLala delivered an exceptional product that our users love.",
    rating: 4,
    image: "PA",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Solutions",
    text: "CoderLala's mobile app development expertise is outstanding. They delivered a high-quality app that has significantly improved our customer engagement.",
    rating: 4,
    image: "SJ",
    color: "from-cyan-500 to-blue-500",
  },
];

// ============================================================
// SECTION 6: TECH STACK DATA
// ============================================================
const techStack = [
  { name: "React Native", icon: SiReact, color: "text-cyan-500" },
  { name: "Flutter", icon: SiFlutter, color: "text-blue-500" },
  { name: "Kotlin", icon: SiKotlin, color: "text-purple-600" },
  { name: "Swift", icon: SiSwift, color: "text-orange-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "Express", icon: SiExpress, color: "text-black! dark:text-white" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Xcode", icon: SiXcode, color: "text-blue-500" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-500" },
  { name: "Jest", icon: SiJest, color: "text-red-600" },
  { name: "Appium", icon: SiAppium, color: "text-purple-500" },
];

// ============================================================
// SECTION 7: HELPER COMPONENT - GraduationCap Icon
// ============================================================
function GraduationCap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

// ============================================================
// SECTION 8: MOBILE APP DEVELOPMENT SERVICES DATA
// ============================================================
const MOBILE_SERVICES = [
  {
    icon: Smartphone,
    title: "iOS App Development",
    desc: "We build high-performance iOS applications using Swift and SwiftUI, delivering seamless user experiences optimized for Apple's ecosystem. Our iOS apps are designed to leverage the full potential of iPhone and iPad devices.",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    icon: AppWindow,
    title: "Android App Development",
    desc: "As a premier mobile app development company in Gurgaon, we create robust Android applications using Kotlin and Java, optimized for performance across all Android devices and versions.",
    accent: "from-green-500 to-emerald-600",
  },
  {
    icon: Layers,
    title: "Cross-Platform App Development",
    desc: "We specialize in React Native and Flutter cross-platform development, delivering consistent, high-performance apps for both iOS and Android with a single codebase.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Mobile Apps",
    desc: "Feature-rich shopping apps with secure payment gateways, personalized recommendations, real-time order tracking, and seamless checkout experiences for your customers.",
    accent: "from-orange-400 to-orange-600",
  },
  {
    icon: Server,
    title: "App Backend & API Development",
    desc: "Robust backend solutions with Node.js, Python, and cloud infrastructure to power your mobile applications with scalable, secure, and high-performance APIs.",
    accent: "from-teal-400 to-emerald-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design for Mobile",
    desc: "User-centric mobile app design with focus on intuitive navigation, engaging interfaces, and delightful user experiences that keep your users coming back.",
    accent: "from-violet-500 to-fuchsia-600",
  },
];

// ============================================================
// SECTION 9: MAIN COMPONENT - MobileAppDevelopmentClient
// ============================================================

export default function MobileAppDevelopmentClient() {
  // ============================================================
  // SECTION 9.1: REFS & STATE MANAGEMENT
  // ============================================================
  const { formRef, inputRef, scrollToForm } = useScrollToForm({
    delay: 650,
    block: "start",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [clientLogoIndex, setClientLogoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ============================================================
  // SECTION 9.2: FAQ GENERATION (Dynamic with CITY)
  // ============================================================
  const faqs = generateFAQs(CITY);
  const faqSchema = generateFAQSchema(faqs);


  // ============================================================
  // SECTION 9.4: EFFECTS - Mobile Detection & Auto-Slides
  // ============================================================

  // 9.4.1: Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 9.4.2: Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      const totalItems = testimonials.length;
      const itemsPerPage = isMobile ? 2 : 3;
      const maxIndex = totalItems - itemsPerPage;

      setActiveIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + itemsPerPage;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const averageRating =
    testimonials.reduce((sum, t) => sum + Number(t.rating), 0) /
    testimonials.length;

  const getVisibleTestimonials = () => {
    const itemsPerPage = isMobile ? 2 : 3;
    const end = Math.min(activeIndex + itemsPerPage, testimonials.length);
    return testimonials.slice(activeIndex, end);
  };

  const visibleTestimonials = getVisibleTestimonials();
  const totalPages = Math.ceil(testimonials.length / (isMobile ? 2 : 3));
  const currentPage = Math.floor(activeIndex / (isMobile ? 2 : 3));

  // ============================================================
  // SECTION 9.6: SCHEMA MARKUP - Organization & ProfessionalService
  // ============================================================
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `CoderLala - Best Mobile App Development Company in ${CITY}`,
    image: "https://coderlala.com/logo/CoderLalaLogoDark.svg",
    url: `https://coderlala.com/mobile-app-development-${CITY_SLUG}`,
    telephone: OFFICE.phone,
    email: OFFICE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE.address,
      addressLocality: CITY,
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: String(contactInfo.latitude), longitude: String(contactInfo.longitude) },

    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:30",
    },
    areaServed: { "@type": "AdministrativeArea", name: CITY },
    description: `CoderLala is a leading mobile app development company in ${CITY} offering custom iOS, Android, and cross-platform app development.`,
    priceRange: "₹300000 - ₹7000000",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile App Development Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1), // e.g. 4.9
      reviewCount: testimonials.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating.toString(),
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.text,
    })),
  };

  // ============================================================
  // SECTION 10: COMPONENT RETURN - JSX
  // ============================================================
  return (
    <>
      {/* ============================================================
      SECTION 10.1: SCHEMA SCRIPTS (Structured Data)
      ============================================================ */}

      {/* 10.1.1: Organization & ProfessionalService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* 10.1.2: BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://coderlala.com",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Mobile App Development Company in Gurgaon",
                "item": `https://coderlala.com/mobile-app-development-${CITY_SLUG}`,
              },
            ],
          }),
        }}
      />

      {/* 10.1.3: FAQ Schema - Auto-generated from FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ============================================================
      SECTION 10.2: MAIN PAGE WRAPPER
      ============================================================ */}
      <div className="relative text-foreground selection:bg-blue-500 selection:text-foreground">

        {/* ============================================================
        SECTION 10.3: HERO SECTION (H1)
        ============================================================ */}
        <header className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-mesh" />
          <div className="absolute inset-0 bg-grid-dots opacity-40" />
          <div className="absolute top-32 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px] animate-float" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-cyan-400/15 blur-[100px] animate-float" style={{ animationDelay: "4s" }} />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7 space-y-7">
              {/* Breadcrumbs */}
              <Breadcrumbs
                items={[
                  { label: "Mobile App Development in Gurgaon", active: true },
                ]}
              />

              {/* H1 Title */}
              <HeroTitleLocation
                title1="Best Mobile App Development"
                title2={`Company in ${CITY}`}
              />

              {/* Hero Description */}
              <p className="text-muted-foreground text-md lg:pr-10">
                <strong className="text-brand">CoderLala</strong> is the premier <strong className="text-brand">mobile app development company in {CITY}</strong>,
                headquartered at <strong className="text-brand">JMD Megapolis, Sector 48, Gurugram</strong>,
                serving businesses across Gurgaon, Noida, Delhi NCR and beyond.

                <br /><br />

                As a trusted <strong>mobile app development agency in Gurgaon</strong>, we leverage cutting-edge technologies
                like <strong className="text-brand">React Native,</strong> <strong className="text-brand">Flutter, </strong>
                <strong className="text-brand">Swift</strong> and <strong className="text-brand">Kotlin </strong>
                to build high-performance mobile applications.

                <br /><br />

                Whether you're a startup in Cyber City, an enterprise in Udyog Vihar, or a business near MG Road,
                our local team is ready to help you succeed with custom mobile solutions tailored to your needs.
              </p>

              {/* Tags/Badges */}
              <SliderBadge tags={HERO_TAGS} />

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Call Now Button */}
                <Button
                  href={`tel:${contactInfo.salmanNizamPhone}`}
                  icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                  variant="primary"
                >
                  Call Now
                </Button>

                <Button
                  onClick={scrollToForm}
                  icon={<Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />}
                  variant="secondary"
                >
                  Get a Free Quote
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
                {[
                  { k: "15+", v: "Apps Delivered" },
                  { k: "12+", v: "Happy Clients" },
                  { k: "98%", v: "Retention Rate" },
                  { k: "4.8 ★", v: "Client Rating" },
                ].map((s) => (
                  <div key={s.v} className="group grid place-items-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-extrabold text-coder-grad group-hover:scale-105 transition-transform">{s.k}</h3>
                    <p className="text-muted-foreground text-sm">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div
              ref={formRef}
              id="quote-form"
              className="relative lg:col-span-5 scroll-mt-28"
            >
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-blue-400/20 via-indigo-400/15 to-cyan-400/20 blur-2xl dark:from-blue-500/15 dark:to-indigo-500/15"></div>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-xl">
                <div className="h-1 w-full bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500"></div>
                <div className="p-6">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold tracking-tight text-primary">
                      🚀 Submit Your App Idea — Gurgaon's #1 Mobile App Development Agency
                    </h3>
                    <p className="text-muted-foreground text-sm mt-4">
                      Share your mobile app vision and get a free, personalized roadmap from
                      Gurgaon's app development experts. No hidden costs.
                    </p>
                    <div className="mt-5 h-px w-full border-border border-t"></div>
                  </div>
                  <ContactForm size={'sm'} ref={inputRef} />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ============================================================
        SECTION 10.4: CLIENT LOGOS SECTION (H2)
        ============================================================ */}
        <section className="py-20 border-y border-border bg-linear-to-b from-card/60 to-background/40 text-center overflow-hidden">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4 lg:mb-6">
              <Users className="w-4 h-4 text-blue-500 dark:text-blue-300" />
              <span className="text-sm font-medium">
                Our Trusted Clients
              </span>
            </div>
          </div>

          <HeadingTitle2 title1="Companies That" title2="Trust Our Mobile Solutions" />

          <p className="text-muted-foreground text-md mb-10 max-w-4xl px-4 mx-auto">
            As a trusted <strong>Mobile App Development Company in Gurgaon</strong>, we help startups, SMEs, and enterprises build innovative mobile applications that drive user engagement, streamline operations, and accelerate business growth.<br /><br />
            Our experienced team combines creativity, technology, and innovation to deliver high-quality mobile apps that provide exceptional user experiences and support long-term business success.
          </p>

          <ClientLogoSlider />

          {/* Button to explore all services */}
          <div className="flex gap-4 justify-center items-center mt-10 mx-auto">
            <QuoteCTA scrollToForm={scrollToForm} />
          </div>

        </section>

        {/* ============================================================
        SECTION 10.5: ABOUT CODERLALA SECTION (H2)
        ============================================================ */}
        <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - About Content */}
              <div>
                <SectionBadge
                  text="⭐ Trusted by 500+ Businesses Across India"
                />
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6 flex flex-col">
                  <span className="text-transparent! bg-clip-text! bg-blue-500!">
                    About CoderLala
                  </span>
                  <span className="block! text-[#ff6900]! bg-clip-text! bg-orange-500!">
                    Mobile App Development Experts
                  </span>
                </h2>

                <p className="text-muted-foreground text-md mb-4 max-w-3xl mx-auto">
                  CoderLala is a leading <strong>mobile app development company in Gurgaon </strong>
                  helping startups, SMEs, and enterprises build innovative mobile applications
                  that drive user engagement and business growth.
                  <br /><br />From iOS and Android apps to cross-platform solutions,
                  we create mobile experiences designed to increase engagement,
                  streamline operations, and accelerate digital transformation.
                </p>

                <p className="text-muted-foreground text-md mb-10 max-w-3xl mx-auto">
                  Our experienced developers specialize in modern mobile technologies including
                  React Native, Flutter, Swift, Kotlin, and Node.js backend development.
                  Every app is optimized for performance, user experience, and scalability
                  to help your business succeed in the mobile-first world.
                </p>

                {/* Feature List */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2">✅ iOS App Development</div>
                  <div className="flex items-center gap-2">✅ Android App Development</div>
                  <div className="flex items-center gap-2">✅ Cross-Platform Apps</div>
                  <div className="flex items-center gap-2">✅ App UI/UX Design</div>
                  <div className="flex items-center gap-2">✅ App Store Launch</div>
                  <div className="flex items-center gap-2">✅ App Maintenance & Support</div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* Call Now Button */}
                  <Button
                    href={`tel:${contactInfo.salmanNizamPhone}`}
                    icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                    variant="primary"
                  >
                    Call Now
                  </Button>

                  <Button
                    onClick={scrollToForm}
                    icon={<Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />}
                    variant="secondary"
                  >
                    Get a Free Quote
                  </Button>
                </div>
              </div>

              {/* Right Column - Office Image */}
              <div className="relative">
                <Image
                  src="/images/premium-mobile-app-development-gurgaon-office-team.webp"
                  alt="Professional mobile app development team at CoderLala office in Gurgaon working on client projects"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                  quality={85}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />

                {/* Stats Overlay */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mt-5">
                  {[
                    { k: "15+", v: "Apps Delivered" },
                    { k: "12+", v: "Industries Served" },
                    { k: "98%", v: "Client Retention" },
                    { k: "4.8★", v: "Rating" },
                  ].map((s) => (
                    <div key={s.v} className="group grid place-items-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-2xl font-extrabold text-coder-grad group-hover:scale-105 transition-transform">{s.k}</h3>
                      <p className="text-muted-foreground text-sm">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
        SECTION 10.6: WHY CHOOSE US SECTION (H2)
        ============================================================ */}
        <section className="py-20 border-y border-border bg-linear-to-b from-card/60 to-background/40 text-center overflow-hidden">
          <SectionBadge icon={<Star className="w-4 h-4 text-yellow-400" />} text="Why Choose Us?" />
          <div className="max-w-7xl mx-auto px-6">
            <HeadingTitle2
              title1="Why Choose CoderLala"
              title2="as Your Mobile App Development Partner?"
            />

            <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
              At CoderLala, we combine technical excellence with local expertise to deliver world-class mobile applications tailored to businesses in Gurgaon and Delhi NCR. Our team of skilled developers leverages cutting-edge technologies including React Native, Flutter, Swift, and Kotlin to build fast, secure, and scalable mobile apps. <br /><br />We understand the local business landscape and create digital solutions that drive real results—increased user engagement, higher retention, and sustainable growth. With 15+ successful projects and 98% client satisfaction, we're the trusted mobile app development partner for businesses of all sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Reason 1: Cutting-Edge Technology */}
              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-blue-500 to-indigo-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Smartphone className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Cutting-Edge Technology</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  We use the latest frameworks like React Native and Flutter to build high-performance mobile apps
                </p>
              </div>

              {/* Reason 2: Local Gurgaon Expertise */}
              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-orange-500 to-orange-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-orange-500 to-orange-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Users className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Local Gurgaon Expertise</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Based in Sector 48, we understand the local business landscape and needs
                </p>
              </div>

              {/* Reason 3: Fast & Reliable Delivery */}
              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-green-500 to-emerald-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-green-500 to-emerald-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Rocket className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Fast & Reliable Delivery</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  We deliver projects on time with 98% client satisfaction rate
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center items-center mt-10 mx-auto">
              <QuoteCTA scrollToForm={scrollToForm} />
            </div>
          </div>
        </section>

        {/* ============================================================
        SECTION 10.7: SERVICES SECTION (H2)
        ============================================================ */}

        <section id="services" className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-linear-to-br from-purple-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-linear-to-tl from-pink-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 blur-3xl rounded-full" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-5xl mx-auto mb-14 space-y-3">
              <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="CoderLala Services" />
              <HeadingTitle2 title1={`Expert Mobile App Development`} title2={`Services in ${CITY}`} />
              <p className="text-muted-foreground text-md max-w-4xl mx-auto">
                From native iOS and Android applications to cross-platform solutions, our <strong className="text-brand">Mobile App Development Company in {CITY}</strong> delivers secure, scalable, and high-performance mobile apps for startups, SMEs, and enterprises. <br /><br />
                We build modern mobile applications using the latest technologies to ensure exceptional user experiences, long-term reliability, and future-ready digital solutions. Explore our comprehensive mobile app development services below to discover how we can help bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
              {Related_Services.map((service, index) => (
                <ServiceCard
                  key={index}
                  index={index}
                  title={service.title}
                  desc={service.desc}
                  icon={service.icon}
                  iconBg={service.iconBg}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto">
              <Button
                href="/services"
                icon={<Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />}
                variant="primary"
                className="min-w-50"
              >
                Explore All Services
              </Button>
              <Button
                onClick={scrollToForm}
                icon={<Send className="w-4 h-4 sm:w-5 sm:h-5" />}
                variant="secondary"
                className="min-w-50"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* ============================================================
        SECTION 10.8: DEVELOPMENT PROCESS SECTION (H2)
        ============================================================ */}
        < section className="py-20 border-y border-border bg-linear-to-b from-card/60 to-background/40 text-center overflow-hidden" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionBadge icon={<Zap className="w-4 h-4 text-blue-500 dark:text-blue-300" />} text="Our Development Process" />
              <HeadingTitle2 title1="How We Transform Your App Idea" title2="Into Powerful Digital Experiences" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                As a leading <strong>Mobile App Development Company in Gurgaon</strong>, we follow a strategic and transparent development process to create high-quality mobile applications that are secure, scalable, and performance-driven.
                <br /><br />
                From understanding your business requirements and designing intuitive user experiences to development, testing, and deployment, every step is carefully executed to deliver reliable digital solutions tailored to your goals.
              </p>
            </div>

            <div className="text-left">
              <ServiceProcessSection />
            </div>
            <div className="flex gap-4 justify-center items-center mt-10 mx-auto">
              <QuoteCTA scrollToForm={scrollToForm} />
            </div>
          </div>
        </section >

        {/* ============================================================
        SECTION 10.9: TECH STACK SECTION (H2)
        ============================================================ */}
        < section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 text-center overflow-hidden" >
          <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="Our Development Approach" />
          <HeadingTitle2 title1="Powering Innovation with" title2="Modern Technologies" />

          <p className="text-muted-foreground text-md px-4 max-w-4xl mx-auto mb-10">
            Our technology stack combines modern mobile frameworks, powerful backend technologies, scalable databases, cloud platforms, and industry-leading development tools to deliver secure, high-performance mobile applications.
            <br /><br />
            Explore the technologies below that our <strong>Mobile App Development Company in Gurgaon</strong> uses to build fast, scalable, and future-ready mobile apps.
          </p>

          {/* Tech Stack Grid */}
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-2 px-2">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="group relative px-4 py-3 sm:px-5 sm:py-4 rounded-xl! glass-card backdrop-blur-sm hover:bg-white hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-center min-w-25 sm:min-w-30 gap-2"
                >
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs sm:text-sm font-medium text-center">{tech.name}</span>
                  <div className={`absolute -inset-1 bg-linear-to-r ${tech.color.replace("text-", "from-")} to-transparent rounded-xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 justify-center items-center mt-10 mx-auto">
            <QuoteCTA scrollToForm={scrollToForm} />
          </div>
        </section >


        {/* ============================================================
        SECTION 10.11: TESTIMONIALS SECTION (H2)
        ============================================================ */}
        < section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 bg-linear-to-b from-card/60 to-background/40 overflow-hidden" suppressHydrationWarning >
          <div className="absolute inset-0 -z-10 pointer-events-none" suppressHydrationWarning>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-linear-to-br from-purple-500/10 to-transparent blur-3xl rounded-full" suppressHydrationWarning />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-linear-to-tl from-blue-500/10 to-transparent blur-3xl rounded-full" suppressHydrationWarning />
          </div>

          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-5 md:mb-16 lg:mb-20"
            >
              <SectionBadge
                icon={<Quote className="w-3 h-3 md:w-4 md:h-4" />} text="Building Success Through Technology"
              />

              <HeadingTitle2 title1="Trusted Mobile App Development Company" title2="Serving Businesses Across India" />
              <p className="text-muted-foreground max-w-4xl mx-auto text-md">
                Don't just take our word for it—discover what our clients have to say about working with our <strong>Mobile App Development Company in Gurgaon</strong>. <br /> <br />From iOS and Android apps to cross-platform solutions, businesses across industries trust CoderLala for quality, innovation, timely delivery, and exceptional customer service.
              </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-4 md:p-6 lg:p-8 rounded-2xl backdrop-blur-xl border border-white/10 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-linear-to-br ${testimonial.color} opacity-10 blur-3xl`} />
                    <div className="relative flex flex-col items-center text-center">
                      <div className="flex flex-col items-center gap-2 md:gap-3 mb-3 md:mb-5">
                        <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-linear-to-br ${testimonial.color} text-white! flex items-center justify-center text-sm md:text-lg lg:text-xl font-bold shadow-lg`}
                          aria-label={`Profile picture of ${testimonial.name}`}
                        >
                          {testimonial.image}
                        </div>
                        <div>
                          <h3 className="text-xs md:text-base lg:text-lg font-bold">{testimonial.name}</h3>
                          <p className="text-white/70 text-[10px] md:text-xs lg:text-sm">{testimonial.role}</p>
                          <p className="text-white/50 text-[10px] md:text-xs">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-[11px] md:text-sm lg:text-base text-white/90 italic leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-4">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <div className="flex justify-center gap-0.5 mt-1 md:mt-1.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const itemsPerPage = isMobile ? 2 : 3;
                      setActiveIndex(i * itemsPerPage);
                    }}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all ${currentPage === i ? "bg-white w-3 md:w-4 lg:w-6" : "bg-white/30 hover:bg-white/50"}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center items-center mt-10 mx-auto">
              <QuoteCTA scrollToForm={scrollToForm} />
            </div>
          </div>

          <style jsx global>{`
            .glass-card {
              background: rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            @media (max-width: 640px) {
              .glass-card {
                backdrop-filter: blur(5px);
              }
            }
          `}</style>
        </section >

        {/* ============================================================
        SECTION 10.12: FAQ SECTION (H2)
        ============================================================ */}
        < section className="pt-20 overflow-hidden" >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionBadge
                icon={<Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />} text="Frequently Asked Questions" />
              <HeadingTitle2 title1="Need More Information?" title2="Get Answers from CoderLala" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                Find answers to the most common questions about our <strong>mobile app development services in Gurgaon</strong>, including iOS and Android app development, cross-platform solutions, UI/UX design, project timelines, technologies, pricing, maintenance, and ongoing support. <br /> <br />Learn how CoderLala delivers secure, scalable, and high-performance mobile applications tailored to your business needs.
              </p>
            </div>

            {/* FAQ Accordion */}
            <FAQAccordion faqs={faqs} />
          </div>
        </section >

        {/* ============================================================
        SECTION 10.13: FINAL CTA SECTION (H2)
        ============================================================ */}
        <FinalCTA scrollToForm={scrollToForm} />

      </div >
    </>
  );
}