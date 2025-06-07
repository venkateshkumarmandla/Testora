'use client'
import React from 'react'
import Link from 'next/link'


const NotFound = () => {
    // 
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <section className="text-center">
        <h1 className="text-[clamp(150px,20.833vw,450px)] leading-[0.8] font-bold text-[#015d4f] mb-6">
          4<span className="text-[#ea982b]">0</span>4
        </h1>
        <h4 className="text-gray-800 font-bold text-xl md:text-2xl mb-4">
          <span className="text-[#ea982b]">Oops!</span> There is something wrong
        </h4>
        <p className="text-gray-500 mb-8 text-base md:text-lg leading-relaxed">
                      The page you’re looking for doesn’t exist or has been moved.


        </p>
        <Link href="/" className="relative overflow-hidden inline-flex justify-center uppercase font-semibold text-white text-sm md:text-base px-6 py-3 rounded-full bg-[#015d4f] transition-all duration-300">
          <span className="btn-text">back to homepage</span>
        </Link>
      </section>
    </div>
    </>
  )
}

export default NotFound

