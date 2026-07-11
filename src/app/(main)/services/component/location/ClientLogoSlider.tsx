import { BLUR_DATA_URL } from '@/app/constants';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react'

// ============================================================
// CLIENT LOGOS DATA
// ============================================================
const clientLogos = [
  {
    id: 1,
    name: "Aquarius Lab",
    logo: "/images/client-logo/aquarius-lab.webp",
    width: 800,
    height: 800,
    alt: "Aquarius Lab logo - trusted client of CoderLala travel portal development company in Gurgaon"
  },
  {
    id: 2,
    name: "Jindal Dental Care",
    logo: "/images/client-logo/jindal-dental-care-and-implant-centre.webp",
    width: 800,
    height: 800,
    alt: "Jindal Dental Care logo - trusted client of CoderLala travel portal development company in Gurgaon"
  },
  {
    id: 3,
    name: "Kreative Dentistry",
    logo: "/images/client-logo/kreative-dentistry.webp",
    width: 800,
    height: 800,
    alt: "Kreative Dentistry logo - trusted client of CoderLala travel portal development company in Gurgaon"
  },
  {
    id: 4,
    name: "Mohindra Eco Pipes",
    logo: "/images/client-logo/mohindra-eco-pipes-logo.webp",
    width: 800,
    height: 800,
    alt: "Mohindra Eco Pipes logo - trusted client of CoderLala travel portal development company in Gurgaon"
  },
  {
    id: 5,
    name: "Narain Hospital",
    logo: "/images/client-logo/narain-hospital.webp",
    width: 800,
    height: 800,
    alt: "Narain Hospital logo - trusted client of CoderLala travel portal development company in Gurgaon"
  },
  {
    id: 6,
    name: "Webshlok",
    logo: "/images/client-logo/webshlok.webp",
    width: 800,
    height: 800,
    alt: "Webshlok logo - trusted client of CoderLala travel portal development company in Gurgaon"
  }
];

const ClientLogoSlider = () => {
  const [clientLogoIndex, setClientLogoIndex] = useState(0);

  useEffect(() => {
    const clientLogoTimer = setInterval(() => {
      setClientLogoIndex((prev) => (prev + 1) % clientLogos.length);
    }, 3000);
    return () => clearInterval(clientLogoTimer);
  }, [clientLogos.length]);

  const visibleClientLogos = clientLogos.slice(clientLogoIndex, clientLogoIndex + 5);
  if (clientLogoIndex + 5 > clientLogos.length) {
    visibleClientLogos.push(...clientLogos.slice(0, (clientLogoIndex + 5) % clientLogos.length));
  }



  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-12">
      <button
        onClick={() => setClientLogoIndex((prev) => (prev - 1 + clientLogos.length) % clientLogos.length)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2.5 rounded-full bg-card/90 backdrop-blur-sm border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 -translate-x-1/2 sm:-translate-x-6"
        aria-label="Previous client logo"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 overflow-hidden w-full py-4">
        {visibleClientLogos.map((client, idx) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="group relative p-3 transition-all bg-white/90 duration-300 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 rounded-xl border border-border/50 shadow-sm hover:shadow-lg shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 scale-100"
          >
            <Image
              key={client.id}
              src={client.logo}
              alt={client.alt}
              width={client.width}
              height={client.height}
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-contain group-hover:scale-125 transition-transform duration-300 h-full w-full p-3"
              style={{ objectFit: 'contain' }}
            />
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setClientLogoIndex((prev) => (prev + 1) % clientLogos.length)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2.5 rounded-full bg-card/90 backdrop-blur-sm border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 translate-x-1/2 sm:translate-x-6"
        aria-label="Next client logo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

export default ClientLogoSlider