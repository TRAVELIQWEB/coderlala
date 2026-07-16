// app/ui-ux-design-gurgaon/UIUXDesignClient.tsx
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
  Quote,
  Server,
  Database,
  Layout,
  Search,
  Palette,
  Brain,
  MousePointer,
  Layers,
  Send,
  BarChart3,
} from "lucide-react";
import { HeadingTitle2, HeroTitleLocation } from "@/app/components/HeroTitle";
import { FAQAccordion } from "../component/ServiceFAQAccordion";
import ServiceProcessSection from "./ServiceProcessSection";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiCss,
  SiGit,
  SiGithub,
  SiFigma,
  SiSketch,
  SiInvision,
  SiWebflow,
} from "react-icons/si";
import { motion } from "framer-motion";
import Breadcrumbs from "../component/location/Breadcrumbs";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/app/constants";
import { generateFAQs, generateFAQSchema } from "./faqs";
import { services } from "@/app/(main)/services/data/services/service";
// import { ServiceCardLocation, ServicesButton } from "@/app/components/services/ServiceCard";
import { CITY, CITY_SLUG, contactInfo } from "@/data/ContactInfo";
import { useScrollToForm } from "@/hooks/useScrollToForm";
import { SectionBadge } from "../component/location/SectionBadge";
// import { QuoteCTA } from "../component/location/QuoteCTA";
import { Button, QuoteCTA } from "../component/location/Button";
import ContactForm from "@/app/components/ContactForm";
import { FinalCTA } from "../component/location/FinalCTA";
import { SliderBadge } from "../component/location/SliderBadge";
import ClientLogoSlider from "../component/location/ClientLogoSlider";
import ServiceCard from "../component/location/FeatureCard";

// ============================================================
// SECTION 2: CONSTANTS & CONFIGURATION
// ============================================================

const SERVICE_SLUG = "ui-ux-design";
const HERO_TAGS = ["Figma", "Adobe XD", "Design Systems", "Prototyping", "User Research"];
const Related_Services = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Machine Learning Models",
    desc: "Custom ML models for classification, regression, and time series forecasting.",
    iconBg: "bg-purple-500"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "NLP Solutions",
    desc: "Natural language processing for sentiment analysis, chatbots, and document understanding.",
    iconBg: "bg-blue-500"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Computer Vision",
    desc: "Image classification, object detection, OCR, and facial recognition solutions.",
    iconBg: "bg-cyan-500"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Predictive Analytics",
    desc: "Demand forecasting, churn prediction, risk assessment, and fraud detection.",
    iconBg: "bg-orange-500"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "LLM Integration",
    desc: "Large Language Model integration for content generation and conversational AI.",
    iconBg: "bg-green-500"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "MLOps Services",
    desc: "Model deployment, monitoring, versioning, and automated retraining pipelines.",
    iconBg: "bg-indigo-500"
  }
];

// Get the service data from the services array
const serviceData = services.find(s => s.slug === SERVICE_SLUG);

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
    name: "Sakshi Sharma",
    role: "Product Manager",
    company: "RetailTech",
    text: "Our product's UI/UX has completely changed. Users are much happier now and conversions increased by 45%. The design system they created is exceptional.",
    rating: 5,
    image: "SS",
    color: "from-blue-500 to-amber-500",
  },
  {
    name: "Arjun Mehta",
    role: "Design Director",
    company: "InteractiveStudios",
    text: "Best in both design thinking and systems. They created a custom design system for us that has streamlined our entire product development process.",
    rating: 5,
    image: "AM",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Priyanka Patel",
    role: "CEO",
    company: "StartupHub",
    text: "Professional and collaborative team. The design system made development faster. Our users love the new interface and we've seen a significant boost in engagement.",
    rating: 5,
    image: "PP",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Rahul Singh",
    role: "Head of Product",
    company: "FinTech Solutions",
    text: "The user research and testing they conducted gave us invaluable insights. The final design not only looks beautiful but also addresses real user pain points.",
    rating: 5,
    image: "RS",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Meera Reddy",
    role: "VP of Experience",
    company: "E-Commerce Giant",
    text: "The redesign of our mobile app resulted in a 60% increase in user retention. Their UX expertise is world-class and they truly understand user behavior.",
    rating: 5,
    image: "MR",
    color: "from-cyan-500 to-teal-500",
  },
  {
    name: "Vikram Kumar",
    role: "CTO",
    company: "HealthTech Platform",
    text: "The accessibility-first approach they implemented has made our product usable for everyone. We've received positive feedback from users with disabilities.",
    rating: 4,
    image: "VK",
    color: "from-green-500 to-emerald-500",
  },
];

// ============================================================
// SECTION 5: TECH STACK DATA
// ============================================================
const techStack = [
  { name: "Figma", icon: SiFigma, color: "text-purple-500" },
  { name: "Sketch", icon: SiSketch, color: "text-orange-500" },
  { name: "InVision", icon: SiInvision, color: "text-red-500" },
  { name: "Webflow", icon: SiWebflow, color: "text-blue-500" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "CSS3", icon: SiCss, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "GitHub", icon: SiGithub, color: "text-black! dark:text-white" },
];

// ============================================================
// SECTION 6: HELPER COMPONENT - GraduationCap Icon
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
// SECTION 7: MAIN COMPONENT - UIUXDesignClient
// ============================================================

export default function UIUXDesignClient() {
  // ============================================================
  // SECTION 7.1: REFS & STATE MANAGEMENT
  // ============================================================
  const { formRef, inputRef, scrollToForm } = useScrollToForm({
    delay: 650,
    block: "start",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [clientLogoIndex, setClientLogoIndex] = useState(0);
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
    name: `CoderLala - Best UI/UX Design Company in ${CITY}`,
    image: "https://coderlala.com/logo/CoderLalaLogoDark.svg",
    url: `https://coderlala.com/ui-ux-design-${CITY_SLUG}`,
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
    description: `CoderLala is a leading UI/UX design company in ${CITY} offering user-centered design, wireframing, prototyping, and design systems.`,
    priceRange: serviceData?.priceRange || "₹1,00,000 - ₹10,00,000+",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1), // e.g. 4.9
      reviewCount: testimonials.length.toString(),
      bestRating: "4",
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
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://coderlala.com",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "UI/UX Design Company in Gurgaon",
                "item": `https://coderlala.com/ui-ux-design-${CITY_SLUG}`,
              },
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
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-amber-600/20 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-orange-400/15 blur-[100px] animate-float" style={{ animationDelay: "4s" }} />

          <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-7 space-y-7">
              <Breadcrumbs
                items={[
                  { label: "UI/UX Design in Gurgaon", active: true },
                ]}
              />

              <HeroTitleLocation
                title1="Best UI/UX Design"
                title2={`Company in ${CITY}`}
              />

              <p className="text-muted-foreground text-md lg:pr-10">
                <strong className="text-brand">CoderLala</strong> is the premier <strong className="text-brand">UI/UX design company in {CITY}</strong>,
                headquartered at <strong className="text-brand">JMD Megapolis, Sector 48, Gurugram</strong>,
                serving businesses across Gurgaon, Noida, Delhi NCR and beyond.

                <br /><br />

                As a trusted <strong>design agency in Gurgaon</strong>, we specialize in
                <strong className="text-brand"> user-centered design, </strong>
                <strong className="text-brand">wireframing and prototyping, </strong>
                <strong className="text-brand">design systems, </strong>
                and <strong className="text-brand">interactive user experiences </strong>
                using tools like Figma, Adobe XD, and Sketch.

                <br /><br />

                Whether you're a startup in Cyber City, an enterprise in Udyog Vihar, or a business near MG Road,
                our local design team is ready to help you create beautiful, intuitive, and user-friendly interfaces.
              </p>

              {/* Tags/Badges */}
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
                  { k: "45%", v: "Conversion Increase" },
                  { k: "60%", v: "Task Completion" },
                  { k: "90%", v: "User Satisfaction" },
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
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-blue-400/20 via-amber-400/15 to-orange-400/20 blur-2xl dark:from-blue-500/15 dark:to-amber-500/15"></div>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-xl">
                <div className="h-1 w-full bg-linear-to-r from-blue-600 via-amber-500 to-orange-500"></div>
                <div className="p-6">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold tracking-tight text-primary">
                      🎨 Build Your Design — {CITY}'s #1 UI/UX Design Agency
                    </h3>
                    <p className="text-muted-foreground text-sm mt-4">
                      Share your design requirements and get a free, personalized roadmap from
                      {CITY}'s UI/UX design experts. No hidden costs.
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-amber-500/10 backdrop-blur-sm border border-white/20 mb-4 lg:mb-6">
              <Users className="w-4 h-4 text-blue-500 dark:text-blue-300" />
              <span className="text-sm font-medium">
                Our Trusted Clients
              </span>
            </div>
          </div>

          <HeadingTitle2 title1="Companies That" title2="Trust Our Design Solutions" />

          <p className="text-muted-foreground text-md mb-10 max-w-4xl px-4 mx-auto">
            As a trusted <strong>UI/UX Design Company in Gurgaon</strong>, we help businesses create beautiful, intuitive, and user-friendly interfaces that drive user engagement, increase conversions, and build brand loyalty.<br /><br />
            Our experienced design team combines user research, design thinking, and visual design expertise to deliver exceptional user experiences that solve real user problems and create measurable business impact.
          </p>

          <ClientLogoSlider serviceName={SERVICE_SLUG} />

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
                    UI/UX Design Experts
                  </span>
                </h2>

                <p className="text-muted-foreground text-md mb-4 max-w-3xl mx-auto">
                  CoderLala is a leading <strong>UI/UX design company in Gurgaon </strong>
                  helping businesses create beautiful, intuitive, and user-friendly interfaces
                  that drive user engagement, increase conversions, and build brand loyalty.
                  <br /><br />From user research and wireframing to interactive prototyping
                  and design systems, we create design solutions designed to solve real user
                  problems and create measurable business impact.
                </p>

                <p className="text-muted-foreground text-md mb-10 max-w-3xl mx-auto">
                  Our experienced designers specialize in modern design tools and methodologies
                  including Figma, Adobe XD, Sketch, design thinking, and user-centered design.
                  Every design is crafted with a focus on usability, accessibility, and aesthetics
                  to help your business succeed in the digital world.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2">✅ User Research & Discovery</div>
                  <div className="flex items-center gap-2">✅ Wireframing & Prototyping</div>
                  <div className="flex items-center gap-2">✅ Design Systems</div>
                  <div className="flex items-center gap-2">✅ Interactive Prototypes</div>
                  <div className="flex items-center gap-2">✅ Usability Testing</div>
                  <div className="flex items-center gap-2">✅ Accessibility Compliance</div>
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
                  src="/images/premium-ui-ux-design-gurgaon-office-team.webp"
                  alt="Professional UI UX design team at CoderLala office in Gurgaon working on design projects"
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
                    { k: "20+", v: "Design Projects" },
                    { k: "15+", v: "Industries" },
                    { k: "90%", v: "Satisfaction" },
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
          <SectionBadge icon={<Star className="w-4 h-4 text-blue-400" />} text="Why Choose Us?" />
          <div className="max-w-7xl mx-auto px-6">
            <HeadingTitle2
              title1="Why Choose CoderLala"
              title2="as Your UI/UX Design Partner?"
            />

            <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
              At CoderLala, we combine deep design expertise with local presence to deliver world-class user experiences tailored to businesses in Gurgaon and Delhi NCR. Our team of skilled designers specializes in user research, wireframing, prototyping, and design systems to create interfaces that users love. <br /><br />We understand the importance of user-centered design, and we create solutions that drive real results—45% conversion increases, 60% task completion rates, and 90% user satisfaction. With 20+ successful design projects and 4.9-star client ratings, we're the trusted design partner for businesses of all sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-blue-500 to-amber-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-blue-500 to-amber-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Palette className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">User-Centered Design</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Design solutions focused on solving real user problems and needs
                </p>
              </div>

              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-orange-500 to-orange-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-orange-500 to-orange-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Layers className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Design Systems</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Comprehensive design systems for consistent and scalable product development
                </p>
              </div>

              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-green-500 to-emerald-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-green-500 to-emerald-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <MousePointer className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Usability Testing</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Data-driven design decisions with user testing and feedback
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
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-linear-to-br from-yellow-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-linear-to-tl from-amber-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-br from-yellow-500/5 via-amber-500/5 to-orange-500/5 blur-3xl rounded-full" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-5xl mx-auto mb-14 space-y-3">
              <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="CoderLala Services" />
              <HeadingTitle2 title1={`Expert UI/UX Design`} title2={`Services in ${CITY}`} />
              <p className="text-muted-foreground text-md max-w-4xl mx-auto">
                From user research and wireframing to interactive prototyping and design systems, our <strong className="text-brand">UI/UX Design Company in {CITY}</strong> delivers beautiful, intuitive, and user-friendly interfaces that drive user engagement and business growth. <br /><br />
                We create design solutions using the latest tools and methodologies to ensure exceptional user experiences and measurable business impact. Explore our comprehensive UI/UX design services below.
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
              <SectionBadge icon={<Zap className="w-4 h-4 text-blue-500 dark:text-blue-300" />} text="Our Design Process" />
              <HeadingTitle2 title1="How We Design Your Product" title2="Into Exceptional User Experiences" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                As a leading <strong>UI/UX Design Company in Gurgaon</strong>, we follow a strategic and human-centered design process to create beautiful, intuitive, and user-friendly interfaces.
                <br /><br />
                From understanding your users and business goals to designing, testing, and refining, every step is carefully executed to deliver design solutions that solve real user problems and drive business growth.
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
          <SectionBadge icon={<Sparkles className="w-4 h-4 text-blue-400" />} text="Our Design Approach" />
          <HeadingTitle2 title1="Powering Innovation with" title2="Modern Design Tools" />

          <p className="text-muted-foreground text-md px-4 max-w-4xl mx-auto mb-10">
            Our design toolkit combines industry-leading design tools, prototyping platforms, and frontend technologies to deliver beautiful, functional, and scalable user interfaces.
            <br /><br />
            Explore the tools and technologies below that our <strong>UI/UX Design Company in Gurgaon</strong> uses to create exceptional user experiences.
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
                icon={<Quote className="w-3 h-3 md:w-4 md:h-4" />} text="Building Success Through Design"
              />

              <HeadingTitle2 title1="Trusted UI/UX Design Company" title2="Serving Businesses Across India" />
              <p className="text-muted-foreground max-w-4xl mx-auto text-md">
                Don't just take our word for it—discover what our clients have to say about working with our <strong>UI/UX Design Company in Gurgaon</strong>. <br /> <br />From design systems to interactive prototypes, businesses across industries trust CoderLala for creativity, innovation, and exceptional design expertise.
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
                icon={<Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />} text="Frequently Asked Questions" />
              <HeadingTitle2 title1="Need More Information?" title2="Get Answers from CoderLala" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                Find answers to the most common questions about our <strong>UI/UX design services in Gurgaon</strong>, including design process, tools, timelines, design systems, and ongoing support. <br /> <br />Learn how CoderLala delivers beautiful, intuitive, and user-friendly interfaces tailored to your business needs.
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