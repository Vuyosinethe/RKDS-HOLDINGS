"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import Layout from "@/components/Layout"

export default function CartPage() {
  const { state, removeItem, updateQuantity } = useCart()
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
    <Layout>
      <div className="bg-gray-50">
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
    </Layout>
  )
}
