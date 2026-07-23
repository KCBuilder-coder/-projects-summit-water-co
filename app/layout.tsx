import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// TODO: replace with the production domain before launch.
const siteUrl = "https://www.summitwaterco.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Water Softeners & Filtration in San Marcos & Central Texas | Summit Water Co.",
  description:
    "Summit Water Co. installs premium water softeners, reverse osmosis, and whole-home filtration systems for San Marcos and Central Texas homeowners. Honest pricing, professional installation, financing available.",
  keywords: [
    "water softeners Central Texas",
    "water softeners San Marcos",
    "water treatment San Marcos",
    "reverse osmosis San Marcos",
    "whole-home water filtration Central Texas",
  ],
  openGraph: {
    title: "Water Softeners & Filtration in San Marcos & Central Texas | Summit Water Co.",
    description:
      "Premium water treatment without the franchise price. Serving San Marcos and Central Texas homeowners with professional installation and honest pricing.",
    url: siteUrl,
    siteName: "Summit Water Co.",
    locale: "en_US",
    type: "website",
    // TODO: add a 1200x630 Open Graph image before launch.
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Summit Water Co. — premium water treatment for Central Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Softeners & Filtration in San Marcos & Central Texas | Summit Water Co.",
    description:
      "Premium water treatment without the franchise price. Serving San Marcos and Central Texas homeowners.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// TODO: confirm final NAP (name/address/phone), hours, and geo coordinates with
// the business owner before publishing this structured data.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Summit Water Co.",
  description:
    "Premium water softener, reverse osmosis, and whole-home filtration installation serving San Marcos and Central Texas.",
  url: siteUrl,
  telephone: "+1-000-000-0000", // TODO: replace with real business phone
  priceRange: "$$",
  areaServed: {
    "@type": "Place",
    name: "Central Texas, including San Marcos, New Braunfels, Kyle, and Buda",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "TODO street address",
    addressLocality: "San Marcos",
    addressRegion: "TX",
    postalCode: "TODO",
    addressCountry: "US",
  },
  // TODO: replace with verified geo coordinates
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.8833",
    longitude: "-97.9414",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    // TODO: add verified social profile URLs
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
