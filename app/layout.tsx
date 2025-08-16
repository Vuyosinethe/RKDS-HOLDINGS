import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "RKDS Holdings - Premium iPhones, Stylish Sneakers & Tech Repair Services",
  description:
    "Shop the latest iPhones, premium sneakers from Nike, Adidas, Jordan & more. Professional tech repair services with house calls for R49. South Africa's premier tech and fashion destination.",
  keywords:
    "iPhone, sneakers, Nike, Adidas, Jordan, tech repair, phone repair, South Africa, RKDS Holdings, premium electronics, stylish shoes",
  authors: [{ name: "RKDS Holdings" }],
  creator: "RKDS Holdings",
  publisher: "RKDS Holdings",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://rkdsholdings.com",
    siteName: "RKDS Holdings",
    title: "RKDS Holdings - Premium iPhones, Stylish Sneakers & Tech Repair",
    description:
      "Shop the latest iPhones, premium sneakers from Nike, Adidas, Jordan & more. Professional tech repair services with house calls for R49.",
    images: [
      {
        url: "/images/rkds-logo.png",
        width: 1200,
        height: 630,
        alt: "RKDS Holdings - Premium Tech and Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RKDS Holdings - Premium iPhones, Stylish Sneakers & Tech Repair",
    description:
      "Shop the latest iPhones, premium sneakers from Nike, Adidas, Jordan & more. Professional tech repair services.",
    images: ["/images/rkds-logo.png"],
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://rkdsholdings.co.za/#organization",
                  name: "RKDS Holdings",
                  alternateName: ["RKDS", "RKDS Holdings South Africa"],
                  url: "https://rkdsholdings.co.za",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://rkdsholdings.co.za/images/rkds-logo.png",
                    width: 120,
                    height: 40,
                  },
                  description:
                    "South Africa's premier destination for premium iPhones, designer sneakers, and professional tech repair services.",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "ZA",
                    addressRegion: "South Africa",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+27-123-456-789",
                    contactType: "customer service",
                    email: "info@rkdsholdings.co.za",
                  },
                  sameAs: [
                    "https://facebook.com/rkdsholdings",
                    "https://twitter.com/rkdsholdings",
                    "https://instagram.com/rkdsholdings",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://rkdsholdings.co.za/#website",
                  url: "https://rkdsholdings.co.za",
                  name: "RKDS Holdings",
                  description: "Premium iPhones, Sneakers & Tech Repairs",
                  publisher: {
                    "@id": "https://rkdsholdings.co.za/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://rkdsholdings.co.za/shop?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Store",
                  "@id": "https://rkdsholdings.co.za/#store",
                  name: "RKDS Holdings",
                  description:
                    "Premium technology and lifestyle store specializing in iPhones, designer sneakers, and professional repair services.",
                  url: "https://rkdsholdings.co.za",
                  telephone: "+27-123-456-789",
                  email: "info@rkdsholdings.co.za",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "ZA",
                  },
                  openingHours: "Mo-Su 08:00-20:00",
                  paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
                  currenciesAccepted: "ZAR",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "RKDS Holdings Products",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "Premium iPhones",
                          category: "Electronics",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "Designer Sneakers",
                          category: "Footwear",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Tech Repair Services",
                          category: "Repair",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
