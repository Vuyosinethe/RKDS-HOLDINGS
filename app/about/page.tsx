"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import Layout from "@/components/Layout"

export default function AboutPage() {
  const { state: authState } = useAuth()
  const { state: cartState } = useCart()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-800">About RKDS Holdings</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Your Trusted Tech & Style Partner</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2018, we've been South Africa's premier destination for premium technology and stylish footwear,
              backed by expert repair services that come to you.
            </p>
          </div>

          {/* ... existing about page sections ... */}
        </div>
      </div>
    </Layout>
  )
}
