"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CreditCard, Truck, ShoppingCart, Lock, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { state, clearCart } = useCart()
  const router = useRouter()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [formData, setFormData] = useState({
    // Customer Information
    email: "",
    firstName: "",
    lastName: "",
    phone: "",

    // Shipping Address
    address: "",
    city: "",
    province: "",
    postalCode: "",

    // Payment
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",

    // Options
    saveInfo: false,
    newsletter: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process payment and create order
    console.log("Order submitted:", { formData, items: state.items, total: state.total })

    // Clear cart and redirect to confirmation
    clearCart()
    router.push("/checkout/confirmation")
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some items to your cart before checking out.</p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  const subtotal = state.total
  const tax = Math.round(subtotal * 0.15)
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-black text-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with back to cart */}
            <div className="flex items-center">
              <Link href="/cart" className="flex items-center text-white hover:text-gray-300 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
              </Link>
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

            {/* Right side - Secure Checkout indicator and Mobile menu */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300 hidden sm:inline">Secure Checkout</span>
              </div>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your order</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="province">Province *</Label>
                      <Select value={formData.province} onValueChange={(value) => handleInputChange("province", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select province" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="western-cape">Western Cape</SelectItem>
                          <SelectItem value="gauteng">Gauteng</SelectItem>
                          <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                          <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                          <SelectItem value="free-state">Free State</SelectItem>
                          <SelectItem value="limpopo">Limpopo</SelectItem>
                          <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                          <SelectItem value="north-west">North West</SelectItem>
                          <SelectItem value="northern-cape">Northern Cape</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code *</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => handleInputChange("paymentMethod", value)}
                  >
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-black" />
                          <span>Credit/Debit Card</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="payfast" id="payfast" />
                      <Label htmlFor="payfast" className="flex-1">
                        PayFast
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="eft" id="eft" />
                      <Label htmlFor="eft" className="flex-1">
                        EFT/Bank Transfer
                      </Label>
                    </div>
                  </RadioGroup>

                  {formData.paymentMethod === "card" && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Name on Card *</Label>
                        <Input
                          id="cardName"
                          value={formData.cardName}
                          onChange={(e) => handleInputChange("cardName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Options */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="saveInfo"
                        checked={formData.saveInfo}
                        onCheckedChange={(checked) => handleInputChange("saveInfo", checked as boolean)}
                      />
                      <Label htmlFor="saveInfo">Save my information for faster checkout next time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter">Subscribe to our newsletter for exclusive offers</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                          {item.variant && <p className="text-xs text-gray-500">{item.variant}</p>}
                        </div>
                        <span className="text-sm font-medium">R{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>R{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (15%)</span>
                      <span>R{tax.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>R{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-black hover:bg-gray-800 text-white">
                    Complete Order
                  </Button>

                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      By placing your order, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
