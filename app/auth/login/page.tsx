"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { ShoppingCart, Search, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { items } = useCart()
  const itemCount = items?.reduce((sum, item) => sum + item.quantity, 0) || 0

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
      {/* Main Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 overflow-visible border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/images/rkds-logo.png" alt="RKDS Holdings" width={120} height={40} className="h-8 w-auto" />
            </div>

            <div className="flex items-center space-x-8 relative overflow-visible">
              {/* Home Link */}
              <Link href="/" className="text-white hover:text-gray-300 transition-colors font-medium">
                Home
              </Link>

              {/* iPhone Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("iphone")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-white hover:text-gray-300 transition-colors font-medium flex items-center">
                  iPhone
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === "iphone" && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-black border border-gray-700 rounded-lg shadow-xl z-50">
                    <div className="grid grid-cols-2 gap-8 p-6">
                      {/* Left Column - Shop iPhone Range */}
                      <div>
                        <h3 className="text-blue-400 font-semibold mb-4 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                            <line x1="12" y1="18" x2="12.01" y2="18" />
                          </svg>
                          Shop iPhone Range
                        </h3>
                        <div className="space-y-3">
                          {[
                            { name: "iPhone 16 Pro", price: "R21,999" },
                            { name: "iPhone 16", price: "R18,999" },
                            { name: "iPhone 15 Pro", price: "R19,999" },
                            { name: "iPhone 15", price: "R16,999" },
                            { name: "iPhone 14 Pro", price: "R17,999" },
                            { name: "iPhone 14", price: "R14,999" },
                            { name: "iPhone 13", price: "R12,999" },
                            { name: "iPhone 12", price: "R10,999" },
                            { name: "iPhone 11", price: "R8,999" },
                            { name: "iPhone XR", price: "R6,999" },
                          ].map((phone) => (
                            <div key={phone.name} className="relative">
                              <button
                                onClick={() => setExpandedIPhone(expandedIPhone === phone.name ? null : phone.name)}
                                className="w-full flex items-center justify-between text-white hover:text-blue-400 transition-colors text-left"
                              >
                                <div className="flex items-center">
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                  </svg>
                                  <span>{phone.name}</span>
                                </div>
                                <div className="flex items-center">
                                  <span className="text-sm text-gray-400 mr-2">From {phone.price}</span>
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </div>
                              </button>

                              {expandedIPhone === phone.name && (
                                <div className="mt-2 ml-6 space-y-1">
                                  <Link
                                    href={`/shop/${phone.name.toLowerCase().replace(/\s+/g, "-")}?storage=128gb`}
                                    className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
                                  >
                                    128GB - {phone.price}
                                  </Link>
                                  <Link
                                    href={`/shop/${phone.name.toLowerCase().replace(/\s+/g, "-")}?storage=256gb`}
                                    className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
                                  >
                                    256GB - R
                                    {(
                                      Number.parseInt(phone.price.replace("R", "").replace(",", "")) + 3000
                                    ).toLocaleString()}
                                  </Link>
                                  <Link
                                    href={`/shop/${phone.name.toLowerCase().replace(/\s+/g, "-")}?storage=512gb`}
                                    className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
                                  >
                                    512GB - R
                                    {(
                                      Number.parseInt(phone.price.replace("R", "").replace(",", "")) + 7000
                                    ).toLocaleString()}
                                  </Link>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Explore iPhone */}
                      <div>
                        <h3 className="text-green-400 font-semibold mb-4 flex items-center">
                          <Search className="w-4 h-4 mr-2" />
                          Explore iPhone
                        </h3>
                        <div className="space-y-4">
                          <Link href="/shop?category=iphone" className="block group">
                            <div className="flex items-center text-white group-hover:text-blue-400 transition-colors">
                              <Search className="w-4 h-4 mr-3" />
                              <div>
                                <div className="font-medium">Explore iPhone</div>
                                <div className="text-sm text-gray-400">Explore the world of iPhone.</div>
                              </div>
                            </div>
                          </Link>

                          <Link href="/shop/compare" className="block group">
                            <div className="flex items-center text-white group-hover:text-blue-400 transition-colors">
                              <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div>
                                <div className="font-medium">Compare iPhone</div>
                                <div className="text-sm text-gray-400">Find the perfect iPhone for your needs.</div>
                              </div>
                            </div>
                          </Link>

                          <Link href="/repairs" className="block group">
                            <div className="flex items-center text-white group-hover:text-blue-400 transition-colors">
                              <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <div>
                                <div className="font-medium">iPhone Repairs</div>
                                <div className="text-sm text-gray-400">Professional repair services.</div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other navigation items */}
              <Link href="/shop?category=ipad" className="text-white hover:text-gray-300 transition-colors font-medium">
                iPad
              </Link>
              <Link
                href="/shop?category=airpods"
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                AirPods
              </Link>
              <Link
                href="/shop?category=accessories"
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                Accessories
              </Link>
              <Link
                href="/shop?category=sneakers"
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                Sneakers
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-300 transition-colors font-medium">
                Support
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Right Side Icons */}
              <button className="text-white hover:text-gray-300 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <Link href="/auth/register" className="text-white hover:text-gray-300 transition-colors">
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
        </div>
      </nav>

      {/* Login Form Content */}
      <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* RKDS Branding Section */}
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/images/rkds-logo.png"
                alt="RKDS Holdings"
                width={200}
                height={60}
                className="mx-auto h-16 w-auto"
              />
              <div className="mt-4">
                <h1 className="text-4xl font-bold text-white tracking-wider">RKDS</h1>
                <p className="text-gray-400 text-sm font-medium tracking-wide">HOLDINGS</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Or{" "}
              <Link href="/auth/register" className="font-medium text-white hover:text-gray-300 underline">
                create a new account
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
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
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 text-white bg-gray-900 rounded-t-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-3 pr-10 border border-gray-600 placeholder-gray-400 text-white bg-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white focus:z-10 sm:text-sm"
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
                className="group relative w-full flex justify-center py-3 px-4 border-2 border-white text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400">Demo credentials: demo@rkdsholdings.co.za / password123</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
