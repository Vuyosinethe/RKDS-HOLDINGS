"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Smartphone,
  ShoppingBag,
  Star,
  ShoppingCart,
  Zap,
  Shield,
  Clock,
  Search,
  User,
  ChevronDown,
  Cable,
  Wrench,
  Headphones,
  Battery,
  Tablet,
  Watch,
  HardDrive,
  Cpu,
  Camera,
  Monitor,
  Bluetooth,
  Phone,
  Settings,
  PenToolIcon as Tool,
  MapPin,
  Home,
  Circle,
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import { useState } from "react"

import { useButtonHandler } from "@/lib/button-handler"

export default function HomePageClient() {
  const { state: authState } = useAuth()
  const { state: cartState, addItem } = useCart()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)

  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null)
  const [mobileExpandedIPhone, setMobileExpandedIPhone] = useState<string | null>(null)

  const { handleButtonClick } = useButtonHandler()

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
    })
  }

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "iphones",
      price: 18999,
      rating: 5,
      reviews: 128,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Nike Air Max 270",
      category: "shoes",
      price: 2499,
      rating: 5,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "nike-air-max-95",
      name: "Nike Air Max 95",
      category: "shoes",
      price: 2999,
      rating: 5,
      reviews: 94,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nike%20Air%20Max%2095%20%289%29-sAf4SYwFYXE0BGgdGLLs4CbazCFKK8.jpeg",
    },
    {
      id: 2,
      name: "iPhone 14",
      category: "iphones",
      price: 14999,
      rating: 4,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Adidas Ultraboost 22",
      category: "shoes",
      price: 3299,
      rating: 5,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
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
      {/* Main Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/images/rkds-logo.png" alt="RKDS Holdings" width={120} height={40} className="h-8 w-auto" />
            </div>

            <div className="hidden lg:flex items-center space-x-8 relative overflow-visible">
              <Link
                href="/"
                className="text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap"
              >
                Home
              </Link>

              {/* iPhone Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("iphone")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  iPhone <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "iphone" && (
                  <div className="absolute top-full left-0 w-[600px] bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Smartphone className="mr-2 h-5 w-5 text-blue-400" />
                            Shop iPhone Range
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="group">
                              <div
                                className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                onClick={() =>
                                  setExpandedIPhone(expandedIPhone === "iphone-16-pro" ? null : "iphone-16-pro")
                                }
                              >
                                <Cpu className="mr-2 h-4 w-4 text-gray-400" />
                                <span className="flex-1 font-medium">iPhone 16 Pro</span>
                                <span className="text-gray-400 text-xs mr-2">From R21,999</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${expandedIPhone === "iphone-16-pro" ? "rotate-180" : ""}`}
                                />
                              </div>
                              {expandedIPhone === "iphone-16-pro" && (
                                <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                  <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                  <Link
                                    href="/shop/iphone-16-pro?storage=128gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">128GB</span>
                                      <span className="text-green-400 font-medium">R21,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-16-pro?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R24,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-16-pro?storage=512gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">512GB</span>
                                      <span className="text-green-400 font-medium">R29,999</span>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </li>

                            <li className="group">
                              <div
                                className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                onClick={() => setExpandedIPhone(expandedIPhone === "iphone-16" ? null : "iphone-16")}
                              >
                                <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                <span className="flex-1 font-medium">iPhone 16</span>
                                <span className="text-gray-400 text-xs mr-2">From R18,999</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${expandedIPhone === "iphone-16" ? "rotate-180" : ""}`}
                                />
                              </div>
                              {expandedIPhone === "iphone-16" && (
                                <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                  <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                  <Link
                                    href="/shop/iphone-16?storage=128gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">128GB</span>
                                      <span className="text-green-400 font-medium">R18,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-16?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R21,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-16?storage=512gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">512GB</span>
                                      <span className="text-green-400 font-medium">R26,999</span>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </li>

                            <li className="group">
                              <div
                                className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                onClick={() =>
                                  setExpandedIPhone(expandedIPhone === "iphone-15-pro" ? null : "iphone-15-pro")
                                }
                              >
                                <Cpu className="mr-2 h-4 w-4 text-gray-400" />
                                <span className="flex-1 font-medium">iPhone 15 Pro</span>
                                <span className="text-gray-400 text-xs mr-2">From R19,999</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${expandedIPhone === "iphone-15-pro" ? "rotate-180" : ""}`}
                                />
                              </div>
                              {expandedIPhone === "iphone-15-pro" && (
                                <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                  <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                  <Link
                                    href="/shop/iphone-15-pro?storage=128gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">128GB</span>
                                      <span className="text-green-400 font-medium">R19,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-15-pro?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R22,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-15-pro?storage=512gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">512GB</span>
                                      <span className="text-green-400 font-medium">R27,999</span>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </li>

                            <li className="group">
                              <div
                                className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                onClick={() => setExpandedIPhone(expandedIPhone === "iphone-15" ? null : "iphone-15")}
                              >
                                <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                <span className="flex-1 font-medium">iPhone 15</span>
                                <span className="text-gray-400 text-xs mr-2">From R16,999</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${expandedIPhone === "iphone-15" ? "rotate-180" : ""}`}
                                />
                              </div>
                              {expandedIPhone === "iphone-15" && (
                                <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                  <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                  <Link
                                    href="/shop/iphone-15?storage=128gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">128GB</span>
                                      <span className="text-green-400 font-medium">R16,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-15?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R19,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-15?storage=512gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">512GB</span>
                                      <span className="text-green-400 font-medium">R24,999</span>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </li>

                            <li className="group">
                              <div
                                className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                onClick={() =>
                                  setExpandedIPhone(expandedIPhone === "iphone-14-pro" ? null : "iphone-14-pro")
                                }
                              >
                                <Cpu className="mr-2 h-4 w-4 text-gray-400" />
                                <span className="flex-1 font-medium">iPhone 14 Pro</span>
                                <span className="text-gray-400 text-xs mr-2">From R17,999</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${expandedIPhone === "iphone-14-pro" ? "rotate-180" : ""}`}
                                />
                              </div>
                              {expandedIPhone === "iphone-14-pro" && (
                                <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                  <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                  <Link
                                    href="/shop/iphone-14-pro?storage=128gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">128GB</span>
                                      <span className="text-green-400 font-medium">R17,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-14-pro?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R20,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-14-pro?storage=512gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">512GB</span>
                                      <span className="text-green-400 font-medium">R25,999</span>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </li>

                            <li className="group">
                              <div
                                className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                onClick={() => setExpandedIPhone(expandedIPhone === "iphone-14" ? null : "iphone-14")}
                              >
                                <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                <span className="flex-1 font-medium">iPhone 14</span>
                                <span className="text-gray-400 text-xs mr-2">From R14,999</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${expandedIPhone === "iphone-14" ? "rotate-180" : ""}`}
                                />
                              </div>
                              {expandedIPhone === "iphone-14" && (
                                <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                  <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                  <Link
                                    href="/shop/iphone-14?storage=128gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">128GB</span>
                                      <span className="text-green-400 font-medium">R14,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-14?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R17,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-14?storage=512gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">512GB</span>
                                      <span className="text-green-400 font-medium">R22,999</span>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </li>

                            <li className="group">
                              <div
                                className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                onClick={() => setExpandedIPhone(expandedIPhone === "iphone-13" ? null : "iphone-13")}
                              >
                                <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                <span className="flex-1 font-medium">iPhone 13</span>
                                <span className="text-gray-400 text-xs mr-2">From R12,999</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${expandedIPhone === "iphone-13" ? "rotate-180" : ""}`}
                                />
                              </div>
                              {expandedIPhone === "iphone-13" && (
                                <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                  <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                  <Link
                                    href="/shop/iphone-13?storage=128gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">128GB</span>
                                      <span className="text-green-400 font-medium">R12,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-13?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R15,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-13?storage=512gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">512GB</span>
                                      <span className="text-green-400 font-medium">R20,999</span>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </li>

                            <li className="group">
                              <div
                                className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                onClick={() => setExpandedIPhone(expandedIPhone === "iphone-12" ? null : "iphone-12")}
                              >
                                <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                <span className="flex-1 font-medium">iPhone 12</span>
                                <span className="text-gray-400 text-xs mr-2">From R10,999</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${expandedIPhone === "iphone-12" ? "rotate-180" : ""}`}
                                />
                              </div>
                              {expandedIPhone === "iphone-12" && (
                                <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                  <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                  <Link
                                    href="/shop/iphone-12?storage=64gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">64GB</span>
                                      <span className="text-green-400 font-medium">R10,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-12?storage=128gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">128GB</span>
                                      <span className="text-green-400 font-medium">R12,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-12?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R15,999</span>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </li>

                            <li className="group">
                              <div
                                className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                onClick={() => setExpandedIPhone(expandedIPhone === "iphone-11" ? null : "iphone-11")}
                              >
                                <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                <span className="flex-1 font-medium">iPhone 11</span>
                                <span className="text-gray-400 text-xs mr-2">From R8,999</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${expandedIPhone === "iphone-11" ? "rotate-180" : ""}`}
                                />
                              </div>
                              {expandedIPhone === "iphone-11" && (
                                <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                  <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                  <Link
                                    href="/shop/iphone-11?storage=64gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">64GB</span>
                                      <span className="text-green-400 font-medium">R8,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-11?storage=128gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">128GB</span>
                                      <span className="text-green-400 font-medium">R10,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-11?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R13,999</span>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </li>

                            <li className="group">
                              <div
                                className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                onClick={() => setExpandedIPhone(expandedIPhone === "iphone-xr" ? null : "iphone-xr")}
                              >
                                <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                <span className="flex-1 font-medium">iPhone XR</span>
                                <span className="text-gray-400 text-xs mr-2">From R6,999</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${expandedIPhone === "iphone-xr" ? "rotate-180" : ""}`}
                                />
                              </div>
                              {expandedIPhone === "iphone-xr" && (
                                <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                  <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                  <Link
                                    href="/shop/iphone-xr?storage=64gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">64GB</span>
                                      <span className="text-green-400 font-medium">R6,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-xr?storage=128gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">128GB</span>
                                      <span className="text-green-400 font-medium">R8,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-xr?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R11,999</span>
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Search className="mr-2 h-5 w-5 text-green-400" />
                            Explore iPhone
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Search className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/shop?category=iphones"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  Explore iPhone
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">Explore the world of iPhone.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Settings className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/shop/compare"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  Compare iPhone
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">Find the perfect iPhone for your needs.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Tool className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/repairs?service=iphone"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  iPhone Repairs
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">Professional repair services.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ... existing other dropdown menus (iPad, AirPods, Accessories, Services) ... */}
              {/* iPad Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("ipad")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  iPad <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "ipad" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                        <Tablet className="mr-2 h-5 w-5 text-purple-400" />
                        Shop iPad Range
                      </h4>
                      <ul className="space-y-4 text-sm">
                        <li className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-800 px-3 rounded transition-colors">
                          <div className="flex items-center">
                            <Cpu className="mr-2 h-4 w-4 text-gray-400" />
                            <Link href="/shop/ipad-pro-m4" className="hover:text-gray-300 transition-colors">
                              iPad Pro | Apple M4
                            </Link>
                          </div>
                          <span className="text-gray-400 font-medium">R17,999</span>
                        </li>
                        <li className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-800 px-3 rounded transition-colors">
                          <div className="flex items-center">
                            <Cpu className="mr-2 h-4 w-4 text-gray-400" />
                            <Link href="/shop/ipad-air-m3" className="hover:text-gray-300 transition-colors">
                              iPad Air | Apple M3
                            </Link>
                          </div>
                          <span className="text-gray-400 font-medium">R10,999</span>
                        </li>
                        <li className="flex items-center justify-between py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                          <div className="flex items-center">
                            <Tablet className="mr-2 h-4 w-4 text-gray-400" />
                            <Link href="/shop/ipad-a16" className="hover:text-gray-300 transition-colors">
                              iPad | A16 Chip
                            </Link>
                          </div>
                          <span className="text-gray-400 font-medium">R5,999</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                          <Shield className="h-4 w-4 text-gray-400" />
                          <Link
                            href="/shop?category=ipad-accessories"
                            className="text-sm hover:text-gray-300 transition-colors"
                          >
                            iPad Accessories
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* AirPods Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("airpods")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  AirPods <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "airpods" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                        <Headphones className="mr-2 h-5 w-5 text-blue-400" />
                        AirPods Collection
                      </h4>
                      <ul className="space-y-4 text-sm">
                        <li className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-800 px-3 rounded transition-colors">
                          <div className="flex items-center">
                            <Headphones className="mr-2 h-4 w-4 text-gray-400" />
                            <Link href="/shop/airpods-pro" className="hover:text-gray-300 transition-colors">
                              Apple AirPods Pro
                            </Link>
                          </div>
                          <span className="text-gray-400">R3,999</span>
                        </li>
                        <li className="flex items-center justify-between py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                          <div className="flex items-center">
                            <Bluetooth className="mr-2 h-4 w-4 text-gray-400" />
                            <Link href="/shop/airpods-pro-2nd-gen" className="hover:text-gray-300 transition-colors">
                              AirPods Pro (2nd Gen)
                            </Link>
                          </div>
                          <span className="text-gray-400">R1,999</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                            <Settings className="h-4 w-4 text-gray-400" />
                            <Link
                              href="/shop/airpods-compare"
                              className="text-sm hover:text-gray-300 transition-colors"
                            >
                              Compare AirPods
                            </Link>
                          </div>
                          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                            <Shield className="h-4 w-4 text-gray-400" />
                            <Link
                              href="/shop/airpods-accessories"
                              className="text-sm hover:text-gray-300 transition-colors"
                            >
                              AirPods Accessories
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accessories Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("accessories")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  Accessories <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "accessories" && (
                  <div className="absolute top-full left-0 w-[600px] bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Star className="mr-2 h-5 w-5 text-yellow-400" />
                            iPhone Accessories
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Shield className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/privacy-screen-protector" className="flex-1">
                                Privacy Screen Protector
                              </Link>
                              <span className="text-gray-400 text-xs">R129-R699</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/clear-iphone-case" className="flex-1">
                                Clear iPhone Case
                              </Link>
                              <span className="text-gray-400 text-xs">R149-R499</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Shield className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/silicone-case" className="flex-1">
                                Liquid Silicone Case
                              </Link>
                              <span className="text-gray-400 text-xs">R299-R899</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 mt-6 text-white text-lg flex items-center">
                            <Headphones className="mr-2 h-5 w-5 text-blue-400" />
                            Audio & Speakers
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Headphones className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/airpods-pro" className="flex-1">
                                AirPods Pro
                              </Link>
                              <span className="text-gray-400 text-xs">R3,999</span>
                            </li>
                          </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Zap className="mr-2 h-5 w-5 text-green-400" />
                            Wireless Chargers
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Zap className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/magsafe-charger-1m" className="flex-1">
                                MagSafe Charger 1m
                              </Link>
                              <span className="text-gray-400 text-xs">R799</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Zap className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/magsafe-charger" className="flex-1">
                                MagSafe Charger
                              </Link>
                              <span className="text-gray-400 text-xs">R599</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 mt-6 text-white text-lg flex items-center">
                            <Battery className="mr-2 h-5 w-5 text-orange-400" />
                            Cables & Chargers
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Battery className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/20w-fast-charger" className="flex-1">
                                20W Fast Charger
                              </Link>
                              <span className="text-gray-400 text-xs">R119</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Cable className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/iphone-cable" className="flex-1">
                                iPhone Cable
                              </Link>
                              <span className="text-gray-400 text-xs">R79</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Battery className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/macbook-charger-60w" className="flex-1">
                                60W MacBook Charger
                              </Link>
                              <span className="text-gray-400 text-xs">R449</span>
                            </li>
                          </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Tablet className="mr-2 h-5 w-5 text-purple-400" />
                            iPad Accessories
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Shield className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/ipad-screen-protector" className="flex-1">
                                iPad Screen Protector
                              </Link>
                              <span className="text-gray-400 text-xs">R199</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Tablet className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/ipad-case" className="flex-1">
                                iPad Case
                              </Link>
                              <span className="text-gray-400 text-xs">R399</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 mt-6 text-white text-lg flex items-center">
                            <Watch className="mr-2 h-5 w-5 text-red-400" />
                            Watch Accessories
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Watch className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/watch-bands" className="flex-1">
                                Watch Bands & Straps
                              </Link>
                              <span className="text-gray-400 text-xs">R299</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 mt-6 text-white text-lg flex items-center">
                            <HardDrive className="mr-2 h-5 w-5 text-cyan-400" />
                            Storage
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <HardDrive className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/external-storage" className="flex-1">
                                External Storage
                              </Link>
                              <span className="text-gray-400 text-xs">From R599</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sneakers */}
              <Link
                href="/sneakers"
                className="text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap"
              >
                Sneakers
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                        <Wrench className="mr-2 h-5 w-5 text-orange-400" />
                        Repair Services
                      </h4>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center py-2 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Phone className="mr-3 h-4 w-4 text-gray-400" />
                          <Link href="/repairs?service=iphone" className="hover:text-gray-300 transition-colors flex-1">
                            iPhone Repairs
                          </Link>
                        </li>
                        <li className="flex items-center py-2 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Monitor className="mr-3 h-4 w-4 text-gray-400" />
                          <Link href="/repairs?service=laptop" className="hover:text-gray-300 transition-colors flex-1">
                            Laptop Repairs
                          </Link>
                        </li>
                        <li className="flex items-center py-2 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Camera className="mr-3 h-4 w-4 text-gray-400" />
                          <Link href="/repairs?service=screen" className="hover:text-gray-300 transition-colors flex-1">
                            Screen Replacements
                          </Link>
                        </li>
                        <li className="flex items-center py-2 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Battery className="mr-3 h-4 w-4 text-gray-400" />
                          <Link
                            href="/repairs?service=battery"
                            className="hover:text-gray-300 transition-colors flex-1"
                          >
                            Battery Replacements
                          </Link>
                        </li>
                      </ul>

                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <div className="bg-blue-900/30 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <MapPin className="mr-2 h-4 w-4 text-blue-400" />
                            <span className="font-medium text-blue-400">House Call Service</span>
                          </div>
                          <p className="text-xs text-gray-300 mb-3">
                            We come to you! Professional repairs at your location.
                          </p>
                          <button
                            onClick={() => handleButtonClick({ id: "house-call", type: "service", category: "repair" })}
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                          >
                            Book Now - R49
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/contact" className="text-white hover:text-gray-300 transition-colors py-2 whitespace-nowrap">
                Support
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Mobile menu button - visible only on mobile */}
              <button
                className="lg:hidden text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                  ></span>
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                  ></span>
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                  ></span>
                </div>
              </button>

              {/* Right Side Icons */}
              <button className="text-white hover:text-gray-300 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              {authState.user ? (
                <Link href="/account" className="text-white hover:text-gray-300 transition-colors">
                  <User className="h-5 w-5" />
                </Link>
              ) : (
                <Link href="/auth/login" className="text-white hover:text-gray-300 transition-colors">
                  <User className="h-5 w-5" />
                </Link>
              )}
              <Link href="/cart" className="text-white hover:text-gray-300 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                {cartState.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartState.itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-16 bg-black z-50 overflow-y-auto">
              <div className="px-4 py-6 space-y-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  <Link
                    href="/"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Home className="mr-3 h-5 w-5" />
                      Home
                    </div>
                  </Link>

                  <div className="border-b border-gray-800">
                    <button
                      className="w-full text-left text-white hover:text-gray-300 text-lg font-medium py-3 flex items-center justify-between"
                      onClick={() => setMobileExpandedSection(mobileExpandedSection === "iphone" ? null : "iphone")}
                    >
                      <div className="flex items-center">
                        <Smartphone className="mr-3 h-5 w-5" />
                        iPhone
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileExpandedSection === "iphone" ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileExpandedSection === "iphone" && (
                      <div className="pl-8 pb-4 space-y-3">
                        <div className="text-sm text-gray-400 font-medium mb-3">Shop iPhone Range</div>

                        {/* iPhone models with expandable storage */}
                        {[
                          { name: "iPhone 16 Pro", price: "R21,999", id: "iphone-16-pro" },
                          { name: "iPhone 16", price: "R18,999", id: "iphone-16" },
                          { name: "iPhone 15 Pro", price: "R19,999", id: "iphone-15-pro" },
                          { name: "iPhone 15", price: "R16,999", id: "iphone-15" },
                          { name: "iPhone 14 Pro", price: "R17,999", id: "iphone-14-pro" },
                          { name: "iPhone 14", price: "R14,999", id: "iphone-14" },
                          { name: "iPhone 13", price: "R12,999", id: "iphone-13" },
                          { name: "iPhone 12", price: "R10,999", id: "iphone-12" },
                          { name: "iPhone 11", price: "R8,999", id: "iphone-11" },
                          { name: "iPhone XR", price: "R6,999", id: "iphone-xr" },
                        ].map((iphone) => (
                          <div key={iphone.id}>
                            <button
                              className="w-full text-left text-white hover:text-gray-300 py-2 flex items-center justify-between"
                              onClick={() =>
                                setMobileExpandedIPhone(mobileExpandedIPhone === iphone.id ? null : iphone.id)
                              }
                            >
                              <div className="flex items-center">
                                <Smartphone className="mr-2 h-4 w-4" />
                                <span className="text-sm">{iphone.name}</span>
                                <span className="text-xs text-gray-400 ml-2">From {iphone.price}</span>
                              </div>
                              <ChevronDown
                                className={`h-3 w-3 transition-transform ${mobileExpandedIPhone === iphone.id ? "rotate-180" : ""}`}
                              />
                            </button>

                            {mobileExpandedIPhone === iphone.id && (
                              <div className="pl-6 py-2 space-y-2">
                                <Link
                                  href={`/shop/${iphone.id}?storage=128gb`}
                                  className="block text-xs text-gray-300 hover:text-white py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  128GB - {iphone.price}
                                </Link>
                                <Link
                                  href={`/shop/${iphone.id}?storage=256gb`}
                                  className="block text-xs text-gray-300 hover:text-white py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  256GB - R
                                  {(
                                    Number.parseInt(iphone.price.replace("R", "").replace(",", "")) + 3000
                                  ).toLocaleString()}
                                </Link>
                                <Link
                                  href={`/shop/${iphone.id}?storage=512gb`}
                                  className="block text-xs text-gray-300 hover:text-white py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  512GB - R
                                  {(
                                    Number.parseInt(iphone.price.replace("R", "").replace(",", "")) + 8000
                                  ).toLocaleString()}
                                </Link>
                              </div>
                            )}
                          </div>
                        ))}

                        <div className="pt-3 mt-3 border-t border-gray-800 space-y-2">
                          <Link
                            href="/shop/compare"
                            className="block text-sm text-gray-300 hover:text-white py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <Settings className="mr-2 h-4 w-4" />
                              Compare iPhone
                            </div>
                          </Link>
                          <Link
                            href="/repairs"
                            className="block text-sm text-gray-300 hover:text-white py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <Wrench className="mr-2 h-4 w-4" />
                              iPhone Repairs
                            </div>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-b border-gray-800">
                    <button
                      className="w-full text-left text-white hover:text-gray-300 text-lg font-medium py-3 flex items-center justify-between"
                      onClick={() => setMobileExpandedSection(mobileExpandedSection === "ipad" ? null : "ipad")}
                    >
                      <div className="flex items-center">
                        <Tablet className="mr-3 h-5 w-5" />
                        iPad
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileExpandedSection === "ipad" ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileExpandedSection === "ipad" && (
                      <div className="pl-8 pb-4 space-y-3">
                        <div className="text-sm text-gray-400 font-medium mb-3">Shop iPad Range</div>

                        <Link
                          href="/shop/ipad-pro-m4"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Tablet className="mr-2 h-4 w-4" />
                              <span className="text-sm">iPad Pro | Apple M4</span>
                            </div>
                            <span className="text-xs text-gray-400">R17,999</span>
                          </div>
                        </Link>

                        <Link
                          href="/shop/ipad-air-m3"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Tablet className="mr-2 h-4 w-4" />
                              <span className="text-sm">iPad Air | Apple M3</span>
                            </div>
                            <span className="text-xs text-gray-400">R10,999</span>
                          </div>
                        </Link>

                        <Link
                          href="/shop/ipad-a16"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Tablet className="mr-2 h-4 w-4" />
                              <span className="text-sm">iPad | A16 Chip</span>
                            </div>
                            <span className="text-xs text-gray-400">R5,999</span>
                          </div>
                        </Link>

                        <Link
                          href="/shop?category=accessories&type=ipad"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Circle className="mr-2 h-4 w-4" />
                            <span className="text-sm">iPad Accessories</span>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className="border-b border-gray-800">
                    <button
                      className="w-full text-left text-white hover:text-gray-300 text-lg font-medium py-3 flex items-center justify-between"
                      onClick={() => setMobileExpandedSection(mobileExpandedSection === "airpods" ? null : "airpods")}
                    >
                      <div className="flex items-center">
                        <Headphones className="mr-3 h-5 w-5" />
                        AirPods
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileExpandedSection === "airpods" ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileExpandedSection === "airpods" && (
                      <div className="pl-8 pb-4 space-y-3">
                        <div className="text-sm text-gray-400 font-medium mb-3">AirPods Collection</div>

                        <Link
                          href="/shop/airpods-pro"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Headphones className="mr-2 h-4 w-4" />
                              <span className="text-sm">Apple AirPods Pro</span>
                            </div>
                            <span className="text-xs text-gray-400">R3,999</span>
                          </div>
                        </Link>

                        <Link
                          href="/shop/airpods-pro-2nd-gen"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Bluetooth className="mr-2 h-4 w-4" />
                              <span className="text-sm">AirPods Pro (2nd Gen)</span>
                            </div>
                            <span className="text-xs text-gray-400">R1,999</span>
                          </div>
                        </Link>

                        <div className="pt-3 mt-3 border-t border-gray-800 space-y-2">
                          <Link
                            href="/shop/compare?category=airpods"
                            className="block text-sm text-gray-300 hover:text-white py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <Settings className="mr-2 h-4 w-4" />
                              Compare AirPods
                            </div>
                          </Link>
                          <Link
                            href="/shop?category=accessories&type=airpods"
                            className="block text-sm text-gray-300 hover:text-white py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <Circle className="mr-2 h-4 w-4" />
                              AirPods Accessories
                            </div>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-b border-gray-800">
                    <button
                      className="w-full text-left text-white hover:text-gray-300 text-lg font-medium py-3 flex items-center justify-between"
                      onClick={() =>
                        setMobileExpandedSection(mobileExpandedSection === "accessories" ? null : "accessories")
                      }
                    >
                      <div className="flex items-center">
                        <Cable className="mr-3 h-5 w-5" />
                        Accessories
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileExpandedSection === "accessories" ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileExpandedSection === "accessories" && (
                      <div className="pl-8 pb-4 space-y-3">
                        <div className="text-sm text-gray-400 font-medium mb-3">Accessories Categories</div>

                        <Link
                          href="/shop?category=accessories&type=iphone"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Star className="mr-2 h-4 w-4" />
                            <span className="text-sm">iPhone Accessories</span>
                          </div>
                        </Link>

                        <Link
                          href="/shop?category=accessories&type=audio"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Headphones className="mr-2 h-4 w-4" />
                            <span className="text-sm">Audio & Speakers</span>
                          </div>
                        </Link>

                        <Link
                          href="/shop?category=accessories&type=chargers"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Zap className="mr-2 h-4 w-4" />
                            <span className="text-sm">Wireless Chargers</span>
                          </div>
                        </Link>

                        <Link
                          href="/shop?category=accessories&type=cables"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Cable className="mr-2 h-4 w-4" />
                            <span className="text-sm">Cables & Chargers</span>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/sneakers"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <ShoppingBag className="mr-3 h-5 w-5" />
                      Sneakers
                    </div>
                  </Link>

                  <div className="border-b border-gray-800">
                    <button
                      className="w-full text-left text-white hover:text-gray-300 text-lg font-medium py-3 flex items-center justify-between"
                      onClick={() => setMobileExpandedSection(mobileExpandedSection === "services" ? null : "services")}
                    >
                      <div className="flex items-center">
                        <Wrench className="mr-3 h-5 w-5" />
                        Services
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileExpandedSection === "services" ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileExpandedSection === "services" && (
                      <div className="pl-8 pb-4 space-y-3">
                        <div className="text-sm text-gray-400 font-medium mb-3">Repair Services</div>

                        <Link
                          href="/repairs?service=iphone"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Smartphone className="mr-2 h-4 w-4" />
                            <span className="text-sm">iPhone Repairs</span>
                          </div>
                        </Link>

                        <Link
                          href="/repairs?service=laptop"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Monitor className="mr-2 h-4 w-4" />
                            <span className="text-sm">Laptop Repairs</span>
                          </div>
                        </Link>

                        <div className="pt-3 mt-3 border-t border-gray-800">
                          <Link
                            href="/repairs?service=house-call"
                            className="block bg-blue-900/30 p-3 rounded-lg text-white hover:bg-blue-900/50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <MapPin className="mr-2 h-4 w-4 text-blue-400" />
                                <span className="text-sm font-medium">House Call Service</span>
                              </div>
                              <span className="text-xs bg-blue-600 px-2 py-1 rounded">R49</span>
                            </div>
                            <p className="text-xs text-gray-300 mt-1 ml-6">Professional repairs at your location</p>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Phone className="mr-3 h-5 w-5" />
                      Support
                    </div>
                  </Link>
                </div>

                {/* Mobile CTA Section */}
                <div className="pt-6 border-t border-gray-800">
                  <div className="bg-blue-900/30 p-4 rounded-lg mb-4">
                    <div className="flex items-center mb-2">
                      <MapPin className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="font-medium text-blue-400">House Call Service</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">Professional repairs at your location</p>
                    <button
                      onClick={() => {
                        handleButtonClick({ id: "house-call", type: "service", category: "repair" })
                        setIsMobileMenuOpen(false)
                      }}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      Book Now - R49
                    </button>
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      href="/auth/login"
                      className="flex-1 bg-white text-black text-center py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <button
                      onClick={() => {
                        handleButtonClick({ id: "general", type: "product" })
                        setIsMobileMenuOpen(false)
                      }}
                      className="flex-1 bg-gray-800 text-white text-center py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Promotional Banner */}
      <div className="bg-blue-500 text-white text-center py-3">
        <p className="text-sm font-medium">Get the Fastest delivery for Free. Shop online at RKDS Holdings!</p>
      </div>

      {/* Hero Section - Sophisticated Black & White */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800/60 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-700/20 to-gray-600/10"></div>

        {/* Enhanced radial gradients for depth - black/white only */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.03),transparent_50%)]"></div>

        {/* Sophisticated mesh pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Enhanced dynamic gradient orbs - grayscale */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-white/10 to-gray-300/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-gray-400/10 to-white/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-gray-300/8 to-white/12 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Main Promotion */}
            <div className="text-left z-10">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                RKDS
                <span className="block text-3xl md:text-4xl font-light text-gray-300">HOLDINGS</span>
                <span className="block text-2xl md:text-3xl font-light bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mt-4">
                  Your Tech & Style Destination
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 font-medium">Premium iPhones • Sneakers • Repairs</p>

              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
                onClick={() => handleButtonClick({ id: "general", type: "product" })}
              >
                Shop now
              </Button>

              <p className="text-sm text-gray-400 mt-4">House calls from R49.</p>
            </div>

            {/* Right Side - Feature Highlight */}
            <div className="text-right z-10">
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                  Style
                  <span className="block text-5xl md:text-7xl font-black">REVOLUTION</span>
                  <span className="block text-4xl md:text-6xl font-light italic bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                    Event
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Promotional Section - RKDS Style with Yellow Gradient */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-yellow-900/20 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-yellow-900/30 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-800/10 via-orange-900/15 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,193,7,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,152,0,0.12),transparent_50%)]"></div>

        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-amber-400/15 to-yellow-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-yellow-500/12 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[50vh]">
            {/* Left Side - Bold Promotional Text */}
            <div className="text-left z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                SAVE
                <span className="block text-3xl md:text-4xl font-light text-yellow-200">up to R5000</span>
                <span className="block text-4xl md:text-6xl font-black">on Tech</span>
              </h2>

              <p className="text-lg text-yellow-100 mb-6 font-medium">15 DEC - 31 JAN</p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-semibold px-8 py-3 text-base rounded-full shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105"
                onClick={() => handleButtonClick({ id: "general", type: "product" })}
              >
                Shop now
              </Button>

              <p className="text-sm text-yellow-200/80 mt-4">T&Cs apply.</p>
            </div>

            {/* Right Side - Feature Highlight */}
            <div className="text-right z-10">
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                  RKDS
                  <span className="block text-5xl md:text-7xl font-black">MEGA</span>
                  <span className="block text-4xl md:text-6xl font-light italic bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                    Event
                  </span>
                </h2>

                <div className="mt-8 text-left">
                  <p className="text-yellow-100 text-lg mb-4">Featured Deals:</p>
                  <ul className="space-y-2 text-yellow-200/90">
                    <li className="flex items-center">
                      <Smartphone className="mr-2 h-4 w-4 text-yellow-400" />
                      iPhone 15 Pro - Save R3000
                    </li>
                    <li className="flex items-center">
                      <ShoppingBag className="mr-2 h-4 w-4 text-orange-400" />
                      Premium Sneakers - Up to 40% off
                    </li>
                    <li className="flex items-center">
                      <Wrench className="mr-2 h-4 w-4 text-yellow-400" />
                      Repair Services - R49 House Calls
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-8 right-8 bg-gradient-to-br from-yellow-600 via-orange-600 to-yellow-700 text-white px-6 py-3 rounded-xl shadow-2xl backdrop-blur-sm border border-yellow-400/30">
          <div className="text-xl font-bold">LIMITED</div>
          <div className="text-xs opacity-90">TIME OFFER</div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent mb-4">
              Why Choose RKDS?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium products, professional service, and unmatched convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-gray-50 to-white hover:from-gray-50 hover:to-gray-100 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Quick repairs, instant quotes, and same-day service for most issues.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-gray-50 to-white hover:from-gray-50 hover:to-gray-100 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Quality Guaranteed</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Premium products with warranty and professional repair services you can trust.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-gray-50 to-white hover:from-gray-50 hover:to-gray-100 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Round-the-clock customer support and emergency repair services.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,0,0,0.04),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600">Handpicked premium products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  {product.category === "iphones" ? (
                    <Smartphone className="h-20 w-20 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  ) : (
                    <ShoppingBag className="h-20 w-20 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-black transition-colors">{product.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < product.rating ? "fill-current" : "text-gray-300"}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-black mb-4">R{product.price.toLocaleString()}</p>
                  <Button
                    className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300 group-hover:shadow-lg"
                    onClick={() => handleButtonClick({ id: product.id, type: "product" })}
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.03),transparent_50%)]"></div>

        {/* Animated gradient orbs - grayscale */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-white/8 to-gray-300/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-gray-400/8 to-white/6 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-gradient-to-br from-white/5 to-gray-300/8 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-8 drop-shadow-2xl">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-medium">
            Discover premium iPhones, exclusive sneakers, and professional repair services.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
            onClick={() => handleButtonClick({ id: "general", type: "product" })}
          >
            Shop now
          </Button>
        </div>
      </section>
    </div>
  )
}
