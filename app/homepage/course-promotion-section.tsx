"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Smartphone } from "lucide-react"
import { useState } from "react"
import tutorImage from "@/public/media/course/tutor-1.png"

export default function CoursePromotionSection() {
  const [selectedPlan, setSelectedPlan] = useState("annual")

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-amber-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-amber-500 font-medium">
              <span className="text-lg md:text-xl">✦</span>
              <span className="text-lg md:text-xl">Guaranteed & Certified</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 leading-tight">
              The Best Free <span className="text-teal-700">Online Courses</span> of All Time
            </h2>

            <p className="text-slate-600 text-base md:text-lg max-w-lg">
              We don&apos;t just work with concrete and steel. We work with people. We are Approachable, with even our
              highest work work with concrete and steel. We work with people.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Buy Now Button */}
              <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-3">
                <Apple className="w-5 h-5" />
                <div className="w-px h-6 bg-white/30"></div>
                <span>Buy now</span>
              </Button>

              {/* Play Store Button */}
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium flex items-center gap-3"
              >
                <Smartphone className="w-5 h-5" />
                <div className="w-px h-6 bg-slate-300"></div>
                <span>Play Store</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Image with Overlay */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
             <Image
  src={tutorImage}
  alt="Smiling student with books"
  className="w-60 h-auto object-cover rounded-lg" // Tailwind: w-48 = 12rem = 192px
/>

            </div>

            {/* Pricing Overlay Card */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-purple-800 text-white rounded-lg p-4 md:p-6 w-64 md:w-72 shadow-lg">
              {/* Category Tag */}
              <div className="bg-purple-700 text-purple-100 px-3 py-1 rounded text-sm mb-4 inline-block">
                Cybersecurity
              </div>

              {/* Heading */}
              <h3 className="text-lg md:text-xl font-bold mb-2">Start Your Free 7 Days</h3>

              {/* Select Plan */}
              <p className="text-purple-100 mb-4 text-sm">Select a Plan</p>

              {/* Plan Options */}
              <div className="space-y-3">
                {/* Annual Plan */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    value="annual"
                    checked={selectedPlan === "annual"}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="mt-1 w-4 h-4 text-purple-600 bg-transparent border-2 border-purple-300 focus:ring-purple-500"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">Annual</span>
                      <span className="bg-amber-500 text-amber-900 px-2 py-0.5 rounded text-xs font-medium">
                        Best Offer
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm">US$2.00 / Month</p>
                  </div>
                </label>

                {/* Monthly Plan */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    value="monthly"
                    checked={selectedPlan === "monthly"}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="mt-1 w-4 h-4 text-purple-600 bg-transparent border-2 border-purple-300 focus:ring-purple-500"
                  />
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Monthly</div>
                    <p className="text-purple-100 text-sm">US$2.00 / Month</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
