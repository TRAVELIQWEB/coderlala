// app/ai-ml-solutions-gurgaon/AIMLSolutionsClient.tsx
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
  Server,
  Database,
  Layout,
  Search,
  Brain,
  LineChart,
  BarChart3,
  Send,
} from "lucide-react";

import { HeadingTitle2, HeroTitleLocation } from "@/app/components/HeroTitle";
import { FAQAccordion } from "../component/ServiceFAQAccordion";
import { FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiElasticsearch,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";
import { motion } from "framer-motion";
import Breadcrumbs from "../component/location/Breadcrumbs";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/app/constants";
import { generateFAQs, generateFAQSchema } from "./faqs";
import { services } from "@/app/(main)/services/data/services/service";
import { AI_ML_GURGAON_PAGE_NAME, CITY, CITY_SLUG, contactInfo, SITE_URL } from "@/data/ContactInfo";
import { useScrollToForm } from "@/hooks/useScrollToForm";
import { SectionBadge } from "../component/location/SectionBadge";
import { Button, QuoteCTA } from "../component/location/Button";
import ContactForm from "@/app/components/ContactForm";
import ServiceProcessSection from "./ServiceProcessSection";
import { FinalCTA } from "../component/location/FinalCTA";
import { SliderBadge } from "../component/location/SliderBadge";
import ServiceCard from "../component/location/FeatureCard";
import ClientLogoSlider from "../component/location/ClientLogoSlider";

// ============================================================
// SECTION 2: CONSTANTS & CONFIGURATION
// ============================================================
const SERVICE_SLUG = "ai-ml-solutions";
const CANONICAL_URL = `${SITE_URL}/ai-ml-solutions-${CITY_SLUG}`;
const HERO_TAGS = ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics", "OpenAI"];
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
    name: "Dr. Priya Mehta",
    role: "Chief Data Officer",
    company: "Analytics Corp India",
    text: "AI solutions brought tremendous improvement in our data analysis. Saved lakhs! The machine learning models made our business decisions smarter.",
    rating: 5,
    image: "PM",
    color: "from-blue-500 to-teal-500",
  },
  {
    name: "Rakesh Kumar",
    role: "CEO",
    company: "InsurTech",
    text: "Machine learning models made our business decisions smarter. The predictive analytics have been a game-changer for our underwriting process.",
    rating: 5,
    image: "RK",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Suman Gupta",
    role: "VP Customer Success",
    company: "SupportAI",
    text: "With the NLP chatbot, 80% of support is now automated, and customer satisfaction is high! The ROI has been incredible.",
    rating: 5,
    image: "SG",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Ankit Sharma",
    role: "CTO",
    company: "HealthTech Innovations",
    text: "The computer vision solution they built for our medical imaging platform has significantly improved diagnostic accuracy. Exceptional work.",
    rating: 5,
    image: "AS",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Meera Reddy",
    role: "Head of Analytics",
    company: "E-Commerce Giant",
    text: "The recommendation engine built by CoderLala increased our cross-sell revenue by 45%. The AI models are incredibly accurate.",
    rating: 5,
    image: "MR",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Vikram Singh",
    role: "Director of Innovation",
    company: "FinTech Solutions",
    text: "Their predictive analytics platform has transformed our fraud detection capabilities. We've seen a 60% reduction in false positives.",
    rating: 4,
    image: "VS",
    color: "from-blue-500 to-blue-500",
  },
];

// ============================================================
// SECTION 5: TECH STACK DATA
// ============================================================
const techStack = [
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
  { name: "PyTorch", icon: SiPytorch, color: "text-red-600" },
  { name: "OpenAI", icon: Brain, color: "text-green-500" },
  { name: "scikit-learn", icon: SiScikitlearn, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "Elasticsearch", icon: SiElasticsearch, color: "text-yellow-500" },
];

// ============================================================
// SECTION 6: HELPER COMPONENT - GraduationCap Icon
// ============================================================

// ============================================================
// SECTION 7: MAIN COMPONENT - AIMLSolutionsClient
// ============================================================

export default function AIMLSolutionsClient() {
  // ============================================================
  // SECTION 7.1: REFS & STATE MANAGEMENT
  // ============================================================
  const { formRef, inputRef, scrollToForm } = useScrollToForm({
    delay: 650,
    block: "start",
  });
  const [activeIndex, setActiveIndex] = useState(0);
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
    name: `CoderLala - Best AI & ML Solutions Company in ${CITY}`,
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
    description: `CoderLala is a leading AI and ML solutions company in ${CITY} offering custom machine learning models, NLP, computer vision, and predictive analytics.`,
    priceRange: serviceData?.priceRange || "₹5,00,000 - ₹50,00,000+",

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
        ratingValue: "5",
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
              { "@type": "ListItem", "position": 2, "name": "AI & ML Solutions Company in Gurgaon", "item": CANONICAL_URL },
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
          <div className="absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-purple-400/15 blur-[100px] animate-float" style={{ animationDelay: "4s" }} />

          <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-7 space-y-7">
              <Breadcrumbs
                items={[
                  { label: "AI & ML Solutions in Gurgaon", active: true },
                ]}
              />

              <HeroTitleLocation
                title1="Best AI & ML Solutions"
                title2={`Company in ${CITY}`}
              />

              <p className="text-muted-foreground text-md lg:pr-10">
                <strong className="text-brand">CoderLala</strong> is the premier <strong className="text-brand">AI and ML solutions company in {CITY}</strong>,
                headquartered at <strong className="text-brand">JMD Megapolis, Sector 48, Gurugram</strong>,
                serving businesses across Gurgaon, Noida, Delhi NCR and beyond.

                <br /><br />

                As a trusted <strong>AI solutions agency in Gurgaon</strong>, we specialize in building
                <strong className="text-brand"> custom machine learning models</strong>, <strong className="text-brand">NLP systems</strong>,
                <strong className="text-brand">computer vision solutions</strong>, and <strong className="text-brand">predictive analytics platforms </strong>
                using cutting-edge technologies like TensorFlow, PyTorch, and OpenAI.

                <br /><br />

                Whether you're a startup in Cyber City, an enterprise in Udyog Vihar, or a business near MG Road,
                our local AI team is ready to help you leverage the power of artificial intelligence to transform your business.
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
                  { k: "85%", v: "Accuracy Rate" },
                  { k: "10x", v: "Speed Improvement" },
                  { k: "₹500K+", v: "Cost Savings" },
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
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-blue-400/20 via-blue-400/15 to-purple-400/20 blur-2xl dark:from-blue-500/15 dark:to-blue-500/15"></div>
              <div className="relative overflow-hidden rounded-2xl border border-border glass-card-without-hover backdrop-blur-sm shadow-xl">
                <div className="h-1 w-full bg-linear-to-r from-blue-600 via-blue-500 to-purple-500"></div>
                <div className="p-6">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold tracking-tight text-primary">
                      🚀 Build Your AI Solution — {CITY}'s #1 AI & ML Agency
                    </h3>
                    <p className="text-muted-foreground text-sm mt-4">
                      Share your AI/ML requirements and get a free, personalized roadmap from
                      {CITY}'s AI engineering experts. No hidden costs.
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

          <HeadingTitle2 title1="Companies That" title2="Trust Our AI Solutions" />

          <p className="text-muted-foreground text-md mb-10 max-w-4xl px-4 mx-auto">
            As a trusted <strong>AI & ML Solutions Company in Gurgaon</strong>, we help businesses harness the power of artificial intelligence and machine learning to drive innovation, automate processes, and gain competitive advantages.<br /><br />
            Our experienced AI engineers combine deep technical expertise with domain knowledge to deliver intelligent solutions that solve complex business problems and create measurable value.
          </p>

          <ClientLogoSlider serviceName={AI_ML_GURGAON_PAGE_NAME} city={CITY} />

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
                    AI & ML Engineering Experts
                  </span>
                </h2>

                <p className="text-muted-foreground text-md mb-4 max-w-3xl mx-auto">
                  CoderLala is a leading <strong>AI and ML solutions company in Gurgaon </strong>
                  helping businesses harness the power of artificial intelligence and machine learning
                  to drive innovation, automate processes, and gain competitive advantages.
                  <br /><br />From custom machine learning models and NLP systems to computer vision
                  and predictive analytics platforms, we create intelligent solutions designed to
                  solve complex business problems and create measurable value.
                </p>

                <p className="text-muted-foreground text-md mb-10 max-w-3xl mx-auto">
                  Our experienced AI engineers specialize in modern technologies including
                  TensorFlow, PyTorch, OpenAI, scikit-learn, and cloud-based AI services.
                  Every solution is designed for accuracy, scalability, and production-ready
                  deployment to help your business succeed in the AI-driven world.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2">✅ Custom Machine Learning Models</div>
                  <div className="flex items-center gap-2">✅ Natural Language Processing</div>
                  <div className="flex items-center gap-2">✅ Computer Vision Solutions</div>
                  <div className="flex items-center gap-2">✅ Predictive Analytics Platforms</div>
                  <div className="flex items-center gap-2">✅ Chatbots & Virtual Assistants</div>
                  <div className="flex items-center gap-2">✅ Recommendation Systems</div>
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
                  src="/images/premium-ai-ml-solutions-gurgaon-office-team.webp"
                  alt="Professional AI ML engineering team at CoderLala office in Gurgaon working on machine learning projects"
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
                    { k: "85%", v: "Accuracy" },
                    { k: "15+", v: "Industries" },
                    { k: "10x", v: "Speed Gain" },
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
              title2="as Your AI & ML Partner?"
            />

            <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
              At CoderLala, we combine deep AI expertise with local presence to deliver world-class machine learning solutions tailored to businesses in Gurgaon and Delhi NCR. Our team of skilled AI engineers specializes in TensorFlow, PyTorch, NLP, computer vision, and predictive analytics to build intelligent systems that solve complex business problems. <br /><br />We understand the importance of data-driven decision making, and we create solutions that drive real results—85%+ accuracy, 10x speed improvements, and significant cost savings. With a strong focus on production-ready AI, we're the trusted AI partner for businesses of all sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-blue-500 to-blue-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-blue-500 to-blue-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Brain className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Custom ML Models</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Tailored machine learning models built for your specific business needs
                </p>
              </div>

              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-orange-500 to-orange-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-orange-500 to-orange-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <LineChart className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Predictive Analytics</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Data-driven predictions that enable smarter business decisions
                </p>
              </div>

              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-green-500 to-emerald-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-green-500 to-emerald-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Rocket className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Production Ready</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Enterprise-grade AI solutions ready for production deployment
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
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-linear-to-br from-cyan-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-linear-to-tl from-blue-500/10 to-transparent blur-3xl rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 blur-3xl rounded-full" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-5xl mx-auto mb-14 space-y-3">
              <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="CoderLala Services" />
              <HeadingTitle2 title1={`Expert AI & ML Solutions`} title2={`Services in ${CITY}`} />
              <p className="text-muted-foreground text-md max-w-4xl mx-auto">
                From custom machine learning models and natural language processing to computer vision and predictive analytics, our <strong className="text-brand">AI & ML Solutions Company in {CITY}</strong> delivers intelligent solutions that solve complex business problems and create measurable value. <br /><br />
                We build production-ready AI systems using the latest technologies to ensure accuracy, scalability, and real-world impact. Explore our comprehensive AI and ML services below.
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
              <HeadingTitle2 title1="How We Build Your AI Solution" title2="Into Powerful Intelligent Systems" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                As a leading <strong>AI & ML Solutions Company in Gurgaon </strong>, we follow a strategic and transparent development process to create intelligent systems that are accurate, scalable, and production-ready.
                <br /><br />
                From understanding your business challenge and analyzing data to model development, deployment, and continuous improvement, every step is carefully executed to deliver reliable AI solutions tailored to your goals.
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
            Our technology stack combines cutting-edge AI frameworks, powerful programming languages, scalable infrastructure, and industry-leading tools to deliver intelligent, production-ready solutions.
            <br /><br />
            Explore the technologies below that our <strong>AI & ML Solutions Company in Gurgaon</strong> uses to build accurate, scalable, and future-ready AI systems.
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

              <HeadingTitle2 title1="Trusted AI & ML Solutions Company" title2="Serving Businesses Across India" />
              <p className="text-muted-foreground max-w-4xl mx-auto text-md">
                Don't just take our word for it—discover what our clients have to say about working with our <strong>AI & ML Solutions Company in Gurgaon</strong>. <br /> <br />From custom machine learning models to NLP and computer vision solutions, businesses across industries trust CoderLala for innovation, accuracy, and exceptional AI engineering expertise.
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
                Find answers to the most common questions about our <strong>AI and ML solutions in Gurgaon</strong>, including technology choices, model accuracy, data requirements, deployment, and ongoing support. <br /> <br />Learn how CoderLala delivers accurate, scalable, and production-ready AI systems tailored to your business needs.
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