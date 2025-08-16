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
              "@type": "Organization",
              name: "RKDS Holdings",
              description: "Premium iPhones, stylish sneakers, and professional tech repair services in South Africa",
              url: "https://rkdsholdings.com",
              logo: "https://rkdsholdings.com/images/rkds-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-123-456-789",
                contactType: "customer service",
                areaServed: "ZA",
                availableLanguage: "English",
              },
              sameAs: [
                "https://facebook.com/rkdsholdings",
                "https://twitter.com/rkdsholdings",
                "https://instagram.com/rkdsholdings",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "RKDS Holdings Products",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "iPhone Collection",
                      category: "Electronics",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Premium Sneakers",
                      category: "Footwear",
                    },
                  },
                  {
                    "@type": "Service",
                    name: "Tech Repair Services",
                    description: "Professional device repair with house calls available for R49",
                  },
                ],
              },
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
