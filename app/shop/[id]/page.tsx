"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Star, ShoppingCart, ChevronDown, Smartphone } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useButtonHandler } from "@/lib/button-handler"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedStorage, setSelectedStorage] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null)
  const [mobileExpandedIPhone, setMobileExpandedIPhone] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState("")
  const [currentImage, setCurrentImage] = useState("")

  const { items, addItem } = useCart()
  const { handleButtonClick } = useButtonHandler()
  const router = useRouter()

  const cartState = {
    itemCount: items?.length || 0,
  }

  const authState = {
    user: null,
  }

  const products = [
    {
      id: "iphone-11",
      name: "iPhone 11",
      brand: "Apple",
      category: "phone",
      price: 8999,
      rating: 4.2,
      reviews: 934,
      description: "iPhone 11 with A13 Bionic chip and dual-camera system.",
      image: "/images/iphone-11-black.jpeg",
      colorOptions: [
        {
          name: "Black",
          value: "black",
          images: ["/images/iphone-11-black.jpeg"],
        },
      ],
      storageOptions: ["64GB", "128GB", "256GB"],
      storagePrices: { "64GB": 8999, "128GB": 10999, "256GB": 15999 },
      specifications: {
        Display: "6.1-inch Liquid Retina HD",
        Chip: "A13 Bionic",
        Camera: "12MP Main, 12MP Ultra Wide",
        Battery: "Up to 17 hours video playback",
        Storage: "64GB, 128GB, 256GB",
      },
      inStock: true,
      stockCount: 12,
    },
    {
      id: "iphone-11-pro",
      name: "iPhone 11 Pro",
      brand: "Apple",
      category: "phone",
      price: 12999,
      rating: 4.6,
      reviews: 1234,
      description: "iPhone 11 Pro with A13 Bionic chip and triple-camera system.",
      image: "/images/iphone-11-pro-space-gray.jpeg",
      colorOptions: [
        {
          name: "Space Gray",
          value: "space-gray",
          images: ["/images/iphone-11-pro-space-gray.jpeg"],
        },
        {
          name: "Midnight Green",
          value: "midnight-green",
          images: ["/images/iphone-11-pro-midnight-green.jpeg"],
        },
        {
          name: "Silver",
          value: "silver",
          images: ["/images/iphone-11-pro-silver.jpeg"],
        },
        {
          name: "Gold",
          value: "gold",
          images: ["/images/iphone-11-pro-gold.jpeg"],
        },
      ],
      storageOptions: ["64GB", "256GB", "512GB"],
      storagePrices: { "64GB": 12999, "256GB": 15999, "512GB": 19999 },
      specifications: {
        Display: "5.8-inch Super Retina XDR",
        Chip: "A13 Bionic",
        Camera: "12MP Main, 12MP Ultra Wide, 12MP Telephoto",
        Battery: "Up to 18 hours video playback",
        Storage: "64GB, 256GB, 512GB",
      },
      inStock: true,
      stockCount: 18,
    },
    {
      id: "iphone-12-pro",
      name: "iPhone 12 Pro",
      brand: "Apple",
      category: "phone",
      price: 16999,
      rating: 4.6,
      reviews: 1247,
      description: "iPhone 12 Pro with A14 Bionic chip and Pro camera system.",
      image: "/images/iphone-12-pro-pacific-blue.jpeg",
      colorOptions: [
        {
          name: "Pacific Blue",
          value: "pacific-blue",
          images: ["/images/iphone-12-pro-pacific-blue.jpeg"],
        },
      ],
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 16999, "256GB": 19999, "512GB": 25999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A14 Bionic",
        Camera: "12MP Main, 12MP Ultra Wide, 12MP Telephoto",
        Battery: "Up to 17 hours video playback",
        Storage: "128GB, 256GB, 512GB",
      },
    },
    {
      id: "iphone-12",
      name: "iPhone 12",
      brand: "Apple",
      category: "phone",
      price: 14999,
      rating: 4.5,
      reviews: 1856,
      description: "iPhone 12 with A14 Bionic chip and dual-camera system.",
      image: "/images/iphone-12-black.jpeg",
      colorOptions: [
        {
          name: "Black",
          value: "black",
          images: ["/images/iphone-12-black.jpeg"],
        },
      ],
      storageOptions: ["64GB", "128GB", "256GB"],
      storagePrices: { "64GB": 14999, "128GB": 16999, "256GB": 19999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A14 Bionic",
        Camera: "12MP Main, 12MP Ultra Wide",
        Battery: "Up to 17 hours video playback",
        Storage: "64GB, 128GB, 256GB",
      },
    },
    {
      id: "iphone-12-pro-max",
      name: "iPhone 12 Pro Max",
      brand: "Apple",
      category: "phone",
      price: 18999,
      rating: 4.7,
      reviews: 892,
      description: "iPhone 12 Pro Max with A14 Bionic chip and the largest iPhone display.",
      image: "/images/iphone-12-pro-max-pacific-blue.jpeg",
      colorOptions: [
        {
          name: "Pacific Blue",
          value: "pacific-blue",
          images: ["/images/iphone-12-pro-max-pacific-blue.jpeg"],
        },
        {
          name: "Graphite",
          value: "graphite",
          images: ["/images/iphone-12-pro-max-graphite.jpeg"],
        },
      ],
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 18999, "256GB": 21999, "512GB": 27999 },
      specifications: {
        Display: "6.7-inch Super Retina XDR",
        Chip: "A14 Bionic",
        Camera: "12MP Main, 12MP Ultra Wide, 12MP Telephoto",
        Battery: "Up to 20 hours video playback",
        Storage: "128GB, 256GB, 512GB",
      },
      inStock: true,
      stockCount: 14,
    },
    {
      id: "iphone-16e",
      name: "iPhone 16e",
      brand: "Apple",
      category: "phone",
      price: 7999,
      rating: 4.3,
      reviews: 234,
      description: "iPhone 16e with advanced A18 chip and enhanced single-camera system.",
      image: "/images/iphone-16e-spherical-display.jpeg",
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 7999, "256GB": 9999, "512GB": 13999 },
      colorOptions: [
        { name: "White", image: "/images/iphone-xr-white-abstract.jpeg", value: "white" },
        { name: "(PRODUCT)RED", image: "/images/iphone-xr-red-abstract.jpeg", value: "red" },
        { name: "Black", image: "/images/iphone-xr-black-abstract.jpeg", value: "black" },
        { name: "Blue", image: "/images/iphone-xr-blue-glitch.jpeg", value: "blue" },
      ],
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A18",
        Camera: "48MP Main with 2x Telephoto",
        Battery: "Up to 22 hours video playback",
        Storage: "128GB, 256GB, 512GB",
      },
      inStock: true,
      stockCount: 15,
    },
    {
      id: "iphone-xr",
      name: "iPhone XR",
      brand: "Apple",
      category: "phone",
      price: 6999,
      rating: 4.1,
      reviews: 567,
      description: "iPhone XR with A12 Bionic chip and single-camera system.",
      image: "/images/iphone-xr-white-abstract.jpeg",
      storageOptions: ["64GB", "128GB", "256GB"],
      storagePrices: { "64GB": 6999, "128GB": 8999, "256GB": 12999 },
      colorOptions: [
        {
          name: "White",
          value: "white",
          images: ["/images/iphone-xr-white-abstract.jpeg"],
        },
        {
          name: "(PRODUCT)RED",
          value: "red",
          images: ["/images/iphone-xr-red-abstract.jpeg"],
        },
        {
          name: "Black",
          value: "black",
          images: ["/images/iphone-xr-black-abstract.jpeg"],
        },
        {
          name: "Blue",
          value: "blue",
          images: ["/images/iphone-xr-blue-glitch.jpeg"],
        },
        {
          name: "Coral",
          value: "coral",
          images: ["/images/iphone-xr-coral-abstract.jpeg"],
        },
      ],
      specifications: {
        Display: "6.1-inch Liquid Retina HD",
        Chip: "A12 Bionic",
        Camera: "12MP Main",
        Battery: "Up to 16 hours video playback",
        Storage: "64GB, 128GB, 256GB",
      },
      inStock: true,
      stockCount: 8,
    },
    // Existing products
    {
      id: "1",
      name: "iPhone 16 Pro Max",
      brand: "Apple",
      category: "phone",
      price: 24999,
      rating: 4.8,
      reviews: 245,
      description: "The most advanced iPhone yet with titanium design and A18 Pro chip.",
      image: "/images/iphone-16-pro-max-natural-titanium-gradient.jpeg",
      colorOptions: [
        {
          name: "Natural Titanium",
          value: "natural-titanium",
          images: [
            "/images/iphone-16-pro-max-natural-titanium-gradient.jpeg",
            "/images/iphone-16-pro-max-natural-titanium-angled.jpeg",
          ],
        },
        {
          name: "Black Titanium",
          value: "black-titanium",
          images: [
            "/images/iphone-16-pro-max-black-titanium-gradient.jpeg",
            "/images/iphone-16-pro-max-black-titanium-angled.jpeg",
          ],
        },
        {
          name: "White Titanium",
          value: "white-titanium",
          images: [
            "/images/iphone-16-pro-max-white-titanium-gradient.jpeg",
            "/images/iphone-16-pro-max-white-titanium-angled.jpeg",
          ],
        },
        {
          name: "Desert Titanium",
          value: "desert-titanium",
          images: [
            "/images/iphone-16-pro-max-desert-titanium-gradient.jpeg",
            "/images/iphone-16-pro-max-desert-titanium-angled.jpeg",
          ],
        },
      ],
      storageOptions: ["128GB", "256GB", "512GB", "1TB"],
      storagePrices: { "128GB": 24999, "256GB": 27999, "512GB": 33999, "1TB": 39999 },
      specifications: {
        Display: "6.9-inch Super Retina XDR",
        Chip: "A18 Pro",
        Camera: "48MP Main, 48MP Ultra Wide, 12MP Telephoto",
        Battery: "Up to 33 hours video playback",
        Storage: "128GB, 256GB, 512GB, 1TB",
      },
      inStock: true,
      stockCount: 25,
    },
    {
      id: 2,
      name: "iPhone 14",
      brand: "Apple",
      category: "phone",
      price: 14999,
      rating: 4.5,
      reviews: 67,
      description: "iPhone 14 with advanced dual-camera system and A15 Bionic chip.",
      image: "/images/iphone-14-midnight-full.jpeg",
      colorOptions: [
        {
          name: "Midnight",
          value: "midnight",
          images: ["/images/iphone-14-midnight-full.jpeg", "/images/iphone-14-midnight-gradient.jpeg"],
        },
        {
          name: "Starlight",
          value: "starlight",
          images: ["/images/iphone-14-starlight-gradient.jpeg"],
        },
        {
          name: "Purple",
          value: "purple",
          images: ["/images/iphone-14-purple-gradient.jpeg"],
        },
        {
          name: "(PRODUCT)RED",
          value: "red",
          images: ["/images/iphone-14-red-gradient.jpeg", "/images/iphone-14-red-gradient-new.png"],
        },
        {
          name: "Sierra Blue",
          value: "sierra-blue",
          images: ["/images/iphone-14-sierra-blue-colorful.jpeg"],
        },
        {
          name: "White",
          value: "white",
          images: ["/images/iphone-14-white-gradient.png"],
        },
        {
          name: "Black",
          value: "black",
          images: ["/images/iphone-14-black-gradient.png"],
        },
        {
          name: "Light Blue",
          value: "light-blue",
          images: ["/images/iphone-14-light-blue-gradient.png"],
        },
        {
          name: "Light Purple",
          value: "light-purple",
          images: ["/images/iphone-14-light-purple-gradient.png"],
        },
      ],
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 14999, "256GB": 17999, "512GB": 23999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A15 Bionic",
        Camera: "12MP Main, 12MP Ultra Wide",
        Battery: "Up to 20 hours video playback",
        Storage: "128GB, 256GB, 512GB",
      },
      inStock: true,
      stockCount: 15,
    },
    {
      id: 21,
      name: "iPhone 15 Plus",
      brand: "Apple",
      category: "phone",
      price: 18999,
      rating: 4.8,
      reviews: 45,
      description: "iPhone 15 Plus with 6.7-inch display, USB-C, and advanced camera system.",
      image: "/images/iphone-15-plus-pink-gradient.jpeg",
      colorOptions: [
        {
          name: "Pink",
          value: "pink",
          images: ["/images/iphone-15-plus-pink-gradient.jpeg"],
        },
        {
          name: "Black",
          value: "black",
          images: ["/images/iphone-15-plus-black-gradient.jpeg"],
        },
        {
          name: "Yellow",
          value: "yellow",
          images: ["/images/iphone-15-plus-yellow-gradient.jpeg"],
        },
        {
          name: "Green",
          value: "green",
          images: ["/images/iphone-15-plus-green-gradient.jpeg"],
        },
        {
          name: "Blue",
          value: "blue",
          images: ["/images/iphone-15-plus-blue-gradient.jpeg"],
        },
        {
          name: "Color Lineup",
          value: "lineup",
          images: ["/images/iphone-15-plus-color-lineup.jpeg"],
        },
      ],
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 18999, "256GB": 21999, "512GB": 27999 },
      specifications: {
        Display: "6.7-inch Super Retina XDR",
        Chip: "A16 Bionic",
        Camera: "48MP Main, 12MP Ultra Wide",
        Battery: "Up to 26 hours video playback",
        Storage: "128GB, 256GB, 512GB",
        Connectivity: "USB-C",
      },
      inStock: true,
      stockCount: 12,
    },
    {
      id: "iphone-16",
      name: "iPhone 16",
      brand: "Apple",
      category: "phone",
      price: 17999,
      rating: 4.7,
      reviews: 189,
      description: "iPhone 16 with A18 chip, Camera Control button, and enhanced dual-camera system.",
      image: "/images/iphone-16-blue-gradient.png",
      colorOptions: [
        {
          name: "Blue",
          value: "blue",
          images: ["/images/iphone-16-blue-gradient.png", "/images/iphone-16-blue-angled.png"],
        },
        {
          name: "Pink",
          value: "pink",
          images: ["/images/iphone-16-pink-gradient.png", "/images/iphone-16-pink-angled.png"],
        },
        {
          name: "Teal",
          value: "teal",
          images: ["/images/iphone-16-teal-gradient.png", "/images/iphone-16-teal-angled.png"],
        },
        {
          name: "White",
          value: "white",
          images: ["/images/iphone-16-white-angled.png"],
        },
        {
          name: "Black",
          value: "black",
          images: ["/images/iphone-16-black-gradient.png"],
        },
        {
          name: "White Gradient",
          value: "white-gradient",
          images: ["/images/iphone-16-white-gradient.png"],
        },
        {
          name: "Black Angled",
          value: "black-angled",
          images: ["/images/iphone-16-black-angled-new.png"],
        },
      ],
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 17999, "256GB": 20999, "512GB": 26999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A18",
        Camera: "48MP Fusion, 12MP Ultra Wide",
        Battery: "Up to 22 hours video playback",
        Storage: "128GB, 256GB, 512GB",
        Connectivity: "USB-C",
      },
      inStock: true,
      stockCount: 42,
    },
    {
      id: 22,
      name: "iPhone 16 Plus",
      brand: "Apple",
      category: "phone",
      price: 22999,
      rating: 4.9,
      reviews: 28,
      description: "iPhone 16 Plus with 6.7-inch display, A18 chip, and Camera Control button.",
      image: "/images/iphone-16-plus-teal-gradient.jpeg",
      colorOptions: [
        {
          name: "Teal",
          value: "teal",
          images: ["/images/iphone-16-plus-teal-gradient.jpeg", "/images/iphone-16-plus-teal-angled.jpeg"],
        },
        {
          name: "White",
          value: "white",
          images: ["/images/iphone-16-plus-white-gradient.jpeg", "/images/iphone-16-plus-white-angled.jpeg"],
        },
        {
          name: "Pink",
          value: "pink",
          images: ["/images/iphone-16-plus-pink-gradient.jpeg", "/images/iphone-16-plus-pink-angled.jpeg"],
        },
        {
          name: "Ultramarine",
          value: "ultramarine",
          images: [
            "/images/iphone-16-plus-ultramarine-gradient.jpeg",
            "/images/iphone-16-plus-ultramarine-angled.jpeg",
          ],
        },
        {
          name: "Black",
          value: "black",
          images: ["/images/iphone-16-plus-black-gradient.jpeg", "/images/iphone-16-plus-black-angled.jpeg"],
        },
      ],
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 22999, "256GB": 25999, "512GB": 31999 },
      specifications: {
        Display: "6.7-inch Super Retina XDR",
        Chip: "A18",
        Camera: "48MP Fusion, 12MP Ultra Wide",
        Battery: "Up to 27 hours video playback",
        Storage: "128GB, 256GB, 512GB",
        Connectivity: "USB-C",
        "New Features": "Camera Control, Action Button",
      },
      inStock: true,
      stockCount: 8,
    },
    {
      id: 3,
      name: "Nike Air Max 270",
      brand: "Nike",
      category: "shoes",
      price: 2499,
      rating: 4.7,
      reviews: 89,
      description: "Nike Air Max 270 with the largest heel Air unit yet for maximum comfort.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "White/Black",
        "Upper Material": "Mesh and synthetic leather",
        Sole: "Rubber outsole with Air Max cushioning",
        Fit: "True to size",
        "Style Code": "AH8050-100",
      },
      inStock: true,
      stockCount: 20,
    },
    {
      id: "nike-air-max-95",
      name: "Nike Air Max 95",
      brand: "Nike",
      category: "shoes",
      price: 2999,
      rating: 4.8,
      reviews: 94,
      description: "The iconic Nike Air Max 95 with layered design and visible Air cushioning.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nike%20Air%20Max%2095%20%289%29-sAf4SYwFYXE0BGgdGLLs4CbazCFKK8.jpeg",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Black/Grey/Gold",
        "Upper Material": "Leather and synthetic",
        Sole: "Rubber outsole with Air Max cushioning",
        Fit: "True to size",
        "Style Code": "DM9104-001",
      },
      inStock: true,
      stockCount: 18,
    },
    {
      id: "nike-air-max-95-black-gold",
      name: "Nike Air Max 95",
      brand: "Nike",
      category: "shoes",
      price: 2999,
      rating: 4.8,
      reviews: 124,
      description:
        "The Nike Air Max 95 brings back the iconic layered design with premium materials and visible Air cushioning.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nike%20Air%20Max%2095%20%289%29-sAf4SYwFYXE0BGgdGLLs4CbazCFKK8.jpeg",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Black/Gold",
        "Upper Material": "Leather and synthetic",
        Sole: "Rubber outsole with Air Max cushioning",
        Fit: "True to size",
        "Style Code": "DM9104-001",
      },
      inStock: true,
      stockCount: 15,
    },
    {
      id: "nike-air-max-270",
      name: "Nike Air Max 270",
      brand: "Nike",
      category: "shoes",
      price: 2599,
      rating: 4.7,
      reviews: 89,
      description: "The Nike Air Max 270 delivers unrivaled comfort with the largest heel Air unit yet.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "White/Blue",
        "Upper Material": "Mesh and synthetic leather",
        Sole: "Rubber with Max Air unit",
        Fit: "True to size",
        "Style Code": "AH8050-100",
      },
      inStock: true,
      stockCount: 20,
    },
    {
      id: "jordan-1-retro-high-chicago",
      name: "Jordan 1 Retro High",
      brand: "Jordan",
      category: "shoes",
      price: 4599,
      rating: 4.9,
      reviews: 312,
      description: "The Air Jordan 1 Retro High OG brings back the classic Chicago colorway that started it all.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Chicago (White/Black/Red)",
        "Upper Material": "Premium leather",
        Sole: "Rubber outsole",
        Fit: "True to size",
        "Style Code": "555088-101",
      },
      inStock: true,
      stockCount: 8,
    },
    {
      id: "adidas-ultraboost-22",
      name: "Adidas Ultraboost 22",
      brand: "Adidas",
      category: "shoes",
      price: 3299,
      rating: 4.6,
      reviews: 156,
      description:
        "The Adidas Ultraboost 22 features responsive BOOST midsole and Primeknit upper for ultimate comfort.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Core Black",
        "Upper Material": "Primeknit",
        Sole: "BOOST midsole with Continental rubber",
        Fit: "True to size",
        "Style Code": "GZ0127",
      },
      inStock: true,
      stockCount: 12,
    },
    {
      id: "nike-dunk-low",
      name: "Nike Dunk Low",
      brand: "Nike",
      category: "shoes",
      price: 2299,
      rating: 4.5,
      reviews: 203,
      description:
        "The Nike Dunk Low returns with crisp overlays and original team colors for a classic basketball look.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Panda (White/Black)",
        "Upper Material": "Leather",
        Sole: "Rubber outsole",
        Fit: "True to size",
        "Style Code": "DD1391-100",
      },
      inStock: true,
      stockCount: 18,
    },
    {
      id: "converse-chuck-taylor",
      name: "Converse Chuck Taylor All Star High",
      brand: "Converse",
      category: "shoes",
      price: 1599,
      rating: 4.4,
      reviews: 78,
      description: "The iconic Converse Chuck Taylor All Star High Top with classic canvas construction.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Black",
        "Upper Material": "Canvas",
        Sole: "Rubber",
        Fit: "Runs large, size down",
        "Style Code": "M9160C",
      },
      inStock: true,
      stockCount: 25,
    },
    {
      id: "vans-old-skool",
      name: "Vans Old Skool",
      brand: "Vans",
      category: "shoes",
      price: 1899,
      rating: 4.3,
      reviews: 92,
      description: "The Vans Old Skool features the iconic side stripe and durable canvas and suede construction.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Black/White",
        "Upper Material": "Canvas and suede",
        Sole: "Waffle rubber outsole",
        Fit: "True to size",
        "Style Code": "VN000D3HY28",
      },
      inStock: true,
      stockCount: 22,
    },
    {
      id: "new-balance-550",
      name: "New Balance 550",
      brand: "New Balance",
      category: "shoes",
      price: 2799,
      rating: 4.7,
      reviews: 67,
      description:
        "The New Balance 550 brings back the classic basketball silhouette with premium leather construction.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "White/Green",
        "Upper Material": "Leather",
        Sole: "Rubber outsole",
        Fit: "True to size",
        "Style Code": "BB550LB1",
      },
      inStock: true,
      stockCount: 14,
    },
    {
      id: "nike-air-force-1",
      name: "Nike Air Force 1 '07",
      brand: "Nike",
      category: "shoes",
      price: 2399,
      rating: 4.8,
      reviews: 445,
      description:
        "The Nike Air Force 1 '07 brings back the classic basketball shoe with premium leather construction.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Triple White",
        "Upper Material": "Leather",
        Sole: "Rubber with Air cushioning",
        Fit: "True to size",
        "Style Code": "315122-111",
      },
      inStock: true,
      stockCount: 30,
    },
    {
      id: "adidas-stan-smith",
      name: "Adidas Stan Smith",
      brand: "Adidas",
      category: "shoes",
      price: 1799,
      rating: 4.5,
      reviews: 234,
      description: "The Adidas Stan Smith is a timeless tennis shoe with clean white leather and green accents.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "White/Green",
        "Upper Material": "Leather",
        Sole: "Rubber outsole",
        Fit: "Runs large, size down half",
        "Style Code": "M20324",
      },
      inStock: true,
      stockCount: 28,
    },
    {
      id: "puma-suede-classic",
      name: "Puma Suede Classic",
      brand: "Puma",
      category: "shoes",
      price: 1699,
      rating: 4.4,
      reviews: 156,
      description: "The Puma Suede Classic features premium suede construction and the iconic Puma formstrip.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Peacoat/White",
        "Upper Material": "Suede",
        Sole: "Rubber outsole",
        Fit: "True to size",
        "Style Code": "352634-75",
      },
      inStock: true,
      stockCount: 19,
    },
    {
      id: "reebok-classic-leather",
      name: "Reebok Classic Leather",
      brand: "Reebok",
      category: "shoes",
      price: 1899,
      rating: 4.3,
      reviews: 89,
      description: "The Reebok Classic Leather offers timeless style with soft garment leather and a comfortable fit.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "White/Gum",
        "Upper Material": "Leather",
        Sole: "Gum rubber outsole",
        Fit: "True to size",
        "Style Code": "49799",
      },
      inStock: true,
      stockCount: 16,
    },
    {
      id: "jordan-4-retro",
      name: "Jordan 4 Retro",
      brand: "Jordan",
      category: "shoes",
      price: 5299,
      rating: 4.9,
      reviews: 278,
      description:
        "The Air Jordan 4 Retro brings back the iconic silhouette with premium materials and classic details.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Black Cat",
        "Upper Material": "Nubuck leather",
        Sole: "Rubber with Air cushioning",
        Fit: "True to size",
        "Style Code": "CU1110-010",
      },
      inStock: true,
      stockCount: 6,
    },
    {
      id: "nike-blazer-mid",
      name: "Nike Blazer Mid '77",
      brand: "Nike",
      category: "shoes",
      price: 2099,
      rating: 4.6,
      reviews: 134,
      description: "The Nike Blazer Mid '77 brings back the vintage basketball shoe with classic styling.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "White/Black",
        "Upper Material": "Leather and synthetic",
        Sole: "Rubber outsole",
        Fit: "True to size",
        "Style Code": "BQ6806-100",
      },
      inStock: true,
      stockCount: 21,
    },
    {
      id: "adidas-gazelle",
      name: "Adidas Gazelle",
      brand: "Adidas",
      category: "shoes",
      price: 1999,
      rating: 4.5,
      reviews: 167,
      description: "The Adidas Gazelle is a timeless classic with suede construction and the iconic three stripes.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "Core Black",
        "Upper Material": "Suede",
        Sole: "Rubber outsole",
        Fit: "Runs small, size up half",
        "Style Code": "BB5476",
      },
      inStock: true,
      stockCount: 24,
    },
    {
      id: "asics-gel-lyte-iii",
      name: "ASICS Gel-Lyte III",
      brand: "ASICS",
      category: "shoes",
      price: 2499,
      rating: 4.7,
      reviews: 98,
      description: "The ASICS Gel-Lyte III features the iconic split tongue design and GEL cushioning technology.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        Colorway: "White/Blue",
        "Upper Material": "Mesh and synthetic leather",
        Sole: "Rubber with GEL cushioning",
        Fit: "True to size",
        "Style Code": "1191A201-100",
      },
      inStock: true,
      stockCount: 13,
    },
    {
      id: "iphone-16-pro",
      name: "iPhone 16 Pro",
      brand: "Apple",
      category: "phone",
      price: 21999,
      rating: 4.9,
      reviews: 156,
      description: "iPhone 16 Pro with A18 Pro chip and advanced camera system.",
      image: "/images/iphone-16-pro-space-black-full.jpeg",
      colorOptions: [
        {
          name: "Space Black",
          value: "space-black",
          images: ["/images/iphone-16-pro-space-black-angled.jpeg", "/images/iphone-16-pro-space-black-full.jpeg"],
        },
        {
          name: "Natural Titanium",
          value: "natural-titanium",
          images: [
            "/images/iphone-16-pro-natural-titanium-full.jpeg",
            "/images/iphone-16-pro-natural-titanium-teal.jpeg",
            "/images/iphone-16-pro-natural-titanium-angled.jpeg",
          ],
        },
        {
          name: "White Titanium",
          value: "white-titanium",
          images: ["/images/iphone-16-pro-white-angled.jpeg"],
        },
        {
          name: "Desert Titanium",
          value: "desert-titanium",
          images: [
            "/images/iphone-16-pro-desert-titanium-full.jpeg",
            "/images/iphone-16-pro-desert-titanium-angled.jpeg",
          ],
        },
      ],
      storageOptions: ["128GB", "256GB", "512GB", "1TB"],
      storagePrices: { "128GB": 21999, "256GB": 24999, "512GB": 30999, "1TB": 36999 },
      specifications: {
        Display: "6.3-inch Super Retina XDR",
        Chip: "A18 Pro",
        Camera: "48MP Main, 48MP Ultra Wide, 12MP Telephoto",
        Battery: "Up to 27 hours video playback",
        Storage: "128GB, 256GB, 512GB, 1TB",
      },
      inStock: true,
      stockCount: 22,
    },
    {
      id: "iphone-13",
      name: "iPhone 13",
      brand: "Apple",
      category: "phone",
      price: 12999,
      rating: 4.7,
      reviews: 892,
      description: "iPhone 13 with A15 Bionic chip and advanced dual-camera system.",
      image: "/images/iphone-13-white-blue-gradient.png",
      colorOptions: [
        {
          name: "White",
          value: "white",
          images: ["/images/iphone-13-white-blue-gradient.png", "/images/iphone-13-standard-view.png"],
        },
        {
          name: "Starlight",
          value: "starlight",
          images: ["/images/iphone-13-camera-closeup.png", "/images/iphone-13-artistic-angles.png"],
        },
      ],
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 12999, "256GB": 15999, "512GB": 20999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A15 Bionic",
        Camera: "Advanced dual-camera system",
        Battery: "Up to 19 hours video playback",
        Storage: "128GB, 256GB, 512GB",
        Connectivity: "5G capable",
      },
      inStock: true,
      stockCount: 25,
    },
  ]

  const product = products.find((p) => String(p.id) === String(params.id))

  const handleAddToCart = () => {
    let variant = ""
    if (product.category === "shoes" && selectedSize) {
      variant = selectedSize
    } else if (product.storageOptions && selectedStorage) {
      variant = selectedStorage
    } else if (product.colorOptions && selectedColor) {
      const selectedColorOption = product.colorOptions.find((color) => color.value === selectedColor)
      variant = selectedColorOption?.name || selectedColor
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: currentImage || product.image,
      category: product.category,
      variant: variant,
    })
  }

  useEffect(() => {
    if (product) {
      if (product.colorOptions && product.colorOptions.length > 0) {
        const defaultColor = product.colorOptions[0]
        // Only set default values if they haven't been set yet
        if (!selectedColor) {
          setSelectedColor(defaultColor.value)
        }
        if (!currentImage) {
          setCurrentImage(defaultColor.images[0])
        }
      } else {
        // Only set default image if currentImage hasn't been set yet
        if (!currentImage) {
          setCurrentImage(product.image)
        }
      }
    }
  }, [product, selectedColor, currentImage])

  const handleColorChange = (colorValue: string) => {
    setSelectedColor(colorValue)
    const selectedColorOption = product.colorOptions?.find((color) => color.value === colorValue)
    if (selectedColorOption) {
      setCurrentImage(selectedColorOption.images[0])
    }
  }

  const getCurrentColorImages = () => {
    if (product.colorOptions && selectedColor) {
      const selectedColorOption = product.colorOptions.find((color) => color.value === selectedColor)
      return selectedColorOption?.images || [product.image]
    }
    return product.images || [product.image]
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/shop" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Blue promotional banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Get the Fastest delivery for Free. Shop online at RKDS Holdings!
      </div>

      <nav className="bg-black text-white sticky top-0 z-50 overflow-visible">
        {/* ... existing navigation code ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/images/rkds-logo.png" alt="RKDS Holdings" width={120} height={40} className="h-8 w-auto" />
            </div>

            <div className="hidden lg:flex items-center space-x-8 relative overflow-visible">
              <Link
                href="/"
                className="text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap"
              >
                Home
              </Link>

              {/* iPhone Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("iphone")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  iPhone <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "iphone" && (
                  <div className="absolute top-full left-0 w-[600px] bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Smartphone className="mr-2 h-5 w-5 text-blue-400" />
                            Shop iPhone Range
                          </h4>
                          <ul className="space-y-2 text-sm">
                            {[
                              { name: "iPhone 16 Pro", price: "R21,999", id: "iphone-16-pro" },
                              { name: "iPhone 16", price: "R18,999", id: "iphone-16" },
                              { name: "iPhone 15 Pro", price: "R19,999", id: "iphone-15-pro" },
                              { name: "iPhone 15", price: "R16,999", id: "iphone-15" },
                              { name: "iPhone 14 Pro", price: "R17,999", id: "iphone-14-pro" },
                              { name: "iPhone 14", price: "R14,999", id: "iphone-14" },
                              { name: "iPhone 13", price: "R12,999", id: "iphone-13" },
                              { name: "iPhone 12", price: "R10,999", id: "iphone-12" },
                              { name: "iPhone 11", price: "R8,999", id: "iphone-11" },
                              { name: "iPhone XR", price: "R6,999", id: "iphone-xr" },
                            ].map((iphone) => (
                              <li key={iphone.id} className="group">
                                <div
                                  className="flex items-center py-2 hover:text-gray-300 transition-colors cursor-pointer hover:bg-gray-800 rounded px-2"
                                  onClick={() => setExpandedIPhone(expandedIPhone === iphone.id ? null : iphone.id)}
                                >
                                  <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                                  <span className="flex-1 font-medium">{iphone.name}</span>
                                  <span className="text-gray-400 text-xs mr-2">From {iphone.price}</span>
                                  <ChevronDown
                                    className={`h-3 w-3 transition-transform ${expandedIPhone === iphone.id ? "rotate-180" : ""}`}
                                  />
                                </div>
                                {expandedIPhone === iphone.id && (
                                  <div className="ml-6 mt-2 space-y-2 bg-gray-900 rounded p-3">
                                    <div className="text-xs text-gray-400 mb-2">Choose Storage:</div>
                                    <Link
                                      href={`/shop/${iphone.id}?storage=128gb`}
                                      className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                    >
                                      <div className="flex justify-between items-center">
                                        <span className="text-white">128GB</span>
                                        <span className="text-green-400 font-medium">{iphone.price}</span>
                                      </div>
                                    </Link>
                                    <Link
                                      href={`/shop/${iphone.id}?storage=256gb`}
                                      className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                    >
                                      <div className="flex justify-between items-center">
                                        <span className="text-white">256GB</span>
                                        <span className="text-green-400 font-medium">
                                          R
                                          {(
                                            Number.parseInt(iphone.price.replace("R", "").replace(",", "")) + 3000
                                          ).toLocaleString()}
                                        </span>
                                      </div>
                                    </Link>
                                    <Link
                                      href={`/shop/${iphone.id}?storage=512gb`}
                                      className="block hover:bg-gray-800 p-2 rounded transition-colors"
                                    >
                                      <div className="flex justify-between items-center">
                                        <span className="text-white">512GB</span>
                                        <span className="text-green-400 font-medium">
                                          R
                                          {(
                                            Number.parseInt(iphone.price.replace("R", "").replace(",", "")) + 8000
                                          ).toLocaleString()}
                                        </span>
                                      </div>
                                    </Link>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* ... existing navigation code ... */}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ... existing navigation dropdowns ... */}
            </div>

            <div className="flex items-center space-x-4">{/* ... existing navigation icons ... */}</div>
          </div>

          {/* ... existing mobile menu ... */}
        </div>
      </nav>

      {/* Product Details */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={currentImage || product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {getCurrentColorImages().map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(image)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    currentImage === image ? "border-black" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-black text-white px-2 py-1 text-xs font-medium rounded">{product.brand}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-current" : ""}`} />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews})</span>
              </div>

              <p className="text-gray-600 text-lg mb-6">{product.description}</p>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-900 mb-6">R{product.price.toLocaleString()}</div>

            {product.colorOptions && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Color</label>
                <div className="flex gap-2">
                  {product.colorOptions.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => handleColorChange(color.value)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                        selectedColor === color.value
                          ? "border-black bg-black text-white"
                          : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection for Shoes */}
            {product.category === "shoes" && product.sizes && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select Size</option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Storage Selection for Phones */}
            {product.storageOptions && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Storage</label>
                <select
                  value={selectedStorage}
                  onChange={(e) => setSelectedStorage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select Storage</option>
                  {product.storageOptions.map((storage) => (
                    <option key={storage} value={storage}>
                      {storage}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {product.inStock ? `In Stock (${product.stockCount} left)` : "Out of Stock"}
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Shop Now
            </button>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-900">{key}:</div>
                <div className="text-gray-600">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
