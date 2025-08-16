import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "RKDS Holdings - Premium iPhones, Sneakers & Tech Repairs | South Africa",
  description:
    "RKDS Holdings is South Africa's premier destination for premium iPhones, designer sneakers, and professional tech repair services. Fast delivery, quality guaranteed.",
  keywords:
    "RKDS Holdings, RKDS, iPhone South Africa, premium sneakers, tech repairs, mobile phone repairs, designer footwear, electronics store South Africa",
  authors: [{ name: "RKDS Holdings" }],
  creator: "RKDS Holdings",
  publisher: "RKDS Holdings",
  openGraph: {
    title: "RKDS Holdings - Your Tech & Style Destination",
    description:
      "Premium iPhones, designer sneakers, and professional tech repairs. South Africa's trusted technology and lifestyle brand.",
    url: "https://rkdsholdings.co.za",
    siteName: "RKDS Holdings",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/images/rkds-logo.png",
        width: 1200,
        height: 630,
        alt: "RKDS Holdings - Premium Tech & Style",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RKDS Holdings - Premium Tech & Style",
    description: "South Africa's premier destination for iPhones, sneakers, and tech repairs.",
    images: ["/images/rkds-logo.png"],
    creator: "@rkdsholdings",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://rkdsholdings.co.za",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
