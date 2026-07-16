// app/cloud-devops-gurgaon/CloudDevOpsClient.tsx
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
  Database,
  Shield,
  Cpu,
  Workflow,
  Cloud,
  BarChart3,
  Send,
} from "lucide-react";
import { FAQAccordion } from "../component/ServiceFAQAccordion";
import { HeadingTitle2, HeroTitleLocation } from "@/app/components/HeroTitle";
import ServiceProcessSection from "./ServiceProcessSection";
import { FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiGooglecloud,
  // SiMicrosoftazure,
  SiAnsible,
  SiGitlab,
  SiGithubactions,
} from "react-icons/si";
import { motion } from "framer-motion";
import Breadcrumbs from "../component/location/Breadcrumbs";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/app/constants";
import { generateFAQs, generateFAQSchema } from "./faqs";
import { services } from "@/app/(main)/services/data/services/service";
import { CITY, CITY_SLUG, contactInfo } from "@/data/ContactInfo";
import { useScrollToForm } from "@/hooks/useScrollToForm";
import { SectionBadge } from "../component/location/SectionBadge";
import { Button, QuoteCTA } from "../component/location/Button";
import ContactForm from "@/app/components/ContactForm";
import { FinalCTA } from "../component/location/FinalCTA";
import { SliderBadge } from "../component/location/SliderBadge";
import ServiceCard from "../component/location/FeatureCard";
import ClientLogoSlider from "../component/location/ClientLogoSlider";

// ============================================================
// SECTION 2: CONSTANTS & CONFIGURATION
// ============================================================
const SERVICE_SLUG = "cloud-devops";
const HERO_TAGS = ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"];
const Related_Services = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Multi-Cloud Deployment",
    desc: "AWS, Azure, and GCP deployment with best-in-class architecture and security.",
    iconBg: "bg-blue-500"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Kubernetes Orchestration",
    desc: "Container orchestration with Kubernetes for scalable and resilient applications.",
    iconBg: "bg-indigo-500"
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "CI/CD Pipelines",
    desc: "Automated testing and deployment pipelines for consistent, reliable releases.",
    iconBg: "bg-purple-500"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Infrastructure as Code",
    desc: "Version-controlled infrastructure with Terraform and CloudFormation.",
    iconBg: "bg-green-500"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cloud Security",
    desc: "Comprehensive security measures including IAM, encryption, and regular audits.",
    iconBg: "bg-red-500"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Monitoring & Observability",
    desc: "Real-time monitoring, logging, and alerting with Prometheus, Grafana, and ELK Stack.",
    iconBg: "bg-cyan-500"
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
    name: "Ajay Singh",
    role: "Tech Lead",
    company: "SaaS Company",
    text: "With DevOps and cloud migration, our uptime reached 99.9% and costs reduced by 40%. The CI/CD pipeline made deployment very easy and fast.",
    rating: 5,
    image: "AS",
    color: "from-blue-500 to-blue-500",
  },
  {
    name: "Ruchi Agarwal",
    role: "Engineering Manager",
    company: "FinTech",
    text: "CI/CD pipeline made deployment very easy and fast. Now we can deploy multiple times a day. The team's expertise in Kubernetes is exceptional.",
    rating: 5,
    image: "RA",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Sandeep Mishra",
    role: "CTO",
    company: "HealthTech",
    text: "Best in both infrastructure design and security. The team is very professional. Our cloud infrastructure is now scalable, secure, and cost-optimized.",
    rating: 5,
    image: "SM",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Priya Sharma",
    role: "DevOps Lead",
    company: "E-Commerce Platform",
    text: "The Kubernetes cluster they set up handles our traffic spikes seamlessly. Auto-scaling works perfectly during sale events.",
    rating: 5,
    image: "PS",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Vikram Reddy",
    role: "Infrastructure Head",
    company: "LogisticsTech",
    text: "Terraform and infrastructure as code has transformed how we manage our cloud resources. Everything is now version-controlled and auditable.",
    rating: 4,
    image: "VR",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Meera Iyer",
    role: "VP Engineering",
    company: "EdTech Platform",
    text: "The monitoring and alerting system they implemented has been invaluable. We now detect and resolve issues before they impact users.",
    rating: 5,
    image: "MI",
    color: "from-cyan-500 to-blue-500",
  },
];

// ============================================================
// SECTION 5: TECH STACK DATA
// ============================================================
const techStack = [
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-500" },
  // { name: "Azure", icon: SiMicrosoftazure, color: "text-blue-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
  { name: "Ansible", icon: SiAnsible, color: "text-red-600" },
  { name: "Jenkins", icon: SiJenkins, color: "text-red-600" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-black! dark:text-white" },
  { name: "GitLab CI", icon: SiGitlab, color: "text-orange-500" },
  { name: "Prometheus", icon: SiPrometheus, color: "text-red-600" },
  { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
  { name: "Elasticsearch", icon: SiElasticsearch, color: "text-yellow-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
];

// ============================================================
// SECTION 6: HELPER COMPONENT - GraduationCap Icon
// ============================================================

// ============================================================
// SECTION 7: MAIN COMPONENT - CloudDevOpsClient
// ============================================================

export default function CloudDevOpsClient() {
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

  // ============================================================
  // SECTION 7.3: CLIENT LOGOS DATA
  // ============================================================
  const clientLogos = [
    {
      id: 1,
      name: "Aquarius Lab",
      logo: "/images/client-logo/aquarius-lab.webp",
      width: 800,
      height: 800,
      alt: "Aquarius Lab logo - trusted client of CoderLala cloud DevOps company in Gurgaon"
    },
    {
      id: 2,
      name: "Jindal Dental Care",
      logo: "/images/client-logo/jindal-dental-care-and-implant-centre.webp",
      width: 800,
      height: 800,
      alt: "Jindal Dental Care logo - trusted client of CoderLala cloud DevOps company in Gurgaon"
    },
    {
      id: 3,
      name: "Kreative Dentistry",
      logo: "/images/client-logo/kreative-dentistry.webp",
      width: 800,
      height: 800,
      alt: "Kreative Dentistry logo - trusted client of CoderLala cloud DevOps company in Gurgaon"
    },
    {
      id: 4,
      name: "Mohindra Eco Pipes",
      logo: "/images/client-logo/mohindra-eco-pipes-logo.webp",
      width: 800,
      height: 800,
      alt: "Mohindra Eco Pipes logo - trusted client of CoderLala cloud DevOps company in Gurgaon"
    },
    {
      id: 5,
      name: "Narain Hospital",
      logo: "/images/client-logo/narain-hospital.webp",
      width: 800,
      height: 800,
      alt: "Narain Hospital logo - trusted client of CoderLala cloud DevOps company in Gurgaon"
    },
    {
      id: 6,
      name: "Webshlok",
      logo: "/images/client-logo/webshlok.webp",
      width: 800,
      height: 800,
      alt: "Webshlok logo - trusted client of CoderLala cloud DevOps company in Gurgaon"
    }
  ];

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

  useEffect(() => {
    const clientLogoTimer = setInterval(() => {
      setClientLogoIndex((prev) => (prev + 1) % clientLogos.length);
    }, 3000);
    return () => clearInterval(clientLogoTimer);
  }, [clientLogos.length]);

  // ============================================================
  // SECTION 7.5: COMPUTED VALUES
  // ============================================================
  const visibleClientLogos = clientLogos.slice(clientLogoIndex, clientLogoIndex + 5);
  if (clientLogoIndex + 5 > clientLogos.length) {
    visibleClientLogos.push(...clientLogos.slice(0, (clientLogoIndex + 5) % clientLogos.length));
  }

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
    name: `CoderLala - Best Cloud & DevOps Company in ${CITY}`,
    image: "https://coderlala.com/logo/CoderLalaLogoDark.svg",
    url: `https://coderlala.com/cloud-devops-${CITY_SLUG}`,
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
    description: `CoderLala is a leading cloud and DevOps company in ${CITY} offering AWS, Azure, GCP deployment, CI/CD pipelines, and Kubernetes orchestration.`,
    priceRange: serviceData?.priceRange || "₹2,00,000 - ₹15,00,000+",

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
                "name": "Cloud & DevOps Company in Gurgaon",
                "item": `https://coderlala.com/cloud-devops-${CITY_SLUG}`,
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
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-purple-400/15 blur-[100px] animate-float" style={{ animationDelay: "4s" }} />

          <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-7 space-y-7">
              <Breadcrumbs
                items={[
                  { label: "Cloud & DevOps in Gurgaon", active: true },
                ]}
              />

              <HeroTitleLocation
                title1="Best Cloud & DevOps"
                title2={`Company in ${CITY}`}
              />

              <p className="text-muted-foreground text-md lg:pr-10">
                <strong className="text-brand">CoderLala</strong> is the premier <strong className="text-brand">cloud and DevOps company in {CITY}</strong>,
                headquartered at <strong className="text-brand">JMD Megapolis, Sector 48, Gurugram</strong>,
                serving businesses across Gurgaon, Noida, Delhi NCR and beyond.

                <br /><br />

                As a trusted <strong>cloud infrastructure agency in Gurgaon</strong>, we specialize in
                <strong className="text-brand"> AWS, Azure, and GCP deployment, </strong>
                <strong className="text-brand">Kubernetes orchestration, </strong>
                <strong className="text-brand">CI/CD pipelines, </strong> and
                <strong className="text-brand"> infrastructure as code </strong>
                using tools like Terraform, Docker, and Jenkins.

                <br /><br />

                Whether you're a startup in Cyber City, an enterprise in Udyog Vihar, or a business near MG Road,
                our local cloud team is ready to help you build scalable, secure, and cost-optimized cloud infrastructure.
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
                  { k: "99.9%", v: "Uptime Guarantee" },
                  { k: "40%", v: "Cost Reduction" },
                  { k: "70%", v: "Faster Deployments" },
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
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-xl">
                <div className="h-1 w-full bg-linear-to-r from-blue-600 via-blue-500 to-purple-500"></div>
                <div className="p-6">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold tracking-tight text-primary">
                      🚀 Build Your Cloud Infrastructure — {CITY}'s #1 Cloud & DevOps Agency
                    </h3>
                    <p className="text-muted-foreground text-sm mt-4">
                      Share your cloud requirements and get a free, personalized roadmap from
                      {CITY}'s cloud infrastructure experts. No hidden costs.
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

          <HeadingTitle2 title1="Companies That" title2="Trust Our Cloud Solutions" />

          <p className="text-muted-foreground text-md mb-10 max-w-4xl px-4 mx-auto">
            As a trusted <strong>Cloud & DevOps Company in Gurgaon</strong>, we help businesses build scalable, secure, and cost-optimized cloud infrastructure that powers their applications and drives business growth.<br /><br />
            Our experienced cloud engineers combine deep infrastructure expertise with automation best practices to deliver reliable systems that handle traffic spikes, ensure high availability, and reduce operational costs.
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
                    Cloud & DevOps Engineering Experts
                  </span>
                </h2>

                <p className="text-muted-foreground text-md mb-4 max-w-3xl mx-auto">
                  CoderLala is a leading <strong>cloud and DevOps company in Gurgaon </strong>
                  helping businesses build scalable, secure, and cost-optimized cloud infrastructure
                  that powers their applications and drives business growth.
                  <br /><br />From cloud migration and Kubernetes orchestration to CI/CD pipelines
                  and infrastructure as code, we create cloud solutions designed to ensure
                  high availability, automate deployments, and reduce operational costs.
                </p>

                <p className="text-muted-foreground text-md mb-10 max-w-3xl mx-auto">
                  Our experienced cloud engineers specialize in modern technologies including
                  AWS, Azure, GCP, Docker, Kubernetes, Terraform, and CI/CD tools.
                  Every infrastructure is designed for scalability, security, and cost optimization
                  to help your business succeed in the cloud-first world.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2">✅ AWS, Azure, GCP Deployment</div>
                  <div className="flex items-center gap-2">✅ Kubernetes Orchestration</div>
                  <div className="flex items-center gap-2">✅ CI/CD Pipelines</div>
                  <div className="flex items-center gap-2">✅ Infrastructure as Code (Terraform)</div>
                  <div className="flex items-center gap-2">✅ Monitoring & Alerting</div>
                  <div className="flex items-center gap-2">✅ 24/7 Support</div>
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
                  src="/images/premium-cloud-devops-gurgaon-office-team.webp"
                  alt="Professional cloud DevOps engineering team at CoderLala office in Gurgaon working on infrastructure projects"
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
                    { k: "99.9%", v: "Uptime" },
                    { k: "20+", v: "Infrastructure" },
                    { k: "40%", v: "Cost Savings" },
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
              title2="as Your Cloud & DevOps Partner?"
            />

            <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-12">
              At CoderLala, we combine deep cloud expertise with local presence to deliver world-class infrastructure solutions tailored to businesses in Gurgaon and Delhi NCR. Our team of skilled cloud engineers specializes in AWS, Azure, GCP, Kubernetes, Terraform, and CI/CD to build scalable, secure, and cost-optimized systems. <br /><br />We understand the importance of reliability and performance, and we create solutions that drive real results—99.9% uptime, 40% cost reduction, and 70% faster deployments. With a strong focus on automation and best practices, we're the trusted cloud partner for businesses of all sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-blue-500 to-blue-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-blue-500 to-blue-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Cloud className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Multi-Cloud Expertise</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  AWS, Azure, and GCP deployment with best-in-class architecture
                </p>
              </div>

              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-orange-500 to-orange-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-orange-500 to-orange-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Workflow className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Automation First</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Infrastructure as code with CI/CD for consistent, reliable deployments
                </p>
              </div>

              <div className="group relative rounded-2xl bg-card border border-border/60 p-7 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 bg-linear-to-br from-green-500 to-emerald-600 opacity-10 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex items-center justify-center bg-linear-to-br from-green-500 to-emerald-600 mx-auto">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Shield className="relative h-7 w-7 text-white! drop-shadow-md" />
                </div>
                <h3 className="relative text-lg font-bold text-foreground my-2.5 text-center">Enterprise Security</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed flex-1 text-center">
                  Robust security practices with monitoring and compliance readiness
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-br from-indigo-500/5 via-blue-500/5 to-purple-500/5 blur-3xl rounded-full" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-5xl mx-auto mb-14 space-y-3">
              <SectionBadge icon={<Sparkles className="w-4 h-4 text-yellow-400" />} text="CoderLala Services" />
              <HeadingTitle2 title1={`Expert Cloud & DevOps`} title2={`Services in ${CITY}`} />
              <p className="text-muted-foreground text-md max-w-4xl mx-auto">
                From cloud migration and Kubernetes orchestration to CI/CD pipelines and infrastructure as code, our <strong className="text-brand">Cloud & DevOps Company in {CITY}</strong> delivers scalable, secure, and cost-optimized infrastructure solutions for startups, SMEs, and enterprises. <br /><br />
                We build modern cloud infrastructure using the latest technologies to ensure high availability, automated deployments, and operational excellence. Explore our comprehensive cloud and DevOps services below.
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
              <HeadingTitle2 title1="How We Build Your Cloud Infrastructure" title2="Into Powerful Digital Systems" />
              <p className="text-muted-foreground text-md mb-10 max-w-4xl mx-auto">
                As a leading <strong>Cloud & DevOps Company in Gurgaon</strong>, we follow a strategic and transparent process to create reliable, scalable, and secure cloud infrastructure.
                <br /><br />
                From assessing your current infrastructure and designing cloud architecture to automation, deployment, and continuous monitoring, every step is carefully executed to deliver robust solutions tailored to your goals.
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
            Our technology stack combines leading cloud platforms, container orchestration tools, infrastructure as code, and DevOps tools to deliver scalable, secure, and reliable infrastructure.
            <br /><br />
            Explore the technologies below that our <strong>Cloud & DevOps Company in Gurgaon</strong> uses to build scalable, secure, and future-ready cloud infrastructure.
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

              <HeadingTitle2 title1="Trusted Cloud & DevOps Company" title2="Serving Businesses Across India" />
              <p className="text-muted-foreground max-w-4xl mx-auto text-md">
                Don't just take our word for it—discover what our clients have to say about working with our <strong>Cloud & DevOps Company in Gurgaon</strong>. <br /> <br />From cloud migration and Kubernetes orchestration to CI/CD automation, businesses across industries trust CoderLala for reliability, innovation, and exceptional infrastructure engineering expertise.
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
                Find answers to the most common questions about our <strong>cloud and DevOps services in Gurgaon</strong>, including technology choices, architecture patterns, performance optimization, and ongoing support. <br /> <br />Learn how CoderLala delivers scalable, secure, and high-performance cloud systems tailored to your business needs.
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