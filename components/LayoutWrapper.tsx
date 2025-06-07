// components/LayoutWrapper.tsx
"use client"

import { useEffect, useState } from "react"
import PageLoader from "./ui/PageLoader"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { usePathname } from "next/navigation"


export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500) // Show loader for 1.5s
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      )}
    </>
  )
}
