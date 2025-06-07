// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import Logo from "@/public/media/logo.png"

// export function Navbar() {
//   return (
//     <header className="bg-amber-50 ">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Link href="/" className="flex items-center gap-2">
//   <Image
//   src={Logo}
//   alt="FutureHub Logo"
//   width={198} // match intrinsic width
//   height={50} // match intrinsic height
//   className="h-auto w-auto" // ensures no forced resizing by Tailwind
// />

//             </Link>
//           </div>
//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="/" className="text-sm font-medium hover:text-orange-500">
//               HOME   
//             </Link>
//             <Link href="/courses" className="text-sm font-medium hover:text-orange-500">
//               COURSE
//             </Link>
//             <Link href="/about" className="text-sm font-medium hover:text-orange-500">
//               ABOUT US
//             </Link>
//             <Link href="/blog" className="text-sm font-medium hover:text-orange-500">
//               BLOG
//             </Link>
//             <Link href="/pages" className="text-sm font-medium hover:text-orange-500">
//               PAGES
//             </Link>
//             <Link href="/contact" className="text-sm font-medium hover:text-orange-500">
//               CONTACT
//             </Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             <Link href="/login">
//               <Button variant="ghost" className="text-sm font-medium">
//                 LOGIN
//               </Button>
//             </Link>
//             <Link href="/signup">
//               <Button className="bg-orange-500 hover:bg-orange-600 text-sm font-medium">SIGNUP</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }





// "use client"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import Logo from "@/public/media/logo.png"

// export function Navbar() {
//   return (
//     <header className="bg-amber-50 shadow">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image src={Logo} alt="FutureHub Logo" width={198} height={50} className="h-auto w-auto" />
//           </Link>

//           {/* Main Navigation */}
//           <nav className="hidden md:flex items-center gap-6 relative">
//             {/* HOME */}
//             <Link href="/" className="text-sm font-medium hover:text-orange-500">
//               HOME
//             </Link>

//             {/* COURSE Dropdown */}
//             <div className="group relative">
//               <Link href="#" className="text-sm font-medium hover:text-orange-500">
//                 COURSE
//               </Link>
//               <div className="absolute left-0 top-full z-50 mt-1 hidden w-40 rounded-md bg-white p-2 shadow group-hover:block">
//                 <Link href="/courses" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Courses
//                 </Link>
//                 <Link href="/course-detail" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Course Detail
//                 </Link>
//                 <Link href="/enroll-now" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Enroll
//                 </Link>
//               </div>
//             </div>

//             {/* ABOUT */}
//             <Link href="/about" className="text-sm font-medium hover:text-orange-500">
//               ABOUT US
//             </Link>

//             {/* BLOG Dropdown */}
//             <div className="group relative">
//               <Link href="#" className="text-sm font-medium hover:text-orange-500">
//                 BLOG
//               </Link>
//               <div className="absolute left-0 top-full z-50 mt-2 hidden w-52 rounded-md bg-white p-2 shadow group-hover:block">
//                 <Link href="/blog-grid" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Blog Grid
//                 </Link>
//                 <Link href="/blog-grid-sidebar" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Blog Grid Sidebar
//                 </Link>
//                 <Link href="/blog-detail" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Blog Detail
//                 </Link>
//               </div>
//             </div>

//             {/* PAGES Dropdown */}
//             <div className="group relative">
//               <Link href="#" className="text-sm font-medium hover:text-orange-500">
//                 PAGES
//               </Link>
//               <div className="absolute left-0 top-full z-50 mt-2 hidden w-48 rounded-md bg-white p-2 shadow group-hover:block">
//                 <Link href="/pricing" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Pricing
//                 </Link>
//                 <Link href="/services" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Services
//                 </Link>
//                 <Link href="/team" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Team
//                 </Link>
//                 <Link href="/register" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Register
//                 </Link>
//                 <Link href="/404" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   404
//                 </Link>
//                 <Link href="/coming-soon" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Coming Soon
//                 </Link>
//               </div>
//             </div>

//             {/* CONTACT */}
//             <Link href="/contact" className="text-sm font-medium hover:text-orange-500">
//               CONTACT
//             </Link>
//           </nav>

//           {/* Login/Signup Buttons */}
//           <div className="flex items-center gap-4">
//             <Link href="/login">
//               <Button variant="ghost" className="text-sm font-medium">
//                 LOGIN
//               </Button>
//             </Link>
//             <Link href="/signup">
//               <Button className="bg-orange-500 hover:bg-orange-600 text-sm font-medium">
//                 SIGNUP
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }




// "use client"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import Logo from "@/public/media/logo.png"
// import PageLoader from "./ui/PageLoader"

// export function Navbar() {
//   return (
//     <header className="bg-amber-50 shadow">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image src={Logo} alt="FutureHub Logo" width={198} height={50} className="h-auto w-auto" />
//           </Link>

//           {/* Main Navigation */}
//           <nav className="hidden md:flex items-center gap-6 relative">
//             {/* HOME */}

//             <Link href="/" className="text-sm font-medium hover:text-orange-500">
//               HOME
//             </Link>

//             {/* COURSE Dropdown */}
//             <div className="group relative">
//               <Link href="#" className="text-sm font-medium hover:text-orange-500">
//                 COURSE
//               </Link>
//               <div className="absolute -left-16 top-full z-50 mt-0 hidden flex-col w-48 rounded-md bg-white p-2 shadow transition-all duration-200 ease-in-out group-hover:flex pointer-events-none group-hover:pointer-events-auto">
//                 <Link href="/courses" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Courses
//                 </Link>
//                 <Link href="/course-detail" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Course Detail
//                 </Link>
//                 <Link href="/enroll-now" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Enroll
//                 </Link>
//               </div>
//             </div>

//             {/* ABOUT */}
//             <Link href="/about" className="text-sm font-medium hover:text-orange-500">
//               ABOUT US
//             </Link>

//             {/* BLOG Dropdown */}
//             <div className="group relative">
//               <Link href="#" className="text-sm font-medium hover:text-orange-500">
//                 BLOG
//               </Link>
//               <div className="absolute -left-16 top-full z-50 mt-0 hidden flex-col w-52 rounded-md bg-white p-2 shadow transition-all duration-200 ease-in-out group-hover:flex pointer-events-none group-hover:pointer-events-auto">
//                 <Link href="/blog-grid" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Blog Grid
//                 </Link>
//                 <Link href="/blog-grid-sidebar" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Blog Grid Sidebar
//                 </Link>
//                 <Link href="/blog-detail" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Blog Detail
//                 </Link>
//               </div>
//             </div>

//             {/* PAGES Dropdown */}
//             <div className="group relative">
//               <Link href="#" className="text-sm font-medium hover:text-orange-500">
//                 PAGES
//               </Link>
//               <div className="absolute -left-16 top-full z-50 mt-0 hidden flex-col w-52 rounded-md bg-white p-2 shadow transition-all duration-200 ease-in-out group-hover:flex pointer-events-none group-hover:pointer-events-auto">
//                 <Link href="/pricing" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Pricing
//                 </Link>
//                 <Link href="/services" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Services
//                 </Link>
//                 <Link href="/team" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Team
//                 </Link>
//                 <Link href="/register" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Register
//                 </Link>
//                 <Link href="/404" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   404
//                 </Link>
//                 <Link href="/coming-soon" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">
//                   Coming Soon
//                 </Link>
//               </div>
//             </div>

//             {/* CONTACT */}
//             <Link href="/contact" className="text-sm font-medium hover:text-orange-500">
//               CONTACT
//             </Link>
//           </nav>

//           {/* Login/Signup Buttons */}
//           <div className="flex items-center gap-4">
//             <Link href="/login">
//               <Button variant="ghost" className="text-sm font-medium">
//                 LOGIN
//               </Button>
//             </Link>
//             <Link href="/signup">
//               <Button className="bg-orange-500 hover:bg-orange-600 text-sm font-medium">
//                 SIGNUP
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }



// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { useEffect, useState } from "react"
// import { useRouter, usePathname } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import Logo from "@/public/media/logo.png"

// export function Navbar() {
//   const router = useRouter()
//   const pathname = usePathname()

//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)

//   // 🔐 Check login status using cookie-based API
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const res = await fetch("/api/me", { credentials: "include" })
//         setIsLoggedIn(res.ok)
//       } catch {
//         setIsLoggedIn(false)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     checkAuth()
//   }, [])

//   const handleLogout = async () => {
//     await fetch("/api/logout", { method: "POST", credentials: "include" })
//     setIsLoggedIn(false)
//     window.location.href = "/"
//   }

//   const handleHomeClick = () => {
//     if (pathname === "/") {
//       router.replace("/reload-temp")
//       setTimeout(() => {
//         router.replace("/")
//       }, 10)
//     } else {
//       router.push("/")
//     }
//   }

//   if (isLoading) return null

//   return (
//     <header className="bg-amber-50 shadow">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <button onClick={handleHomeClick} className="flex items-center gap-2">
//             <Image src={Logo} alt="FutureHub Logo" width={198} height={50} className="h-auto w-auto" />
//           </button>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-6 relative">
//             <button onClick={handleHomeClick} className="text-sm font-medium hover:text-orange-500">
//               HOME
//             </button>

//             {/* COURSE Dropdown */}
//             <div className="group relative">
//               <Link href="#" className="text-sm font-medium hover:text-orange-500">COURSE</Link>
//               <div className="absolute -left-16 top-full z-50 mt-0 hidden flex-col w-48 rounded-md bg-white p-2 shadow group-hover:flex">
//                 <Link href="/courses" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Courses</Link>
//                 <Link href="/course-detail" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Course Detail</Link>
//                 <Link href="/enroll-now" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Enroll</Link>
//               </div>
//             </div>

//             <Link href="/about" className="text-sm font-medium hover:text-orange-500">ABOUT US</Link>

//             {/* BLOG Dropdown */}
//             <div className="group relative">
//               <Link href="#" className="text-sm font-medium hover:text-orange-500">BLOG</Link>
//               <div className="absolute -left-16 top-full z-50 mt-0 hidden flex-col w-52 rounded-md bg-white p-2 shadow group-hover:flex">
//                 <Link href="/blog-grid" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Blog Grid</Link>
//                 <Link href="/blog-grid-sidebar" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Blog Grid Sidebar</Link>
//                 <Link href="/blog-detail" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Blog Detail</Link>
//               </div>
//             </div>

//             {/* PAGES Dropdown */}
//             <div className="group relative">
//               <Link href="#" className="text-sm font-medium hover:text-orange-500">PAGES</Link>
//               <div className="absolute -left-16 top-full z-50 mt-0 hidden flex-col w-52 rounded-md bg-white p-2 shadow group-hover:flex">
//                 <Link href="/pricing" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Pricing</Link>
//                 <Link href="/services" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Services</Link>
//                 <Link href="/team" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Team</Link>
//                 <Link href="/register" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Register</Link>
//                 <Link href="/404" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">404</Link>
//                 <Link href="/coming-soon" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Coming Soon</Link>
//               </div>
//             </div>

//             <Link href="/contact" className="text-sm font-medium hover:text-orange-500">CONTACT</Link>
//           </nav>

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-4">
//             {!isLoggedIn ? (
//               <>
//                 <Link href="/login">
//                   <Button variant="ghost" className="text-sm font-medium">LOGIN</Button>
//                 </Link>
//                 <Link href="/signup">
//                   <Button className="bg-orange-500 hover:bg-orange-600 text-sm font-medium">SIGNUP</Button>
//                 </Link>
//               </>
//             ) : (
//               <Button onClick={handleLogout} className="text-sm font-medium bg-red-500 hover:bg-red-600 text-white">
//                 LOGOUT
//               </Button>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }




"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Logo from "@/public/media/logo.png"

import { useAuth } from "@/app/context/AuthContext"


export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // ✅ Check auth status on first load only
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
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST", credentials: "include" })
    setIsLoggedIn(false)
    router.push("/") // ✅ navigate without reload
  }

  const handleHomeClick = () => {
    if (pathname === "/") {
      // Optional: Visual refresh if already on home
      router.replace("/reload-temp")
      setTimeout(() => {
        router.replace("/")
      }, 10)
    } else {
      router.push("/")
    }
  }

  if (isLoading) return null

  return (
    <header className="bg-amber-50 shadow">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button onClick={handleHomeClick} className="flex items-center gap-2">
            <Image src={Logo} alt="FutureHub Logo" width={198} height={50} className="h-auto w-auto" />
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 relative">
            <button onClick={handleHomeClick} className="text-sm font-medium hover:text-orange-500">
              HOME
            </button>

            {/* COURSE Dropdown */}
            <div className="group relative">
              <Link href="#" className="text-sm font-medium hover:text-orange-500">COURSE</Link>
              <div className="absolute -left-16 top-full z-50 mt-0 hidden flex-col w-48 rounded-md bg-white p-2 shadow group-hover:flex">
                <Link href="/courses" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Courses</Link>
                <Link href="/course-detail" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Course Detail</Link>
                <Link href="/enroll-now" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Enroll</Link>
              </div>
            </div>

            <Link href="/about" className="text-sm font-medium hover:text-orange-500">ABOUT US</Link>

            {/* BLOG Dropdown */}
            <div className="group relative">
              <Link href="#" className="text-sm font-medium hover:text-orange-500">BLOG</Link>
              <div className="absolute -left-16 top-full z-50 mt-0 hidden flex-col w-52 rounded-md bg-white p-2 shadow group-hover:flex">
                <Link href="/blog-grid" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Blog Grid</Link>
                <Link href="/blog-grid-sidebar" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Blog Grid Sidebar</Link>
                <Link href="/blog-detail" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Blog Detail</Link>
              </div>
            </div>

            {/* PAGES Dropdown */}
            <div className="group relative">
              <Link href="#" className="text-sm font-medium hover:text-orange-500">PAGES</Link>
              <div className="absolute -left-16 top-full z-50 mt-0 hidden flex-col w-52 rounded-md bg-white p-2 shadow group-hover:flex">
                <Link href="/pricing" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Pricing</Link>
                <Link href="/services" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Services</Link>
                <Link href="/team" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Team</Link>
                <Link href="/register" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Register</Link>
                <Link href="/404" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">404</Link>
                <Link href="/coming-soon" className="block px-4 py-2 text-sm hover:bg-orange-100 rounded">Coming Soon</Link>
              </div>
            </div>

            <Link href="/contact" className="text-sm font-medium hover:text-orange-500">CONTACT</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="text-sm font-medium">LOGIN</Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-sm font-medium">SIGNUP</Button>
                </Link>
              </>
            ) : (
              <Button
                onClick={handleLogout}
                className="text-sm font-medium bg-red-500 hover:bg-red-600 text-white"
              >
                LOGOUT
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}


// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import Logo from "@/public/media/logo.png"

// export function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)

//   // ✅ Check if user is authenticated (based on server cookie)
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const res = await fetch("/api/me", {
//           credentials: "include", // ⬅️ important to send cookies
//         })
//         setIsLoggedIn(res.ok)
//       } catch (error) {
//         setIsLoggedIn(false)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     checkAuth()
//   }, [])

//   // ✅ Logout handler
//   const handleLogout = async () => {
//     await fetch("/api/logout", { method: "POST", credentials: "include" })
//     setIsLoggedIn(false)
//     window.location.href = "/"
//   }

//   if (isLoading) return null

//   return (
//     <header className="bg-amber-50 shadow">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex h-16 items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <Image src={Logo} alt="FutureHub Logo" width={198} height={50} className="h-auto w-auto" />
//           </Link>

//           <nav className="hidden md:flex items-center gap-6 relative">
//             {/* Add nav links here */}
//           </nav>

//           <div className="flex items-center gap-4">
//             {!isLoggedIn ? (
//               <>
//                 <Link href="/login">
//                   <Button variant="ghost" className="text-sm font-medium">LOGIN</Button>
//                 </Link>
//                 <Link href="/signup">
//                   <Button className="bg-orange-500 hover:bg-orange-600 text-sm font-medium">SIGNUP</Button>
//                 </Link>
//               </>
//             ) : (
//               <Button onClick={handleLogout} className="text-sm font-medium bg-red-500 hover:bg-red-600 text-white">
//                 LOGOUT
//               </Button>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }
