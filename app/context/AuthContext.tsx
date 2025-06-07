"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"

// 1️⃣ Define the type for context
type AuthContextType = {
  isLoggedIn: boolean
  setIsLoggedIn: (val: boolean) => void
  loading: boolean
}

// 2️⃣ Create the context with undefined as default (safer)
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// 3️⃣ AuthProvider props
interface AuthProviderProps {
  children: ReactNode
}

// 4️⃣ AuthProvider implementation
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/me", {
          credentials: "include",
        })
        setIsLoggedIn(res.ok)
      } catch {
        setIsLoggedIn(false)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

// 5️⃣ Custom hook to consume context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
