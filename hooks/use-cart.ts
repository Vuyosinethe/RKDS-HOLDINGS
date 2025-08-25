"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: string | number
  name: string
  price: number
  category: string
  image: string
  variant?: string
  quantity?: number
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string | number) => void
  updateQuantity: (id: string | number, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item: CartItem) => {
        const items = get().items
        const existingItem = items.find((i) => i.id === item.id)

        if (existingItem) {
          set({
            items: items.map((i) => (i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i)),
          })
        } else {
          set({
            items: [...items, { ...item, quantity: 1 }],
          })
        }
      },

      removeItem: (id: string | number) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        })
      },

      updateQuantity: (id: string | number, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }

        set({
          items: get().items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + (item.quantity || 1), 0)
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)
