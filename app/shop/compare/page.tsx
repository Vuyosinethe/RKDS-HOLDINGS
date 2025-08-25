"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Smartphone, Cpu, Menu, X, ShoppingCart, User } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"

const iPhoneModels = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    price: "From R21,999",
    display: "6.3″ Super Retina XDR",
    chip: "A18 Pro",
    camera: "48MP Main, 48MP Ultra Wide, 12MP Telephoto",
    battery: "Up to 27 hours video",
    storage: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    price: "From R18,999",
    display: "6.1″ Super Retina XDR",
    chip: "A18",
    camera: "48MP Main, 12MP Ultra Wide",
    battery: "Up to 22 hours video",
    storage: ["128GB", "256GB", "512GB"],
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    price: "From R19,999",
    display: "6.1″ Super Retina XDR",
    chip: "A17 Pro",
    camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
    battery: "Up to 23 hours video",
    storage: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
  },
]

export default function ComparePage() {
  const [selectedModels, setSelectedModels] = useState([iPhoneModels[0], iPhoneModels[1]])
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const { items } = useCart()
  const authState = useAuth()

  const itemCount = items ? items.reduce((sum, item) => sum + item.quantity, 0) : 0

  const handleModelChange = (index: number, modelId: string) => {
    const newModel = iPhoneModels.find((model) => model.id === modelId)
    if (newModel) {
      const newSelectedModels = [...selectedModels]
      newSelectedModels[index] = newModel
      setSelectedModels(newSelectedModels)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-black text-white sticky top-0 z-50 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/images/rkds-logo.png" alt="RKDS Holdings" width={120} height={40} className="h-8 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 md:space-x-6 lg:space-x-8 relative overflow-visible">
              {/* Home Link */}
              <Link
                href="/"
                className="text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base"
              >
                Home
              </Link>

              {/* iPhone Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("iphone")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base">
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
                          <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                            <ul className="space-y-2 text-sm pr-2">
                              <li className="group">
                                <Link
                                  href="/shop/iphone-16-pro"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Cpu className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 16 Pro</span>
                                  <span className="text-gray-400 text-xs">From R21,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-16"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 16</span>
                                  <span className="text-gray-400 text-xs">From R18,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-16-plus"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 16 Plus</span>
                                  <span className="text-gray-400 text-xs">From R20,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-16e"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 16e</span>
                                  <span className="text-gray-400 text-xs">From R16,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-15"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 15</span>
                                  <span className="text-gray-400 text-xs">From R16,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-15-plus"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 15 Plus</span>
                                  <span className="text-gray-400 text-xs">From R18,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-14-pro"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Cpu className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 14 Pro</span>
                                  <span className="text-gray-400 text-xs">From R17,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-14-pro-max"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Cpu className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 14 Pro Max</span>
                                  <span className="text-gray-400 text-xs">From R20,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-14"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 14</span>
                                  <span className="text-gray-400 text-xs">From R14,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-13"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 13</span>
                                  <span className="text-gray-400 text-xs">From R12,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-12"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 12</span>
                                  <span className="text-gray-400 text-xs">From R10,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-11"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone 11</span>
                                  <span className="text-gray-400 text-xs">From R8,999</span>
                                </Link>
                              </li>
                              <li className="group">
                                <Link
                                  href="/shop/iphone-xr"
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors hover:bg-gray-800 rounded px-2"
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">iPhone XR</span>
                                  <span className="text-gray-400 text-xs">From R6,999</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg">Compare & Shop</h4>
                          <ul className="space-y-3 text-sm">
                            <li>
                              <Link
                                href="/shop/compare"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                Compare iPhone Models
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop" className="text-gray-300 hover:text-white transition-colors">
                                Shop All iPhones
                              </Link>
                            </li>
                            <li>
                              <Link href="/repairs" className="text-gray-300 hover:text-white transition-colors">
                                iPhone Repairs
                              </Link>
                            </li>
                          </ul>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base">
                  iPad <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "ipad" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100]">
                    <div className="p-6">
                      <h4 className="font-bold mb-4 text-white text-lg">Shop iPad</h4>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <Link href="/shop/ipad-pro" className="text-gray-300 hover:text-white transition-colors">
                            iPad Pro
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/ipad-air" className="text-gray-300 hover:text-white transition-colors">
                            iPad Air
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/ipad" className="text-gray-300 hover:text-white transition-colors">
                            iPad
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/ipad-mini" className="text-gray-300 hover:text-white transition-colors">
                            iPad mini
                          </Link>
                        </li>
                      </ul>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base">
                  AirPods <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "airpods" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100]">
                    <div className="p-6">
                      <h4 className="font-bold mb-4 text-white text-lg">Shop AirPods</h4>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <Link href="/shop/airpods-pro" className="text-gray-300 hover:text-white transition-colors">
                            AirPods Pro
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/airpods-max" className="text-gray-300 hover:text-white transition-colors">
                            AirPods Max
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/airpods" className="text-gray-300 hover:text-white transition-colors">
                            AirPods (3rd generation)
                          </Link>
                        </li>
                      </ul>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base">
                  Accessories <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "accessories" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100]">
                    <div className="p-6">
                      <h4 className="font-bold mb-4 text-white text-lg">Shop Accessories</h4>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <Link href="/shop/cases" className="text-gray-300 hover:text-white transition-colors">
                            Cases & Protection
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/chargers" className="text-gray-300 hover:text-white transition-colors">
                            Chargers & Cables
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/stands" className="text-gray-300 hover:text-white transition-colors">
                            Stands & Mounts
                          </Link>
                        </li>
                        <li>
                          <Link href="/sneakers" className="text-gray-300 hover:text-white transition-colors">
                            Sneakers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100]">
                    <div className="p-6">
                      <h4 className="font-bold mb-4 text-white text-lg">Our Services</h4>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <Link href="/repairs" className="text-gray-300 hover:text-white transition-colors">
                            Device Repairs
                          </Link>
                        </li>
                        <li>
                          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact Support
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="text-white hover:text-gray-300 transition-colors relative">
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <Link href="/account" className="text-white hover:text-gray-300 transition-colors">
                <User className="h-6 w-6" />
              </Link>
              <button
                className="lg:hidden text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-gray-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile iPhone Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium py-2"
                  onClick={() => setExpandedMobile(expandedMobile === "iphone" ? null : "iphone")}
                >
                  iPhone
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedMobile === "iphone" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedMobile === "iphone" && (
                  <div className="ml-4 mt-2 space-y-2 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                    <Link
                      href="/shop/iphone-16-pro"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 16 Pro - From R21,999
                    </Link>
                    <Link
                      href="/shop/iphone-16"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 16 - From R18,999
                    </Link>
                    <Link
                      href="/shop/iphone-16-plus"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 16 Plus - From R20,999
                    </Link>
                    <Link
                      href="/shop/iphone-16e"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 16e - From R16,999
                    </Link>
                    <Link
                      href="/shop/iphone-15"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 15 - From R16,999
                    </Link>
                    <Link
                      href="/shop/iphone-15-plus"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 15 Plus - From R18,999
                    </Link>
                    <Link
                      href="/shop/iphone-14-pro"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 14 Pro - From R17,999
                    </Link>
                    <Link
                      href="/shop/iphone-14-pro-max"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 14 Pro Max - From R20,999
                    </Link>
                    <Link
                      href="/shop/iphone-14"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 14 - From R14,999
                    </Link>
                    <Link
                      href="/shop/iphone-13"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 13 - From R12,999
                    </Link>
                    <Link
                      href="/shop/iphone-12"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 12 - From R10,999
                    </Link>
                    <Link
                      href="/shop/iphone-11"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone 11 - From R8,999
                    </Link>
                    <Link
                      href="/shop/iphone-xr"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPhone XR - From R6,999
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile iPad Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium py-2"
                  onClick={() => setExpandedMobile(expandedMobile === "ipad" ? null : "ipad")}
                >
                  iPad
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedMobile === "ipad" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedMobile === "ipad" && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/shop/ipad-pro"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPad Pro
                    </Link>
                    <Link
                      href="/shop/ipad-air"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPad Air
                    </Link>
                    <Link
                      href="/shop/ipad"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPad
                    </Link>
                    <Link
                      href="/shop/ipad-mini"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      iPad mini
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile AirPods Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium py-2"
                  onClick={() => setExpandedMobile(expandedMobile === "airpods" ? null : "airpods")}
                >
                  AirPods
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedMobile === "airpods" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedMobile === "airpods" && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/shop/airpods-pro"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AirPods Pro
                    </Link>
                    <Link
                      href="/shop/airpods-max"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AirPods Max
                    </Link>
                    <Link
                      href="/shop/airpods"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AirPods (3rd generation)
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Accessories Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium py-2"
                  onClick={() => setExpandedMobile(expandedMobile === "accessories" ? null : "accessories")}
                >
                  Accessories
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedMobile === "accessories" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedMobile === "accessories" && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/shop/cases"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Cases & Protection
                    </Link>
                    <Link
                      href="/shop/chargers"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Chargers & Cables
                    </Link>
                    <Link
                      href="/shop/stands"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Stands & Mounts
                    </Link>
                    <Link
                      href="/sneakers"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sneakers
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white hover:text-gray-300 font-medium py-2"
                  onClick={() => setExpandedMobile(expandedMobile === "services" ? null : "services")}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedMobile === "services" ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedMobile === "services" && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/repairs"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Device Repairs
                    </Link>
                    <Link
                      href="/about"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      className="block text-gray-300 hover:text-white py-1 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Support
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Compare iPhone Models</h1>
          <p className="text-gray-600">
            Compare features, specifications, and pricing across different iPhone models to find the perfect device for
            you.
          </p>
        </div>

        {/* Model Selection */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Select Models to Compare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedModels.map((model, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model {index + 1}</label>
                <select
                  value={model.id}
                  onChange={(e) => handleModelChange(index, e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {iPhoneModels.map((iphone) => (
                    <option key={iphone.id} value={iphone.id}>
                      {iphone.name} - {iphone.price}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Feature</th>
                  {selectedModels.map((model, index) => (
                    <th key={index} className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                      {model.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Price</td>
                  {selectedModels.map((model, index) => (
                    <td key={index} className="px-6 py-4 text-sm text-gray-900 font-semibold text-green-600">
                      {model.price}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Display</td>
                  {selectedModels.map((model, index) => (
                    <td key={index} className="px-6 py-4 text-sm text-gray-900">
                      {model.display}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Chip</td>
                  {selectedModels.map((model, index) => (
                    <td key={index} className="px-6 py-4 text-sm text-gray-900">
                      {model.chip}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Camera</td>
                  {selectedModels.map((model, index) => (
                    <td key={index} className="px-6 py-4 text-sm text-gray-900">
                      {model.camera}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Battery Life</td>
                  {selectedModels.map((model, index) => (
                    <td key={index} className="px-6 py-4 text-sm text-gray-900">
                      {model.battery}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Storage Options</td>
                  {selectedModels.map((model, index) => (
                    <td key={index} className="px-6 py-4 text-sm text-gray-900">
                      {model.storage.join(", ")}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Available Colors</td>
                  {selectedModels.map((model, index) => (
                    <td key={index} className="px-6 py-4 text-sm text-gray-900">
                      {model.colors.join(", ")}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {selectedModels.map((model, index) => (
            <Link
              key={index}
              href={`/shop/${model.id}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
            >
              Shop {model.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
