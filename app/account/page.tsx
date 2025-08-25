"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Package,
  Settings,
  LogOut,
  Eye,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"

export default function AccountPage() {
  const { state: authState, logout } = useAuth()
  const { state: cartState } = useCart()
  const router = useRouter()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!authState.isLoading && !authState.user) {
      router.push("/auth/login")
    }
  }, [authState.isLoading, authState.user, router])

  if (authState.isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!authState.user) {
    return null // Will redirect to login
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "shipped":
        return <Truck className="h-4 w-4 text-blue-600" />
      case "processing":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "cancelled":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <Package className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
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

            {/* Right side - Cart and Account */}
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="text-white hover:text-gray-300 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-1" />
                <span className="text-sm">({cartState.itemCount})</span>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>

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
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {authState.user.firstName}!</h1>
          <p className="text-gray-600">Manage your account and track your orders</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Account Menu
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="h-4 w-4 mr-2" />
                  Order History
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>

            {/* Account Info */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-medium">
                    {authState.user.firstName} {authState.user.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{authState.user.email}</p>
                </div>
                {authState.user.phone && (
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium">{authState.user.phone}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-600">Member Since</p>
                  <p className="font-medium">{new Date(authState.user.joinDate).toLocaleDateString()}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Package className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{authState.orders.length}</p>
                  <p className="text-sm text-gray-600">Total Orders</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">
                    {authState.orders.filter((order) => order.status === "shipped").length}
                  </p>
                  <p className="text-sm text-gray-600">In Transit</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold">
                    {authState.orders.filter((order) => order.status === "delivered").length}
                  </p>
                  <p className="text-sm text-gray-600">Delivered</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Track your recent purchases and repairs</CardDescription>
              </CardHeader>
              <CardContent>
                {authState.orders.length === 0 ? (
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">No orders yet</p>
                    <Button className="bg-black hover:bg-gray-800 text-white">
                      <Link href="/shop">Start Shopping</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {authState.orders.map((order, index) => (
                      <div key={order.id}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold">Order #{order.orderNumber}</h3>
                              <Badge className={getStatusColor(order.status)}>
                                <div className="flex items-center gap-1">
                                  {getStatusIcon(order.status)}
                                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                </div>
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              Placed on {new Date(order.date).toLocaleDateString()}
                            </p>
                            <div className="space-y-1">
                              {order.items.map((item) => (
                                <p key={item.id} className="text-sm text-gray-600">
                                  {item.quantity}x {item.name}
                                </p>
                              ))}
                            </div>
                            {order.trackingNumber && (
                              <p className="text-sm text-gray-600 mt-2">
                                Tracking: <span className="font-mono">{order.trackingNumber}</span>
                              </p>
                            )}
                            {order.estimatedDelivery && (
                              <p className="text-sm text-gray-600">
                                Estimated delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">R{order.total.toLocaleString()}</p>
                            <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>
                        {index < authState.orders.length - 1 && <Separator className="mt-6" />}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
