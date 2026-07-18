// app/saas-platform-development-gurgaon/SaaSPlatformDevelopmentClient.tsx
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
  ShoppingCart,
  Quote,
  Cloud,
  Palette,
  Server,
  Shield,
  Send,
  Layout,
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
  SiNestjs,
  SiRedis,
  SiMysql,
  SiGraphql,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
} from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/app/constants";
import { CITY, CITY_SLUG, contactInfo, SAAS_PLATFORM_DEV_GURGAON_PAGE_NAME, SITE_URL } from "@/data/ContactInfo";
import { useScrollToForm } from "@/hooks/useScrollToForm";
import { generateFAQs, generateFAQSchema } from "./faqs";
import Breadcrumbs from "../component/location/Breadcrumbs";
import { Button, QuoteCTA } from "../component/location/Button";
import { SectionBadge } from "../component/location/SectionBadge";
import ServiceProcessSection from "./ServiceProcessSection";
import ContactForm from "@/app/components/ContactForm";
import { FinalCTA } from "../component/location/FinalCTA";
import { SliderBadge } from "../component/location/SliderBadge";
import ClientLogoSlider from "../component/location/ClientLogoSlider";
import ServiceCard from "../component/location/FeatureCard";

// ============================================================
// SECTION 2: CONSTANTS & CONFIGURATION
// ============================================================

const CANONICAL_URL = `${SITE_URL}/saas-platform-development-${CITY_SLUG}`;

const HERO_TAGS = ["Multi-Tenant Architecture", "Cloud-Native", "Microservices", "Enterprise-Grade"];
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

// ============================================================
// SECTION 5: TESTIMONIALS DATA
// ============================================================
const testimonials = [
  {
    name: "Ravinder",
    role: "Founder",
    company: "SkyYogaShala",
    text: "CoderLala built a powerful SaaS platform for our yoga business. The platform handles bookings, payments, and member management seamlessly. It's transformed how we operate.",
    rating: 5,
    image: "RV",
    color: "from-blue-500 to-teal-500",
  },
  {
    name: "Dr. (Maj) Chander Prakash",
    role: "Founder & Chief Dentist",
    company: "Kreative Dentistry",
    text: "The SaaS solution CoderLala developed for our clinic has streamlined patient management, appointment scheduling, and billing. It's been a game-changer for our practice.",
    rating: 5,
    image: "CP",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Dr. Sringari",
    role: "Medical Director",
    company: "Polaris Hospitals",
    text: "Our hospital management SaaS platform has revolutionized how we handle patient records and operations. The team at CoderLala understood our complex requirements perfectly.",
    rating: 5,
    image: "DS",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Zahid Malik",
    role: "Founder",
    company: "RangRoganWala",
    text: "The SaaS platform for our painting services allows us to manage projects, track inventory, and handle customer interactions efficiently. It's scaled our business significantly.",
    rating: 5,
    image: "ZM",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Poonam Agrawal",
    role: "Co-Founder",
    company: "RiPRAP Health",
    text: "Our health & wellness SaaS platform needed to be secure, scalable, and user-friendly. CoderLala delivered an exceptional product that our users love.",
    rating: 4,
    image: "PA",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Solutions",
    text: "CoderLala's SaaS development expertise is outstanding. They delivered a high-performance platform that has significantly improved our customer engagement and operational efficiency.",
    rating: 4,
    image: "SJ",
    color: "from-cyan-500 to-blue-500",
  },
];

// ============================================================
// SECTION 6: TECH STACK DATA
// ============================================================
const techStack = [
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiReact, color: "text-black! dark:text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
  { name: "Jenkins", icon: SiJenkins, color: "text-red-600" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Elasticsearch", icon: SiElasticsearch, color: "text-yellow-500" },
  { name: "Prometheus", icon: SiPrometheus, color: "text-red-600" },
  { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
];

// ============================================================
// SECTION 7: HELPER COMPONENT - GraduationCap Icon
// ============================================================

// ============================================================
// SECTION 8: SAAS DEVELOPMENT SERVICES DATA
// ============================================================

// ============================================================
// SECTION 9: MAIN COMPONENT - SaaSPlatformDevelopmentClient
// ============================================================

export default function SaaSPlatformDevelopmentClient() {
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
  const averageRating =
    testimonials.reduce((sum, t) => sum + Number(t.rating), 0) /
    testimonials.length;
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
    name: `CoderLala - Best SaaS Platform Development Company in ${CITY}`,
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
    description: `CoderLala is a leading SaaS platform development company in ${CITY} offering custom SaaS solutions, cloud-based applications, and enterprise software development.`,
    priceRange: "₹500000 - ₹10000000",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SaaS Development Services",
      itemListElement: Related_Services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.title, description: service.desc },
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
              // BreadcrumbList
              { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
              { "@type": "ListItem", "position": 2, "name": "SaaS Platform Development", "item": CANONICAL_URL },
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
                  { label: "SaaS Platform in Gurgaon", active: true },
                ]}
              />

              {/* H1 Title */}
              <HeroTitleLocation
                title1="Best SaaS Platform Development"
                title2={`Company in ${CITY}`}
              />

              {/* Hero Description */}
              <p className="text-muted-foreground text-md lg:pr-10">
                <strong className="text-brand">CoderLala</strong> is the premier <strong className="text-brand">SaaS platform development company in {CITY}</strong>,
                headquartered at <strong className="text-brand">JMD Megapolis, Sector 48, Gurugram</strong>,
                serving businesses across Gurgaon, Noida, Delhi NCR and beyond.

                <br /><br />

                As a trusted <strong>SaaS development agency in Gurgaon</strong>, we leverage cutting-edge technologies
                like <strong className="text-brand">React</strong>, <strong className="text-brand">Node.js, </strong>
                <strong className="text-brand">AWS</strong> and <strong className="text-brand">Kubernetes </strong>
                to build scalable, secure, and high-performance SaaS platforms.

                <br /><br />

                Whether you're a startup in Cyber City, an enterprise in Udyog Vihar, or a business near MG Road,
                our local team is ready to help you build the next generation of SaaS products tailored to your needs.
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
                  { k: "10+", v: "SaaS Platforms" },
                  { k: "15+", v: "Enterprise Clients" },
                  { k: "99%", v: "Uptime SLA" },
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
                      🚀 Submit Your SaaS Idea — Gurgaon's #1 SaaS Development Agency
                    </h3>
                    <p className="text-muted-foreground text-sm mt-4">
                      Share your SaaS vision and get a free, personalized roadmap from
                      Gurgaon's SaaS development experts. No hidden costs.
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

          <HeadingTitle2 title1="Companies That" title2="Trust Our SaaS Solutions" />

          <p className="text-muted-foreground text-md mb-10 max-w-4xl px-4 mx-auto">
            As a trusted <strong>SaaS Platform Development Company in Gurgaon</strong>, we help startups, SMEs, and enterprises build scalable, secure, and innovative SaaS platforms that drive business growth, streamline operations, and create new revenue streams.<br /><br />
            Our experienced team combines deep technical expertise, cloud-native architecture, and industry best practices to deliver high-quality SaaS solutions that provide exceptional user experiences and support long-term business success.
          </p>

          <ClientLogoSlider serviceName={SAAS_PLATFORM_DEV_GURGAON_PAGE_NAME} city={CITY} />

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
                    SaaS Development Experts
                  </span>
                </h2>

                <p className="text-muted-foreground text-md mb-4 max-w-3xl mx-auto">
                  CoderLala is a leading <strong>SaaS platform development company in Gurgaon </strong>
                  helping startups, SMEs, and enterprises build scalable, secure, and innovative
                  SaaS solutions that drive business growth and operational efficiency.
                  <br /><br />From B2B and B2C SaaS platforms to enterprise-grade applications,
                  we create software solutions designed to deliver value, streamline operations,
                  and accelerate digital transformation.
                </p>

                <p className="text-muted-foreground text-md mb-10 max-w-3xl mx-auto">
                  Our experienced developers specialize in modern SaaS technologies including
                  React, Node.js, AWS, Docker, Kubernetes, and microservices architecture.
                  Every platform is optimized for performance, security, and scalability
                  to help your business succeed in the competitive SaaS landscape.
                </p>

                {/* Feature List */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2">✅ Multi-Tenant Architecture</div>
                  <div className="flex items-center gap-2">✅ Subscription Management</div>
                  <div className="flex items-center gap-2">✅ Cloud-Native Development</div>
                  <div className="flex items-center gap-2">✅ Microservices & APIs</div>
                  <div className="flex items-center gap-2">✅ Enterprise Security</div>
                  <div className="flex items-center gap-2">✅ Scalable Infrastructure</div>
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
                  src="/images/premium-sass-platform-development-company-gurgaon-office-team.webp"
                  alt="Professional SaaS development team at CoderLala office in Gurgaon working on enterprise projects"
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
                    { k: "10+", v: "SaaS Platforms" },
                    { k: "15+", v: "Industries Served" },
                    { k: "99%", v: "Uptime SLA" },
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
              title2="as Your SaaS Development Partner?"
            />

            <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
              At CoderLala, we combine deep technical expertise with local presence to deliver world-class SaaS platforms tailored to businesses in Gurgaon and Delhi NCR. Our team of skilled developers leverages cutting-edge technologies including React, Node.js, AWS, Kubernetes, and microservices architecture to build scalable, secure, and high-performance SaaS solutions. <br /><br />We understand the local business landscape and create digital solutions that drive real results—increased efficiency, new revenue streams, and sustainable growth. With 10+ successful SaaS platforms and 99% client satisfaction, we're the trusted SaaS development partner for businesses of all sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Reason 1: Cutting-Edge Technology */}
              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-blue-500 to-indigo-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Cloud className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Cloud-Native Architecture</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  We build scalable, resilient SaaS platforms using cloud-native technologies and microservices
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

              {/* Reason 3: Enterprise-Grade Security */}
              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-green-500 to-emerald-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-green-500 to-emerald-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Shield className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Enterprise-Grade Security</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  We implement robust security measures to protect your data and ensure compliance
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
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-linear-to-br from-orange-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-linear-to-tl from-red-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-br from-orange-500/5 via-red-500/5 to-purple-500/5 blur-3xl rounded-full" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-5xl mx-auto mb-14 space-y-3">
              <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="CoderLala Services" />
              <HeadingTitle2 title1={`Expert SaaS Platform Development`} title2={`Services in ${CITY}`} />
              <p className="text-muted-foreground text-md max-w-4xl mx-auto">
                From B2B and B2C SaaS platforms to enterprise-grade applications, our <strong className="text-brand">SaaS Platform Development Company in {CITY}</strong> delivers scalable, secure, and high-performance software solutions for startups, SMEs, and enterprises. <br /><br />
                We build modern SaaS platforms using the latest technologies to ensure exceptional user experiences, long-term reliability, and future-ready digital solutions. Explore our comprehensive SaaS development services below to discover how we can help bring your vision to life.
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
        <section className="py-20 border-y border-border bg-linear-to-b from-card/60 to-background/40 text-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionBadge icon={<Zap className="w-4 h-4 text-blue-500 dark:text-blue-300" />} text="Our Development Process" />
              <HeadingTitle2 title1="How We Transform Your SaaS Idea" title2="Into Powerful Digital Products" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                As a leading <strong>SaaS Platform Development Company in Gurgaon</strong>, we follow a strategic and transparent development process to create high-quality SaaS platforms that are scalable, secure, and performance-driven.
                <br /><br />
                From understanding your business requirements and designing intuitive user experiences to development, testing, and deployment, every step is carefully executed to deliver reliable SaaS solutions tailored to your goals.
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
        SECTION 10.9: TECH STACK SECTION (H2)
        ============================================================ */}
        <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 text-center overflow-hidden">
          <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="Our Development Approach" />
          <HeadingTitle2 title1="Powering Innovation with" title2="Modern Technologies" />

          <p className="text-muted-foreground text-md px-4 max-w-4xl mx-auto mb-10">
            Our technology stack combines modern frontend frameworks, powerful backend technologies, scalable databases, cloud platforms, and industry-leading DevOps tools to deliver secure, high-performance SaaS platforms.
            <br /><br />
            Explore the technologies below that our <strong>SaaS Platform Development Company in Gurgaon</strong> uses to build scalable, secure, and future-ready SaaS solutions.
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
        </section>


        {/* ============================================================
        SECTION 10.11: TESTIMONIALS SECTION (H2)
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

              <HeadingTitle2 title1="Trusted SaaS Platform Development Company" title2="Serving Businesses Across India" />
              <p className="text-muted-foreground max-w-4xl mx-auto text-md">
                Don't just take our word for it—discover what our clients have to say about working with our <strong>SaaS Platform Development Company in Gurgaon</strong>. <br /> <br />From B2B and B2C SaaS platforms to enterprise-grade applications, businesses across industries trust CoderLala for quality, innovation, timely delivery, and exceptional customer service.
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
        </section>

        {/* ============================================================
        SECTION 10.12: FAQ SECTION (H2)
        ============================================================ */}
        <section className="pt-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionBadge
                icon={<Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />} text="Frequently Asked Questions" />
              <HeadingTitle2 title1="Need More Information?" title2="Get Answers from CoderLala" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                Find answers to the most common questions about our <strong>SaaS platform development services in Gurgaon</strong>, including B2B and B2C SaaS solutions, cloud architecture, subscription management, pricing, security, maintenance, and ongoing support. <br /> <br />Learn how CoderLala delivers scalable, secure, and high-performance SaaS platforms tailored to your business needs.
              </p>
            </div>

            {/* FAQ Accordion */}
            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* ============================================================
        SECTION 10.13: FINAL CTA SECTION (H2)
        ============================================================ */}
        <FinalCTA scrollToForm={scrollToForm} />


      </div>
    </>
  );
}