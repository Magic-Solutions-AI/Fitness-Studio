import React from "react";
import { siteConfig } from "@/data/siteConfig";

export const StructuredData: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "SportsActivityLocation", "LocalBusiness"],
    name: siteConfig.name,
    alternateName: siteConfig.subtitleTamil,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
    openingHours: siteConfig.openingHoursSchema,
    sameAs: [siteConfig.instagram],
    priceRange: "$$",
    image: `${siteConfig.url}/images/hero-bg.jpg`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
