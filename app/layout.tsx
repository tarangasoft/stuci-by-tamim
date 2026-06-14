import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "700", "900"]
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Stuci Travel and Tours | Your Journey Begins Here",
    template: "Stuci Travel and Tours | %s"
  },
  description:
    "Cinematic bilingual travel planning for Bangladesh and international tours, from Cox's Bazar to Sundarban, Rajshahi, Thailand, Nepal, and beyond.",
  alternates: {
    languages: {
      en: "/",
      ru: "/"
    }
  },
  openGraph: {
    title: "Stuci Travel and Tours",
    description: "Your Journey Begins Here",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "A golden beach landscape for Stuci Travel and Tours"
      }
    ]
  }
};

const agencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Stuci Travel and Tours",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD"
  },
  url: "https://stucitravel.com",
  telephone: "+8801700000000"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
