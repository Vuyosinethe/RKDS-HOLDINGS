"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { ShoppingCart, ChevronDown, Menu, X, Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"

export default function RegisterPage() {
  const { register } = useAuth()
  const router = useRouter()
  const { state: cartState } = useCart()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    newsletter: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("") // Clear error when user types
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long")
      setIsLoading(false)
      return
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions")
      setIsLoading(false)
      return
    }

    try {
      const success = await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      })

      if (success) {
        router.push("/account")
      } else {
        setError("Registration failed. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
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

            {/* Right side - Cart and Login */}
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="text-white hover:text-gray-300 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-1" />
                <span className="text-sm">({cartState.itemCount})</span>
              </Link>
              <Link href="/auth/login" className="text-white hover:text-gray-300 font-medium">
                Sign In
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

      <div className="flex items-center justify-center py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <Card>
            <CardHeader className="text-center px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl">Create Account</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Join RKDS Holdings for exclusive offers and faster checkout
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm">
                      First Name
                    </Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="pl-10 h-11"
                        placeholder="First name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm">
                      Last Name
                    </Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="pl-10 h-11"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm">
                    Email Address
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 h-11"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm">
                    Phone Number (Optional)
                  </Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10 h-11"
                      placeholder="+27 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm">
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10 pr-12 h-11"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-sm">
                    Confirm Password
                  </Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="pl-10 h-11"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm leading-5">
                      I agree to the{" "}
                      <Link href="/terms" className="text-black hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-black hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="newsletter" className="text-sm leading-5">
                      Subscribe to our newsletter for exclusive offers
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black hover:bg-gray-800 text-white h-12 text-base"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="text-black hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
