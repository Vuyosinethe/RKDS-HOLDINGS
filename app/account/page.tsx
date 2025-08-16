"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-black hover:text-gray-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <Image src="/images/rkds-logo.png" alt="RKDS Holdings" width={120} height={40} className="h-8 w-auto" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-black font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-black font-medium">
                Shop
              </Link>
              <Link href="/repairs" className="text-gray-700 hover:text-black font-medium">
                Repairs
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black font-medium">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
                <Link href="/cart">
                  <ShoppingCart className="h-4 w-4 mr-1" />({cartState.itemCount})
                </Link>
              </Button>
            </div>
          </div>
        </div>
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
