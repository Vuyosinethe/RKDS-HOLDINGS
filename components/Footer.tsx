"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/images/rkds-logo.png" alt="RKDS Holdings" width={120} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-gray-300 text-sm">
              South Africa's premier destination for premium iPhones, designer sneakers, and professional tech repair
              services.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/rkdsholdings"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/rkdsholdings"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/rkdsholdings"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop?category=iphones" className="text-gray-300 hover:text-white transition-colors">
                  Shop iPhone
                </Link>
              </li>
              <li>
                <Link href="/shop?category=ipad" className="text-gray-300 hover:text-white transition-colors">
                  Shop iPad
                </Link>
              </li>
              <li>
                <Link href="/shop?category=airpods" className="text-gray-300 hover:text-white transition-colors">
                  Shop AirPods
                </Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="text-gray-300 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/sneakers" className="text-gray-300 hover:text-white transition-colors">
                  Sneakers
                </Link>
              </li>
              <li>
                <Link href="/repairs" className="text-gray-300 hover:text-white transition-colors">
                  Repair Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop/compare" className="text-gray-300 hover:text-white transition-colors">
                  Compare Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-300 hover:text-white transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-gray-300 hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+27 11 123 4567</p>
                  <p className="text-gray-400 text-xs">Mon-Fri 9AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">info@rkdsholdings.co.za</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Tech Street</p>
                  <p className="text-gray-300">Johannesburg, 2000</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs">Monday-Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-xs">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-400 text-xs">Closed Sundays & Public Holidays</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* House Call Service Banner */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-blue-900/30 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="mr-2 h-5 w-5 text-blue-400" />
              <span className="font-medium text-blue-400">House Call Service Available</span>
            </div>
            <p className="text-sm text-gray-300 mb-3">Professional repairs at your location for just R49 service fee</p>
            <Link
              href="/repairs?service=house-call"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Book House Call - R49
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 RKDS Holdings. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
