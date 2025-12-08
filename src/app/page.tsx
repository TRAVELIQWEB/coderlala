import Hero from "./components/sections/hero";
import ServicesOverview from "./components/sections/services-overview";
import Testimonials from "./components/sections/testimonials";
import CTA from "./components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <CTA />
    </>
  );
}
