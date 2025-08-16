"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  joinDate: string
}

export interface Order {
  id: string
  orderNumber: string
  date: string
  status: "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  items: Array<{
    id: number
    name: string
    quantity: number
    price: number
  }>
  trackingNumber?: string
  estimatedDelivery?: string
}

interface AuthState {
  user: User | null
  orders: Order[]
  isLoading: boolean
}

interface AuthContextType {
  state: AuthState
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: {
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
  }) => Promise<boolean>
  logout: () => void
  updateProfile: (userData: Partial<User>) => void
  addOrder: (order: Omit<Order, "id">) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

// Mock user data for demo
const mockUsers = [
  {
    id: "1",
    email: "demo@techstyle.co.za",
    password: "password123",
    firstName: "John",
    lastName: "Doe",
    phone: "+27 123 456 789",
    joinDate: "2024-01-15",
  },
]

// Mock orders data
const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "TS-ABC123DEF",
    date: "2024-01-20",
    status: "delivered",
    total: 21999,
    items: [
      { id: 1, name: "iPhone 15 Pro", quantity: 1, price: 18999 },
      { id: 3, name: "Nike Air Max 270", quantity: 1, price: 2499 },
    ],
    trackingNumber: "TN123456789",
    estimatedDelivery: "2024-01-23",
  },
  {
    id: "2",
    orderNumber: "TS-XYZ789GHI",
    date: "2024-01-25",
    status: "shipped",
    total: 17999,
    items: [{ id: 2, name: "iPhone 14", quantity: 1, price: 14999 }],
    trackingNumber: "TN987654321",
    estimatedDelivery: "2024-01-28",
  },
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    orders: [],
    isLoading: true,
  })

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("techstyle-user")
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        setState((prev) => ({
          ...prev,
          user,
          orders: mockOrders, // In real app, fetch user's orders
          isLoading: false,
        }))
      } catch (error) {
        console.error("Error loading user from localStorage:", error)
        setState((prev) => ({ ...prev, isLoading: false }))
      }
    } else {
      setState((prev) => ({ ...prev, isLoading: false }))
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication
    const user = mockUsers.find((u) => u.email === email && u.password === password)
    if (user) {
      const { password: _, ...userWithoutPassword } = user
      setState((prev) => ({
        ...prev,
        user: userWithoutPassword,
        orders: mockOrders,
      }))
      localStorage.setItem("techstyle-user", JSON.stringify(userWithoutPassword))
      return true
    }
    return false
  }

  const register = async (userData: {
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
  }): Promise<boolean> => {
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      joinDate: new Date().toISOString().split("T")[0],
    }

    setState((prev) => ({
      ...prev,
      user: newUser,
      orders: [],
    }))
    localStorage.setItem("techstyle-user", JSON.stringify(newUser))
    return true
  }

  const logout = () => {
    setState((prev) => ({
      ...prev,
      user: null,
      orders: [],
    }))
    localStorage.removeItem("techstyle-user")
  }

  const updateProfile = (userData: Partial<User>) => {
    if (state.user) {
      const updatedUser = { ...state.user, ...userData }
      setState((prev) => ({
        ...prev,
        user: updatedUser,
      }))
      localStorage.setItem("techstyle-user", JSON.stringify(updatedUser))
    }
  }

  const addOrder = (orderData: Omit<Order, "id">) => {
    const newOrder: Order = {
      ...orderData,
      id: Date.now().toString(),
    }
    setState((prev) => ({
      ...prev,
      orders: [newOrder, ...prev.orders],
    }))
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        register,
        logout,
        updateProfile,
        addOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
