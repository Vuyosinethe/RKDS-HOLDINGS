"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Star, ShoppingCart, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

const sneakers = [
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
    image: "/images/nike-air-max-95-pair-front.jpeg",
    images: [
      "/images/nike-air-max-95-pair-front.jpeg",
      "/images/nike-air-max-95-side-profile.jpeg",
      "/images/nike-air-max-95-heel-view.jpeg",
      "/images/nike-air-max-95-top-view.jpeg",
      "/images/nike-air-max-95-rear-view.jpeg",
      "/images/nike-air-max-95-sole-bottom.jpeg",
      "/images/nike-air-max-95-sole-white.jpeg",
      "/images/nike-air-max-95-side-black.jpeg",
      "/images/nike-air-max-95-detail-branding.jpeg",
      "/images/nike-air-max-95-heel-detail.jpeg",
      "/images/nike-air-max-95-additional.jpeg", // Added additional Nike Air Max 95 image
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Black/Grey/Gold",
      "Upper Material": "Leather and synthetic",
      Sole: "Rubber outsole with Air Max cushioning",
      Fit: "True to size",
      "Style Code": "DM9104-001",
    },
    inStock: true,
    stockCount: 15,
  },
  {
    id: "nike-air-max-portal-cream",
    name: "Nike Air Max Portal",
    brand: "Nike",
    category: "shoes",
    price: 3299,
    rating: 4.7,
    reviews: 89,
    description:
      "The Nike Air Max Portal features a futuristic design with visible Air Max cushioning and gradient mesh construction. Available in vibrant orange/pink and neon green colorways with distinctive sole patterns and modern aesthetic.",
    image: "/images/nike-air-max-portal-orange-pink-side.jpeg",
    images: [
      "/images/nike-air-max-portal-orange-pink-detail.jpeg",
      "/images/nike-air-max-portal-orange-pink-side.jpeg",
      "/images/nike-air-max-portal-orange-pink-top-view.jpeg",
      "/images/nike-air-max-portal-orange-pink-opposite-side.jpeg",
      "/images/nike-air-max-portal-pink-sole-bottom.jpeg",
      "/images/nike-air-max-portal-orange-pink-lacing-detail.jpeg",
      "/images/nike-air-max-portal-orange-pink-rear-view.jpeg",
      "/images/nike-air-max-portal-orange-pink-pair-front.jpeg",
      "/images/nike-air-max-portal-neon-green-lacing-detail.jpeg",
      "/images/nike-air-max-portal-neon-green-air-detail.jpeg",
      "/images/nike-air-max-portal-neon-green-pair-front.jpeg",
      "/images/nike-air-max-portal-neon-green-top-view.jpeg",
      "/images/nike-air-max-portal-neon-green-side.jpeg",
      "/images/nike-air-max-portal-neon-green-rear-view.jpeg",
      "/images/nike-air-max-portal-neon-green-sole-bottom.jpeg",
      "/images/nike-air-max-portal-neon-green-opposite-side.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Orange/Pink Gradient & Neon Green/Black",
      "Upper Material": "Gradient mesh and synthetic leather",
      Sole: "Rubber outsole with Air Max Portal cushioning",
      Fit: "True to size",
      "Style Code": "DX1234-800/DX1234-300",
    },
    inStock: true,
    stockCount: 12,
  },
  {
    id: "nike-air-max-portal-original",
    name: "Nike Air Max Portal",
    brand: "Nike",
    category: "shoes",
    price: 2999,
    rating: 4.6,
    reviews: 156,
    description:
      "The original Nike Air Max Portal combines futuristic design with classic comfort. Features clean cream and white colorways with visible Air Max cushioning technology and modern silhouette for everyday wear.",
    image: "/images/nike-air-max-portal-original-side.jpeg",
    images: [
      "/images/nike-air-max-portal-original-air-detail.jpeg",
      "/images/nike-air-max-portal-original-top-view.jpeg",
      "/images/nike-air-max-portal-original-side.jpeg",
      "/images/nike-air-max-portal-original-lacing-detail.jpeg",
      "/images/nike-air-max-portal-original-rear-view.jpeg",
      "/images/nike-air-max-portal-original-opposite-side.jpeg",
      "/images/nike-air-max-portal-original-pair-front.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Cream/White & Off-White/Beige",
      "Upper Material": "Premium mesh and synthetic leather",
      Sole: "Rubber outsole with Air Max Portal cushioning",
      Fit: "True to size",
      "Style Code": "DX1234-100/DX1234-200",
    },
    inStock: true,
    stockCount: 18,
  },
  {
    id: "air-jordan-low-white-gray",
    name: "Air Jordan Low",
    brand: "Jordan",
    category: "shoes",
    price: 3599,
    rating: 4.9,
    reviews: 156,
    description:
      "The Air Jordan Low combines classic basketball heritage with modern comfort, featuring premium leather construction and iconic Jordan styling.",
    image: "/images/air-jordan-low-side-profile.jpeg",
    images: [
      "/images/air-jordan-low-side-profile.jpeg",
      "/images/air-jordan-low-top-view.jpeg",
      "/images/air-jordan-low-heel-detail.jpeg",
      "/images/air-jordan-low-sole-bottom.jpeg",
      "/images/air-jordan-low-lacing-detail.jpeg",
      "/images/air-jordan-low-heel-logo.jpeg",
      "/images/air-jordan-low-rear-view.jpeg",
      "/images/air-jordan-low-top-down.jpeg",
      "/images/air-jordan-low-construction-detail.jpeg",
      "/images/air-jordan-low-full-side.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "White/Gray",
      "Upper Material": "Premium leather",
      Sole: "Rubber outsole with Air cushioning",
      Fit: "True to size",
      "Style Code": "AJ5678-102",
    },
    inStock: true,
    stockCount: 8,
  },
  {
    id: "air-jordan-low-black-orange",
    name: "Air Jordan Low",
    brand: "Jordan",
    category: "shoes",
    price: 3799,
    rating: 4.8,
    reviews: 98,
    description:
      "The Air Jordan Low in Black/Orange delivers bold street style with premium leather construction and iconic Jordan heritage details.",
    image: "/images/air-jordan-low-black-orange-side.jpeg",
    images: [
      "/images/air-jordan-low-black-orange-side.jpeg",
      "/images/air-jordan-low-black-orange-profile.jpeg",
      "/images/air-jordan-low-black-orange-rear.jpeg",
      "/images/air-jordan-low-black-orange-lacing.jpeg",
      "/images/air-jordan-low-black-orange-sole.jpeg",
      "/images/air-jordan-low-black-orange-pair.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Black/Orange/White",
      "Upper Material": "Premium leather",
      Sole: "Rubber outsole with Air cushioning",
      Fit: "True to size",
      "Style Code": "AJ5678-008",
    },
    inStock: true,
    stockCount: 12,
  },
  {
    id: "air-jordan-low-gray-white",
    name: "Air Jordan Low",
    brand: "Jordan",
    category: "shoes",
    price: 3499,
    rating: 4.7,
    reviews: 67,
    description:
      "The Air Jordan Low in Gray/White offers a clean, versatile colorway with premium materials and classic basketball-inspired design.",
    image: "/images/air-jordan-low-gray-white-side.jpeg",
    images: [
      "/images/air-jordan-low-gray-white-side.jpeg",
      "/images/air-jordan-low-gray-white-rear.jpeg",
      "/images/air-jordan-low-gray-white-sole.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Gray/White",
      "Upper Material": "Premium leather",
      Sole: "Rubber outsole with Air cushioning",
      Fit: "True to size",
      "Style Code": "AJ5678-020",
    },
    inStock: true,
    stockCount: 15,
  },
  {
    id: "nike-shox-tl-silver",
    name: "Nike Shox TL",
    brand: "Nike",
    category: "shoes",
    price: 4299,
    rating: 4.6,
    reviews: 203,
    description:
      "The Nike Shox TL returns with its iconic spring-loaded heel columns and futuristic design. Experience responsive cushioning and bold style that defined early 2000s sneaker culture.",
    image: "/images/nike-shox-tl-side-profile.jpeg",
    images: [
      "/images/nike-shox-tl-side-profile.jpeg",
      "/images/nike-shox-tl-pair-silver.jpeg",
      "/images/nike-shox-tl-top-view.jpeg",
      "/images/nike-shox-tl-rear-view.jpeg",
      "/images/nike-shox-tl-front-black.jpeg",
      "/images/nike-shox-tl-side-black.jpeg",
      "/images/nike-shox-tl-black-profile.jpeg",
      "/images/nike-shox-tl-sole-mint.jpeg",
      "/images/nike-shox-tl-sole-black-yellow.jpeg",
      "/images/nike-shox-tl-all-black-side.jpeg",
      "/images/nike-shox-tl-black-yellow-rear.jpeg",
      "/images/nike-shox-tl-all-black-pair.jpeg",
      "/images/nike-shox-tl-all-black-profile.jpeg",
      "/images/nike-shox-tl-all-black-top.jpeg",
      "/images/nike-shox-tl-all-black-sole.jpeg",
      "/images/nike-shox-tl-black-yellow-top.jpeg",
      "/images/nike-shox-tl-black-yellow-pair.jpeg",
      "/images/nike-shox-tl-black-yellow-front.jpeg",
      "/images/nike-shox-tl-silver-side.jpeg",
      "/images/nike-shox-tl-black-rear-pair.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Metallic Silver/Black",
      "Upper Material": "Synthetic leather and mesh",
      Sole: "Rubber outsole with Shox columns",
      Fit: "True to size",
      "Style Code": "AR3566-003",
    },
    inStock: true,
    stockCount: 18,
  },
  {
    id: "nike-air-force-1-white",
    name: "Nike Air Force 1",
    brand: "Nike",
    category: "shoes",
    price: 2899,
    rating: 4.9,
    reviews: 342,
    description:
      "The Nike Air Force 1 '07 is the classic basketball shoe that's been a streetwear staple for decades. Featuring premium leather construction and iconic design details.",
    image: "/images/nike-air-force-1-white-side.jpeg",
    images: [
      "/images/nike-air-force-1-white-side.jpeg",
      "/images/nike-air-force-1-white-top.jpeg",
      "/images/nike-air-force-1-black-detail.jpeg",
      "/images/nike-air-force-1-white-detail.jpeg",
      "/images/nike-air-force-1-white-rear.jpeg",
      "/images/nike-air-force-1-white-profile.jpeg",
      "/images/nike-air-force-1-white-pair.jpeg",
      "/images/nike-air-force-1-lifestyle.jpeg",
      "/images/nike-air-force-1-black-rear.jpeg",
      "/images/nike-air-force-1-black-detail-close.jpeg",
      "/images/nike-air-force-1-black-side.jpeg",
      "/images/nike-air-force-1-black-lifestyle.jpeg",
      "/images/nike-air-force-1-white-sole-detail.jpeg",
      "/images/nike-air-force-1-black-sole.jpeg",
      "/images/nike-air-force-1-black-profile.jpeg",
      "/images/nike-air-force-1-black-top.jpeg",
      "/images/nike-air-force-1-black-pair.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "White/White",
      "Upper Material": "Premium leather",
      Sole: "Rubber outsole with Air cushioning",
      Fit: "True to size",
      "Style Code": "315122-111",
    },
    inStock: true,
    stockCount: 25,
  },
  {
    id: "new-balance-9060-gray-pink",
    name: "New Balance 9060",
    brand: "New Balance",
    category: "shoes",
    price: 3899,
    rating: 4.7,
    reviews: 87,
    description:
      "The New Balance 9060 reinterprets familiar 99X elements with a warped sensibility. Inspired by the visible tech aesthetic of the Y2K era, the 9060 is a new expression of the refined style and innovation-led design of the original 990.",
    image: "/images/new-balance-9060-gray-blue-side.jpeg",
    images: [
      "/images/new-balance-9060-gray-blue-side.jpeg",
      "/images/new-balance-9060-pink-pair.jpeg",
      "/images/new-balance-9060-pink-top.jpeg",
      "/images/new-balance-9060-gray-detail.jpeg",
      "/images/new-balance-9060-gray-sole.jpeg",
      "/images/new-balance-9060-pink-sole.jpeg",
      "/images/new-balance-9060-gray-top.jpeg",
      "/images/new-balance-9060-pink-rear.jpeg",
      "/images/new-balance-9060-pink-side.jpeg",
      "/images/new-balance-9060-pink-side.jpeg", // Fixed view 10 by replacing broken pink-profile.jpeg with existing pink-side.jpeg
      "/images/new-balance-9060-black-top.jpeg",
      "/images/new-balance-9060-light-gray-side.jpeg",
      "/images/new-balance-9060-black-sole.jpeg",
      "/images/new-balance-9060-black-rear.jpeg",
      "/images/new-balance-9060-light-gray-pair.jpeg",
      "/images/new-balance-9060-light-gray-sole.jpeg",
      "/images/new-balance-9060-black-side.jpeg",
      "/images/new-balance-9060-light-gray-profile.jpeg",
      "/images/new-balance-9060-light-gray-rear.jpeg",
      "/images/new-balance-9060-light-gray-top.jpeg",
      "/images/new-balance-9060-black-pair-front.jpeg",
      "/images/new-balance-9060-light-gray-rear-view.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Gray/Blue & Pink/Rose",
      "Upper Material": "Mesh and suede",
      Sole: "ABZORB and SBS cushioning",
      Fit: "True to size",
      "Style Code": "M9060GRY/M9060PNK",
    },
    inStock: true,
    stockCount: 14,
  },
  {
    id: "nike-air-max-plus-drift",
    name: "Nike Air Max Plus 'Drift'",
    brand: "Nike",
    category: "shoes",
    price: 4399,
    rating: 4.7,
    reviews: 58,
    description:
      "The Nike Air Max Plus 'Drift' features a sleek black upper with striking yellow mesh panel accents throughout. This bold colorway combines the classic Air Max Plus silhouette with modern technical aesthetics and premium cushioning technology.",
    image: "/images/nike-air-max-plus-drift-side.jpeg",
    images: [
      "/images/nike-air-max-plus-drift-side.jpeg",
      "/images/nike-air-max-plus-drift-pair.jpeg",
      "/images/nike-air-max-plus-drift-rear-view.jpeg",
      "/images/nike-air-max-plus-drift-detail.jpeg",
      "/images/nike-air-max-plus-drift-top-view.jpeg",
      "/images/nike-air-max-plus-drift-midsole-detail.jpeg",
      "/images/nike-air-max-plus-drift-opposite-side.jpeg",
      "/images/nike-air-max-plus-drift-sole.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Black/Yellow/Dark Gray",
      "Upper Material": "Synthetic leather and mesh",
      Sole: "Rubber outsole with Air Max cushioning",
      Fit: "True to size",
      "Style Code": "DM7654-001",
    },
    inStock: true,
    stockCount: 15,
  },
  {
    id: "nike-air-max-plus-3",
    name: "Nike Air Max Plus 3",
    brand: "Nike",
    category: "shoes",
    price: 4199,
    rating: 4.8,
    reviews: 127,
    description:
      "The Nike Air Max Plus 3 combines the iconic wavy design lines with modern 'TUNED AIR' technology. Available in classic black and clean white colorways, featuring distinctive construction details and visible Air Max cushioning for superior comfort and style.",
    image: "/images/nike-air-max-plus-3-black-side.jpeg",
    images: [
      "/images/nike-air-max-plus-3-black-side.jpeg",
      "/images/nike-air-max-plus-3-black-pair.jpeg",
      "/images/nike-air-max-plus-3-black-rear.jpeg",
      "/images/nike-air-max-plus-3-black-detail.jpeg",
      "/images/nike-air-max-plus-3-black-top.jpeg",
      "/images/nike-air-max-plus-3-black-sole.jpeg",
      "/images/nike-air-max-plus-3-white-side.jpeg",
      "/images/nike-air-max-plus-3-white-detail.jpeg",
      "/images/nike-air-max-plus-3-white-air-detail.jpeg",
      "/images/nike-air-max-plus-3-white-construction.jpeg",
      "/images/nike-air-max-plus-3-white-rear.jpeg",
      "/images/nike-air-max-plus-3-white-pair.jpeg",
      "/images/nike-air-max-plus-3-white-top-view.jpeg",
      "/images/nike-air-max-plus-3-white-sole-bottom.jpeg",
      "/images/nike-air-max-plus-3-black-air-detail.jpeg",
      "/images/nike-air-max-plus-3-white-profile.jpeg",
      "/images/nike-air-max-plus-3-white-angled-pair.jpeg",
      "/images/nike-air-max-plus-3-black-silhouette.jpeg",
      "/images/nike-air-max-plus-3-white-opposite-side.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Black/Yellow & White/Light Gray",
      "Upper Material": "Synthetic leather and mesh",
      Sole: "Rubber with Tuned Air cushioning",
      Fit: "True to size",
      "Style Code": "CJ0601-001/CJ0601-100",
    },
    inStock: true,
    stockCount: 18,
  },
  {
    id: "nike-air-max-plus-original",
    name: "Nike Air Max Plus",
    brand: "Nike",
    category: "shoes",
    price: 3999,
    rating: 4.9,
    reviews: 234,
    description:
      "The original Nike Air Max Plus features the iconic wavy design lines and distinctive mesh construction. Available in classic black and clean white/silver colorways, this legendary silhouette delivers premium comfort with visible Air Max cushioning technology.",
    image: "/images/nike-air-max-plus-black-side.jpeg",
    images: [
      "/images/nike-air-max-plus-black-side.jpeg",
      "/images/nike-air-max-plus-white-silver-side.jpeg",
      "/images/nike-air-max-plus-black-pair.jpeg",
      "/images/nike-air-max-plus-black-rear.jpeg",
      "/images/nike-air-max-plus-white-silver-profile.jpeg",
      "/images/nike-air-max-plus-black-opposite-side.jpeg",
      "/images/nike-air-max-plus-black-detail.jpeg",
      "/images/nike-air-max-plus-sole-bottom.jpeg",
      "/images/nike-air-max-plus-black-silhouette.jpeg",
      "/images/nike-air-max-plus-black-upper-detail.jpeg",
      "/images/nike-air-max-plus-white-silver-pair.jpeg",
      "/images/nike-air-max-plus-white-top-view.jpeg",
      "/images/nike-air-max-plus-white-rear-view.jpeg",
      "/images/nike-air-max-plus-pink-magenta-top-view.jpeg",
      "/images/nike-air-max-plus-pink-magenta-side.jpeg",
      "/images/nike-air-max-plus-pink-magenta-sole-bottom.jpeg",
      "/images/nike-air-max-plus-white-detail-close.jpeg",
      "/images/nike-air-max-plus-white-lacing-detail.jpeg",
      "/images/nike-air-max-plus-pink-magenta-opposite-side.jpeg",
      "/images/nike-air-max-plus-black-artistic-silhouette.jpeg",
      "/images/nike-air-max-plus-black-sole-detail.jpeg",
      "/images/nike-air-max-plus-pink-magenta-pair-front.jpeg",
      "/images/nike-air-max-plus-pink-magenta-detail-close.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Black/Yellow & White/Silver/Orange",
      "Upper Material": "Synthetic leather and mesh",
      Sole: "Rubber outsole with Air Max cushioning",
      Fit: "True to size",
      "Style Code": "DJ4956-001/DJ4956-100",
    },
    inStock: true,
    stockCount: 22,
  },
  {
    id: "nike-dunk-low-next-nature",
    name: "Nike Dunk Low Next Nature",
    brand: "Nike",
    category: "shoes",
    price: 2699,
    rating: 4.6,
    reviews: 89,
    description:
      "The Nike Dunk Low Next Nature combines classic basketball heritage with sustainable materials. Available in soft pink and clean grey colorways, featuring premium leather construction with perforated toe boxes and distinctive floral insole patterns.",
    image: "/images/nike-dunk-low-next-nature-pink-side.jpeg",
    images: [
      "/images/nike-dunk-low-next-nature-pink-detail.jpeg",
      "/images/nike-dunk-low-next-nature-grey-rear.jpeg",
      "/images/nike-dunk-low-next-nature-pink-top-view.jpeg",
      "/images/nike-dunk-low-next-nature-grey-detail.jpeg",
      "/images/nike-dunk-low-next-nature-pink-side.jpeg",
      "/images/nike-dunk-low-next-nature-pink-sole-bottom.jpeg",
      "/images/nike-dunk-low-next-nature-pink-opposite-side.jpeg",
      "/images/nike-dunk-low-next-nature-grey-side.jpeg",
      "/images/nike-dunk-low-next-nature-grey-sole-detail.jpeg",
      "/images/nike-dunk-low-next-nature-pink-sole-detail.jpeg",
      "/images/nike-dunk-low-next-nature-grey-profile.jpeg",
      "/images/nike-dunk-low-next-nature-pink-profile.jpeg",
      "/images/nike-dunk-low-next-nature-pink-rear-view.jpeg",
      "/images/nike-dunk-low-next-nature-grey-opposite-side.jpeg",
      "/images/nike-dunk-low-next-nature-grey-top-view.jpeg",
      "/images/nike-dunk-low-next-nature-grey-sole-bottom.jpeg",
    ],
    sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
    specifications: {
      Colorway: "Pink/White & Grey/White",
      "Upper Material": "Premium leather with sustainable materials",
      Sole: "Rubber outsole with classic Dunk tread pattern",
      Fit: "True to size",
      "Style Code": "DV7789-600/DV7789-020",
    },
    inStock: true,
    stockCount: 16,
  },
  {
    id: "nike-air-max-portal-black-white",
    name: "Nike Air Max Portal - Black/White",
    brand: "Nike",
    category: "shoes",
    price: 3199,
    rating: 4.8,
    reviews: 73,
    description:
      "The Nike Air Max Portal in Black/White delivers a striking monochromatic aesthetic with futuristic design elements. Features clean contrast between white upper and black accents, plus an all-white variant, both showcasing visible Air Max cushioning technology.",
    image: "/images/nike-air-max-portal-black-white-side.jpeg",
    images: [
      "/images/nike-air-max-portal-black-white-side.jpeg",
      "/images/nike-air-max-portal-white-sole-bottom.jpeg",
      "/images/nike-air-max-portal-black-white-top-view.jpeg",
      "/images/nike-air-max-portal-black-white-opposite-side.jpeg",
      "/images/nike-air-max-portal-all-white-side.jpeg",
      "/images/nike-air-max-portal-black-white-pair-front.jpeg",
      "/images/nike-air-max-portal-black-white-air-detail.jpeg",
      "/images/nike-air-max-portal-black-sole-bottom.jpeg",
      "/images/nike-air-max-portal-black-white-rear-view.jpeg",
      "/images/nike-air-max-portal-all-white-lacing-detail.jpeg",
      "/images/nike-air-max-portal-all-white-rear-view.jpeg",
      "/images/nike-air-max-portal-all-white-top-view.jpeg",
      "/images/nike-air-max-portal-all-white-side-profile.jpeg",
      "/images/nike-air-max-portal-all-white-air-detail.jpeg",
      "/images/nike-air-max-portal-all-white-pair-front.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Black/White & All-White",
      "Upper Material": "Premium mesh and synthetic leather",
      Sole: "Rubber outsole with Air Max Portal cushioning",
      Fit: "True to size",
      "Style Code": "DX1234-001/DX1234-100",
    },
    inStock: true,
    stockCount: 14,
  },
  {
    id: "nike-air-max-portal-grey-white",
    name: "Nike Air Max Portal - Grey/White",
    brand: "Nike",
    category: "shoes",
    price: 3399,
    rating: 4.7,
    reviews: 45,
    description:
      "The Nike Air Max Portal in Grey/White showcases sophisticated colorway combinations with futuristic design elements. Features premium grey mesh construction with white accents and visible Air Max cushioning technology for ultimate comfort and style.",
    image: "/images/nike-air-max-portal-grey-white-side.jpeg",
    images: [
      "/images/nike-air-max-portal-grey-white-air-detail.jpeg",
      "/images/nike-air-max-portal-grey-white-rear-view.jpeg",
      "/images/nike-air-max-portal-grey-white-side.jpeg",
      "/images/nike-air-max-portal-grey-white-lacing-detail.jpeg",
      "/images/nike-air-max-portal-grey-sole-bottom.jpeg",
      "/images/nike-air-max-portal-grey-white-opposite-side.jpeg",
      "/images/nike-air-max-portal-grey-white-top-view.jpeg",
      "/images/nike-air-max-portal-grey-white-pair-front.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Grey/White",
      "Upper Material": "Premium mesh and synthetic leather",
      Sole: "Rubber outsole with Air Max Portal cushioning",
      Fit: "True to size",
      "Style Code": "DX1234-020",
    },
    inStock: true,
    stockCount: 16,
  },
  {
    id: "nike-air-max-plus",
    name: "Nike Air Max Plus",
    brand: "Nike",
    category: "shoes",
    price: 3899,
    rating: 4.8,
    reviews: 156,
    description:
      "The iconic Nike Air Max Plus features the legendary wavy design lines and distinctive 'Tuned Air' technology. This classic silhouette delivers premium comfort with visible Air Max cushioning and bold styling that defined a generation.",
    image: "/images/nike-air-max-plus-black-pair-rear-view.jpeg",
    images: [
      "/images/nike-air-max-plus-black-side-profile.jpeg",
      "/images/nike-air-max-plus-black-artistic-silhouette.jpeg",
      "/images/nike-air-max-plus-black-pair-rear-view.jpeg",
      "/images/nike-air-max-plus-black-sole-bottom.jpeg",
      "/images/nike-air-max-plus-black-detail-close-up.jpeg",
      "/images/nike-air-max-plus-black-pair-front-view.jpeg",
      "/images/nike-air-max-plus-black-upper-detail.jpeg",
      "/images/nike-air-max-plus-white-side-profile.jpeg",
      "/images/nike-air-max-plus-black-opposite-side.jpeg",
      "/images/nike-air-max-plus-white-pair-front-view.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Black/Yellow",
      "Upper Material": "Synthetic leather and mesh",
      Sole: "Rubber with foam cushioning",
      Fit: "True to size",
      "Style Code": "DJ4956-001",
    },
    inStock: true,
    stockCount: 20,
  },
  {
    id: "nike-p-6000-white",
    name: "Nike P-6000",
    brand: "Nike",
    category: "shoes",
    price: 2799,
    rating: 4.6,
    reviews: 92,
    description:
      "The Nike P-6000 combines retro running aesthetics with modern comfort. Featuring a clean white/silver upper with pink accent details, this versatile sneaker delivers classic 2000s running style with contemporary performance technology and distinctive mesh construction.",
    image: "/images/nike-p-6000-white-silver-side.jpeg",
    images: [
      "/images/nike-p-6000-white-silver-side.jpeg",
      "/images/nike-p-6000-white-silver-pink-pair.jpeg",
      "/images/nike-p-6000-white-silver-opposite-side.jpeg",
      "/images/nike-p-6000-white-silver-pink-top-view.jpeg",
      "/images/nike-p-6000-white-silver-pink-sole-bottom.jpeg",
      "/images/nike-p-6000-white-silver-pink-pair-front.jpeg",
      "/images/nike-p-6000-white-silver-pink-rear-view.jpeg",
      "/images/nike-p-6000-white-silver-detail-close.jpeg",
      "/images/nike-p-6000-white-silver-pink-rear-heel.jpeg",
      "/images/nike-p-6000-white-silver-lacing-detail.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "White/Silver/Pink",
      "Upper Material": "Mesh and synthetic leather",
      Sole: "Rubber with foam cushioning",
      Fit: "True to size",
      "Style Code": "BV1021-100",
    },
    inStock: true,
    stockCount: 18,
  },
  {
    id: "converse-chuck-taylor-all-star-black",
    name: "Converse Chuck Taylor All Star",
    brand: "Converse",
    category: "shoes",
    price: 1899,
    rating: 4.8,
    reviews: 267,
    description:
      "The iconic Converse Chuck Taylor All Star high-top in classic black canvas. Featuring the timeless design with white contrast stitching, cream rubber sole, and the legendary Chuck Taylor All Star branding that has defined street style for generations.",
    image: "/images/converse-chuck-taylor-black-rear-heel-view.jpeg",
    images: [
      "/images/converse-chuck-taylor-black-side-profile.jpeg",
      "/images/converse-chuck-taylor-black-rear-heel-view.jpeg",
      "/images/converse-chuck-taylor-black-sole-bottom.jpeg",
      "/images/converse-chuck-taylor-black-angled-detail.jpeg",
      "/images/converse-chuck-taylor-black-pair-top-view.jpeg",
      "/images/converse-chuck-taylor-black-three-quarter-front.jpeg",
      "/images/converse-chuck-taylor-black-gum-sole-top-view.jpeg",
      "/images/converse-chuck-taylor-black-gum-sole-side-profile.jpeg",
    ],
    sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Black/White",
      "Upper Material": "Canvas",
      Sole: "Rubber with diamond tread pattern",
      Fit: "True to size",
      "Style Code": "M9160C",
    },
    inStock: true,
    stockCount: 24,
  },
  {
    id: "air-jordan-4-travis-scott-cactus-jack",
    name: "Air Jordan 4 Retro 'Travis Scott'",
    brand: "Jordan",
    category: "shoes",
    price: 8999,
    rating: 4.9,
    reviews: 89,
    description:
      "The Air Jordan 4 Retro 'Travis Scott' features a distinctive light blue upper with black speckled details and red accents. This highly coveted collaboration showcases premium materials, unique colorway, and the signature Cactus Jack branding that defines this iconic partnership.",
    image: "/images/air-jordan-4-travis-scott-side-profile.jpeg",
    images: [
      "/images/air-jordan-4-travis-scott-side-profile.jpeg",
      "/images/air-jordan-4-travis-scott-sole-white-bottom.jpeg",
      "/images/air-jordan-4-travis-scott-sole-black-bottom.jpeg",
      "/images/air-jordan-4-travis-scott-rear-heel-view.jpeg",
      "/images/air-jordan-4-travis-scott-pair-rear-view.jpeg",
      "/images/air-jordan-4-travis-scott-pair-front-view.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "University Blue/Black/Varsity Red",
      "Upper Material": "Premium suede and mesh",
      Sole: "Rubber outsole with Air cushioning",
      Fit: "True to size",
      "Style Code": "308497-406",
    },
    inStock: true,
    stockCount: 3,
  },
  {
    id: "air-jordan-4-black-cat",
    name: "Air Jordan 4 Retro 'Black Cat'",
    brand: "Jordan",
    category: "shoes",
    price: 7499,
    rating: 4.9,
    reviews: 156,
    description:
      "The Air Jordan 4 Retro 'Black Cat' features an all-black monochromatic design with premium nubuck leather construction. This iconic colorway showcases the classic Air Jordan 4 silhouette in its purest form, delivering timeless style with visible Air cushioning technology.",
    image: "/images/air-jordan-4-black-cat-side-profile.jpeg",
    images: [
      "/images/air-jordan-4-black-cat-side-profile.jpeg",
      "/images/air-jordan-4-black-cat-three-quarter-front.jpeg",
      "/images/air-jordan-4-black-cat-rear-three-quarter.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Black/Black/Light Graphite",
      "Upper Material": "Premium nubuck leather",
      Sole: "Rubber outsole with Air cushioning",
      Fit: "True to size",
      "Style Code": "CU1110-010",
    },
    inStock: true,
    stockCount: 8,
  },
  {
    id: "air-jordan-1-hyper-royal",
    name: "Air Jordan 1 Retro High 'Hyper Royal'",
    brand: "Jordan",
    category: "shoes",
    price: 4999,
    rating: 4.8,
    reviews: 134,
    description:
      "The Air Jordan 1 Retro High 'Hyper Royal' features a premium light blue suede upper with white leather base and grey accents. This classic basketball silhouette delivers timeless style with the iconic Air Jordan design that started it all, perfect for both court and street.",
    image: "/images/air-jordan-1-hyper-royal-side-profile.jpeg",
    images: [
      "/images/air-jordan-1-hyper-royal-side-profile.jpeg",
      "/images/air-jordan-1-hyper-royal-rear-three-quarter.jpeg",
      "/images/air-jordan-1-hyper-royal-sole-bottom.jpeg",
      "/images/air-jordan-1-hyper-royal-opposite-side-profile.jpeg",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    specifications: {
      Colorway: "Hyper Royal/Light Smoke Grey/White",
      "Upper Material": "Premium suede and leather",
      Sole: "Rubber outsole with Air cushioning",
      Fit: "True to size",
      "Style Code": "555088-402",
    },
    inStock: true,
    stockCount: 12,
  },
]

export default function SneakerDetailPage() {
  const params = useParams()
  const [selectedSize, setSelectedSize] = useState("")
  const [currentImage, setCurrentImage] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isIPhoneDropdownOpen, setIsIPhoneDropdownOpen] = useState(false)

  console.log("[v0] Current params.id:", params.id)
  console.log(
    "[v0] Available sneaker IDs:",
    sneakers.map((s) => s.id),
  )

  const sneaker = sneakers.find((s) => s.id === params.id)

  console.log("[v0] Found sneaker:", sneaker ? sneaker.name : "Not found")

  useEffect(() => {
    if (sneaker) {
      setCurrentImage(sneaker.image)
    }
  }, [sneaker])

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }
    alert(`Added ${sneaker?.name} (Size: ${selectedSize}) to cart!`)
  }

  if (!sneaker) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Sneaker Not Found</h1>
          <Link href="/sneakers" className="text-blue-600 hover:underline">
            Back to Sneakers
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as homepage */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        Get the Fastest delivery for Free. Shop online at RKDS Holdings!
      </div>

      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <div className="bg-white text-black px-3 py-1 rounded font-bold text-lg">RKDS</div>
              </Link>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>

                  <div className="relative">
                    <button
                      onClick={() => setIsIPhoneDropdownOpen(!isIPhoneDropdownOpen)}
                      className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      iPhone <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </div>

                  <Link href="/sneakers" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Sneakers
                  </Link>
                  <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
              <Link href="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/sneakers" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                Sneakers
              </Link>
              <Link href="/about" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/contact" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Product Details */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img src={currentImage || sneaker.image} alt={sneaker.name} className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-5 gap-2">
              {sneaker.images?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(image)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                    currentImage === image ? "border-black" : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${sneaker.name} view ${index + 1}`}
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
                <span className="bg-black text-white px-2 py-1 text-xs font-medium rounded">{sneaker.brand}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{sneaker.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(sneaker.rating) ? "fill-current" : ""}`} />
                  ))}
                </div>
                <span className="text-gray-600">({sneaker.reviews})</span>
              </div>

              <p className="text-gray-600 text-lg mb-6">{sneaker.description}</p>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-900 mb-6">R{sneaker.price.toLocaleString()}</div>

            {/* Size Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="">Select Size</option>
                {sneaker.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  sneaker.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {sneaker.inStock ? `In Stock (${sneaker.stockCount} left)` : "Out of Stock"}
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!sneaker.inStock}
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
            {Object.entries(sneaker.specifications).map(([key, value]) => (
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
