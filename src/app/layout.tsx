import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

// Optimize fonts - Enterprise typography
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ITIS Secure | Automotive & InfoSec Audits - TISAX, ISO 27001, TPISR",
  description: "Expert security audits for automotive industry. TISAX®, ISO 27001, TPISR compliance services. Trusted by leading automotive suppliers across Europe and North America.",
  keywords: ["TISAX audit", "ISO 27001 certification", "TPISR compliance", "automotive security", "information security", "ISMS", "GDPR compliance"],
  authors: [{ name: "ITIS Secure" }],
  openGraph: {
    title: "ITIS Secure | Automotive Security Compliance Experts",
    description: "Secure your automotive supply chain with TISAX®, ISO 27001, and TPISR audits. Expert compliance services for the modern automotive industry.",
    url: "https://itis-secure.com",
    siteName: "ITIS Secure",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ITIS Secure - Automotive Security Compliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITIS Secure | Automotive Security Audits",
    description: "Expert TISAX®, ISO 27001, and TPISR compliance services for automotive suppliers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ITIS Secure',
    description: 'Expert security audits for automotive industry - TISAX, ISO 27001, TPISR compliance services',
    url: 'https://itis-secure.com',
    logo: 'https://itis-secure.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-123-456-789',
      contactType: 'Customer Service',
      areaServed: ['DE', 'EU', 'US'],
      availableLanguage: ['en', 'de'],
    },
    sameAs: [
      'https://www.linkedin.com/company/itis-secure',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Munich',
      addressCountry: 'DE',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground selection:bg-primary selection:text-black">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-black focus:rounded-lg"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
