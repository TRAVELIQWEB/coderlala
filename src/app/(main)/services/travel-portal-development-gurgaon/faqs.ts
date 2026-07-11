// app/travel-portal-development-gurgaon/faqs.ts
import { contactInfo } from "@/data/ContactInfo";

export interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQs(city: string): FAQItem[] {
  return [
    {
      q: `What makes CoderLala the best travel portal development company in ${city}?`,
      a: `CoderLala stands out as a premier travel portal development company in ${city} due to our deep expertise in travel technology, IRCTC API integration, and multi-service booking platforms. We combine technical excellence with local presence, delivering comprehensive travel solutions with personalized attention. Our prime location in JMD Megapolis, Sector 48, allows us to serve ${city} travel businesses with rapid response times and in-person consultations during our business hours (${contactInfo.businessHours.weekdays} on weekdays).`
    },
    {
      q: `How long does travel portal development take with your ${city} team?`,
      a: `A comprehensive travel portal typically takes 10 to 16 weeks from discovery to deployment. We work in 2-week agile sprints with regular demos so you can test and provide feedback throughout the development process. As a local travel technology company in ${city}, we offer faster turnaround times through close collaboration.`
    },
    {
      q: `What is the cost of travel portal development services in ${city}?`,
      a: `Pricing depends on portal complexity, features, API integrations, and scalability requirements. Standard travel portals range between ₹5,00,000 to ₹20,00,000, while complex platforms with multiple integrations can range higher. We provide transparent quotes as a trusted travel technology agency in ${city}. Contact us for a detailed, no-obligation estimate.`
    },
    {
      q: `Do you offer IRCTC API integration in your travel portals?`,
      a: `Yes, we provide IRCTC API integration subject to eligibility and compliance requirements. We handle all technical aspects of integration to ensure seamless railway booking functionality. Our team manages the entire process from application to implementation.`
    },
    {
      q: `Can you integrate flight booking APIs?`,
      a: `Absolutely! We integrate with major flight booking APIs including Amadeus, Sabre, and other GDS systems to provide real-time flight availability and booking. We also support integration with budget airline APIs for comprehensive flight options.`
    },
    {
      q: `Do you support B2B and B2C travel portals?`,
      a: `Yes, our travel portals support both B2B and B2C models with agent management, commissions, reporting, and multi-level access control. We provide white-label solutions that can be branded for your agency.`
    },
    {
      q: `What payment gateways do you integrate?`,
      a: `We integrate with major payment gateways including Stripe, Razorpay, PayPal, PayU, and CC Avenue to provide secure and seamless payment processing. We also support multiple currencies for international bookings.`
    },
    {
      q: `Do you provide ongoing maintenance and support?`,
      a: `Absolutely! Comprehensive post-launch SLA support including 24/7 server monitoring, performance optimization, security updates, feature enhancements, and technical support for API changes.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach us at +91 ${contactInfo.salmanNizamPhone} or visit our office at ${contactInfo.websiteAddress}. Our business hours are typically until 7:30 PM. For any inquiries, you can also contact us via email or through our website.`
    },
    {
      q: `Can we meet your travel technology team in ${city}?`,
      a: `Yes! Our office is located at ${contactInfo.websiteAddress}. We welcome in-person discovery workshops, strategic planning meetings, and design review sessions. We also offer virtual consultations for your convenience.`
    },
    {
      q: `What technologies do you use for travel portal development?`,
      a: `We primarily use modern technologies like Next.js, React, Node.js, and PostgreSQL for robust and scalable travel portals. We also work with Python, AWS, Docker, Redis for caching, and various API integrations for travel services.`
    },
    {
      q: `Do you provide hotel booking integration?`,
      a: `Yes, we integrate with major hotel booking APIs including Expedia, Booking.com, and other hotel aggregators to provide real-time hotel availability, pricing, and booking functionality.`
    },
    {
      q: `What is your experience with bus booking systems?`,
      a: `We have extensive experience building bus booking systems with real-time seat selection, route mapping, operator management, and dynamic pricing. We integrate with major bus API providers.`
    },
    {
      q: `Do you develop mobile apps for travel portals?`,
      a: `Yes, we develop native and cross-platform mobile apps for iOS and Android that sync seamlessly with your travel portal. Features include booking, itinerary management, and real-time notifications.`
    },
    {
      q: `What is your approach to travel portal security?`,
      a: `We implement comprehensive security measures including SSL encryption, PCI compliance for payments, secure API authentication, data encryption, and regular security audits to protect user data.`
    },
    {
      q: `Do you provide CRM integration?`,
      a: `Yes, we integrate your travel portal with CRM systems for customer management, communication tracking, and personalized marketing. We support integration with Salesforce, HubSpot, and custom CRMs.`
    },
    {
      q: `How do you handle real-time inventory management?`,
      a: `We implement real-time inventory management with automatic updates from travel partners, seat/room availability tracking, inventory allocation, and automated alerts for low inventory.`
    },
    {
      q: `Do you provide multi-language support?`,
      a: `Yes, we build multi-language travel portals to serve diverse customer bases. We support right-to-left (RTL) languages and regional language support for ${city} and surrounding areas.`
    },
    {
      q: `What is your experience with GDS integration?`,
      a: `We have extensive experience integrating with Global Distribution Systems (GDS) including Amadeus, Sabre, and Travelport for comprehensive travel inventory and booking capabilities.`
    },
    {
      q: `Do you provide travel analytics and reporting?`,
      a: `Yes, we build comprehensive analytics dashboards with real-time booking data, revenue reports, agent performance metrics, customer insights, and predictive analytics for travel trends.`
    },
    {
      q: `How do you handle travel package creation?`,
      a: `We build dynamic package creation tools that allow you to combine flights, hotels, transfers, and activities into customized travel packages with automated pricing and availability checks.`
    },
    {
      q: `Do you provide automated booking confirmations?`,
      a: `Yes, we implement automated booking confirmations via email, SMS, and in-app notifications with complete travel details, payment confirmations, and digital itineraries.`
    },
    {
      q: `What is your approach to travel portal scalability?`,
      a: `We design travel portals for high scalability using cloud infrastructure, auto-scaling, load balancing, and microservices architecture to handle peak travel booking seasons.`
    },
    {
      q: `Do you provide cancellation and refund management?`,
      a: `Yes, we build comprehensive cancellation and refund management systems with policy configuration, automated calculations, refund tracking, and multi-party settlement.`
    },
    {
      q: `How do you handle user authentication and profiles?`,
      a: `We implement secure user authentication with social login (Google, Facebook), passwordless options, and comprehensive user profiles with booking history, preferences, and loyalty points.`
    },
    {
      q: `Do you provide travel portal SEO optimization?`,
      a: `Yes, we build travel portals with SEO best practices including meta tags, structured data for travel (Schema.org), SEO-friendly URLs, and performance optimization for better search rankings.`
    },
    {
      q: `What is your approach to API rate limiting?`,
      a: `We implement intelligent API rate limiting and caching strategies to optimize third-party API costs while ensuring real-time availability and performance.`
    },
    {
      q: `Do you provide group booking features?`,
      a: `Yes, we build group booking features with special pricing, group management, payment splitting, and dedicated account management for corporate and group travelers.`
    },
    {
      q: `How do you handle travel itinerary management?`,
      a: `We build comprehensive itinerary management with day-by-day planning, activity scheduling, transportation coordination, and real-time updates for multi-destination trips.`
    },
    {
      q: `Do you provide travel insurance integration?`,
      a: `Yes, we integrate travel insurance options during the booking process with multiple insurance providers, policy comparisons, and automated policy issuance.`
    },
    {
      q: `What is your experience with travel API integrations?`,
      a: `We have extensive experience integrating various travel APIs including IRCTC, Amadeus, Sabre, Booking.com, Expedia, and custom aggregator APIs for comprehensive travel services.`
    },
    {
      q: `Do you provide loyalty and rewards programs?`,
      a: `Yes, we build comprehensive loyalty programs with points earning, redemption options, tier-based rewards, and integration with partner programs.`
    },
    {
      q: `How do you handle multi-currency and multi-lingual support?`,
      a: `We build travel portals with full multi-currency support (real-time conversion, multiple payment currencies) and multi-lingual support for serving international customers.`
    },
    {
      q: `Do you provide travel portal training?`,
      a: `Yes, we provide comprehensive training for your team including admin panel training, agent training, reporting dashboard training, and ongoing support for new features.`
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