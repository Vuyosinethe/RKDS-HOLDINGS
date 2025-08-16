"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import {
  Smartphone,
  ShoppingBag,
  Star,
  Filter,
  Search,
  ShoppingCart,
  ChevronDown,
  Cpu,
  User,
  Settings,
  PenToolIcon as Tool,
  Tablet,
  Shield,
  Headphones,
  Bluetooth,
  Zap,
  Battery,
  Cable,
  Watch,
  HardDrive,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import { useButtonHandler } from "@/lib/button-handler"

// Sample product data
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "iphones",
    brand: "Apple",
    price: 18999,
    storage: "128GB",
    color: "Natural Titanium",
    rating: 5,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
  },
  {
    id: 2,
    name: "iPhone 14",
    category: "iphones",
    brand: "Apple",
    price: 14999,
    storage: "128GB",
    color: "Blue",
    rating: 4,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
  },
  {
    id: "nike-air-max-270",
    name: "Nike Air Max 270",
    category: "shoes",
    brand: "Nike",
    price: 2499,
    size: "UK 6",
    color: "Black/White",
    rating: 5,
    reviews: 89,
    description: "The Nike Air Max 270 delivers unrivaled all-day comfort with the largest Max Air unit yet.",
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    stockCount: 8,
  },
  {
    id: 4,
    name: "Adidas Ultraboost 22",
    category: "shoes",
    brand: "Adidas",
    price: 3299,
    size: "UK 7",
    color: "Core Black",
    rating: 5,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
  },
  {
    id: 5,
    name: "iPhone 13",
    category: "iphones",
    brand: "Apple",
    price: 12999,
    storage: "128GB",
    color: "Pink",
    rating: 4,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
  },
  {
    id: "jordan-1-retro-high-chicago",
    name: "Jordan 1 Retro High",
    category: "shoes",
    brand: "Jordan",
    price: 4599,
    size: "UK 8",
    color: "Chicago",
    rating: 5,
    reviews: 312,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
  },
]

export default function ShopPage() {
  const { state: cartState, addItem } = useCart()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 20000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name")

  const { handleButtonClick } = useButtonHandler()
  const authState = useAuth()

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      variant: product.storage || product.size,
    })
  }

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesPrice && matchesBrand && matchesSearch
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return a.name.localeCompare(b.name)
    }
  })

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
  }

  const brands = Array.from(new Set(products.map((p) => p.brand)))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image src="/images/rkds-logo.png" alt="RKDS Holdings" width={120} height={40} className="h-8 w-auto" />
              </Link>
            </div>

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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base">
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap text-sm md:text-base">
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
                  <div className="absolute top-full left-0 w-[400px] bg-black text-white shadow-2xl border border-gray-700 z-[100]">
                    <div className="p-6">
                      <h4 className="font-bold mb-4 text-white text-lg">Our Services</h4>
                      <div className="space-y-3 text-sm">
                        <Link href="/repairs" className="block hover:bg-gray-800 p-3 rounded transition-colors">
                          <div className="font-medium">iPhone Repairs</div>
                          <div className="text-gray-400 text-xs">Screen, battery, and more</div>
                        </Link>
                        <div className="bg-blue-600 p-3 rounded">
                          <div className="font-medium">House Call Service</div>
                          <div className="text-blue-100 text-xs">We come to you - Only R49!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Support */}
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 transition-colors py-2 whitespace-nowrap text-sm md:text-base"
              >
                Support
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Right Side Icons */}
              <button className="text-white hover:text-gray-300 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              {authState?.user ? (
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
        </div>
      </nav>

      {/* Blue promotional banner */}
      <div className="bg-blue-600 text-white text-center py-3">
        <p className="text-sm font-medium">Get the Fastest delivery for Free. Shop online at RKDS Holdings!</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop</h1>
          <p className="text-gray-600">Discover our collection of premium iPhones and stylish shoes</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <Label htmlFor="search">Search Products</Label>
                  <div className="relative mt-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <Label>Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Products</SelectItem>
                      <SelectItem value="iphones">iPhones</SelectItem>
                      <SelectItem value="shoes">Shoes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <Label>Price Range</Label>
                  <div className="mt-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={20000}
                      min={0}
                      step={100}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>R{priceRange[0].toLocaleString()}</span>
                      <span>R{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <Label>Brands</Label>
                  <div className="mt-2 space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                        />
                        <Label htmlFor={brand} className="text-sm font-normal">
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all")
                    setPriceRange([0, 20000])
                    setSelectedBrands([])
                    setSearchQuery("")
                  }}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Results */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {sortedProducts.length} of {products.length} products
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center relative">
                    {product.category === "iphones" ? (
                      <Smartphone className="h-16 w-16 text-gray-400" />
                    ) : (
                      <ShoppingBag className="h-16 w-16 text-gray-400" />
                    )}
                    {!product.inStock && <Badge className="absolute top-2 right-2 bg-red-500">Out of Stock</Badge>}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < product.rating ? "fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {product.category === "iphones" ? (
                        <span>
                          {product.storage} • {product.color}
                        </span>
                      ) : (
                        <span>
                          {product.size} • {product.color}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-black mb-4">R{product.price.toLocaleString()}</p>
                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-black hover:bg-gray-800 text-white"
                        disabled={!product.inStock}
                        onClick={() => product.inStock && handleButtonClick({ id: product.id, type: "product" })}
                      >
                        {product.inStock ? "Shop Now" : "Out of Stock"}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleButtonClick({ id: product.id, type: "product" })}
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all")
                    setPriceRange([0, 20000])
                    setSelectedBrands([])
                    setSearchQuery("")
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
