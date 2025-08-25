"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { ShoppingCart, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { state: cartState } = useCart()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("") // Clear error when user types
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const success = await login(formData.email, formData.password)
      if (success) {
        router.push("/account")
      } else {
        setError("Invalid email or password. Try demo@rkdsholdings.co.za / password123")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-black text-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src="/images/rkds-logo.png" alt="RKDS Holdings" width={120} height={40} className="h-8 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* iPhone Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("iphone")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium">
                  iPhone <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "iphone" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border text-black z-50 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="p-4 space-y-2">
                      <Link href="/shop/iphone-16-pro" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 16 Pro</span>
                          <span className="text-sm text-gray-500">From R21,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-16" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 16</span>
                          <span className="text-sm text-gray-500">From R18,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-16-plus" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 16 Plus</span>
                          <span className="text-sm text-gray-500">From R20,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-16e" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 16e</span>
                          <span className="text-sm text-gray-500">From R16,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-15" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 15</span>
                          <span className="text-sm text-gray-500">From R16,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-15-plus" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 15 Plus</span>
                          <span className="text-sm text-gray-500">From R18,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-14-pro" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 14 Pro</span>
                          <span className="text-sm text-gray-500">From R17,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-14-pro-max" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 14 Pro Max</span>
                          <span className="text-sm text-gray-500">From R20,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-14" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 14</span>
                          <span className="text-sm text-gray-500">From R14,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-13" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 13</span>
                          <span className="text-sm text-gray-500">From R12,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-12" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 12</span>
                          <span className="text-sm text-gray-500">From R10,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-11" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone 11</span>
                          <span className="text-sm text-gray-500">From R8,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/iphone-xr" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPhone XR</span>
                          <span className="text-sm text-gray-500">From R6,999</span>
                        </div>
                      </Link>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium">
                  iPad <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "ipad" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border text-black z-50">
                    <div className="p-4 space-y-2">
                      <Link href="/shop/ipad-pro" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPad Pro</span>
                          <span className="text-sm text-gray-500">From R18,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/ipad-air" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPad Air</span>
                          <span className="text-sm text-gray-500">From R12,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/ipad" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPad</span>
                          <span className="text-sm text-gray-500">From R7,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/ipad-mini" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">iPad mini</span>
                          <span className="text-sm text-gray-500">From R9,999</span>
                        </div>
                      </Link>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium">
                  AirPods <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "airpods" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border text-black z-50">
                    <div className="p-4 space-y-2">
                      <Link href="/shop/airpods-pro" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">AirPods Pro</span>
                          <span className="text-sm text-gray-500">From R4,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/airpods-max" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">AirPods Max</span>
                          <span className="text-sm text-gray-500">From R12,999</span>
                        </div>
                      </Link>
                      <Link href="/shop/airpods" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">AirPods</span>
                          <span className="text-sm text-gray-500">From R2,999</span>
                        </div>
                      </Link>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium">
                  Accessories <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "accessories" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border text-black z-50">
                    <div className="p-4 space-y-2">
                      <Link href="/shop/cases" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <span className="font-medium">Cases & Protection</span>
                      </Link>
                      <Link href="/shop/chargers" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <span className="font-medium">Chargers & Cables</span>
                      </Link>
                      <Link href="/shop/headphones" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <span className="font-medium">Headphones</span>
                      </Link>
                      <Link href="/shop/speakers" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <span className="font-medium">Speakers</span>
                      </Link>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border text-black z-50">
                    <div className="p-4 space-y-2">
                      <Link href="/repairs" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <span className="font-medium">Device Repairs</span>
                      </Link>
                      <Link href="/services/setup" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <span className="font-medium">Device Setup</span>
                      </Link>
                      <Link href="/services/support" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <span className="font-medium">Technical Support</span>
                      </Link>
                      <Link href="/services/warranty" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                        <span className="font-medium">Extended Warranty</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-white hover:text-gray-300 font-medium">
                About
              </Link>
            </div>

            {/* Right side - Cart and Register */}
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="text-white hover:text-gray-300 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-1" />
                <span className="text-sm">({cartState.itemCount})</span>
              </Link>
              <Link href="/auth/register" className="text-white hover:text-gray-300 font-medium">
                Register
              </Link>

              {/* Mobile menu button */}
              <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2">iPhone</h3>
                <div className="pl-4 space-y-1 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                  <Link href="/shop/iphone-16-pro" className="block text-gray-300 hover:text-white py-1">
                    iPhone 16 Pro - From R21,999
                  </Link>
                  <Link href="/shop/iphone-16" className="block text-gray-300 hover:text-white py-1">
                    iPhone 16 - From R18,999
                  </Link>
                  <Link href="/shop/iphone-16-plus" className="block text-gray-300 hover:text-white py-1">
                    iPhone 16 Plus - From R20,999
                  </Link>
                  <Link href="/shop/iphone-16e" className="block text-gray-300 hover:text-white py-1">
                    iPhone 16e - From R16,999
                  </Link>
                  <Link href="/shop/iphone-15" className="block text-gray-300 hover:text-white py-1">
                    iPhone 15 - From R16,999
                  </Link>
                  <Link href="/shop/iphone-15-plus" className="block text-gray-300 hover:text-white py-1">
                    iPhone 15 Plus - From R18,999
                  </Link>
                  <Link href="/shop/iphone-14-pro" className="block text-gray-300 hover:text-white py-1">
                    iPhone 14 Pro - From R17,999
                  </Link>
                  <Link href="/shop/iphone-14-pro-max" className="block text-gray-300 hover:text-white py-1">
                    iPhone 14 Pro Max - From R20,999
                  </Link>
                  <Link href="/shop/iphone-14" className="block text-gray-300 hover:text-white py-1">
                    iPhone 14 - From R14,999
                  </Link>
                  <Link href="/shop/iphone-13" className="block text-gray-300 hover:text-white py-1">
                    iPhone 13 - From R12,999
                  </Link>
                  <Link href="/shop/iphone-12" className="block text-gray-300 hover:text-white py-1">
                    iPhone 12 - From R10,999
                  </Link>
                  <Link href="/shop/iphone-11" className="block text-gray-300 hover:text-white py-1">
                    iPhone 11 - From R8,999
                  </Link>
                  <Link href="/shop/iphone-xr" className="block text-gray-300 hover:text-white py-1">
                    iPhone XR - From R6,999
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">iPad</h3>
                <div className="pl-4 space-y-1">
                  <Link href="/shop/ipad-pro" className="block text-gray-300 hover:text-white py-1">
                    iPad Pro - From R18,999
                  </Link>
                  <Link href="/shop/ipad-air" className="block text-gray-300 hover:text-white py-1">
                    iPad Air - From R12,999
                  </Link>
                  <Link href="/shop/ipad" className="block text-gray-300 hover:text-white py-1">
                    iPad - From R7,999
                  </Link>
                  <Link href="/shop/ipad-mini" className="block text-gray-300 hover:text-white py-1">
                    iPad mini - From R9,999
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">AirPods</h3>
                <div className="pl-4 space-y-1">
                  <Link href="/shop/airpods-pro" className="block text-gray-300 hover:text-white py-1">
                    AirPods Pro - From R4,999
                  </Link>
                  <Link href="/shop/airpods-max" className="block text-gray-300 hover:text-white py-1">
                    AirPods Max - From R12,999
                  </Link>
                  <Link href="/shop/airpods" className="block text-gray-300 hover:text-white py-1">
                    AirPods - From R2,999
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">Accessories</h3>
                <div className="pl-4 space-y-1">
                  <Link href="/shop/cases" className="block text-gray-300 hover:text-white py-1">
                    Cases & Protection
                  </Link>
                  <Link href="/shop/chargers" className="block text-gray-300 hover:text-white py-1">
                    Chargers & Cables
                  </Link>
                  <Link href="/shop/headphones" className="block text-gray-300 hover:text-white py-1">
                    Headphones
                  </Link>
                  <Link href="/shop/speakers" className="block text-gray-300 hover:text-white py-1">
                    Speakers
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">Services</h3>
                <div className="pl-4 space-y-1">
                  <Link href="/repairs" className="block text-gray-300 hover:text-white py-1">
                    Device Repairs
                  </Link>
                  <Link href="/services/setup" className="block text-gray-300 hover:text-white py-1">
                    Device Setup
                  </Link>
                  <Link href="/services/support" className="block text-gray-300 hover:text-white py-1">
                    Technical Support
                  </Link>
                  <Link href="/services/warranty" className="block text-gray-300 hover:text-white py-1">
                    Extended Warranty
                  </Link>
                </div>
              </div>

              <Link href="/about" className="block text-white hover:text-gray-300 font-medium py-2">
                About
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Login Form Content */}
      <div className="flex items-center justify-center py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* RKDS Branding Section */}
          <div className="text-center">
            <div className="mb-6 sm:mb-8">
              <Image
                src="/images/rkds-logo.png"
                alt="RKDS Holdings"
                width={200}
                height={60}
                className="mx-auto h-12 sm:h-16 w-auto"
              />
              <div className="mt-3 sm:mt-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">RKDS</h1>
                <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">HOLDINGS</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-white">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Or{" "}
              <Link href="/auth/register" className="font-medium text-white hover:text-gray-300 underline">
                create a new account
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-3 sm:py-4 border border-gray-600 placeholder-gray-400 text-white bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:z-10 text-sm sm:text-base"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 sm:py-4 pr-12 border border-gray-600 placeholder-gray-400 text-white bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:z-10 text-sm sm:text-base"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5 text-gray-400 hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-400 hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-gray-900 border border-gray-600 p-4">
                <div className="text-sm text-red-400">{error}</div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 sm:py-4 px-4 border-2 border-white text-sm sm:text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </div>

            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-400">
                Demo credentials: demo@rkdsholdings.co.za / password123
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
