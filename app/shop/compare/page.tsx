"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Search, User } from "lucide-react"

const iPhoneModels = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    price: "From R21,999",
    display: "6.3″ Super Retina XDR",
    chip: "A18 Pro",
    camera: "48MP Main, 48MP Ultra Wide, 12MP Telephoto",
    battery: "Up to 27 hours video",
    storage: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    price: "From R18,999",
    display: "6.1″ Super Retina XDR",
    chip: "A18",
    camera: "48MP Main, 12MP Ultra Wide",
    battery: "Up to 22 hours video",
    storage: ["128GB", "256GB", "512GB"],
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    price: "From R19,999",
    display: "6.1″ Super Retina XDR",
    chip: "A17 Pro",
    camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
    battery: "Up to 23 hours video",
    storage: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
  },
]

export default function ComparePage() {
  const [selectedModels, setSelectedModels] = useState([iPhoneModels[0], iPhoneModels[1]])

  const itemCount = 0

  const handleModelChange = (index: number, modelId: string) => {
    const newModel = iPhoneModels.find((model) => model.id === modelId)
    if (newModel) {
      const newSelectedModels = [...selectedModels]
      newSelectedModels[index] = newModel
      setSelectedModels(newSelectedModels)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-black text-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/rkds-logo.png"
                  alt="RKDS Holdings"
                  width={120}
                  height={40}
                  className="h-8 w-auto filter invert"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors text-sm md:text-base">
                Home
              </Link>
              <Link
                href="/shop?category=iphone"
                className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
              >
                iPhone
              </Link>
              <Link
                href="/shop?category=ipad"
                className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
              >
                iPad
              </Link>
              <Link
                href="/shop?category=airpods"
                className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
              >
                AirPods
              </Link>
              <Link
                href="/shop?category=accessories"
                className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
              >
                Accessories
              </Link>
              <Link
                href="/shop?category=sneakers"
                className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
              >
                Sneakers
              </Link>
              <Link href="/repairs" className="text-white hover:text-gray-300 transition-colors text-sm md:text-base">
                Services
              </Link>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-300 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <Link href="/auth/login" className="text-white hover:text-gray-300 transition-colors">
                <User className="h-5 w-5" />
              </Link>
              <Link href="/cart" className="flex items-center text-white hover:text-gray-300 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && <span className="ml-1 text-sm">({itemCount})</span>}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blue promotional banner */}
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base">Get the Fastest delivery for Free. Shop online at RKDS Holdings!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compare iPhone Models</h1>
          <p className="text-xl text-gray-600">Find the perfect iPhone for your needs</p>
        </div>

        {/* Model Selectors */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {selectedModels.map((model, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Compare Model {index + 1}</CardTitle>
                <select
                  className="mt-2 p-2 border rounded-lg w-full"
                  value={model.id}
                  onChange={(e) => handleModelChange(index, e.target.value)}
                >
                  {iPhoneModels.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-6 font-semibold">Feature</th>
                    {selectedModels.map((model, index) => (
                      <th key={index} className="text-center p-6">
                        <div className="space-y-4">
                          <Image
                            src="/placeholder.svg?height=200&width=150"
                            alt={model.name}
                            width={150}
                            height={200}
                            className="mx-auto"
                          />
                          <div>
                            <h3 className="font-bold text-lg">{model.name}</h3>
                            <p className="text-gray-600">{model.price}</p>
                          </div>
                          <Link href={`/shop/${model.id}`}>
                            <Button className="w-full bg-black hover:bg-gray-800">Shop Now</Button>
                          </Link>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-6 font-semibold">Display</td>
                    {selectedModels.map((model, index) => (
                      <td key={index} className="p-6 text-center">
                        {model.display}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-semibold">Chip</td>
                    {selectedModels.map((model, index) => (
                      <td key={index} className="p-6 text-center">
                        {model.chip}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-semibold">Camera System</td>
                    {selectedModels.map((model, index) => (
                      <td key={index} className="p-6 text-center">
                        {model.camera}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-semibold">Battery Life</td>
                    {selectedModels.map((model, index) => (
                      <td key={index} className="p-6 text-center">
                        {model.battery}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-semibold">Storage Options</td>
                    {selectedModels.map((model, index) => (
                      <td key={index} className="p-6 text-center">
                        <div className="space-y-1">
                          {model.storage.map((storage) => (
                            <div key={storage} className="text-sm">
                              {storage}
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold">Available Colors</td>
                    {selectedModels.map((model, index) => (
                      <td key={index} className="p-6 text-center">
                        <div className="space-y-1">
                          {model.colors.map((color) => (
                            <div key={color} className="text-sm">
                              {color}
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to choose your iPhone?</h2>
          <p className="text-gray-600 mb-6">Browse our full iPhone collection or get expert advice</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop?category=iphone">
              <Button size="lg" className="bg-black hover:bg-gray-800">
                Shop All iPhones
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get Expert Advice
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
