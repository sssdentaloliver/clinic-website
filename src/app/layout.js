import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.sssdentaloliver.com"),

  title: "SSS Dental Oliver | Best Dental Clinic in Oliver, BC",

  description: "SSS Dental Oliver is a trusted dental clinic in Oliver, British Columbia offering root canal treatment, cosmetic dentistry, teeth cleaning, and complete oral care. At SSS Dental Oliver we accept all kinds of insurances including CDCP. Led by Dr. Sukhwinder Singh, we provide personalized dental care for patients in Oliver and surrounding areas. Visit us at 5980 Main Street, Oliver, BC V0H 1T0.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "SSS Dental Oliver",
    description: "SSS Dental Oliver is a trusted dental clinic in Oliver, British Columbia offering root canal treatment, cosmetic dentistry, teeth cleaning, and complete oral care. At SSS Dental Oliver we accept all kinds of insurances including CDCP. Led by Dr. Sukhwinder Singh, we provide personalized dental care for patients in Oliver and surrounding areas. Visit us at 5980 Main Street, Oliver, BC V0H 1T0.",
    url: "/",
    siteName: "SSS Dental Oliver",
    images: [
      {
        url: "/patient_image_for_seo.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/patient_image_for_seo.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  keywords: [
    "Dentist Oliver BC",
    "Dental Clinic Oliver",
    "Root Canal Oliver",
    "Emergency Dentist Oliver",
    "Cosmetic Dentistry Oliver",
    "Teeth Cleaning Oliver",
    "CDCP Dentist Oliver",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        id="sssdental-local-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "SSS Dental Oliver",
            url: "https://www.sssdentaloliver.com",
            telephone: "+1-250-498-2646",
            logo: "https://www.sssdentaloliver.com/logo.png",
            image: ["https://www.sssdentaloliver.com/patient_image_for_seo.webp"],
            "@id": "https://www.sssdentaloliver.com/#dentist",

            priceRange: "$$",
            email: "info@sssdentaloliver.com",
            areaServed: "Oliver",
            hasMap: "https://www.google.com/maps/place/SSS+Dental+Oliver",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5980 Main Street",
              addressLocality: "Oliver",
              addressRegion: "BC",
              postalCode: "V0H 1T0",
              addressCountry: "CA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "49.17973",
              longitude: "-119.55191",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                opens: "08:30",
                closes: "16:30",
              },
            ],
            sameAs: ["https://www.google.com/maps/place/SSS+Dental+Oliver"],
          }),
        }}
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
