"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  Package,
  Truck,
  Mail,
  ShoppingCart,
  ChevronDown,
  Smartphone,
  Cpu,
  Menu,
  X,
  User,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OrderConfirmationPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)

  // In a real app, this would get order details from the URL params or API
  const orderNumber = "TS-" + Math.random().toString(36).substr(2, 9).toUpperCase()
  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-2">Thank you for your purchase</p>
          <p className="text-gray-600">Order #{orderNumber} has been placed successfully</p>
        </div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-medium">Credit Card</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Status:</span>
                <span className="font-medium text-green-600">Confirmed</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-medium">{estimatedDelivery}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Method:</span>
                <span className="font-medium">Standard Delivery</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Cost:</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tracking:</span>
                <span className="font-medium">Available soon</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What's Next */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What happens next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Order Confirmation</h3>
                <p className="text-sm text-gray-600">You'll receive an email confirmation with your order details</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Package className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Order Processing</h3>
                <p className="text-sm text-gray-600">We'll prepare your items and get them ready for shipping</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">Your order will be delivered to your specified address</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
            <Button size="lg" variant="outline">
              Track Your Order
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <Link href="/contact" className="text-black hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
