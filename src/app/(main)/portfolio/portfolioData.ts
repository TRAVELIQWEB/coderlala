import {
  Activity,
  Award,
  Heart,
  Palette,
  Shield,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type { Category, Project } from "@/types/portfolios/types";

export const projects: Project[] = [
  {
    title: "SkyYogaShala",
    category: "wellness",
    desc: "Online platform for yoga enthusiasts offering virtual classes, meditation guides, and wellness resources.",
    descFull:
      "SkyYogaShala is a holistic wellness platform built for yoga enthusiasts, offering live classes, personalized meditation routines, community events, and on-demand resources for a healthier lifestyle.",
    tech: ["React", "Node.js", "MongoDB", "WebRTC", "Tailwind"],
    icon: Heart,
    color: "from-emerald-500 to-teal-500",
    stats: "Virtual Yoga Studio",
    liveUrl: "https://skyyogashala.com",
    features: [
      "Live and recorded yoga sessions",
      "Guided meditation library",
      "Personalized wellness plans",
      "Member community and events",
    ],
    challenge:
      "The existing wellness apps lacked the ability to deliver seamless live streaming with community features in one place.",
    solution:
      "We designed a responsive platform with real-time WebRTC streaming, a content-rich library, and social wellness interactions.",
    result:
      "SkyYogaShala saw increased member engagement and retention through a unified wellness experience.",
  },
  {
    title: "Kreative Dentistry",
    category: "healthcare",
    desc: "Modern dental practice platform featuring appointment booking, patient education, and service showcase.",
    descFull:
      "Kreative Dentistry is a polished healthcare website designed to streamline appointments, showcase dental services, and educate patients with a modern, trustworthy experience.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    icon: Shield,
    color: "from-sky-500 to-blue-500",
    stats: "Smart Booking System",
    liveUrl: "https://kreativedentistry.com",
    features: [
      "Online appointment scheduling",
      "Service catalog with animations",
      "Patient testimonials and reviews",
      "Doctor profiles and FAQ section",
    ],
    challenge:
      "The client needed to communicate credibility and make appointment booking effortless for new patients.",
    solution:
      "We implemented a clean UI, frictionless booking flow, and informative service pages to build trust quickly.",
    result:
      "The platform improved appointment bookings and strengthened patient acquisition.",
  },
  {
    title: "Kreative Aesthetics",
    category: "beauty",
    desc: "Luxury aesthetics and skincare clinic website with service catalog, gallery, and consultation booking.",
    descFull:
      "Kreative Aesthetics is a luxury skincare brand website created to reflect premium services, attract high-end clients, and simplify consultation requests.",
    tech: ["React", "CSS Modules", "EmailJS", "Google Maps"],
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    stats: "Premium Aesthetics",
    liveUrl: "https://kreativeaesthetics.com",
    features: [
      "Styled service presentation",
      "Online consultation booking",
      "Image gallery and treatment essentials",
      "Email-based lead capture",
    ],
    challenge:
      "The existing brand needed a website that matched its high-end aesthetics while improving lead generation.",
    solution:
      "We delivered a visually-driven site with easy booking and clear service storytelling.",
    result:
      "Client inquiries grew and the clinic established a stronger luxury digital presence.",
  },
  {
    title: "Polaris Hospitals",
    category: "healthcare",
    desc: "Comprehensive hospital management portal with department info, doctor profiles, and patient support.",
    descFull:
      "Polaris Hospitals is an enterprise-grade portal built to centralize hospital information, staff profiles, and patient support resources on a scalable platform.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    icon: Users,
    color: "from-blue-600 to-cyan-500",
    stats: "24/7 Patient Support",
    liveUrl: "https://polarishospitals.com",
    features: [
      "Doctor and department directories",
      "Patient support resources",
      "Appointment and contact tools",
      "Responsive hospital site experience",
    ],
    challenge:
      "The hospital lacked a unified web presence to support patient outreach and staff visibility.",
    solution:
      "We created a responsive portal with clear navigation, doctor listings, and patient assistance content.",
    result:
      "Patient access improved and staff information became easier to discover.",
  },
  {
    title: "RangRogan Wala",
    category: "ecommerce",
    desc: "Vibrant e-commerce platform for traditional colors, paints, and artistic supplies.",
    descFull:
      "RangRogan Wala is a colorful e-commerce storefront built to showcase artisanal painting supplies, streamline checkout, and inspire creative buyers.",
    tech: ["Next.js", "Stripe", "Algolia", "Tailwind"],
    icon: ShoppingCart,
    color: "from-orange-500 to-red-500",
    stats: "Fast Nationwide Delivery",
    liveUrl: "https://rangroganwala.com",
    features: [
      "Search-powered product discovery",
      "Secure Stripe checkout",
      "Featured collections and promotions",
      "Mobile-friendly shopping experience",
    ],
    challenge:
      "The business needed a reliable online storefront that could highlight products and convert visitors into buyers.",
    solution:
      "We implemented a fast, visually engaging shop with search and smooth purchase flow.",
    result:
      "Conversion rates increased and customers enjoyed a polished shopping experience.",
  },
  {
    title: "RiPRAP Health",
    category: "healthcare",
    desc: "Innovative health tech platform focused on rehabilitation and recovery tracking solutions.",
    descFull:
      "RiPRAP Health is a recovery tracking platform designed for rehabilitation centers, helping patients and clinicians monitor progress through digital tools.",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    icon: Activity,
    color: "from-teal-500 to-emerald-500",
    stats: "Smart Recovery Tracking",
    liveUrl: "https://ripraphealth.com",
    features: [
      "Patient progress dashboards",
      "Rehab exercise tracking",
      "Secure health data storage",
      "Mobile-first recovery tools",
    ],
    challenge:
      "The product needed to simplify recovery tracking while preserving patient privacy and clinician workflows.",
    solution:
      "We built a mobile-first health platform with secure data syncing and intuitive progress reporting.",
    result:
      "Clinicians gained better visibility into patient recovery and adherence.",
  },
];

export const categories: Category[] = [
  { id: "all", label: "All Projects", icon: Zap },
  { id: "healthcare", label: "Healthcare", icon: Shield },
  { id: "wellness", label: "Wellness", icon: Heart },
  { id: "creative", label: "Creative", icon: Palette },
  { id: "beauty", label: "Beauty", icon: Sparkles },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
];

export const portfolioStats = [
  { value: "25+", label: "Projects Completed", icon: Award, color: "text-blue-400" },
  { value: "99%", label: "Client Satisfaction", icon: TrendingUp, color: "text-orange-400" },
  { value: "5M+", label: "Users Impacted", icon: Users, color: "text-purple-400" },
  { value: "100%", label: "On-Time Delivery", icon: Shield, color: "text-green-400" },
];
