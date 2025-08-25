"use client"

import type React from "react"
import { useState } from "react"
import {
  ShoppingCart,
  Search,
  User,
  ChevronDown,
  Tablet,
  Headphones,
  Menu,
  X,
  Shield,
  Wrench,
  Cpu,
  Phone,
  Settings,
  MapPin,
  Laptop,
} from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"

export default function ContactPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { items } = useCart()
  const authState = useAuth()
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)

  const itemCount = items ? items.reduce((sum, item) => sum + item.quantity, 0) : 0

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
              {authState.user ? (
                <Link href="/account">
                  <User className="h-5 w-5 text-white cursor-pointer hover:text-gray-300" />
                </Link>
              ) : (
                <Link href="/auth/login">
                  <User className="h-5 w-5 text-white cursor-pointer hover:text-gray-300" />
                </Link>
              )}
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-5 w-5 text-white cursor-pointer hover:text-gray-300" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-white hover:text-gray-300 font-medium">
                Home
              </Link>

              <div>
                <button
                  onClick={() => setExpandedMobile(expandedMobile === "iphone" ? null : "iphone")}
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
                  onClick={() => setExpandedMobile(expandedMobile === "ipad" ? null : "ipad")}
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
                  onClick={() => setExpandedMobile(expandedMobile === "airpods" ? null : "airpods")}
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
                  onClick={() => setExpandedMobile(expandedMobile === "accessories" ? null : "accessories")}
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
                  onClick={() => setExpandedMobile(expandedMobile === "services" ? null : "services")}
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

      {/* Blue Promotional Banner */}
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium">Get the Fastest delivery for Free. Shop online at RKDS Holdings!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+27 11 123 4567</p>
            <p className="text-gray-600">Mon-Fri 9AM-6PM</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Tech Street</p>
            <p className="text-gray-600">Johannesburg, 2000</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">House Calls</h3>
            <p className="text-gray-600">R49 Service Fee</p>
            <p className="text-gray-600">We come to you!</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="+27 11 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="product">Product Information</option>
                    <option value="repair">Repair Services</option>
                    <option value="order">Order Support</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
            <div>
              <p className="font-medium">Monday - Friday</p>
              <p className="text-gray-600">9:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="font-medium">Saturday</p>
              <p className="text-gray-600">10:00 AM - 4:00 PM</p>
            </div>
          </div>
          <p className="text-gray-600 mt-4">Closed on Sundays and Public Holidays</p>
        </div>
      </div>
    </div>
  )
}
