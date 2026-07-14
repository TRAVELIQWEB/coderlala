// app/ui-ux-design-gurgaon/faqs.ts
import { contactInfo } from "@/data/ContactInfo";

export interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQs(city: string): FAQItem[] {
  return [
    {
      q: `What makes CoderLala the best UI/UX design company in ${city}?`,
      a: `CoderLala stands out as a premier UI/UX design company in ${city} due to our human-centered design approach, expertise in creating design systems, and focus on measurable business outcomes. We combine design excellence with local presence, delivering world-class interfaces with personalized attention. Our prime location in JMD Megapolis, Sector 48, allows us to serve ${city} businesses with rapid response times and in-person consultations.`
    },
    {
      q: `How long does UI/UX design take with your ${city} team?`,
      a: `A comprehensive UI/UX design project typically takes 4 to 8 weeks from discovery to final deliverables. We work in iterative sprints with regular feedback sessions to ensure the design meets your expectations. As a local design agency in ${city}, we offer faster turnaround times through close collaboration.`
    },
    {
      q: `What is the cost of UI/UX design services in ${city}?`,
      a: `Pricing depends on project complexity, number of screens, and design requirements. Standard UI/UX design projects range between ₹1,00,000 to ₹10,00,000+. We provide transparent quotes as a trusted design agency in ${city}. Contact us for a detailed, no-obligation estimate.`
    },
    {
      q: `Do you provide design systems?`,
      a: `Yes, we create comprehensive design systems with component libraries, style guides, and documentation that your development team can build from directly. This ensures consistency across your entire product ecosystem.`
    },
    {
      q: `What tools do you use for design?`,
      a: `We primarily use Figma, Adobe XD, and Sketch for design work, along with prototyping tools like InVision and Principle for interactive demonstrations. We also use Miro for collaborative workshops and user journey mapping.`
    },
    {
      q: `Do you conduct user research?`,
      a: `Absolutely! We conduct user interviews, surveys, competitive analysis, and usability testing to ensure designs are truly user-centered. Our research-driven approach ensures we solve real user problems.`
    },
    {
      q: `Can we meet your design team in ${city}?`,
      a: `Yes! Our office is located at ${contactInfo.websiteAddress}. You can also reach us at +91 ${contactInfo.salmanNizamPhone}. Our business hours are typically ${contactInfo.businessHours.weekdays} on weekdays. We welcome in-person discovery workshops and design review sessions.`
    },
    {
      q: `Do you offer mobile app UI/UX design?`,
      a: `Yes, we specialize in mobile app UI/UX design for both iOS and Android platforms. We follow Apple's Human Interface Guidelines and Google's Material Design principles to create platform-native experiences.`
    },
    {
      q: `What is your design process?`,
      a: `We follow a human-centered design process: research, strategy, design, testing, and refinement. This ensures we create designs that truly solve user problems and drive business results.`
    },
    {
      q: `Do you provide accessibility (WCAG) compliance?`,
      a: `Yes, we design with accessibility in mind, following WCAG 2.1 guidelines to ensure your product is usable by people of all abilities. This includes color contrast, keyboard navigation, screen reader compatibility, and more.`
    },
    {
      q: `How do you ensure designs are conversion-optimized?`,
      a: `We use data-driven design approaches including A/B testing, heat mapping analysis, and conversion rate optimization (CRO) strategies. Our designs are focused on guiding users through desired actions and improving business metrics.`
    },
    {
      q: `Do you create interactive prototypes?`,
      a: `Yes, we create high-fidelity interactive prototypes that simulate the final product experience. These prototypes are great for user testing, stakeholder presentations, and developer handoffs.`
    },
    {
      q: `What is a design sprint and do you conduct them?`,
      a: `A design sprint is a 5-day framework for solving big problems and testing new ideas. Yes, we conduct design sprints to rapidly ideate, prototype, and validate solutions with real users.`
    },
    {
      q: `How do you handle design handoff to developers?`,
      a: `We provide comprehensive design handoff including Figma files with developer notes, design specifications, assets, and interactive prototypes. We also conduct walkthrough sessions with your development team.`
    },
    {
      q: `Do you redesign existing products?`,
      a: `Yes, we specialize in redesigning existing products to improve user experience, modernize interfaces, and increase conversions. We conduct thorough audits to identify pain points and opportunities.`
    },
    {
      q: `What is information architecture and do you provide it?`,
      a: `Information architecture (IA) is the structural design of shared information environments. Yes, we provide IA services including sitemaps, user flows, and navigation structures to ensure intuitive content organization.`
    },
    {
      q: `Do you create brand identity and visual design?`,
      a: `Yes, we provide comprehensive brand identity services including logo design, color palettes, typography systems, and visual language guidelines that ensure consistent brand expression across all touchpoints.`
    },
    {
      q: `How do you measure design success?`,
      a: `We measure success through various metrics including task completion rates, user satisfaction scores, conversion rates, time-on-task, and net promoter scores (NPS). We also use analytics to track user behavior.`
    },
    {
      q: `Do you conduct competitor analysis?`,
      a: `Yes, we conduct thorough competitor analysis to understand the market landscape, identify opportunities, and differentiate your product. This ensures your design stands out in the market.`
    },
    {
      q: `What is user journey mapping?`,
      a: `User journey mapping is a visual representation of the user's experience with your product. We create journey maps to identify pain points, opportunities, and moments of delight across all touchpoints.`
    },
    {
      q: `Do you provide micro-interaction design?`,
      a: `Yes, we design micro-interactions—those small, delightful moments that make products feel responsive and alive. This includes button animations, loading states, transitions, and feedback mechanisms.`
    },
    {
      q: `How do you approach dashboard and data visualization design?`,
      a: `We design intuitive dashboards and data visualizations that make complex information easy to understand. We focus on clarity, hierarchy, and actionable insights for your users.`
    },
    {
      q: `Do you design for SaaS products?`,
      a: `Yes, we specialize in SaaS product design with a focus on onboarding, user retention, and feature discovery. We understand the unique challenges of SaaS products and design for long-term user engagement.`
    },
    {
      q: `What is dark mode design and do you provide it?`,
      a: `Yes, we design dark mode interfaces that maintain usability and aesthetics. We ensure proper contrast ratios, color adaptations, and visual hierarchy for both light and dark themes.`
    },
    {
      q: `How do you handle stakeholder feedback?`,
      a: `We involve stakeholders throughout the design process with regular reviews and feedback sessions. We use collaborative tools to gather feedback, prioritize changes, and ensure alignment with business goals.`
    },
    {
      q: `Do you design for emerging technologies like AR/VR?`,
      a: `Yes, we have experience designing interfaces for emerging technologies including augmented reality (AR), virtual reality (VR), and voice user interfaces (VUI). We follow best practices for these new mediums.`
    },
    {
      q: `What is responsive design and do you provide it?`,
      a: `Responsive design ensures your product looks and works great on all devices—from mobile phones to large desktop screens. Yes, we design responsive interfaces that adapt seamlessly to any screen size.`
    },
    {
      q: `How do you handle design iteration and refinement?`,
      a: `We follow an iterative design process with continuous testing and refinement. We gather user feedback, analyze usage data, and make data-driven improvements to enhance the user experience over time.`
    },
    {
      q: `Do you provide design training for internal teams?`,
      a: `Yes, we provide design training and workshops for internal teams to build design capabilities within your organization. This includes design thinking workshops, tool training, and design best practices.`
    },
    {
      q: `What is your design QA process?`,
      a: `We conduct thorough design QA to ensure pixel-perfect implementation. We review designs against specifications, test on multiple devices, and work closely with developers to resolve any visual inconsistencies.`
    },
    {
      q: `Do you provide ongoing design support?`,
      a: `Yes, we offer ongoing design support for product evolution, feature additions, and continuous improvement. This includes design audits, usability testing, and iterative enhancements.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach us at +91 ${contactInfo.salmanNizamPhone} or visit our office at ${contactInfo.websiteAddress}. Our business hours are ${contactInfo.businessHours.weekdays} on weekdays. For any inquiries, you can also contact us via email or through our website.`
    }
  ];
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}