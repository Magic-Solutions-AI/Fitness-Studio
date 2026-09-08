import type { Metadata } from "next";
import { Big_Shoulders, Inter, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/ui/StructuredData";
import { IntroProvider } from "@/context/IntroContext";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "AK Fitness Studio" }],
  creator: "AK Fitness Studio",
  publisher: "AK Fitness Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AK Fitness Studio - Premium Fitness & Gym Training in Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      "/images/og-image.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${inter.variable} ${notoTamil.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-paper selection:bg-brand-green selection:text-ink overflow-x-hidden">
        <SmoothScroll>
          <IntroProvider>
            {children}
          </IntroProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
