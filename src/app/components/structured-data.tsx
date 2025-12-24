import Script from 'next/script';

interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${data['@type'] || 'unknown'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Predefined schema components for common use cases
export function OrganizationSchema({ data }: { data: Record<string, any> }) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    ...data,
  };

  return <StructuredData data={defaultData} />;
}

export function WebSiteSchema({ data }: { data: Record<string, any> }) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    ...data,
  };

  return <StructuredData data={defaultData} />;
}

export function LocalBusinessSchema({ data }: { data: Record<string, any> }) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    ...data,
  };

  return <StructuredData data={defaultData} />;
}

export function ServiceSchema({ data }: { data: Record<string, any> }) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "Service",
    ...data,
  };

  return <StructuredData data={defaultData} />;
}

export function ContactPointSchema({ data }: { data: Record<string, any> }) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    ...data,
  };

  return <StructuredData data={defaultData} />;
}

export function BreadcrumbSchema({ data }: { data: Record<string, any> }) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...data,
  };

  return <StructuredData data={defaultData} />;
}

export function FAQSchema({ data }: { data: Record<string, any> }) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...data,
  };

  return <StructuredData data={defaultData} />;
}