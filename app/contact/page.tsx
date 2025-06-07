"use client"


import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import PageLoader from '@/components/ui/PageLoader'
import ContactSection from '../homepage/contact-section'
const contact = () => {

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
            <h1 className="text-gray-800 font-bold text-4xl">Contact us</h1>
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
      {/* <PopularCoursesPage /> */}

    
        <ContactSection />

    </div>
  )
}

export default contact
