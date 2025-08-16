import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Mail, ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OrderConfirmationPage() {
  // In a real app, this would get order details from the URL params or API
  const orderNumber = "TS-" + Math.random().toString(36).substr(2, 9).toUpperCase()
  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()

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
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
                <ShoppingCart className="h-4 w-4 mr-1" />
                (0)
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-2">Thank you for your purchase</p>
          <p className="text-gray-600">Order #{orderNumber} has been placed successfully</p>
        </div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-medium">Credit Card</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Status:</span>
                <span className="font-medium text-green-600">Confirmed</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-medium">{estimatedDelivery}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Method:</span>
                <span className="font-medium">Standard Delivery</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Cost:</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tracking:</span>
                <span className="font-medium">Available soon</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What's Next */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What happens next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Order Confirmation</h3>
                <p className="text-sm text-gray-600">You'll receive an email confirmation with your order details</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Package className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Order Processing</h3>
                <p className="text-sm text-gray-600">We'll prepare your items and get them ready for shipping</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">Your order will be delivered to your specified address</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
            <Button size="lg" variant="outline">
              Track Your Order
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <Link href="/contact" className="text-black hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
