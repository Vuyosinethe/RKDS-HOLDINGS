"use client"

import type React from "react"
import { useState } from "react"
import {
  Smartphone,
  Laptop,
  Home,
  Wrench,
  Search,
  User,
  ChevronDown,
  Headphones,
  Tablet,
  Star,
  Zap,
  Cpu,
  Settings,
  Phone,
  Shield,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

const repairServices = {
  iphone: [
    { service: "Screen Replacement", price: "R899 - R1,499", time: "30-60 mins", popular: true },
    { service: "Battery Replacement", price: "R599 - R899", time: "20-30 mins", popular: true },
    { service: "Camera Repair", price: "R799 - R1,299", time: "45-90 mins", popular: false },
    { service: "Charging Port Repair", price: "R699 - R999", time: "30-45 mins", popular: false },
    { service: "Water Damage Repair", price: "R1,299 - R2,499", time: "2-4 hours", popular: false },
    { service: "Speaker/Microphone Repair", price: "R599 - R899", time: "30-60 mins", popular: false },
  ],
  laptop: [
    { service: "Screen Replacement", price: "R1,499 - R3,999", time: "1-2 hours", popular: true },
    { service: "Keyboard Replacement", price: "R899 - R1,899", time: "45-90 mins", popular: true },
    { service: "Hard Drive Replacement", price: "R1,299 - R2,499", time: "1-2 hours", popular: false },
    { service: "RAM Upgrade", price: "R599 - R1,499", time: "30-45 mins", popular: false },
    { service: "Battery Replacement", price: "R799 - R1,599", time: "45-90 mins", popular: false },
    { service: "Motherboard Repair", price: "R2,499 - R4,999", time: "2-4 hours", popular: false },
  ],
}

export default function RepairsPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)
  const { items } = useCart()
  const itemCount = items ? items.reduce((sum, item) => sum + item.quantity, 0) : 0
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    deviceModel: "",
    issue: "",
    description: "",
    serviceType: "store", // 'store' or 'housecall'
    preferredDate: "",
    preferredTime: "",
    urgency: "normal",
    agreedToTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log("Booking submitted:", formData)
    alert("Repair booking submitted successfully! We'll contact you within 24 hours.")
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
      <div className="bg-blue-600 text-white text-center py-3">
        <p className="text-sm font-medium">Get the Fastest delivery for Free. Shop online at RKDS Holdings!</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Device Repair Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert repairs for your iPhone and laptop with genuine parts, professional service, and comprehensive
            warranty coverage.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Home className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">House Call Service</h3>
            </div>
            <p className="text-blue-800 text-lg mb-2">
              We come to you for just <span className="font-bold text-2xl">R49</span>!
            </p>
            <p className="text-blue-700 text-sm">
              Professional repairs at your location - home, office, or anywhere convenient for you.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* iPhone Repairs */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-black text-white p-3 rounded-lg mr-4">
                <Smartphone className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">iPhone Repairs</h2>
                <p className="text-gray-600">Professional iPhone repair services</p>
              </div>
            </div>
            <div className="space-y-4">
              {repairServices.iphone.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-semibold text-gray-900">{service.service}</h3>
                      {service.popular && (
                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Popular</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">Estimated time: {service.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{service.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Laptop Repairs */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-black text-white p-3 rounded-lg mr-4">
                <Laptop className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Laptop Repairs</h2>
                <p className="text-gray-600">Expert laptop repair services</p>
              </div>
            </div>
            <div className="space-y-4">
              {repairServices.laptop.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-semibold text-gray-900">{service.service}</h3>
                      {service.popular && (
                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Popular</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">Estimated time: {service.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{service.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Book Your Repair Service</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Device Type *</label>
                <select
                  required
                  value={formData.deviceType}
                  onChange={(e) => handleInputChange("deviceType", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select device type</option>
                  <option value="iPhone">iPhone</option>
                  <option value="iPad">iPad</option>
                  <option value="MacBook">MacBook</option>
                  <option value="Windows Laptop">Windows Laptop</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Device Model</label>
              <input
                type="text"
                value={formData.deviceModel}
                onChange={(e) => handleInputChange("deviceModel", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="e.g., iPhone 15 Pro, MacBook Air M2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Issue Description *</label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Please describe the issue with your device in detail..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="serviceType"
                      value="store"
                      checked={formData.serviceType === "store"}
                      onChange={(e) => handleInputChange("serviceType", e.target.value)}
                      className="mr-3"
                    />
                    <span>In-Store Repair (Free)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="serviceType"
                      value="housecall"
                      checked={formData.serviceType === "housecall"}
                      onChange={(e) => handleInputChange("serviceType", e.target.value)}
                      className="mr-3"
                    />
                    <span>House Call Service (+R49)</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                <select
                  value={formData.urgency}
                  onChange={(e) => handleInputChange("urgency", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="normal">Normal (2-3 days)</option>
                  <option value="urgent">Urgent (Same day)</option>
                  <option value="emergency">Emergency (Within 2 hours)</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreedToTerms}
                onChange={(e) => handleInputChange("agreedToTerms", e.target.checked)}
                className="mr-3"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the terms and conditions and privacy policy *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Book Repair Service
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-black text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Wrench className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Technicians</h3>
            <p className="text-gray-600">Certified professionals with years of experience</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">90-day warranty on all repairs and parts</p>
          </div>
          <div className="text-center">
            <div className="bg-black text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
            <p className="text-gray-600">Most repairs completed within 24-48 hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}
