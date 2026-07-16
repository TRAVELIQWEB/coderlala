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
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://coderlala.com";
export const CITY = "Gurgaon";
export const CITY_SLUG = "gurgaon";
export const CANONICAL_PATH = `/services/web-development-company-${CITY_SLUG}`;
export const CANONICAL_URL = `${SITE_URL}${CANONICAL_PATH}`;