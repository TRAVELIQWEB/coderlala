// app/web-development-company-gurgaon/WebDevelopmentClient.tsx
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
  Code2,
  Rocket,
  ShoppingCart,
  Building2,
  Heart,
  Briefcase,
  Quote,
  ChevronRight,
  ChevronLeft,
  Smartphone,
  Server,
  Palette,
  Send,
} from "lucide-react";
import { HeadingTitle2, HeroTitleLocation } from "@/app/components/HeroTitle";
// import ContactForm from "./ContactForm";
import { FAQAccordion } from "../component/ServiceFAQAccordion";
import ServiceProcessSection from "./ServiceProcessSection";
import { FaAws } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiPython, SiDocker, SiMongodb, SiPostgresql, SiTailwindcss, SiPhp, SiBootstrap, SiWordpress, SiNestjs, SiJavascript, SiCss, SiGit, SiGithub, SiRedis, SiExpress, SiMysql, SiAngular, SiLaravel } from "react-icons/si";
import { motion } from "framer-motion";
// import Breadcrumbs from "./Breadcrumbs";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/app/constants";
import { generateFAQs, generateFAQSchema } from "./faqs";
import { services } from "@/app/(main)/services/data/services/service";
// import { ServiceCardLocation, ServicesButton } from "@/app/components/services/ServiceCard";
import { CITY, CITY_SLUG, contactInfo, SITE_URL, WEB_DEV_GURGAON_PAGE_NAME, WEB_DEV_GURGAON_URL } from "@/data/ContactInfo";
import { useScrollToForm } from "@/hooks/useScrollToForm";
import Breadcrumbs from "../component/location/Breadcrumbs";
import { Button, QuoteCTA, ServicesButton } from "../component/location/Button";
import ContactForm from "@/app/components/ContactForm";
// import { QuoteCTA } from "../component/location/QuoteCTA";
import { SectionBadge } from "../component/location/SectionBadge";
import { FinalCTA } from "../component/location/FinalCTA";
import { SliderBadge } from "../component/location/SliderBadge";
import ClientLogoSlider from "../component/location/ClientLogoSlider";
import ServiceCard from "../component/location/FeatureCard";
// import { SectionBadge } from "./SectionBadge";
// import { QuoteCTA } from "./QuoteCTA";
// import { Button } from "./Button";


// ============================================================
// SECTION 2: CONSTANTS & CONFIGURATION
// ============================================================
const HERO_TAGS = ["Agile Development", "High-Performance Apps", "Digital Transformation", "Expert IT Consulting"];
// e.g. in a shared config
const SERVICE_SLUG = "web-development";

const Related_Services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Custom Web Development",
    desc: "Tailored web solutions using Next.js, React, and modern frameworks for optimal performance and user experience.",
    iconBg: "bg-blue-500"
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-Commerce Development",
    desc: "Feature-rich online stores with secure payment gateways, inventory management, and seamless checkout experiences.",
    iconBg: "bg-orange-500"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Progressive Web Apps",
    desc: "Mobile-first web applications with offline capabilities, push notifications, and native-like performance.",
    iconBg: "bg-indigo-500"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend & API Development",
    desc: "Robust APIs and backend systems with Node.js, Python, and PostgreSQL for scalable, secure data management.",
    iconBg: "bg-teal-500"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    desc: "User-centered design with intuitive interfaces, engaging experiences, and conversion-optimized workflows.",
    iconBg: "bg-violet-500"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Cloud & DevOps",
    desc: "Scalable cloud infrastructure with CI/CD pipelines, containerization, and 99.9% uptime guarantee.",
    iconBg: "bg-cyan-500"
  }
];
// ============================================================
// SECTION 4: OFFICE & CONTACT INFORMATION
// ============================================================
const OFFICE = {
  address: contactInfo.websiteAddress,
  phone: contactInfo.salmanNizamPhone,
  email: contactInfo.email,
  mapUrl: contactInfo.mapLocationLink
};

// ============================================================
// SECTION 5: INDUSTRIES DATA
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
// SECTION 6: TESTIMONIALS DATA
// ============================================================
const testimonials = [
  {
    name: "Ravinder",
    role: "Founder",
    company: "SkyYogaShala",
    text: "Working with CoderLala was a seamless experience. They built a clean, fast and fully mobile-optimized yoga platform that made it easier for our students to explore classes and schedules.",
    rating: 5,
    image: "RV",
    color: "from-blue-500 to-teal-500",
  },
  {
    name: "Dr. (Maj) Chander Prakash",
    role: "Founder & Chief Dentist",
    company: "Kreative Dentistry",
    text: "CoderLala created a modern and professional website for our clinic. The layout, appointment system, and overall structure are intuitive, making it very easy for patients to find information.",
    rating: 4,
    image: "CP",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Dr. Sringari",
    role: "Medical Director",
    company: "Polaris Hospitals",
    text: "We partnered with CoderLala to revamp the Polaris Hospitals website. The new version is clean, well-structured, and makes it easy for patients to explore departments and doctors.",
    rating: 5,
    image: "DS",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Zahid Malik",
    role: "Founder",
    company: "RangRoganWala",
    text: "CoderLala designed a vibrant and high-performance website for our painting services. It showcases our work beautifully and provides visitors with a smooth browsing experience.",
    rating: 4,
    image: "ZM",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Poonam Agrawal",
    role: "Co-Founder",
    company: "RiPRAP Health",
    text: "Our health & wellness platform required a clean, trustworthy and user-friendly interface. CoderLala delivered a well-structured website with excellent clarity and fast loading performance.",
    rating: 4,
    image: "PA",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Solutions",
    text: "CoderLala's expertise in SaaS development transformed our platform. Their attention to detail and commitment to quality resulted in a product that exceeded our expectations.",
    rating: 4,
    image: "SJ",
    color: "from-cyan-500 to-blue-500",
  },
];

// ============================================================
// SECTION 7: TECH STACK DATA
// ============================================================
const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-black! dark:text-white" },
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "React Native", icon: SiReact, color: "text-cyan-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-700" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "CSS3", icon: SiCss, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "GitHub", icon: SiGithub, color: "text-black! dark:text-white" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "Express", icon: SiExpress, color: "text-black! dark:text-white" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Angular", icon: SiAngular, color: "text-red-600" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
];

// ============================================================
// SECTION 8: HELPER COMPONENT - GraduationCap Icon
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
// SECTION 9: MAIN COMPONENT - WebDevelopmentClient
// ============================================================

export default function WebDevelopmentClient() {
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
  // SECTION 9.5: EFFECTS - Mobile Detection & Auto-Slides
  // ============================================================

  // 9.5.1: Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 9.5.2: Auto-slide testimonials
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
  const averageRating =
    testimonials.reduce((sum, t) => sum + Number(t.rating), 0) /
    testimonials.length;
  // ============================================================
  // SECTION 9.7: SCHEMA MARKUP - Organization & ProfessionalService
  // ============================================================
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${WEB_DEV_GURGAON_URL}#professionalservice`,
    name: `CoderLala - Best Web Development Company in ${CITY}`,
    image: `${SITE_URL}/logo/CoderLalaLogoDark.svg`,
    url: WEB_DEV_GURGAON_URL,
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
    description: `CoderLala is a leading web development company in ${CITY} offering custom web development, Next.js, React, and e-commerce solutions.`,
    priceRange: "₹₹₹",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
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
                "item": SITE_URL,
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Web Development Company in Gurgaon",
                "item": WEB_DEV_GURGAON_URL,
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
                  // { label: "Services", href: "/services" },
                  { label: "Web Development in Gurgaon", active: true },
                ]}
              />

              {/* H1 Title */}
              <HeroTitleLocation
                title1="Best Web Development"
                title2={`Company in ${CITY}`}
              />

              {/* Hero Description */}
              <p className="text-muted-foreground text-md lg:pr-10">
                <strong className="text-brand">CoderLala</strong> is the premier <strong className="text-brand">web development company in {CITY}</strong>,
                headquartered at <strong className="text-brand">JMD Megapolis, Sector 48, Gurugram</strong>,
                serving businesses across Gurgaon, Noida, Delhi NCR and many more areas.

                <br /><br />

                As a trusted <strong>web development agency in Gurgaon</strong>, we leverage cutting-edge technologies
                like <strong className="text-brand">Next.js</strong>, <strong className="text-brand">React</strong>,
                and modern <strong className="text-success">MongoDB</strong> backends to build high-performance websites.

                <br /><br />

                Whether you're a startup in Cyber City, an enterprise in Udyog Vihar, or a business near MG Road,
                our local team is ready to help you succeed online with custom web solutions tailored to your needs.
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
                  { k: "25+", v: "Projects Delivered" },
                  { k: "20+", v: "Happy Clients" },
                  { k: "99%", v: "Retention Rate" },
                  { k: "4.9 ★", v: "Client Rating" },
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
              <div className="relative overflow-hidden rounded-2xl border border-border glass-card-without-hover backdrop-blur-sm shadow-xl">
                <div className="h-1 w-full bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500"></div>
                <div className="p-6">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold tracking-tight text-primary">
                      🚀 Submit Your Query — Gurgaon's #1 Web Development Agency
                    </h3>
                    <p className="text-muted-foreground text-sm mt-4">
                      Submit your website idea and get a free, personalized roadmap from
                      Gurgaon's web development experts. No hidden costs.
                    </p>
                    <div className="mt-5 h-px w-full border-border border-t"></div>
                  </div>
                  <ContactForm size={'sm'} ref={inputRef} />
                </div>
              </div>
            </div>
          </div>
        </header >

        {/* ============================================================
        SECTION 10.4: CLIENT LOGOS SECTION (H2)
        ============================================================ */}
        < section className="py-20 border-y border-border bg-linear-to-b from-card/60 to-background/40 text-center overflow-hidden" >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-orange-500/10 backdrop-blur-sm border border-white/20 mb-4 lg:mb-6">
              <Users className="w-4 h-4 text-blue-500 dark:text-blue-300" />
              <span className="text-sm font-medium">
                Our Trusted Clients
              </span>
            </div>
          </div>

          <HeadingTitle2 title1="Companies That" title2="Trust Our Solutions" />

          <p className="text-muted-foreground text-md mb-10 max-w-4xl px-4 mx-auto">
            As a trusted <strong className="text-brand">local team</strong>, we help startups, SMEs, and enterprises build modern websites, custom web applications, and scalable digital solutions.<br /><br />
            Our experienced team combines creativity, technology, and innovation to deliver high-quality websites that provide exceptional user experiences and support long-term business success.
          </p>

          <ClientLogoSlider serviceName={WEB_DEV_GURGAON_PAGE_NAME} />

          <div className="flex flex-col sm:flex-row mt-10 gap-3 sm:gap-4 justify-center">

            <div className="flex gap-4 justify-center items-center mt-10 mx-auto">
              <QuoteCTA scrollToForm={scrollToForm} />
            </div>
          </div>

        </section >

        {/* ============================================================
        SECTION 10.5: ABOUT CODERLALA SECTION (H2)
        ============================================================ */}
        < section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden" >
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
                    Building Project That Matter
                  </span>
                </h2>

                <p className="text-muted-foreground text-md mb-4 max-w-3xl mx-auto">
                  CoderLala is a leading <strong>web development company in Gurgaon </strong>
                  helping startups, SMEs, and enterprises build fast, secure, and scalable
                  websites.
                  <br /><br />From business websites and custom web applications to eCommerce
                  platforms and SaaS products, we create digital solutions designed to
                  increase traffic, generate leads, and accelerate business growth.
                </p>

                <p className="text-muted-foreground text-md mb-10 max-w-3xl mx-auto">
                  Our experienced developers specialize in modern technologies including
                  React, Next.js, Node.js, Laravel, WordPress, Shopify, and custom CMS
                  development. Every website is optimized for performance, mobile
                  responsiveness, and user experience to help your business rank higher on
                  Google.
                </p>

                {/* Feature List */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2">✅ Custom Website Development</div>
                  <div className="flex items-center gap-2">✅ eCommerce Development</div>
                  <div className="flex items-center gap-2">✅ Web Applications & SaaS</div>
                  <div className="flex items-center gap-2">✅ API Integration</div>
                  <div className="flex items-center gap-2">✅ 85+ PageSpeed Performance</div>
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
                  src="/images/premium-web-development-company-gurgaon-office-team.webp"
                  alt="Professional web development team at CoderLala office in Gurgaon working on client projects"
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
                    { k: "25+", v: "Projects Done" },
                    { k: "50+", v: "Industries Served" },
                    { k: "95%", v: "Client Retention" },
                    { k: "85+", v: "PageSpeed" },
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
        </section >

        {/* ============================================================
        SECTION 10.6: WHY CHOOSE US SECTION (H2)
        ============================================================ */}
        < section className="py-20 border-y border-border bg-linear-to-b from-card/60 to-background/40 text-center overflow-hidden" >
          <SectionBadge icon={<Star className="w-4 h-4 text-yellow-400" />} text="Why Choose Us?" />
          <div className="max-w-7xl mx-auto px-6">
            <HeadingTitle2
              title1="Why Choose CoderLala"
              title2="as Your Web Development Partner?"
            />

            <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
              At CoderLala, we combine technical excellence with local expertise to deliver world-class web solutions tailored to businesses in Gurgaon and Delhi NCR. Our team of skilled developers leverages cutting-edge technologies including Next.js, React, Node.js, and MongoDB to build fast, secure, and scalable websites. <br /><br />We understand the local business landscape and create digital solutions that drive real results—increased traffic, higher conversions, and sustainable growth. With 25+ successful projects and 99% client satisfaction, we're the trusted web development partner for businesses of all sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Reason 1: Cutting-Edge Technology */}

              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-blue-500 to-indigo-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Code2 className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Cutting-Edge Technology</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  We use the latest frameworks like Next.js and React to build high-performance websites
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
                  We deliver projects on time with 99% client satisfaction rate
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 justify-center">
              {/* Optional CTA Button */}
              <QuoteCTA scrollToForm={scrollToForm} />
            </div>
          </div>
        </section >

        {/* ============================================================
        SECTION 10.7: SERVICES SECTION (H2)
        ============================================================ */}

        < section id="services" className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden" >
          {/* Background Effects */}
          < div className="absolute inset-0 -z-10 pointer-events-none" >
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-linear-to-br from-blue-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-linear-to-tl from-orange-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-orange-500/5 blur-3xl rounded-full" />
          </div >

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-5xl mx-auto mb-14 space-y-3">
              <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="CoderLala Services" />
              <HeadingTitle2 title1={`Expert Web Development`} title2={`Services in ${CITY}`} />
              <p className="text-muted-foreground text-md max-w-4xl mx-auto">
                From fast, interactive React applications to powerful backend systems, our team delivers secure, scalable, and high-performance web solutions for startups, SMEs, and enterprises. <br /><br />
                We build modern websites and custom web applications using the latest technologies to ensure exceptional user experiences, long-term reliability, and future-ready digital solutions. Explore our comprehensive web development services below to discover how we can help bring your vision to life.
              </p>
            </div>

            {/* Feature Grid - 3x2 Layout */}
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

            {/* CTA Buttons */}
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
        </section >

        {/* ============================================================
        SECTION 10.8: DEVELOPMENT PROCESS SECTION (H2)
        ============================================================ */}
        < section className="py-20 border-y border-border bg-linear-to-b from-card/60 to-background/40 text-center overflow-hidden" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionBadge icon={<Zap className="w-4 h-4 text-blue-500 dark:text-blue-300" />} text="Our Development Process" />
              <HeadingTitle2 title1="How We Transform Your Ideas" title2="Into Powerful Digital Experiences" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                We follow a strategic and transparent development process to create high-quality websites that are secure, scalable, and performance-driven.
                <br /><br />
                From understanding your business requirements and designing intuitive user experiences to development, testing, and deployment, every step is carefully executed to deliver reliable digital solutions tailored to your goals.
              </p>
            </div>

            <div className="text-left">
              <ServiceProcessSection />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-10 sm:gap-4 justify-center">

              {/* Optional CTA Button */}
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
            Our technology stack combines modern frontend frameworks, powerful backend technologies, scalable databases, cloud platforms, and industry-leading development tools to deliver secure, high-performance digital solutions.
            <br /><br />
            Explore the technologies below that we use to build fast, scalable, and future-ready websites and web applications.
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
          <div className="flex flex-col sm:flex-row mt-10 gap-3 sm:gap-4 justify-center">

            <div className="flex gap-4 justify-center items-center mt-10 mx-auto">
              <QuoteCTA scrollToForm={scrollToForm} />
            </div>
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

              <HeadingTitle2 title1="Trusted Web Development Company" title2="Serving Businesses Across India" />
              <p className="text-muted-foreground max-w-4xl mx-auto text-md">
                Don't just take our word for it—discover what our clients have to say about working with us. <br /> <br />From custom websites and web applications to eCommerce solutions, businesses across industries trust CoderLala for quality, innovation, timely delivery, and exceptional customer service.
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
            <div className="flex flex-col sm:flex-row mt-10 gap-3 sm:gap-4 justify-center">

              {/* Optional CTA Button */}
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
                Find answers to the most common questions about our <strong>web development services in Gurgaon</strong>, including custom website development, eCommerce solutions, web applications, project timelines, technologies, pricing, maintenance, and ongoing support. <br /> <br />Learn how CoderLala delivers secure, scalable, and high-performance digital solutions tailored to your business needs.
              </p>
            </div>

            {/* FAQ Accordion */}
            <FAQAccordion faqs={faqs} />
          </div>
        </section >

        {/* ============================================================
        SECTION 10.13: FINAL CTA SECTION (H2)
        ============================================================ */}
        < FinalCTA scrollToForm={scrollToForm} />


      </div >
    </>
  );
}