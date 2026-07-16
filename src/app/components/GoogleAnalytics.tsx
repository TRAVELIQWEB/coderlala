'use client';

import Script from 'next/script';

export default function GoogleAnalytics({ gaId }: { gaId?: string }) {
  // Safely return if the Measurement ID isn't defined
  if (!gaId) return null;

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              debug_mode: ${isDev}
            });
          `,
        }}
      />
    </>
  );
}