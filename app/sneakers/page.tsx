"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Search,
  User,
  Menu,
  X,
  ChevronDown,
  Cpu,
  Tablet,
  Headphones,
  Shield,
  Wrench,
  Phone,
  Laptop,
  Settings,
} from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function SneakersPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const { items } = useCart()
  const router = useRouter()

  // Sneaker products with image placeholders
  const sneakerProducts = [
    {
      id: "nike-air-max-95-black-gold",
      name: "Nike Air Max 95",
      colorway: "Black/Gold",
      price: "R2,999",
      rating: 4.8,
      reviews: 124,
      image: "/images/nike-air-max-95-pair-front.jpeg",
    },
    {
      id: "nike-air-max-portal-cream",
      name: "Nike Air Max Portal",
      colorway: "Orange/Pink Gradient & Neon Green",
      price: "R3,299",
      rating: 4.7,
      reviews: 89,
      image: "/images/nike-air-max-portal-orange-pink-side.jpeg",
    },
    {
      id: "nike-air-max-portal-original",
      name: "Nike Air Max Portal",
      colorway: "Cream/White",
      price: "R2,999",
      rating: 4.6,
      reviews: 156,
      image: "/images/nike-air-max-portal-original-side.jpeg",
    },
    {
      id: "nike-air-max-portal-black-white",
      name: "Nike Air Max Portal",
      colorway: "Black/White",
      price: "R3,199",
      rating: 4.8,
      reviews: 73,
      image: "/images/nike-air-max-portal-black-white-side.jpeg",
    },
    {
      id: "nike-air-max-portal-grey-white",
      name: "Nike Air Max Portal",
      colorway: "Grey/White",
      price: "R3,399",
      rating: 4.7,
      reviews: 45,
      image: "/images/nike-air-max-portal-grey-white-side.jpeg",
    },
    {
      id: "air-jordan-low-white-gray",
      name: "Air Jordan Low",
      colorway: "White/Gray",
      price: "R3,599",
      rating: 4.9,
      reviews: 156,
      image: "/images/air-jordan-low-white-gray.jpeg",
    },
    {
      id: "air-jordan-low-black-orange",
      name: "Air Jordan Low Orange",
      colorway: "Black/Orange",
      price: "R3,799",
      rating: 4.8,
      reviews: 92,
      image: "/images/air-jordan-low-black-orange-side.jpeg",
    },
    {
      id: "air-jordan-low-gray-white",
      name: "Air Jordan Low",
      colorway: "Shadow Gray",
      price: "R3,699",
      rating: 4.7,
      reviews: 78,
      image: "/images/air-jordan-low-gray-white-side.jpeg",
    },
    {
      id: "nike-shox-tl-silver",
      name: "Nike Shox TL",
      colorway: "Metallic Silver/Black",
      price: "R4,299",
      rating: 4.6,
      reviews: 203,
      image: "/images/nike-shox-tl-side-profile.jpeg",
    },
    {
      id: "nike-air-max-95-big-bubble-black-purple",
      name: "Nike Air Max 95 'Big Bubble'",
      colorway: "Black/Purple & Navy/Blue",
      price: "R4,599",
      rating: 4.8,
      reviews: 142,
      image: "/images/nike-air-max-95-big-bubble-side.jpeg",
    },
    {
      id: "nike-air-max-sndr-purple-gradient",
      name: "Nike Air Max SNDR",
      colorway: "Purple Gradient/Black/Silver",
      price: "R5,299",
      rating: 4.9,
      reviews: 67,
      image: "/images/nike-air-max-sndr-side-profile.jpeg",
    },
    {
      id: "nike-air-max-plus-eclair-lightning",
      name: "Nike Air Max Plus 'Eclair Lightning'",
      colorway: "Electric Blue Lightning/Navy/White/Red",
      price: "R4,799",
      rating: 4.8,
      reviews: 94,
      image: "/images/nike-air-max-plus-eclair-lightning-side.jpeg",
    },
    {
      id: "nike-air-max-plus-drift",
      name: "Nike Air Max Plus 'Drift'",
      colorway: "Black/Yellow/Dark Gray",
      price: "R4,399",
      rating: 4.7,
      reviews: 58,
      image: "/images/nike-air-max-plus-drift-side.jpeg",
    },
    {
      id: "nike-air-max-plus-3",
      name: "Nike Air Max Plus 3",
      colorway: "Black/Yellow & White/Light Gray",
      price: "R4,199",
      rating: 4.8,
      reviews: 127,
      image: "/images/nike-air-max-plus-3-black-side.jpeg",
    },
    {
      id: "nike-air-max-plus-original",
      name: "Nike Air Max Plus",
      colorway: "Black/Yellow & White/Silver/Orange",
      price: "R3,999",
      rating: 4.9,
      reviews: 234,
      image: "/images/nike-air-max-plus-black-side.jpeg",
    },
    {
      id: "nike-air-max-plus",
      name: "Nike Air Max Plus",
      colorway: "Black/Yellow",
      price: "R3,899",
      rating: 4.8,
      reviews: 156,
      image: "/images/nike-air-max-plus-black-sneaker-side-view.png",
    },
    {
      id: "nike-dunk-low-next-nature",
      name: "Nike Dunk Low Next Nature",
      colorway: "Pink/White & Grey/White",
      price: "R2,699",
      rating: 4.6,
      reviews: 89,
      image: "/images/nike-dunk-low-next-nature-pink-side.jpeg",
    },
    {
      id: "new-balance-9060-gray-pink",
      name: "New Balance 9060",
      colorway: "Gray/Blue & Pink/Rose",
      price: "R3,899",
      rating: 4.7,
      reviews: 87,
      image: "/images/new-balance-9060-gray-blue-side.jpeg",
    },
    {
      id: "nike-p-6000-white",
      name: "Nike P-6000",
      colorway: "White/Light Gray",
      price: "R2,799",
      rating: 4.6,
      reviews: 92,
      image: "/images/nike-p-6000-white-silver-side.jpeg",
    },
    {
      id: "converse-chuck-taylor-all-star-black",
      name: "Converse Chuck Taylor All Star",
      colorway: "Black/White",
      price: "R1,899",
      rating: 4.8,
      reviews: 267,
      image: "/images/converse-chuck-taylor-black-side-profile.jpeg",
    },
    {
      id: "air-jordan-4-travis-scott-cactus-jack",
      name: "Air Jordan 4 Retro 'Travis Scott'",
      colorway: "University Blue/Black/Varsity Red",
      price: "R8,999",
      rating: 4.9,
      reviews: 89,
      image: "/images/air-jordan-4-travis-scott-side-profile.jpeg",
    },
    {
      id: "air-jordan-4-black-cat",
      name: "Air Jordan 4 Retro 'Black Cat'",
      colorway: "Black/Black/Light Graphite",
      price: "R7,499",
      rating: 4.9,
      reviews: 156,
      image: "/images/air-jordan-4-black-cat-side-profile.jpeg",
    },
    {
      id: "air-jordan-1-hyper-royal",
      name: "Air Jordan 1 Retro High 'Hyper Royal'",
      colorway: "Hyper Royal/Light Smoke Grey/White",
      price: "R4,999",
      rating: 4.8,
      reviews: 134,
      image: "/images/air-jordan-1-hyper-royal-side-profile.jpeg",
    },
    {
      id: "adidas-stan-smith",
      name: "Adidas Stan Smith",
      colorway: "White/Green",
      price: "R1,799",
      rating: 4.5,
      reviews: 234,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "puma-suede-classic",
      name: "Puma Suede Classic",
      colorway: "Peacoat/White",
      price: "R1,699",
      rating: 4.4,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "reebok-classic-leather",
      name: "Reebok Classic Leather",
      colorway: "White/Gum",
      price: "R1,899",
      rating: 4.3,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "jordan-4-retro",
      name: "Jordan 4 Retro",
      colorway: "Black Cat",
      price: "R5,299",
      rating: 4.9,
      reviews: 278,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "nike-blazer-mid",
      name: "Nike Blazer Mid",
      colorway: "White/Black",
      price: "R2,099",
      rating: 4.6,
      reviews: 134,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "adidas-gazelle",
      name: "Adidas Gazelle",
      colorway: "Core Black",
      price: "R1,999",
      rating: 4.5,
      reviews: 167,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "asics-gel-lyte-iii",
      name: "ASICS Gel-Lyte III",
      colorway: "White/Blue",
      price: "R2,499",
      rating: 4.7,
      reviews: 98,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  console.log("[v0] Total sneaker products:", sneakerProducts.length)
  const nikeP6000 = sneakerProducts.find((product) => product.id === "nike-p-6000-white")
  console.log("[v0] Nike P-6000 product found:", nikeP6000)

  const handleBookNow = (sneakerId: string) => {
    console.log("Booking for sneaker:", sneakerId)
    router.push(`/sneakers/${sneakerId}`)
  }

  const toggleMobileSection = (section: string) => {
    setExpandedMobile((prev) => (prev === section ? null : section))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Blue promotional banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Free delivery on orders over R500 • Shop now and save!
      </div>

      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                RKDS
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-gray-300 font-medium transition-colors">
                Home
              </Link>

              {/* iPhone Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("iphone")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors">
                  iPhone <ChevronDown className="ml-1 h-4 w-4 text-white" />
                </button>

                {activeDropdown === "iphone" && (
                  <div className="absolute top-full left-0 mt-0 w-96 bg-black border border-gray-800 rounded-lg shadow-xl z-50">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-blue-400 font-semibold mb-4 flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            Shop iPhone Range
                          </h3>
                          <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2">
                            <Link
                              href="/shop/iphone-16-pro"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 16 Pro
                                </span>
                                <span className="text-sm text-gray-400">From R21,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-16"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 16
                                </span>
                                <span className="text-sm text-gray-400">From R18,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-16-plus"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 16 Plus
                                </span>
                                <span className="text-sm text-gray-400">From R20,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-16e"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 16e
                                </span>
                                <span className="text-sm text-gray-400">From R16,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-15"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 15
                                </span>
                                <span className="text-sm text-gray-400">From R16,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-15-plus"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 15 Plus
                                </span>
                                <span className="text-sm text-gray-400">From R18,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-14-pro"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 14 Pro
                                </span>
                                <span className="text-sm text-gray-400">From R17,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-14-pro-max"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 14 Pro Max
                                </span>
                                <span className="text-sm text-gray-400">From R20,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-14"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 14
                                </span>
                                <span className="text-sm text-gray-400">From R14,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-13"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 13
                                </span>
                                <span className="text-sm text-gray-400">From R12,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-12"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 12
                                </span>
                                <span className="text-sm text-gray-400">From R10,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-11"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone 11
                                </span>
                                <span className="text-sm text-gray-400">From R8,999</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/iphone-xr"
                              className="block text-white hover:text-blue-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  iPhone XR
                                </span>
                                <span className="text-sm text-gray-400">From R6,999</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-green-400 font-semibold mb-4 flex items-center">
                            <Search className="w-4 h-4 mr-2" />
                            Explore iPhone
                          </h3>
                          <div className="space-y-3">
                            <Link
                              href="/shop/compare"
                              className="block text-white hover:text-green-400 transition-colors"
                            >
                              <div className="flex items-center">
                                <Settings className="w-4 h-4 mr-2" />
                                Compare iPhone
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* iPad Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("ipad")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors">
                  iPad <ChevronDown className="ml-1 h-4 w-4 text-white" />
                </button>

                {activeDropdown === "ipad" && (
                  <div className="absolute top-full left-0 mt-0 w-80 bg-black border border-gray-800 rounded-lg shadow-xl z-50">
                    <div className="p-6">
                      <h3 className="text-blue-400 font-semibold mb-4 flex items-center">
                        <Tablet className="w-4 h-4 mr-2" />
                        Shop iPad Range
                      </h3>
                      <div className="space-y-3">
                        <Link
                          href="/shop/ipad-pro-m4"
                          className="block text-white hover:text-blue-400 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="flex items-center">
                              <Cpu className="w-4 h-4 mr-2" />
                              iPad Pro | Apple M4
                            </span>
                            <span className="text-sm text-gray-400">R17,999</span>
                          </div>
                        </Link>
                        <Link
                          href="/shop/ipad-air-m3"
                          className="block text-white hover:text-blue-400 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="flex items-center">
                              <Cpu className="w-4 h-4 mr-2" />
                              iPad Air | Apple M3
                            </span>
                            <span className="text-sm text-gray-400">R10,999</span>
                          </div>
                        </Link>
                        <Link href="/shop/ipad-a16" className="block text-white hover:text-blue-400 transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center">
                              <Cpu className="w-4 h-4 mr-2" />
                              iPad | A16 Chip
                            </span>
                            <span className="text-sm text-gray-400">R5,999</span>
                          </div>
                        </Link>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors">
                  AirPods <ChevronDown className="ml-1 h-4 w-4 text-white" />
                </button>

                {activeDropdown === "airpods" && (
                  <div className="absolute top-full left-0 mt-0 w-80 bg-black border border-gray-800 rounded-lg shadow-xl z-50">
                    <div className="p-6">
                      <h3 className="text-blue-400 font-semibold mb-4 flex items-center">
                        <Headphones className="w-4 h-4 mr-2" />
                        AirPods Collection
                      </h3>
                      <div className="space-y-3">
                        <Link
                          href="/shop/airpods-pro"
                          className="block text-white hover:text-blue-400 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="flex items-center">
                              <Headphones className="w-4 h-4 mr-2" />
                              Apple AirPods Pro
                            </span>
                            <span className="text-sm text-gray-400">R3,999</span>
                          </div>
                        </Link>
                        <Link
                          href="/shop/airpods-pro-2nd-gen"
                          className="block text-white hover:text-blue-400 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="flex items-center">
                              <Headphones className="w-4 h-4 mr-2" />
                              AirPods Pro (2nd Gen)
                            </span>
                            <span className="text-sm text-gray-400">R1,999</span>
                          </div>
                        </Link>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors">
                  Accessories <ChevronDown className="ml-1 h-4 w-4 text-white" />
                </button>

                {activeDropdown === "accessories" && (
                  <div className="absolute top-full left-0 mt-0 w-96 bg-black border border-gray-800 rounded-lg shadow-xl z-50">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-yellow-400 font-semibold mb-4 flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            iPhone Accessories
                          </h3>
                          <div className="space-y-3">
                            <Link
                              href="/shop/iphone-case"
                              className="block text-white hover:text-yellow-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Shield className="w-4 h-4 mr-2" />
                                  Clear iPhone Case
                                </span>
                                <span className="text-sm text-gray-400">R149-R499</span>
                              </div>
                            </Link>
                            <Link
                              href="/shop/screen-protector"
                              className="block text-white hover:text-yellow-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Shield className="w-4 h-4 mr-2" />
                                  Privacy Screen Protector
                                </span>
                                <span className="text-sm text-gray-400">R129-R699</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-green-400 font-semibold mb-4 flex items-center">
                            <Tablet className="w-4 h-4 mr-2" />
                            iPad Accessories
                          </h3>
                          <div className="space-y-3">
                            <Link
                              href="/shop/ipad-case"
                              className="block text-white hover:text-green-400 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                  <Shield className="w-4 h-4 mr-2" />
                                  iPad Case
                                </span>
                                <span className="text-sm text-gray-400">R399</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/sneakers" className="text-white hover:text-gray-300 font-medium transition-colors">
                Sneakers
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors">
                  Services <ChevronDown className="ml-1 h-4 w-4 text-white" />
                </button>

                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 mt-0 w-80 bg-black border border-gray-800 rounded-lg shadow-xl z-50">
                    <div className="p-6">
                      <h3 className="text-orange-400 font-semibold mb-4 flex items-center">
                        <Wrench className="w-4 h-4 mr-2" />
                        Repair Services
                      </h3>
                      <div className="space-y-3">
                        <Link href="/repairs" className="block text-white hover:text-orange-400 transition-colors">
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            iPhone Repairs
                          </div>
                        </Link>
                        <Link href="/repairs" className="block text-white hover:text-orange-400 transition-colors">
                          <div className="flex items-center">
                            <Laptop className="w-4 h-4 mr-2" />
                            Laptop Repairs
                          </div>
                        </Link>
                        <Link href="/repairs" className="block text-white hover:text-orange-400 transition-colors">
                          <div className="flex items-center">
                            <Wrench className="w-4 h-4 mr-2" />
                            Screen Replacements
                          </div>
                        </Link>
                        <Link href="/repairs" className="block text-white hover:text-orange-400 transition-colors">
                          <div className="flex items-center">
                            <Wrench className="w-4 h-4 mr-2" />
                            Battery Replacements
                          </div>
                        </Link>
                        <div className="bg-blue-600 rounded-lg p-3 mt-3">
                          <div className="text-blue-100 text-sm font-medium mb-1">House Call Service</div>
                          <div className="text-blue-200 text-xs mb-2">
                            We come to you! Professional repairs at your location.
                          </div>
                          <Link
                            href="/repairs"
                            className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-400"
                          >
                            Book Now - R49
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/contact" className="text-white hover:text-gray-300 font-medium transition-colors">
                Support
              </Link>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-white cursor-pointer hover:text-gray-300" />
              <Link href="/auth/login">
                <User className="h-5 w-5 text-white cursor-pointer hover:text-gray-300" />
              </Link>
              <Link href="/cart" className="relative">
                <svg
                  className="h-5 w-5 text-white cursor-pointer hover:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"
                  />
                </svg>
                {items && items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-white hover:text-gray-300 font-medium">
                Home
              </Link>

              <div>
                <button
                  onClick={() => toggleMobileSection("iphone")}
                  className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium"
                >
                  iPhone
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedMobile === "iphone" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedMobile === "iphone" && (
                  <div className="mt-2 ml-4 space-y-2 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2">
                    <div className="text-sm text-gray-400 font-medium mb-2">Shop iPhone Range</div>
                    <Link href="/shop/iphone-16-pro" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 16 Pro - From R21,999
                    </Link>
                    <Link href="/shop/iphone-16" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 16 - From R18,999
                    </Link>
                    <Link href="/shop/iphone-16-plus" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 16 Plus - From R20,999
                    </Link>
                    <Link href="/shop/iphone-16e" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 16e - From R16,999
                    </Link>
                    <Link href="/shop/iphone-15" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 15 - From R16,999
                    </Link>
                    <Link href="/shop/iphone-15-plus" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 15 Plus - From R18,999
                    </Link>
                    <Link href="/shop/iphone-14-pro" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 14 Pro - From R17,999
                    </Link>
                    <Link href="/shop/iphone-14-pro-max" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 14 Pro Max - From R20,999
                    </Link>
                    <Link href="/shop/iphone-14" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 14 - From R14,999
                    </Link>
                    <Link href="/shop/iphone-13" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 13 - From R12,999
                    </Link>
                    <Link href="/shop/iphone-12" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 12 - From R10,999
                    </Link>
                    <Link href="/shop/iphone-11" className="block text-gray-300 hover:text-white text-sm">
                      iPhone 11 - From R8,999
                    </Link>
                    <Link href="/shop/iphone-xr" className="block text-gray-300 hover:text-white text-sm">
                      iPhone XR - From R6,999
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleMobileSection("ipad")}
                  className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium"
                >
                  iPad
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedMobile === "ipad" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedMobile === "ipad" && (
                  <div className="mt-2 ml-4 space-y-2">
                    <div className="text-sm text-gray-400 font-medium mb-2">Shop iPad Range</div>
                    <Link href="/shop/ipad-pro-m4" className="block text-gray-300 hover:text-white text-sm">
                      iPad Pro | Apple M4 - R17,999
                    </Link>
                    <Link href="/shop/ipad-air-m3" className="block text-gray-300 hover:text-white text-sm">
                      iPad Air | Apple M3 - R10,999
                    </Link>
                    <Link href="/shop/ipad-a16" className="block text-gray-300 hover:text-white text-sm">
                      iPad | A16 Chip - R5,999
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleMobileSection("airpods")}
                  className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium"
                >
                  AirPods
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedMobile === "airpods" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedMobile === "airpods" && (
                  <div className="mt-2 ml-4 space-y-2">
                    <div className="text-sm text-gray-400 font-medium mb-2">AirPods Collection</div>
                    <Link href="/shop/airpods-pro" className="block text-gray-300 hover:text-white text-sm">
                      Apple AirPods Pro - R3,999
                    </Link>
                    <Link href="/shop/airpods-pro-2nd-gen" className="block text-gray-300 hover:text-white text-sm">
                      AirPods Pro (2nd Gen) - R1,999
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleMobileSection("accessories")}
                  className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium"
                >
                  Accessories
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedMobile === "accessories" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedMobile === "accessories" && (
                  <div className="mt-2 ml-4 space-y-2">
                    <div className="text-sm text-gray-400 font-medium mb-2">iPhone Accessories</div>
                    <Link href="/shop/iphone-case" className="block text-gray-300 hover:text-white text-sm">
                      Clear iPhone Case - R149-R499
                    </Link>
                    <Link href="/shop/screen-protector" className="block text-gray-300 hover:text-white text-sm">
                      Privacy Screen Protector - R129-R699
                    </Link>
                    <div className="text-sm text-gray-400 font-medium mb-2 mt-3">iPad Accessories</div>
                    <Link href="/shop/ipad-case" className="block text-gray-300 hover:text-white text-sm">
                      iPad Case - R399
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/sneakers" className="block text-white hover:text-gray-300 font-medium">
                Sneakers
              </Link>

              <div>
                <button
                  onClick={() => toggleMobileSection("services")}
                  className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedMobile === "services" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedMobile === "services" && (
                  <div className="mt-2 ml-4 space-y-2">
                    <div className="text-sm text-gray-400 font-medium mb-2">Repair Services</div>
                    <Link href="/repairs" className="block text-gray-300 hover:text-white text-sm">
                      iPhone Repairs
                    </Link>
                    <Link href="/repairs" className="block text-gray-300 hover:text-white text-sm">
                      Laptop Repairs
                    </Link>
                    <Link href="/repairs" className="block text-gray-300 hover:text-white text-sm">
                      Screen Replacements
                    </Link>
                    <Link href="/repairs" className="block text-gray-300 hover:text-white text-sm">
                      Battery Replacements
                    </Link>
                    <div className="bg-blue-600 rounded-lg p-3 mt-3">
                      <div className="text-blue-100 text-sm font-medium mb-1">House Call Service</div>
                      <div className="text-blue-200 text-xs mb-2">
                        We come to you! Professional repairs at your location.
                      </div>
                      <Link
                        href="/repairs"
                        className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-400"
                      >
                        Book Now - R49
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/contact" className="block text-white hover:text-gray-300 font-medium">
                Support
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Sneakers Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest and greatest in sneaker fashion. From classic designs to cutting-edge technology, find
            your perfect pair with sizes UK 2-9 available for all models.
          </p>
        </div>

        {/* Sneakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sneakerProducts.map((sneaker) => (
            <div
              key={sneaker.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleBookNow(sneaker.id)}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <img
                  src={sneaker.image || "/placeholder.svg"}
                  alt={`${sneaker.name} ${sneaker.colorway}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{sneaker.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{sneaker.colorway}</p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(sneaker.rating) ? "text-yellow-400" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({sneaker.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{sneaker.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleBookNow(sneaker.id)
                    }}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Size Guide Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Size Guide</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4 text-center">
              All our sneakers are available in UK sizes 2-9. Use our size guide to find your perfect fit.
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="font-semibold text-gray-900">UK</div>
              <div className="font-semibold text-gray-900">US</div>
              <div className="font-semibold text-gray-900">EU</div>
              <div className="font-semibold text-gray-900">CM</div>

              {[
                { uk: "2", us: "3", eu: "35", cm: "22" },
                { uk: "3", us: "4", eu: "36", cm: "23" },
                { uk: "4", us: "5", eu: "37", cm: "24" },
                { uk: "5", us: "6", eu: "38", cm: "25" },
                { uk: "6", us: "7", eu: "39", cm: "26" },
                { uk: "7", us: "8", eu: "40", cm: "27" },
                { uk: "8", us: "9", eu: "41", cm: "28" },
                { uk: "9", us: "10", eu: "42", cm: "29" },
              ].map((size, index) => (
                <div key={index} className="contents">
                  <div className="py-2 text-gray-700">{size.uk}</div>
                  <div className="py-2 text-gray-700">{size.us}</div>
                  <div className="py-2 text-gray-700">{size.eu}</div>
                  <div className="py-2 text-gray-700">{size.cm}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
