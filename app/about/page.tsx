"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Smartphone,
  ShoppingCart,
  ChevronDown,
  Search,
  User,
  Cpu,
  Tablet,
  Headphones,
  Bluetooth,
  Settings,
  PenToolIcon as Tool,
  Home,
  Wrench,
  Circle,
  Cable,
  Star,
  Zap,
  ShoppingBag,
  Monitor,
  Battery,
  MapPin,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"

export default function AboutPage() {
  const { state: authState } = useAuth()
  const { state: cartState } = useCart()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null)
  const [mobileExpandedIPhone, setMobileExpandedIPhone] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
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
                        {/* iPhone Accessories */}
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Shield className="mr-2 h-5 w-5 text-yellow-400" />
                            iPhone Accessories
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Shield className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">Privacy Screen Protector</span>
                              </div>
                              <span className="text-gray-400 text-xs">R129-R699</span>
                            </li>
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Smartphone className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">Clear iPhone Case</span>
                              </div>
                              <span className="text-gray-400 text-xs">R149-R499</span>
                            </li>
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Shield className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">Liquid Silicone Case</span>
                              </div>
                              <span className="text-gray-400 text-xs">R299-R899</span>
                            </li>
                          </ul>
                        </div>

                        {/* Wireless Chargers & iPad Accessories */}
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Bluetooth className="mr-2 h-5 w-5 text-green-400" />
                            Wireless Chargers
                          </h4>
                          <ul className="space-y-3 text-sm mb-6">
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Bluetooth className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">MagSafe Charger 1m</span>
                              </div>
                              <span className="text-gray-400 text-xs">R799</span>
                            </li>
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Bluetooth className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">MagSafe Charger</span>
                              </div>
                              <span className="text-gray-400 text-xs">R599</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Tablet className="mr-2 h-5 w-5 text-purple-400" />
                            iPad Accessories
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Shield className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">iPad Screen Protector</span>
                              </div>
                              <span className="text-gray-400 text-xs">R199</span>
                            </li>
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Tablet className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">iPad Case</span>
                              </div>
                              <span className="text-gray-400 text-xs">R399</span>
                            </li>
                          </ul>
                        </div>

                        {/* Audio, Cables & Storage */}
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Headphones className="mr-2 h-5 w-5 text-blue-400" />
                            Audio & Speakers
                          </h4>
                          <ul className="space-y-3 text-sm mb-6">
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Headphones className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">AirPods Pro</span>
                              </div>
                              <span className="text-gray-400 text-xs">R3,999</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Smartphone className="mr-2 h-5 w-5 text-orange-400" />
                            Cables & Chargers
                          </h4>
                          <ul className="space-y-3 text-sm mb-6">
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Smartphone className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">20W Fast Charger</span>
                              </div>
                              <span className="text-gray-400 text-xs">R119</span>
                            </li>
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Smartphone className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">iPhone Cable</span>
                              </div>
                              <span className="text-gray-400 text-xs">R79</span>
                            </li>
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Smartphone className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">60W MacBook Charger</span>
                              </div>
                              <span className="text-gray-400 text-xs">R449</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Shield className="mr-2 h-5 w-5 text-cyan-400" />
                            Watch & Storage
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Shield className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">Watch Bands & Straps</span>
                              </div>
                              <span className="text-gray-400 text-xs">R299</span>
                            </li>
                            <li className="flex items-center justify-between py-2 hover:bg-gray-800 px-2 rounded transition-colors">
                              <div className="flex items-center">
                                <Shield className="mr-2 h-3 w-3 text-gray-400" />
                                <span className="text-white">External Storage</span>
                              </div>
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
                        <Tool className="mr-2 h-5 w-5 text-orange-400" />
                        Repair Services
                      </h4>
                      <ul className="space-y-4 text-sm">
                        <li className="flex items-center py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Smartphone className="mr-3 h-4 w-4 text-gray-400" />
                          <Link href="/repairs?service=iphone" className="hover:text-gray-300 transition-colors">
                            iPhone Repairs
                          </Link>
                        </li>
                        <li className="flex items-center py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Cpu className="mr-3 h-4 w-4 text-gray-400" />
                          <Link href="/repairs?service=laptop" className="hover:text-gray-300 transition-colors">
                            Laptop Repairs
                          </Link>
                        </li>
                        <li className="flex items-center py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Tablet className="mr-3 h-4 w-4 text-gray-400" />
                          <Link href="/repairs?service=screen" className="hover:text-gray-300 transition-colors">
                            Screen Replacements
                          </Link>
                        </li>
                        <li className="flex items-center py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Shield className="mr-3 h-4 w-4 text-gray-400" />
                          <Link href="/repairs?service=battery" className="hover:text-gray-300 transition-colors">
                            Battery Replacements
                          </Link>
                        </li>
                      </ul>

                      {/* House Call Service Section */}
                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <div className="bg-blue-900 rounded-lg p-4">
                          <div className="flex items-start space-x-3 mb-3">
                            <div className="bg-blue-600 rounded-full p-1">
                              <Tool className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <h5 className="font-bold text-blue-300 mb-2">House Call Service</h5>
                              <p className="text-blue-100 text-sm mb-3">
                                We come to you! Professional repairs at your location.
                              </p>
                              <Link
                                href="/repairs?service=house-call"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors text-sm"
                              >
                                Book Now - R49
                              </Link>
                            </div>
                          </div>
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

                        <Link
                          href="/repairs?service=screen"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Monitor className="mr-2 h-4 w-4" />
                            <span className="text-sm">Screen Replacements</span>
                          </div>
                        </Link>

                        <Link
                          href="/repairs?service=battery"
                          className="block text-white hover:text-gray-300 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <Battery className="mr-2 h-4 w-4" />
                            <span className="text-sm">Battery Replacements</span>
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
                            <p className="text-xs text-gray-300 mt-1 ml-6">
                              We come to you! Professional repairs at your location.
                            </p>
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
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="bg-blue-600 text-white text-center py-3">
        <p className="text-sm font-medium">Get the Fastest delivery for Free. Shop online at RKDS Holdings!</p>
      </div>

      {/* ... existing about page content ... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-100 text-gray-800">About RKDS Holdings</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Your Trusted Tech & Style Partner</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2018, we've been South Africa's premier destination for premium technology and stylish footwear,
            backed by expert repair services that come to you.
          </p>
        </div>

        {/* ... existing about page sections ... */}
      </div>
    </div>
  )
}
