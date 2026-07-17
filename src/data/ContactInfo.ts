export const contactInfo = {
  // name: "John Doe",
  email: "info@coderlala.com",
  salmanNizamPhone: "8077040603",
  achalSinghPhone: "8949541483",
  mapLocationLink: "https://maps.app.goo.gl/W3xgFfxU4H8JXJeq7",
  websiteAddress: "Unit No.1004G, 10th Floor, JMD Megapolis, sector-48 Gurgaon, Haryana 122018",
  streetAddress: "Unit No.1004G, 10th Floor, JMD Megapolis, sector-48",
  GMBAddress: "10th Floor, JMD MEGAPOLIS, Unit-1004G, Badshahpur Sohna Rd, Sector 48, Gurugram, Haryana 122018",
  company: "Coderlala Technologies Private Limited",
  // position: "Senior Developer",
  website: "https://www.coderlala.com/",
  instagram: "https://www.instagram.com/coderlalatech",
  linkedIn: "https://in.linkedin.com/company/coderlala",
  // linkedIn: "https://linkedin.com/in/johndoe",
  // twitter: "@rk"

  // Business Hours
  businessHours: {
    weekdays: "9:30 AM – 7:30 PM",
    saturday: "9:30 AM – 7:30 PM",
    sunday: "Closed",
  },
  // Add GMBAddress GEO latitude, longitude
  latitude: 28.419503914895547,
  longitude: 77.03829562883568
};

// data/ContactInfo.ts  (add this alongside your existing contactInfo export)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL! || "https://coderlala.com";
export const CITY = "Gurgaon";
export const CITY_SLUG = "gurgaon";

// SEO Local Page URLs
export const WEB_DEV_GURGAON_PAGE_NAME = `Web Development Company ${CITY}`;
export const AI_ML_GURGAON_PAGE_NAME = `AI/ML Solutions ${CITY}`;
export const MOBILE_APP_DEV_GURGAON_PAGE_NAME = `Mobile App Development ${CITY}`;
export const SAAS_PLATFORM_DEV_GURGAON_PAGE_NAME = `SaaS Platform Development ${CITY}`;
export const UI_UX_DESIGN_GURGAON_PAGE_NAME = `UI/UX Design ${CITY}`;
export const CLOUD_DEVOPS_GURGAON_PAGE_NAME = `Cloud & DevOps ${CITY}`;
export const BACKEND_API_DEV_GURGAON_PAGE_NAME = `Backend & API Development ${CITY}`;
export const ENTERPRISE_SOFTWARE_GURGAON_PAGE_NAME = `Enterprise Software ${CITY}`;
export const TRAVEL_PORTAL_DEV_GURGAON_PAGE_NAME = `Travel Portal Development ${CITY}`;


// SEO Local Page Name
export const WEB_DEV_GURGAON_URL = `${SITE_URL}/services/web-development-company-${CITY_SLUG}`;
export const AI_ML_GURGAON_URL = `${SITE_URL}/services/ai-ml-solutions-${CITY_SLUG}`;
export const MOBILE_APP_DEV_GURGAON_URL = `${SITE_URL}/services/mobile-app-development-${CITY_SLUG}`;
export const SAAS_PLATFORM_DEV_GURGAON_URL = `${SITE_URL}/services/saas-platform-development-${CITY_SLUG}`;
export const UI_UX_DESIGN_GURGAON_URL = `${SITE_URL}/services/ui-ux-design-${CITY_SLUG}`;
export const CLOUD_DEVOPS_GURGAON_URL = `${SITE_URL}/services/cloud-devops-${CITY_SLUG}`;
export const BACKEND_API_DEV_GURGAON_URL = `${SITE_URL}/services/backend-api-development-${CITY_SLUG}`;
export const ENTERPRISE_SOFTWARE_GURGAON_URL = `${SITE_URL}/services/enterprise-software-${CITY_SLUG}`;
export const TRAVEL_PORTAL_DEV_GURGAON_URL = `${SITE_URL}/services/travel-portal-development-${CITY_SLUG}`;
