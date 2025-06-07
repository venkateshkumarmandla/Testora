// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// // import { ThemeProvider } from "@/components/theme-provider"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "FutureHub - Online Learning Platform",
//   description: "Expand your skills and advance your career with our comprehensive online courses",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
//           <div className="flex min-h-screen flex-col">
//             <Navbar />
//             <main className="flex-1">{children}</main>
//             <Footer />
//           </div>
//         {/* </ThemeProvider> */}
//       </body>
//     </html>
//   )
// }



// app/layout.tsx


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//      <body>
//     <div className={inter.className}>
//       <LayoutWrapper>{children}</LayoutWrapper>
//     </div>
//   </body>
//     </html>
//   )
// }

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LayoutWrapper from "@/components/LayoutWrapper"
import { AuthProvider } from "./context/AuthContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FutureHub - Online Learning Platform",
  description: "Expand your skills and advance your career with our comprehensive online courses",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className={inter.className}>
     
           <AuthProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </AuthProvider>
       
        </div>
      </body>
    </html>
  )
}
