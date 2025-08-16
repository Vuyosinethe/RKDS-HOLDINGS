"use client"

import { Button } from "@/components/ui/button"
import {
  ShoppingCart,
  Search,
  User,
  ChevronDown,
  Smartphone,
  Tablet,
  Headphones,
  Bluetooth,
  Cpu,
  Settings,
  PenToolIcon as Tool,
  Star,
  Zap,
  Battery,
  Shield,
  Watch,
  HardDrive,
  Wrench,
  Phone,
  Monitor,
  Camera,
  MapPin,
  Home,
  ShoppingBag,
  Cable,
  Circle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { useState } from "react"

export default function CartPage() {
  const { state, removeItem, updateQuantity } = useCart()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null)
  const [mobileExpandedIPhone, setMobileExpandedIPhone] = useState<string | null>(null)
  const authState = useAuth()

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const itemCount = state.items?.reduce((sum, item) => sum + item.quantity, 0) || 0
  const total = state.items?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0

  return (
    <div className="min-h-screen bg-gray-50">
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
                  iPhone <ChevronDown className="ml-1 h-4 w-4 text-white" />
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
                            {[
                              { name: "iPhone 16 Pro", price: "R21,999", id: "iphone-16-pro", icon: Cpu },
                              { name: "iPhone 16", price: "R18,999", id: "iphone-16", icon: Smartphone },
                              { name: "iPhone 15 Pro", price: "R19,999", id: "iphone-15-pro", icon: Cpu },
                              { name: "iPhone 15", price: "R16,999", id: "iphone-15", icon: Smartphone },
                              { name: "iPhone 14 Pro", price: "R17,999", id: "iphone-14-pro", icon: Cpu },
                              { name: "iPhone 14", price: "R14,999", id: "iphone-14", icon: Smartphone },
                              { name: "iPhone 13", price: "R12,999", id: "iphone-13", icon: Smartphone },
                              { name: "iPhone 12", price: "R10,999", id: "iphone-12", icon: Smartphone },
                              { name: "iPhone 11", price: "R8,999", id: "iphone-11", icon: Smartphone },
                              { name: "iPhone XR", price: "R6,999", id: "iphone-xr", icon: Smartphone },
                            ].map((iphone) => {
                              const IconComponent = iphone.icon
                              return (
                                <li key={iphone.id} className="group">
                                  <div
                                    className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                    onClick={() => setExpandedIPhone(expandedIPhone === iphone.id ? null : iphone.id)}
                                  >
                                    <IconComponent className="mr-2 h-4 w-4 text-gray-400" />
                                    <span className="flex-1 font-medium">{iphone.name}</span>
                                    <span className="text-gray-400 text-xs mr-2">From {iphone.price}</span>
                                    <ChevronDown
                                      className={`h-3 w-3 transition-transform ${expandedIPhone === iphone.id ? "rotate-180" : ""}`}
                                    />
                                  </div>
                                  {expandedIPhone === iphone.id && (
                                    <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                      <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                      <Link
                                        href={`/shop/${iphone.id}?storage=128gb`}
                                        className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                      >
                                        <div className="flex justify-between items-center">
                                          <span className="text-white">128GB</span>
                                          <span className="text-green-400 font-medium">{iphone.price}</span>
                                        </div>
                                      </Link>
                                      <Link
                                        href={`/shop/${iphone.id}?storage=256gb`}
                                        className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                      >
                                        <div className="flex justify-between items-center">
                                          <span className="text-white">256GB</span>
                                          <span className="text-green-400 font-medium">
                                            R
                                            {(
                                              Number.parseInt(iphone.price.replace("R", "").replace(",", "")) + 3000
                                            ).toLocaleString()}
                                          </span>
                                        </div>
                                      </Link>
                                      <Link
                                        href={`/shop/${iphone.id}?storage=512gb`}
                                        className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                      >
                                        <div className="flex justify-between items-center">
                                          <span className="text-white">512GB</span>
                                          <span className="text-green-400 font-medium">
                                            R
                                            {(
                                              Number.parseInt(iphone.price.replace("R", "").replace(",", "")) + 8000
                                            ).toLocaleString()}
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                  )}
                                </li>
                              )
                            })}
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
                  iPad <ChevronDown className="ml-1 h-4 w-4 text-white" />
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
                  AirPods <ChevronDown className="ml-1 h-4 w-4 text-white" />
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
                        <li className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-800 px-3 rounded transition-colors">
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
                            <Circle className="h-4 w-4 text-gray-400" />
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
                  Accessories <ChevronDown className="ml-1 h-4 w-4 text-white" />
                </button>
                {activeDropdown === "accessories" && (
                  <div className="absolute top-full left-0 w-[600px] bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <div className="grid grid-cols-3 gap-8">
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
                  Services <ChevronDown className="ml-1 h-4 w-4 text-white" />
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
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-16 bg-black z-50 overflow-y-auto">
              <div className="px-4 py-6 space-y-6">
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
                    <Link
                      href="/repairs?service=house-call"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Now - R49
                    </Link>
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      href="/auth/login"
                      className="flex-1 bg-white text-black text-center py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/shop"
                      className="flex-1 bg-gray-800 text-white text-center py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="bg-blue-500 text-white text-center py-3">
        <p className="text-sm font-medium">Get the Fastest delivery for Free. Shop online at RKDS Holdings!</p>
      </div>

      <div className="pt-4">
        {/* Cart Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

          {state.items.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add some items to get started!</p>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                {state.items.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 py-6 last:border-b-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      {/* Product Info Section */}
                      <div className="flex items-center space-x-4 flex-1">
                        <Image
                          src={item.image || `/placeholder.svg?height=80&width=80&query=${item.name}`}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                          {item.variant && <p className="text-sm text-gray-500">Size: {item.variant}</p>}
                          <p className="text-gray-600">R{item.price.toLocaleString()}</p>
                        </div>
                      </div>

                      {/* Controls Section - Mobile: Full width, Desktop: Right aligned */}
                      <div className="flex items-center justify-between sm:justify-end sm:space-x-6 space-x-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            +
                          </button>
                        </div>

                        {/* Total Price */}
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">
                            R{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-800 transition-colors px-2 py-1 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-gray-900">R{total.toLocaleString()}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                    <Link href="/shop">Continue Shopping</Link>
                  </Button>
                  <Button size="lg" className="flex-1 bg-black hover:bg-gray-800 text-white">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
