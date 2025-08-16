"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import {
  ShoppingCart,
  Search,
  User,
  ChevronDown,
  Smartphone,
  Tablet,
  Headphones,
  Cable,
  Watch,
  HardDrive,
  Star,
  Menu,
  X,
  Zap,
  Shield,
  Wrench,
  Battery,
  Cpu,
  Camera,
  Monitor,
  Phone,
  Settings,
  PenToolIcon as Tool,
  MapPin,
  Bluetooth,
  Circle,
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
      {/* Main Navigation */}
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
                                      <span className="text-green-400 font-medium">R13,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-12?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R18,999</span>
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
                                      <span className="text-green-400 font-medium">R11,999</span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="/shop/iphone-11?storage=256gb"
                                    className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="text-white">256GB</span>
                                      <span className="text-green-400 font-medium">R16,999</span>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base">
                  iPad <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "ipad" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Tablet className="mr-2 h-5 w-5" />
                        Shop iPad Range
                      </h3>
                      <div className="space-y-4">
                        <Link
                          href="/shop/ipad-pro-m4"
                          className="flex items-center justify-between hover:text-gray-300 transition-colors"
                        >
                          <div className="flex items-center">
                            <Tablet className="mr-3 h-4 w-4" />
                            <span className="font-medium">iPad Pro | Apple M4</span>
                          </div>
                          <span className="text-sm">R17,999</span>
                        </Link>
                        <Link
                          href="/shop/ipad-air-m3"
                          className="flex items-center justify-between hover:text-gray-300 transition-colors"
                        >
                          <div className="flex items-center">
                            <Tablet className="mr-3 h-4 w-4" />
                            <span className="font-medium">iPad Air | Apple M3</span>
                          </div>
                          <span className="text-sm">R10,999</span>
                        </Link>
                        <Link
                          href="/shop/ipad-a16"
                          className="flex items-center justify-between hover:text-gray-300 transition-colors"
                        >
                          <div className="flex items-center">
                            <Tablet className="mr-3 h-4 w-4" />
                            <span className="font-medium">iPad | A16 Chip</span>
                          </div>
                          <span className="text-sm">R5,999</span>
                        </Link>
                        <Link
                          href="/shop?category=accessories&filter=ipad"
                          className="flex items-center hover:text-gray-300 transition-colors"
                        >
                          <div className="flex items-center">
                            <div className="mr-3 h-4 w-4 rounded-full border border-white"></div>
                            <span className="font-medium">iPad Accessories</span>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base">
                  AirPods <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "airpods" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Headphones className="mr-2 h-5 w-5" />
                        AirPods Collection
                      </h3>
                      <div className="space-y-4">
                        <Link
                          href="/shop/airpods-pro"
                          className="flex items-center justify-between hover:text-gray-300 transition-colors py-2 border-b border-gray-700"
                        >
                          <div className="flex items-center">
                            <Headphones className="mr-3 h-4 w-4" />
                            <span className="font-medium">Apple AirPods Pro</span>
                          </div>
                          <span className="text-sm">R3,999</span>
                        </Link>
                        <Link
                          href="/shop/airpods-pro-2nd-gen"
                          className="flex items-center justify-between hover:text-gray-300 transition-colors py-2 border-b border-gray-700"
                        >
                          <div className="flex items-center">
                            <Bluetooth className="mr-3 h-4 w-4" />
                            <span className="font-medium">AirPods Pro (2nd Gen)</span>
                          </div>
                          <span className="text-sm">R1,999</span>
                        </Link>
                        <Link
                          href="/shop?category=airpods&compare=true"
                          className="flex items-center hover:text-gray-300 transition-colors py-2 border-b border-gray-700"
                        >
                          <Settings className="mr-3 h-4 w-4" />
                          <span className="font-medium">Compare AirPods</span>
                        </Link>
                        <Link
                          href="/shop?category=airpods-accessories"
                          className="flex items-center hover:text-gray-300 transition-colors py-2"
                        >
                          <Circle className="mr-3 h-4 w-4" />
                          <span className="font-medium">AirPods Accessories</span>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base">
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
                className="text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base"
              >
                Sneakers
              </Link>

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
                          <Link
                            href="/repairs?service=house-call"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                          >
                            Book Now - R49
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="text-white hover:text-gray-300 transition-colors py-2 whitespace-nowrap text-sm md:text-base"
              >
                Support
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
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
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Right Side Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
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
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="flex items-center text-white hover:text-gray-300 py-2">
                <span className="text-lg font-medium">Home</span>
              </Link>
              <Link href="/shop?category=iphone" className="flex items-center text-white hover:text-gray-300 py-2">
                <Smartphone className="mr-3 h-5 w-5" />
                <span className="text-lg font-medium">iPhone</span>
              </Link>
              <Link href="/shop?category=ipad" className="flex items-center text-white hover:text-gray-300 py-2">
                <Tablet className="mr-3 h-5 w-5" />
                <span className="text-lg font-medium">iPad</span>
              </Link>
              <Link href="/shop?category=airpods" className="flex items-center text-white hover:text-gray-300 py-2">
                <Headphones className="mr-3 h-5 w-5" />
                <span className="text-lg font-medium">AirPods</span>
              </Link>
              <Link href="/shop?category=accessories" className="flex items-center text-white hover:text-gray-300 py-2">
                <Cable className="mr-3 h-5 w-5" />
                <span className="text-lg font-medium">Accessories</span>
              </Link>
              <Link href="/sneakers" className="flex items-center text-white hover:text-gray-300 py-2">
                <span className="text-lg font-medium">Sneakers</span>
              </Link>
              <Link href="/repairs" className="flex items-center text-white hover:text-gray-300 py-2">
                <span className="text-lg font-medium">Services</span>
              </Link>
              <Link href="/contact" className="flex items-center text-white hover:text-gray-300 py-2">
                <span className="text-lg font-medium">Support</span>
              </Link>

              {/* House Call Service Highlight */}
              <div className="mt-6 p-4 bg-blue-600 rounded-lg">
                <div className="text-white font-semibold">House Call Service</div>
                <div className="text-blue-100 text-sm">Only R49 - We come to you!</div>
              </div>
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
