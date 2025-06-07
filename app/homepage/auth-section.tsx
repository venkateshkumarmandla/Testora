"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Eye, EyeOff, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function AuthSection() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showRegisterPassword, setShowRegisterPassword] = useState(false)
    const [user, setUser] = useState(null);


  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

   useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/me", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      }
    }
    checkAuth();
  }, []);

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const router = useRouter();

const handleLoginSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

const res = await fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include", // ← this is the key fix
  body: JSON.stringify({
    email: loginData.email,
    password: loginData.password,
  }),
});


  if (res.ok) {
    alert("Login successful!");
    router.push("/courses"); // redirect to home
  } else {
    const error = await res.json();
    alert(error.error || "Login failed");
  }
};


const handleRegisterSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const fullName = `${registerData.firstName} ${registerData.lastName}`.trim()

  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: fullName,
      email: registerData.email,
      password: registerData.password,
    }),
  })

  if (res.ok) {
    alert("Registration successful. Please login.")
    setRegisterData({ firstName: "", lastName: "", email: "", password: "" })
  } else {
    const error = await res.json()
    alert(error.error || "Registration failed")
  }
}



  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Login Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Login</h3>
              <p className="text-slate-600">Please Enter your detail to Sign In.</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-6">
              {/* Social Login Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Image src="/placeholder.svg?height=20&width=20" alt="Google" width={20} height={20} />
                  <span className="text-sm font-medium text-slate-700">Login with Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Image src="/placeholder.svg?height=20&width=20" alt="Facebook" width={20} height={20} />
                  <span className="text-sm font-medium text-slate-700">Login with Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-slate-500">Or</span>
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Username or email address"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700 placeholder-slate-400"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showLoginPassword ? "text" : "password"}
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Password"
                  required
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700 placeholder-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showLoginPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={loginData.remember}
                    onChange={handleLoginChange}
                    className="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                  />
                  <span className="text-sm text-slate-600">Remember for 30 Days</span>
                </label>
                <a href="#" className="text-sm text-amber-500 hover:text-amber-600 font-medium">
                  Forget Password
                </a>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Sign In
              </Button>
            </form>
          </div>

          {/* Register Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Register</h3>
              <p className="text-slate-600">Please Enter your detail to Sign Up.</p>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-6">
              {/* Social Login Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Image src="/placeholder.svg?height=20&width=20" alt="Google" width={20} height={20} />
                  <span className="text-sm font-medium text-slate-700">Login with Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Image src="/placeholder.svg?height=20&width=20" alt="Facebook" width={20} height={20} />
                  <span className="text-sm font-medium text-slate-700">Login with Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-slate-500">Or</span>
                </div>
              </div>

              {/* Name Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={registerData.firstName}
                    onChange={handleRegisterChange}
                    placeholder="First Name"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700 placeholder-slate-400"
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={registerData.lastName}
                    onChange={handleRegisterChange}
                    placeholder="Last Name"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700 placeholder-slate-400"
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700 placeholder-slate-400"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showRegisterPassword ? "text" : "password"}
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700 placeholder-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showRegisterPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Privacy Policy */}
              <div className="text-sm text-slate-600 leading-relaxed">
                <p>
                  Your personal information helps improve your experience on our site, manage your account, and fulfill
                  other purposes as detailed in our{" "}
                  <a href="#" className="text-amber-500 hover:text-amber-600 font-medium">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>

        {/* Additional Links */}
        <div className="text-center mt-8">
          <p className="text-slate-600">
            Already have an account?{" "}
            <a href="#" className="text-teal-700 hover:text-teal-800 font-medium">
              Sign in here
            </a>
          </p>
          <p className="text-slate-600 mt-2">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-teal-700 hover:text-teal-800 font-medium">
              Create one here
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
