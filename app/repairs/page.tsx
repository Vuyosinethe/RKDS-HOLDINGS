"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import {
  Smartphone,
  Laptop,
  Home,
  Wrench,
  ShoppingCart,
  Search,
  User,
  ChevronDown,
  Headphones,
  Battery,
  Tablet,
  Star,
  Zap,
  Cpu,
  Settings,
  PenToolIcon as Tool,
  ShoppingBag,
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
      {/* Main Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/images/rkds-logo.png" alt="RKDS Holdings" width={120} height={40} className="h-8 w-auto" />
            </div>

            <div className="flex items-center space-x-8 relative overflow-visible">
              <Link
                href="/"
                className="text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap"
              >
                Home
              </Link>

              {/* iPhone Dropdown - Complete structure from homepage */}
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
                                      <span className="text-green-400 font-medium">R25,999</span>
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
                                      <span className="text-green-400 font-medium">R26,999</span>
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
                                      <span className="text-green-400 font-medium">R23,999</span>
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
                                      <span className="text-green-400 font-medium">R24,999</span>
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
                                      <span className="text-green-400 font-medium">R21,999</span>
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
                                      <span className="text-green-400 font-medium">R19,999</span>
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

              {/* iPad, AirPods, Accessories, Services dropdowns - identical to homepage */}
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
                  <div className="absolute top-full left-0 w-[500px] bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Tablet className="mr-2 h-5 w-5 text-blue-400" />
                            Shop iPad Range
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link href="/shop/ipad-pro-m4" className="block hover:text-gray-300 transition-colors">
                                <span className="font-medium">iPad Pro M4</span>
                                <p className="text-xs text-gray-400">From R17,999</p>
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link href="/shop/ipad-air-m3" className="block hover:text-gray-300 transition-colors">
                                <span className="font-medium">iPad Air M3</span>
                                <p className="text-xs text-gray-400">From R10,999</p>
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link href="/shop/ipad-a16" className="block hover:text-gray-300 transition-colors">
                                <span className="font-medium">iPad A16</span>
                                <p className="text-xs text-gray-400">From R5,999</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Search className="mr-2 h-5 w-5 text-green-400" />
                            Explore iPad
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Search className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/shop?category=ipad"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  Browse All iPads
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">Explore the world of iPad.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Settings className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/shop?category=ipad-accessories"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  iPad Accessories
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">Enhance your iPad experience.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Tool className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/repairs?service=ipad"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  iPad Repairs
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
                  <div className="absolute top-full left-0 w-[450px] bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Headphones className="mr-2 h-5 w-5 text-blue-400" />
                            Shop AirPods Range
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/airpods-pro-2nd-gen"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                <span className="font-medium">AirPods Pro (2nd Gen)</span>
                                <p className="text-xs text-gray-400">R3,999</p>
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link href="/shop/airpods-pro" className="block hover:text-gray-300 transition-colors">
                                <span className="font-medium">AirPods Pro</span>
                                <p className="text-xs text-gray-400">R1,999</p>
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/airpods-3rd-gen"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                <span className="font-medium">AirPods (3rd Gen)</span>
                                <p className="text-xs text-gray-400">R2,999</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Search className="mr-2 h-5 w-5 text-green-400" />
                            Explore AirPods
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Search className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/shop?category=airpods&compare=true"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  Compare AirPods
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">Find the perfect AirPods for your needs.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Settings className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/shop?category=airpods-accessories"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  AirPods Accessories
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">Enhance your AirPods experience.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Tool className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/repairs?service=airpods"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  AirPods Repairs
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
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Smartphone className="mr-2 h-5 w-5 text-blue-400" />
                            iPhone Accessories
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/privacy-glass-screen-protector"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                Privacy Glass Screen Protector (R129-R699)
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/clear-iphone-case"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                Clear iPhone Case (R149-R499)
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/liquid-silicone-case"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                Liquid Silicone Case (R299-R899)
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Zap className="mr-2 h-5 w-5 text-green-400" />
                            Wireless Chargers
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/apple-magsafe-charger-1m"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                Apple 1m MagSafe Charger (R799)
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/apple-magsafe-charger"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                Apple MagSafe Charger (R599)
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/20w-fast-charger"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                20W Fast Charger (R119)
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Battery className="mr-2 h-5 w-5 text-blue-400" />
                            Cables & Chargers
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/iphone-cable-charger"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                iPhone Cable/Charger (R79)
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/60w-magsafe-2-charger"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                60W MagSafe 2 MacBook (R449)
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/shop/60w-l-shape-charger"
                                className="block hover:text-gray-300 transition-colors"
                              >
                                60W L-Shape MagSafe (R549)
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 w-[400px] bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold mb-3 text-white text-lg flex items-center">
                            <Wrench className="mr-2 h-5 w-5 text-blue-400" />
                            Repair Services
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/repairs?service=iphone"
                                className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                              >
                                <Smartphone className="h-4 w-4" />
                                <span>iPhone Repairs</span>
                              </Link>
                            </li>
                            <li className="hover:bg-gray-800 rounded p-2 transition-colors">
                              <Link
                                href="/repairs?service=laptop"
                                className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                              >
                                <Laptop className="h-4 w-4" />
                                <span>Laptop Repairs</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="border-t border-gray-700 pt-4">
                          <div className="bg-blue-600 text-white p-3 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <Home className="h-4 w-4" />
                              <span className="font-semibold">House Call Service</span>
                            </div>
                            <p className="text-sm">We come to you for just R49!</p>
                            <Link href="/repairs" className="text-xs underline">
                              Book now →
                            </Link>
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
              {/* Mobile menu button */}
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
              <Link href="/auth/login" className="text-white hover:text-gray-300 transition-colors">
                <User className="h-5 w-5" />
              </Link>
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

          {/* Mobile Menu - identical to homepage */}
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
                  <Link
                    href="/shop?category=iphone"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Smartphone className="mr-3 h-5 w-5" />
                      iPhone
                    </div>
                  </Link>
                  <Link
                    href="/shop?category=ipad"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Tablet className="mr-3 h-5 w-5" />
                      iPad
                    </div>
                  </Link>
                  <Link
                    href="/shop?category=airpods"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Headphones className="mr-3 h-5 w-5" />
                      AirPods
                    </div>
                  </Link>
                  <Link
                    href="/shop?category=accessories"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <ShoppingBag className="mr-3 h-5 w-5" />
                      Accessories
                    </div>
                  </Link>
                  <Link
                    href="/sneakers"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Star className="mr-3 h-5 w-5" />
                      Sneakers
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
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
