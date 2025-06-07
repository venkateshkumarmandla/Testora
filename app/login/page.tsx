// "use client"

// import type React from "react"

// import { useState } from "react"
// import { signIn } from "next-auth/react"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { FcGoogle } from "react-icons/fc"

// export default function LoginPage() {
//   const router = useRouter()
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setError("")

//     try {
//       const result = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       })

//       if (result?.error) {
//         setError("Invalid email or password")
//         setIsLoading(false)
//         return
//       }

//       router.push("/dashboard")
//       router.refresh()
//     } catch (error) {
//       setError("Something went wrong")
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="flex min-h-[80vh] items-center justify-center px-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-1 text-center">
//           <CardTitle className="text-2xl font-bold">Login to FutureHub</CardTitle>
//           <CardDescription>Enter your credentials to access your account</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4">
//             <Button
//               variant="outline"
//               className="w-full"
//               onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
//             >
//               <FcGoogle className="mr-2 h-5 w-5" />
//               Continue with Google
//             </Button>
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t" />
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
//               </div>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="name@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <div className="flex items-center justify-between">
//                   <Label htmlFor="password">Password</Label>
//                   <Link href="/forgot-password" className="text-sm text-orange-500 hover:underline">
//                     Forgot password?
//                   </Link>
//                 </div>
//                 <Input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               {error && <p className="text-sm text-red-500">{error}</p>}
//               <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
//                 {isLoading ? "Logging in..." : "Login"}
//               </Button>
//             </form>
//           </div>
//         </CardContent>
//         <CardFooter className="text-center">
//           <p className="text-sm text-muted-foreground">
//             Don&apos;t have an account?{" "}
//             <Link href="/signup" className="text-orange-500 hover:underline">
//               Sign up
//             </Link>
//           </p>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }







"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import PageLoader from '@/components/ui/PageLoader'
import AuthSection from '../homepage/auth-section'
const LoginPage = () => {

    const [loading, setLoading] = useState(true)
    

  useEffect(() => {
    // Hide loader after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    // Clear timeout if component unmounts early
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <PageLoader />
  }
  
  return (
 <div
      className="title-wrapper bg-no-repeat bg-cover bg-center py-8"
      style={{ backgroundImage: "url('/media/backgrounds/title-bg.png')" }}
    >
      <div className="flex flex-col sm:flex-row items-center px-4 sm:px-12">
        {/* Left Side */}
        <div className="w-full sm:w-1/2">
          <div className="title-content flex items-center gap-3">
            <Image
              src="/media/user/star.png"
              alt="star"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <h1 className="text-gray-800 font-bold text-4xl">Login</h1>
          </div>
        </div>

        {/* Right Side (Hidden on small devices) */}
        <div className="w-full sm:w-1/2 hidden sm:flex justify-end">
          <div className="title-image">
            <Image
              src="/media/backgrounds/title-banner.png"
              alt="Title Banner"
              width={250}
              height={140}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>

    <AuthSection />

    </div>
  )
}

export default LoginPage