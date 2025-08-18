"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  Star,
  ShoppingCart,
  ChevronDown,
  Smartphone,
  Tablet,
  Headphones,
  Search,
  Settings,
  PenToolIcon as Tool,
  Cpu,
  Shield,
  Bluetooth,
  Zap,
  Battery,
  Cable,
  Watch,
  HardDrive,
  Wrench,
  Phone,
  Monitor,
  Camera,
  MapPin,
  User,
  Home,
  Circle,
  ShoppingBag,
} from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useButtonHandler } from "@/lib/button-handler"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const [selectedStorage, setSelectedStorage] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedIPhone, setExpandedIPhone] = useState<string | null>(null)
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null)
  const [mobileExpandedIPhone, setMobileExpandedIPhone] = useState<string | null>(null)

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
      id: "iphone-16-pro",
      name: "iPhone 16 Pro",
      brand: "Apple",
      category: "phone",
      price: 21999,
      rating: 4.9,
      reviews: 312,
      description: "The ultimate iPhone with titanium design, A18 Pro chip, and advanced camera system.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2013%20%285%29-CkeDd4HHovfnbGmHvfW1R7MQDxJuDl.jpeg",
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
      stockCount: 30,
    },
    {
      id: "iphone-16",
      name: "iPhone 16",
      brand: "Apple",
      category: "phone",
      price: 18999,
      rating: 4.7,
      reviews: 289,
      description: "The new iPhone 16 with A18 chip and enhanced camera capabilities.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2014%20%285%29-FuxL48fQVqppx9lrLA46yyPh4KWxwn.jpeg",
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 18999, "256GB": 21999, "512GB": 27999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A18",
        Camera: "48MP Main, 12MP Ultra Wide",
        Battery: "Up to 22 hours video playback",
        Storage: "128GB, 256GB, 512GB",
      },
      inStock: true,
      stockCount: 45,
    },
    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro",
      brand: "Apple",
      category: "phone",
      price: 19999,
      rating: 4.8,
      reviews: 456,
      description: "iPhone 15 Pro with titanium design and A17 Pro chip.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2014%20%282%29-VMEBNNPOaKUu7esnxhlbRgJAXtkp2q.jpeg",
      storageOptions: ["128GB", "256GB", "512GB", "1TB"],
      storagePrices: { "128GB": 19999, "256GB": 22999, "512GB": 28999, "1TB": 34999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A17 Pro",
        Camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
        Battery: "Up to 23 hours video playback",
        Storage: "128GB, 256GB, 512GB, 1TB",
      },
      inStock: true,
      stockCount: 35,
    },
    {
      id: "iphone-15",
      name: "iPhone 15",
      brand: "Apple",
      category: "phone",
      price: 16999,
      rating: 4.6,
      reviews: 378,
      description: "iPhone 15 with Dynamic Island and advanced dual-camera system.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone%2014%20%284%29-z4Z9WW1fLuwHlfiBv0nvK6TNtikDgv.jpeg",
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 16999, "256GB": 19999, "512GB": 25999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A16 Bionic",
        Camera: "48MP Main, 12MP Ultra Wide",
        Battery: "Up to 20 hours video playback",
        Storage: "128GB, 256GB, 512GB",
      },
      inStock: true,
      stockCount: 40,
    },
    {
      id: "iphone-14-pro",
      name: "iPhone 14 Pro",
      brand: "Apple",
      category: "phone",
      price: 17999,
      rating: 4.7,
      reviews: 523,
      description: "iPhone 14 Pro with Dynamic Island, A16 Bionic chip, and Pro camera system.",
      image: "/images/iphone-14-midnight-full.jpeg",
      images: [
        "/images/iphone-14-midnight-full.jpeg",
        "/images/iphone-14-starlight-full.jpeg",
        "/images/iphone-14-sierra-blue-full.jpeg",
        "/images/iphone-14-pink-full.jpeg",
      ],
      storageOptions: ["128GB", "256GB", "512GB", "1TB"],
      storagePrices: { "128GB": 17999, "256GB": 20999, "512GB": 26999, "1TB": 32999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR with ProMotion",
        Chip: "A16 Bionic",
        Camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
        Battery: "Up to 23 hours video playback",
        Storage: "128GB, 256GB, 512GB, 1TB",
      },
      inStock: true,
      stockCount: 35,
    },
    {
      id: "iphone-14",
      name: "iPhone 14",
      brand: "Apple",
      category: "phone",
      price: 14999,
      rating: 4.5,
      reviews: 445,
      description: "iPhone 14 with advanced dual-camera system and A15 Bionic chip.",
      image: "/images/iphone-14-midnight-full.jpeg",
      images: [
        "/images/iphone-14-midnight-full.jpeg",
        "/images/iphone-14-starlight-full.jpeg",
        "/images/iphone-14-sierra-blue-full.jpeg",
        "/images/iphone-14-pink-full.jpeg",
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
      stockCount: 30,
    },
    {
      id: "iphone-13",
      name: "iPhone 13",
      brand: "Apple",
      category: "phone",
      price: 12999,
      rating: 4.4,
      reviews: 612,
      description: "iPhone 13 with A15 Bionic chip and dual-camera system.",
      image: "/images/iphone-13-starlight-full.jpeg",
      images: [
        "/images/iphone-13-midnight-full.jpeg",
        "/images/iphone-13-starlight-full.jpeg",
        "/images/iphone-13-midnight-camera.jpeg",
        "/images/iphone-13-starlight-camera.jpeg",
        "/images/iphone-13-midnight-angled.jpeg",
        "/images/iphone-13-starlight-angled.jpeg",
      ],
      colorOptions: [
        {
          name: "Midnight",
          value: "midnight",
          image: "/images/iphone-13-midnight-full.jpeg",
          images: [
            "/images/iphone-13-midnight-full.jpeg",
            "/images/iphone-13-midnight-camera.jpeg",
            "/images/iphone-13-midnight-angled.jpeg",
          ],
        },
        {
          name: "Starlight",
          value: "starlight",
          image: "/images/iphone-13-starlight-full.jpeg",
          images: [
            "/images/iphone-13-starlight-full.jpeg",
            "/images/iphone-13-starlight-camera.jpeg",
            "/images/iphone-13-starlight-angled.jpeg",
          ],
        },
      ],
      storageOptions: ["128GB", "256GB", "512GB"],
      storagePrices: { "128GB": 12999, "256GB": 15999, "512GB": 21999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A15 Bionic",
        Camera: "12MP Main, 12MP Ultra Wide",
        Battery: "Up to 19 hours video playback",
        Storage: "128GB, 256GB, 512GB",
      },
      inStock: true,
      stockCount: 20,
    },
    {
      id: "iphone-12",
      name: "iPhone 12",
      brand: "Apple",
      category: "phone",
      price: 10999,
      rating: 4.3,
      reviews: 789,
      description: "iPhone 12 with A14 Bionic chip and 5G capability.",
      image: "/placeholder.svg?height=400&width=400",
      storageOptions: ["64GB", "128GB", "256GB"],
      storagePrices: { "64GB": 10999, "128GB": 12999, "256GB": 17999 },
      specifications: {
        Display: "6.1-inch Super Retina XDR",
        Chip: "A14 Bionic",
        Camera: "12MP Main, 12MP Ultra Wide",
        Battery: "Up to 17 hours video playback",
        Storage: "64GB, 128GB, 256GB",
      },
      inStock: true,
      stockCount: 15,
    },
    {
      id: "iphone-11",
      name: "iPhone 11",
      brand: "Apple",
      category: "phone",
      price: 8999,
      rating: 4.2,
      reviews: 934,
      description: "iPhone 11 with A13 Bionic chip and dual-camera system.",
      image: "/placeholder.svg?height=400&width=400",
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
      id: "iphone-xr",
      name: "iPhone XR",
      brand: "Apple",
      category: "phone",
      price: 6999,
      rating: 4.1,
      reviews: 567,
      description: "iPhone XR with A12 Bionic chip and single-camera system.",
      image: "/placeholder.svg?height=400&width=400",
      storageOptions: ["64GB", "128GB", "256GB"],
      storagePrices: { "64GB": 6999, "128GB": 8999, "256GB": 12999 },
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
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
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
      id: 4,
      name: "Adidas Ultraboost 22",
      brand: "Adidas",
      category: "shoes",
      price: 3299,
      rating: 4.7,
      reviews: 156,
      description:
        "Experience unparalleled comfort with the Adidas Ultraboost 22. Featuring responsive BOOST midsole technology and a Primeknit upper for adaptive support.",
      image: "/placeholder.svg?height=400&width=400",
      sizes: ["UK 2", "UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
      specifications: {
        "Upper Material": "Primeknit",
        Midsole: "BOOST Technology",
        Outsole: "Continental Rubber",
        Weight: "320g (UK 8)",
        Drop: "10mm",
      },
      inStock: true,
      stockCount: 45,
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
  ]

  const product = products.find((p) => String(p.id) === String(params.id))

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

  const handleAddToCart = () => {
    let variant = ""
    if (product.category === "shoes" && selectedSize) {
      variant = selectedSize
    } else if (product.storageOptions && selectedStorage) {
      variant = selectedStorage
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      variant: variant,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Blue promotional banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Get the Fastest delivery for Free. Shop online at RKDS Holdings!
      </div>

      <nav className="bg-black text-white sticky top-0 z-50 overflow-visible">
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
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Search className="mr-2 h-5 w-5 text-green-400" />
                            Explore iPhone
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Search className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/shop?category=iphones"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  Explore iPhone
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">Explore the world of iPhone.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Settings className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/shop/compare"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  Compare iPhone
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">Find the perfect iPhone for your needs.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                              <Tool className="h-5 w-5 mt-1 text-gray-400" />
                              <div>
                                <Link
                                  href="/repairs?service=iphone"
                                  className="hover:text-gray-300 transition-colors font-medium block"
                                >
                                  iPhone Repairs
                                </Link>
                                <p className="text-gray-400 text-xs mt-1">Professional repair services.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  iPad <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "ipad" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                        <Tablet className="mr-2 h-5 w-5 text-purple-400" />
                        Shop iPad Range
                      </h4>
                      <ul className="space-y-4 text-sm">
                        <li className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-800 px-3 rounded transition-colors">
                          <div className="flex items-center">
                            <Cpu className="mr-2 h-4 w-4 text-gray-400" />
                            <Link href="/shop/ipad-pro-m4" className="hover:text-gray-300 transition-colors">
                              iPad Pro | Apple M4
                            </Link>
                          </div>
                          <span className="text-gray-400 font-medium">R17,999</span>
                        </li>
                        <li className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-800 px-3 rounded transition-colors">
                          <div className="flex items-center">
                            <Cpu className="mr-2 h-4 w-4 text-gray-400" />
                            <Link href="/shop/ipad-air-m3" className="hover:text-gray-300 transition-colors">
                              iPad Air | Apple M3
                            </Link>
                          </div>
                          <span className="text-gray-400 font-medium">R10,999</span>
                        </li>
                        <li className="flex items-center justify-between py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                          <div className="flex items-center">
                            <Tablet className="mr-2 h-4 w-4 text-gray-400" />
                            <Link href="/shop/ipad-a16" className="hover:text-gray-300 transition-colors">
                              iPad | A16 Chip
                            </Link>
                          </div>
                          <span className="text-gray-400 font-medium">R5,999</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                          <Shield className="h-4 w-4 text-gray-400" />
                          <Link
                            href="/shop?category=ipad-accessories"
                            className="text-sm hover:text-gray-300 transition-colors"
                          >
                            iPad Accessories
                          </Link>
                        </div>
                      </div>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  AirPods <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "airpods" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                        <Headphones className="mr-2 h-5 w-5 text-blue-400" />
                        AirPods Collection
                      </h4>
                      <ul className="space-y-4 text-sm">
                        <li className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-800 px-3 rounded transition-colors">
                          <div className="flex items-center">
                            <Headphones className="mr-2 h-4 w-4 text-gray-400" />
                            <Link href="/shop/airpods-pro" className="hover:text-gray-300 transition-colors">
                              Apple AirPods Pro
                            </Link>
                          </div>
                          <span className="text-gray-400">R3,999</span>
                        </li>
                        <li className="flex items-center justify-between py-3 hover:bg-gray-800 px-3 rounded transition-colors">
                          <div className="flex items-center">
                            <Bluetooth className="mr-2 h-4 w-4 text-gray-400" />
                            <Link href="/shop/airpods-pro-2nd-gen" className="hover:text-gray-300 transition-colors">
                              AirPods Pro (2nd Gen)
                            </Link>
                          </div>
                          <span className="text-gray-400">R1,999</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                            <Settings className="h-4 w-4 text-gray-400" />
                            <Link
                              href="/shop/airpods-compare"
                              className="text-sm hover:text-gray-300 transition-colors"
                            >
                              Compare AirPods
                            </Link>
                          </div>
                          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                            <Circle className="h-4 w-4 text-gray-400" />
                            <Link
                              href="/shop/airpods-accessories"
                              className="text-sm hover:text-gray-300 transition-colors"
                            >
                              AirPods Accessories
                            </Link>
                          </div>
                        </div>
                      </div>
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
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  Accessories <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "accessories" && (
                  <div className="absolute top-full left-0 w-[600px] bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Star className="mr-2 h-5 w-5 text-yellow-400" />
                            iPhone Accessories
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Shield className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/privacy-screen-protector" className="flex-1">
                                Privacy Screen Protector
                              </Link>
                              <span className="text-gray-400 text-xs">R129-R699</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Smartphone className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/clear-iphone-case" className="flex-1">
                                Clear iPhone Case
                              </Link>
                              <span className="text-gray-400 text-xs">R149-R499</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Shield className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/silicone-case" className="flex-1">
                                Liquid Silicone Case
                              </Link>
                              <span className="text-gray-400 text-xs">R299-R899</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 mt-6 text-white text-lg flex items-center">
                            <Headphones className="mr-2 h-5 w-5 text-blue-400" />
                            Audio & Speakers
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Headphones className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/airpods-pro" className="flex-1">
                                AirPods Pro
                              </Link>
                              <span className="text-gray-400 text-xs">R3,999</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                            <Zap className="mr-2 h-5 w-5 text-green-400" />
                            Wireless Chargers
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Zap className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/magsafe-charger-1m" className="flex-1">
                                MagSafe Charger 1m
                              </Link>
                              <span className="text-gray-400 text-xs">R799</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Zap className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/magsafe-charger" className="flex-1">
                                MagSafe Charger
                              </Link>
                              <span className="text-gray-400 text-xs">R599</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 mt-6 text-white text-lg flex items-center">
                            <Battery className="mr-2 h-5 w-5 text-orange-400" />
                            Cables & Chargers
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Battery className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/20w-fast-charger" className="flex-1">
                                20W Fast Charger
                              </Link>
                              <span className="text-gray-400 text-xs">R119</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Cable className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/iphone-cable" className="flex-1">
                                iPhone Cable
                              </Link>
                              <span className="text-gray-400 text-xs">R79</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Battery className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/macbook-charger-60w" className="flex-1">
                                60W MacBook Charger
                              </Link>
                              <span className="text-gray-400 text-xs">R449</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold mb-4 mt-6 text-white text-lg flex items-center">
                            <Tablet className="mr-2 h-5 w-5 text-purple-400" />
                            iPad Accessories
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Shield className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/ipad-screen-protector" className="flex-1">
                                iPad Screen Protector
                              </Link>
                              <span className="text-gray-400 text-xs">R199</span>
                            </li>
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Tablet className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/ipad-case" className="flex-1">
                                iPad Case
                              </Link>
                              <span className="text-gray-400 text-xs">R399</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 mt-6 text-white text-lg flex items-center">
                            <Watch className="mr-2 h-5 w-5 text-red-400" />
                            Watch Accessories
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <Watch className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/watch-bands" className="flex-1">
                                Watch Bands & Straps
                              </Link>
                              <span className="text-gray-400 text-xs">R299</span>
                            </li>
                          </ul>

                          <h4 className="font-bold mb-4 mt-6 text-white text-lg flex items-center">
                            <HardDrive className="mr-2 h-5 w-5 text-cyan-400" />
                            Storage
                          </h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-center py-1 hover:text-gray-300 transition-colors">
                              <HardDrive className="mr-2 h-4 w-4 text-gray-400" />
                              <Link href="/shop/external-storage" className="flex-1">
                                External Storage
                              </Link>
                              <span className="text-gray-400 text-xs">From R599</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sneakers */}
              <Link
                href="/sneakers"
                className="text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap"
              >
                Sneakers
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-white hover:text-gray-300 font-medium transition-colors py-2 whitespace-nowrap">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 w-80 bg-black text-white shadow-2xl border border-gray-700 z-[100] transition-all duration-200">
                    <div className="p-8 pt-6">
                      <h4 className="font-bold mb-4 text-white text-lg flex items-center">
                        <Wrench className="mr-2 h-5 w-5 text-orange-400" />
                        Repair Services
                      </h4>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center py-2 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Phone className="mr-3 h-4 w-4 text-gray-400" />
                          <Link href="/repairs?service=iphone" className="hover:text-gray-300 transition-colors flex-1">
                            iPhone Repairs
                          </Link>
                        </li>
                        <li className="flex items-center py-2 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Monitor className="mr-3 h-4 w-4 text-gray-400" />
                          <Link href="/repairs?service=laptop" className="hover:text-gray-300 transition-colors flex-1">
                            Laptop Repairs
                          </Link>
                        </li>
                        <li className="flex items-center py-2 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Camera className="mr-3 h-4 w-4 text-gray-400" />
                          <Link href="/repairs?service=screen" className="hover:text-gray-300 transition-colors flex-1">
                            Screen Replacements
                          </Link>
                        </li>
                        <li className="flex items-center py-2 hover:bg-gray-800 px-3 rounded transition-colors">
                          <Battery className="mr-3 h-4 w-4 text-gray-400" />
                          <Link
                            href="/repairs?service=battery"
                            className="hover:text-gray-300 transition-colors flex-1"
                          >
                            Battery Replacements
                          </Link>
                        </li>
                      </ul>

                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <div className="bg-blue-900/30 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <MapPin className="mr-2 h-4 w-4 text-blue-400" />
                            <span className="font-medium text-blue-400">House Call Service</span>
                          </div>
                          <p className="text-xs text-gray-300 mb-3">
                            We come to you! Professional repairs at your location.
                          </p>
                          <button
                            onClick={() => handleButtonClick({ id: "house-call", type: "service", category: "repair" })}
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                          >
                            Book Now - R49
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/contact" className="text-white hover:text-gray-300 transition-colors py-2 whitespace-nowrap">
                Support
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                className="lg:hidden text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                  ></span>
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                  ></span>
                  <span
                    className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                  ></span>
                </div>
              </button>

              {/* Right Side Icons */}
              <button className="text-white hover:text-gray-300 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              {authState.user ? (
                <Link href="/account" className="text-white hover:text-gray-300 transition-colors">
                  <User className="h-5 w-5" />
                </Link>
              ) : (
                <Link href="/auth/login" className="text-white hover:text-gray-300 transition-colors">
                  <User className="h-5 w-5" />
                </Link>
              )}
              <Link href="/cart" className="text-white hover:text-gray-300 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                {cartState.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartState.itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-16 bg-black z-50 overflow-y-auto">
              <div className="px-4 py-6 space-y-6">
                <div className="space-y-4">
                  <Link
                    href="/"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Home className="mr-3 h-5 w-5" />
                      Home
                    </div>
                  </Link>

                  <div className="border-b border-gray-800">
                    <button
                      className="w-full text-left text-white hover:text-gray-300 text-lg font-medium py-3 flex items-center justify-between"
                      onClick={() => setMobileExpandedSection(mobileExpandedSection === "iphone" ? null : "iphone")}
                    >
                      <div className="flex items-center">
                        <Smartphone className="mr-3 h-5 w-5" />
                        iPhone
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileExpandedSection === "iphone" ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileExpandedSection === "iphone" && (
                      <div className="pl-8 pb-4 space-y-3">
                        <div className="text-sm text-gray-400 font-medium mb-3">Shop iPhone Range</div>
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
                          <div key={iphone.id}>
                            <button
                              className="w-full text-left text-white hover:text-gray-300 py-2 flex items-center justify-between"
                              onClick={() =>
                                setMobileExpandedIPhone(mobileExpandedIPhone === iphone.id ? null : iphone.id)
                              }
                            >
                              <div className="flex items-center">
                                <Smartphone className="mr-2 h-4 w-4" />
                                <span className="text-sm">{iphone.name}</span>
                                <span className="text-xs text-gray-400 ml-2">From {iphone.price}</span>
                              </div>
                              <ChevronDown
                                className={`h-3 w-3 transition-transform ${mobileExpandedIPhone === iphone.id ? "rotate-180" : ""}`}
                              />
                            </button>

                            {mobileExpandedIPhone === iphone.id && (
                              <div className="pl-6 py-2 space-y-2">
                                <Link
                                  href={`/shop/${iphone.id}?storage=128gb`}
                                  className="block text-xs text-gray-300 hover:text-white py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  128GB - {iphone.price}
                                </Link>
                                <Link
                                  href={`/shop/${iphone.id}?storage=256gb`}
                                  className="block text-xs text-gray-300 hover:text-white py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  256GB - R
                                  {(
                                    Number.parseInt(iphone.price.replace("R", "").replace(",", "")) + 3000
                                  ).toLocaleString()}
                                </Link>
                                <Link
                                  href={`/shop/${iphone.id}?storage=512gb`}
                                  className="block text-xs text-gray-300 hover:text-white py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  512GB - R
                                  {(
                                    Number.parseInt(iphone.price.replace("R", "").replace(",", "")) + 8000
                                  ).toLocaleString()}
                                </Link>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/sneakers"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <ShoppingBag className="mr-3 h-5 w-5" />
                      Sneakers
                    </div>
                  </Link>

                  <Link
                    href="/contact"
                    className="block text-white hover:text-gray-300 text-lg font-medium py-3 border-b border-gray-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Phone className="mr-3 h-5 w-5" />
                      Support
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Product Details */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
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
