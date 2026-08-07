// app/travel-portal-development-gurgaon/TravelPortalDevelopmentClient.tsx
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
  Quote,
  Globe,
  Building,
  Database,
  BarChart3,
  Send,
} from "lucide-react";
import { HeadingTitle2, HeroTitleLocation } from "@/app/components/HeroTitle";
import { FAQAccordion } from "../component/ServiceFAQAccordion";
// import ServiceProcessSection from "./ServiceProcessSection";
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
} from "react-icons/si";
import { motion } from "framer-motion";
import Breadcrumbs from "../component/location/Breadcrumbs";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/app/constants";
import { generateFAQs, generateFAQSchema } from "./faqs";
import { services } from "@/app/(main)/services/data/services/service";
// import { ServiceCardLocation, ServicesButton } from "@/app/components/services/ServiceCard";
import { CITY, CITY_SLUG, contactInfo, SITE_URL, TRAVEL_PORTAL_DEV_GURGAON_PAGE_NAME } from "@/data/ContactInfo";
import { useScrollToForm } from "@/hooks/useScrollToForm";
import { SectionBadge } from "../component/location/SectionBadge";
// import { QuoteCTA } from "../component/location/QuoteCTA";
import { Button, QuoteCTA } from "../component/location/Button";
import ContactForm from "@/app/components/ContactForm";
import ServiceProcessSection from "./ServiceProcessSection";
import { FinalCTA } from "../component/location/FinalCTA";
import { SliderBadge } from "../component/location/SliderBadge";
import ClientLogoSlider from "../component/location/ClientLogoSlider";
import ServiceCard from "../component/location/FeatureCard";

// ============================================================
// SECTION 2: CONSTANTS & CONFIGURATION
// ============================================================
const CANONICAL_URL = `${SITE_URL}/travel-portal-development-${CITY_SLUG}`;
const HERO_TAGS = ["IRCTC API Integration", "Flight Booking", "Railway Booking", "B2B & B2C Portals"];
const Related_Services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Flight Booking System",
    desc: "Real-time flight booking engines with GDS integration and multi-airline support.",
    iconBg: "bg-blue-500"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "IRCTC Integration",
    desc: "Seamless railway booking with IRCTC API integration and real-time availability.",
    iconBg: "bg-orange-500"
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Hotel Booking System",
    desc: "Comprehensive hotel booking with real-time availability and multi-property management.",
    iconBg: "bg-purple-500"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "B2B & B2C Portals",
    desc: "Complete agent management with commissions, reporting, and multi-level access control.",
    iconBg: "bg-indigo-500"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Payment Integration",
    desc: "Secure payment gateways with multiple currency support and automated invoicing.",
    iconBg: "bg-green-500"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics Dashboard",
    desc: "Comprehensive analytics with real-time data, revenue reports, and performance insights.",
    iconBg: "bg-cyan-500"
  }
];

// Get the service data

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
// SECTION 4: TESTIMONIALS DATA
// ============================================================
const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Founder",
    company: "TravelGo India",
    text: "Our travel business scaled rapidly after launching this portal. Bookings doubled within months. The IRCTC and flight API integration was seamless.",
    rating: 5,
    image: "RS",
    color: "from-blue-500 to-teal-500",
  },
  {
    name: "Neeraj Gupta",
    role: "Director",
    company: "SmartTravel",
    text: "IRCTC and flight API integration was seamless. The system is fast and reliable. Our customers love the real-time booking experience.",
    rating: 5,
    image: "NG",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Vikram Malhotra",
    role: "CEO",
    company: "Global Travels",
    text: "The B2B agent module is a game changer. Managing commissions and reports is now effortless. We've seen significant growth in our agency network.",
    rating: 5,
    image: "VM",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Anita Singh",
    role: "Operations Head",
    company: "HolidayPlanners",
    text: "The travel portal has streamlined our entire booking process. From flight bookings to hotel reservations, everything is now managed in one place.",
    rating: 4,
    image: "AS",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Rajesh Kumar",
    role: "CTO",
    company: "TravelTech Solutions",
    text: "CoderLala's expertise in travel technology is unmatched. They built a robust platform that handles high volumes of bookings without any issues.",
    rating: 5,
    image: "RK",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Priya Patel",
    role: "Founder",
    company: "Wanderlust Travels",
    text: "The B2B and B2C features in one platform is exactly what we needed. Our agents and direct customers both have seamless booking experiences.",
    rating: 4,
    image: "PP",
    color: "from-cyan-500 to-blue-500",
  },
];

// ============================================================
// SECTION 5: TECH STACK DATA
// ============================================================
const techStack = [
  { name: "Next.js", icon: SiReact, color: "text-black! dark:text-white" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "Express", icon: SiExpress, color: "text-black! dark:text-white" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
];


// ============================================================
// SECTION 7: MAIN COMPONENT - TravelPortalDevelopmentClient
// ============================================================

export default function TravelPortalDevelopmentClient() {
  // ============================================================
  // SECTION 7.1: REFS & STATE MANAGEMENT
  // ============================================================
  const { formRef, inputRef, scrollToForm } = useScrollToForm({
    delay: 650,
    block: "start",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  // const [clientLogoIndex, setClientLogoIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ============================================================
  // SECTION 7.2: FAQ GENERATION (Dynamic with CITY)
  // ============================================================
  const faqs = generateFAQs(CITY);
  const faqSchema = generateFAQSchema(faqs);


  const averageRating =
    testimonials.reduce((sum, t) => sum + Number(t.rating), 0) /
    testimonials.length;

  // ============================================================
  // SECTION 7.4: EFFECTS - Mobile Detection & Auto-Slides
  // ============================================================

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // ============================================================
  // SECTION 7.5: COMPUTED VALUES
  // ============================================================


  const getVisibleTestimonials = () => {
    const itemsPerPage = isMobile ? 2 : 3;
    const end = Math.min(activeIndex + itemsPerPage, testimonials.length);
    return testimonials.slice(activeIndex, end);
  };

  const visibleTestimonials = getVisibleTestimonials();
  const totalPages = Math.ceil(testimonials.length / (isMobile ? 2 : 3));
  const currentPage = Math.floor(activeIndex / (isMobile ? 2 : 3));

  // ============================================================
  // SECTION 7.6: SCHEMA MARKUP
  // ============================================================
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `CoderLala - Best Travel Portal Development Company in ${CITY}`,
    image: `${SITE_URL}/logo/CoderLalaLogoDark.svg`,
    url: CANONICAL_URL,
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
    description: `CoderLala is a leading travel portal development company in ${CITY} offering flight, rail, bus, and hotel booking software with IRCTC API integration.`,
    priceRange: "₹5,00,000 - ₹50,00,000+",
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
  // SECTION 8: COMPONENT RETURN - JSX
  // ============================================================
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              // BreadcrumbList
              { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
              { "@type": "ListItem", "position": 2, "name": "Travel Portal Development", "item": CANONICAL_URL },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative text-foreground selection:bg-blue-500 selection:text-foreground">

        {/* ============================================================
        HERO SECTION
        ============================================================ */}
        <header className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-mesh" />
          <div className="absolute inset-0 bg-grid-dots opacity-40" />
          <div className="absolute top-32 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px] animate-float" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-cyan-400/15 blur-[100px] animate-float" style={{ animationDelay: "4s" }} />

          <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-7 space-y-7">
              <Breadcrumbs
                items={[
                  { label: "Travel Portal in Gurgaon", active: true },
                ]}
              />

              <HeroTitleLocation
                title1="Best Travel Portal Development"
                title2={`Company in ${CITY}`}
              />

              <p className="text-muted-foreground text-md lg:pr-10">
                <strong className="text-brand">CoderLala</strong> is the premier <strong className="text-brand">travel portal development company in {CITY}</strong>,
                headquartered at <strong className="text-brand">JMD Megapolis, Sector 48, Gurugram</strong>,
                serving travel businesses across Gurgaon, Noida, Delhi NCR and beyond.

                <br /><br />

                As a trusted <strong>travel technology agency in Gurgaon</strong>, we specialize in building
                comprehensive booking platforms with <strong className="text-brand">IRCTC API integration, </strong>
                <strong className="text-brand">flight booking engines</strong>, <strong className="text-brand">railway booking systems</strong>,
                and <strong className="text-brand">B2B/B2C travel portals</strong>.

                <br /><br />

                Whether you're a travel agency in Cyber City, an enterprise in Udyog Vihar, or a business near MG Road,
                our local team is ready to help you build a powerful travel platform tailored to your needs.
              </p>

              <SliderBadge tags={HERO_TAGS} />


              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
                {[
                  { k: "5+", v: "Portals Built" },
                  { k: "10+", v: "Happy Clients" },
                  { k: "99.9%", v: "Uptime" },
                  { k: "4.9 ★", v: "Client Rating" },
                ].map((s) => (
                  <div key={s.v} className="group grid place-items-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-extrabold text-coder-grad group-hover:scale-105 transition-transform">{s.k}</h3>
                    <p className="text-muted-foreground text-sm">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={formRef}
              id="quote-form"
              className="relative lg:col-span-5 scroll-mt-28"
            >
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-blue-400/20 via-blue-400/15 to-cyan-400/20 blur-2xl dark:from-blue-500/15 dark:to-blue-500/15"></div>
              <div className="relative overflow-hidden rounded-2xl border border-border glass-card-without-hover backdrop-blur-sm shadow-xl">
                <div className="h-1 w-full bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500"></div>
                <div className="p-6">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold tracking-tight text-primary">
                      🚀 Build Your Travel Portal — Gurgaon's #1 Travel Tech Agency
                    </h3>
                    <p className="text-muted-foreground text-sm mt-4">
                      Share your travel portal idea and get a free, personalized roadmap from
                      Gurgaon's travel technology experts. No hidden costs.
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
        CLIENT LOGOS SECTION
        ============================================================ */}
        <section className="py-20 border-y border-border bg-linear-to-b from-card/60 to-background/40 text-center overflow-hidden">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-blue-500/10 backdrop-blur-sm border border-white/20 mb-4 lg:mb-6">
              <Users className="w-4 h-4 text-blue-500 dark:text-blue-300" />
              <span className="text-sm font-medium">
                Our Trusted Clients
              </span>
            </div>
          </div>

          <HeadingTitle2 title1="Companies That" title2="Trust Our Travel Solutions" />

          <p className="text-muted-foreground text-md mb-10 max-w-4xl px-4 mx-auto">
            As a trusted <strong>Travel Portal Development Company in Gurgaon</strong>, we help travel agencies, tour operators, and travel startups build comprehensive booking platforms that streamline operations and increase revenue.<br /><br />
            Our experienced team combines deep travel industry knowledge with cutting-edge technology to deliver robust travel portals that provide exceptional user experiences and support long-term business growth.
          </p>

          <ClientLogoSlider serviceName={TRAVEL_PORTAL_DEV_GURGAON_PAGE_NAME} city={CITY} />

          <div className="flex gap-4 justify-center items-center mt-10 mx-auto">
            <QuoteCTA scrollToForm={scrollToForm} />
          </div>
        </section>

        {/* ============================================================
        ABOUT CODERLALA SECTION
        ============================================================ */}
        <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionBadge
                  text="⭐ Trusted by 500+ Businesses Across India"
                />
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6 flex flex-col">
                  <span className="text-transparent! bg-clip-text! bg-blue-500!">
                    About CoderLala
                  </span>
                  <span className="block! text-[#ff6900]! bg-clip-text! bg-orange-500!">
                    Travel Technology Experts
                  </span>
                </h2>

                <p className="text-muted-foreground text-md mb-4 max-w-3xl mx-auto">
                  CoderLala is a leading <strong>travel portal development company in Gurgaon </strong>
                  helping travel agencies, tour operators, and travel startups build powerful
                  booking platforms that streamline operations and increase revenue.
                  <br /><br />From flight and rail booking systems to comprehensive B2B and B2C
                  travel portals, we create travel technology solutions designed to deliver
                  value, automate processes, and accelerate business growth.
                </p>

                <p className="text-muted-foreground text-md mb-10 max-w-3xl mx-auto">
                  Our experienced developers specialize in modern travel technologies including
                  IRCTC API integration, flight booking engines, railway booking systems, and
                  multi-service travel platforms. Every portal is optimized for performance,
                  user experience, and scalability to help your travel business succeed.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2">✅ IRCTC API Integration</div>
                  <div className="flex items-center gap-2">✅ Flight Booking Software</div>
                  <div className="flex items-center gap-2">✅ Railway Booking System</div>
                  <div className="flex items-center gap-2">✅ Bus & Hotel Booking</div>
                  <div className="flex items-center gap-2">✅ B2B & B2C Portals</div>
                  <div className="flex items-center gap-2">✅ Payment Gateway Integration</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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

              <div className="relative">
                <Image
                  src="/images/premium-travel-portal-development-gurgaon-office-team.webp"
                  alt="Professional travel portal development team at CoderLala office in Gurgaon working on client projects"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                  quality={85}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mt-5">
                  {[
                    { k: "5+", v: "Portals Built" },
                    { k: "10+", v: "Industries Served" },
                    { k: "99.9%", v: "Uptime" },
                    { k: "4.9★", v: "Rating" },
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
        WHY CHOOSE US SECTION
        ============================================================ */}
        <section className="py-20 border-y border-border bg-linear-to-b from-card/60 to-background/40 text-center overflow-hidden">
          <SectionBadge icon={<Star className="w-4 h-4 text-yellow-400" />} text="Why Choose Us?" />
          <div className="max-w-7xl mx-auto px-6">
            <HeadingTitle2
              title1="Why Choose CoderLala"
              title2="as Your Travel Technology Partner?"
            />

            <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
              At CoderLala, we combine deep travel industry knowledge with cutting-edge technology to deliver world-class travel portals tailored to businesses in Gurgaon and Delhi NCR. Our team of skilled developers specializes in IRCTC API integration, flight booking engines, railway booking systems, and comprehensive B2B/B2C travel solutions. <br /><br />We understand the unique challenges of the travel industry and create digital solutions that drive real results—increased bookings, streamlined operations, and sustainable growth. With 5+ successful travel portals and 99.9% client satisfaction, we're the trusted travel technology partner for businesses of all sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-blue-500 to-blue-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-blue-500 to-blue-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Globe className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Multi-Service Booking</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Integrated flight, rail, bus, and hotel booking in one unified platform
                </p>
              </div>

              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-orange-500 to-orange-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-orange-500 to-orange-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Users className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">B2B & B2C Support</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Complete agent management with commissions, reporting, and multi-level access
                </p>
              </div>

              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-green-500 to-emerald-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-green-500 to-emerald-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Rocket className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Scalable Architecture</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Built to handle high volumes of bookings with 99.9% uptime guarantee
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center items-center mt-10 mx-auto">
              <QuoteCTA scrollToForm={scrollToForm} />
            </div>
          </div>
        </section>

        {/* ============================================================
            SERVICES SECTION
            ============================================================ */}
        <section id="services" className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-linear-to-br from-indigo-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-linear-to-tl from-blue-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-br from-indigo-500/5 via-blue-500/5 to-cyan-500/5 blur-3xl rounded-full" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-5xl mx-auto mb-14 space-y-3">
              <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="CoderLala Services" />
              <HeadingTitle2 title1={`Expert Travel Portal Development`} title2={`Services in ${CITY}`} />
              <p className="text-muted-foreground text-md max-w-4xl mx-auto">
                From flight and rail booking systems to comprehensive B2B and B2C travel portals, our <strong className="text-brand">Travel Portal Development Company in {CITY}</strong> delivers scalable, secure, and high-performance travel technology solutions for agencies, tour operators, and travel startups. <br /><br />
                We build modern travel platforms using the latest technologies to ensure exceptional user experiences, reliable performance, and future-ready solutions. Explore our comprehensive travel portal development services below.
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
        DEVELOPMENT PROCESS SECTION
        ============================================================ */}
        <section className="py-20 border-y border-border bg-linear-to-b from-card/60 to-background/40 text-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionBadge icon={<Zap className="w-4 h-4 text-blue-500 dark:text-blue-300" />} text="Our Development Process" />
              <HeadingTitle2 title1="How We Transform Your Travel Portal Idea" title2="Into Powerful Digital Experiences" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                As a leading <strong>Travel Portal Development Company in Gurgaon</strong>, we follow a strategic and transparent development process to create high-quality travel platforms that are scalable, secure, and performance-driven.
                <br /><br />
                From understanding your business requirements and integrating with travel APIs to development, testing, and deployment, every step is carefully executed to deliver reliable solutions tailored to your goals.
              </p>
            </div>

            <div className="text-left">
              <ServiceProcessSection />
            </div>
            <div className="flex gap-4 justify-center items-center mt-10 mx-auto">
              <QuoteCTA scrollToForm={scrollToForm} />
            </div>
          </div>
        </section>

        {/* ============================================================
        TECH STACK SECTION
        ============================================================ */}
        <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 text-center overflow-hidden">
          <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="Our Development Approach" />
          <HeadingTitle2 title1="Powering Innovation with" title2="Modern Technologies" />

          <p className="text-muted-foreground text-md px-4 max-w-4xl mx-auto mb-10">
            Our technology stack combines modern frontend frameworks, powerful backend technologies, scalable databases, and industry-leading development tools to deliver secure, high-performance travel portals.
            <br /><br />
            Explore the technologies below that our <strong>Travel Portal Development Company in Gurgaon</strong> uses to build scalable, reliable, and future-ready travel solutions.
          </p>

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
        </section>

        {/* ============================================================
        TESTIMONIALS SECTION
        ============================================================ */}
        <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 bg-linear-to-b from-card/60 to-background/40 overflow-hidden" suppressHydrationWarning>
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

              <HeadingTitle2 title1="Trusted Travel Portal Development Company" title2="Serving Travel Businesses Across India" />
              <p className="text-muted-foreground max-w-4xl mx-auto text-md">
                Don't just take our word for it—discover what our clients have to say about working with our <strong>Travel Portal Development Company in Gurgaon</strong>. <br /> <br />From IRCTC integration to comprehensive B2B travel platforms, businesses across the travel industry trust CoderLala for quality, innovation, timely delivery, and exceptional customer service.
              </p>
            </motion.div>

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
        </section>

        {/* ============================================================
        FAQ SECTION
        ============================================================ */}
        <section className="pt-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionBadge
                icon={<Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />} text="Frequently Asked Questions" />
              <HeadingTitle2 title1="Need More Information?" title2="Get Answers from CoderLala" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                Find answers to the most common questions about our <strong>travel portal development services in Gurgaon</strong>, including IRCTC integration, flight booking systems, B2B and B2C portals, payment gateways, and ongoing support. <br /> <br />Learn how CoderLala delivers secure, scalable, and high-performance travel solutions tailored to your business needs.
              </p>
            </div>

            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* ============================================================
        FINAL CTA SECTION
        ============================================================ */}
        <FinalCTA scrollToForm={scrollToForm} />


      </div>
    </>
  );
}