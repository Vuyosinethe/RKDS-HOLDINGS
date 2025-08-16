"use client"

import { useRouter } from "next/navigation"

export type ButtonType = "product" | "service"

export interface ButtonHandlerOptions {
  id: string
  type: ButtonType
  category?: string
}

export const useButtonHandler = () => {
  const router = useRouter()

  const handleButtonClick = ({ id, type, category }: ButtonHandlerOptions) => {
    console.log(`[v0] Button clicked - Type: ${type}, ID: ${id}, Category: ${category || "none"}`)

    switch (type) {
      case "product":
        // Navigate to product detail page
        router.push(`/shop/${id}`)
        break
      case "service":
        // Navigate to service booking page (repairs, support, etc.)
        if (category === "repair" || category === "support") {
          router.push("/repairs")
        } else {
          router.push("/contact")
        }
        break
      default:
        console.warn(`[v0] Unknown button type: ${type}`)
        break
    }
  }

  return { handleButtonClick }
}

export const handleButtonClick = ({ id, type, category }: ButtonHandlerOptions) => {
  console.log(`[v0] Button clicked - Type: ${type}, ID: ${id}, Category: ${category || "none"}`)

  switch (type) {
    case "product":
      // Navigate to product detail page
      window.location.href = `/shop/${id}`
      break
    case "service":
      // Navigate to service booking page (repairs, support, etc.)
      if (category === "repair" || category === "support") {
        window.location.href = "/repairs"
      } else {
        window.location.href = "/contact"
      }
      break
    default:
      console.warn(`[v0] Unknown button type: ${type}`)
      break
  }
}
