'use client'
import React from 'react'
import Image from 'next/image'

const ComingSoon = () => {
  return (
    <section className="coming-soon-page py-20 bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image src="/media/cs-logo.png" alt="logo" width={150} height={100} />
          </div>

          {/* Countdown Timer */}
          <div className="flex gap-6 mb-8">
            {[
              { label: 'Days', value: '44' },
              { label: 'Hrs', value: '20' },
              { label: 'Mins', value: '44' },
              { label: 'Secs', value: '16' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-800">{item.value}</h2>
                <p className="text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Heading and description */}
          <h1 className="text-4xl font-bold text-blue-600 mb-6">COMING SOON</h1>
          <h5 className="text-xl font-semibold text-purple-600 mb-2">Subscribe to Our Newsletter</h5>
          <p className="text-gray-400 mb-6">Get notified when we are live</p>

          {/* Subscription Form */}
          <form
            action="https://uiparadox.co.uk/public/templates/future-hub/contact.html"
            method="post"
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Enter your email"
              required
              className="px-4 py-2 border border-gray-300 rounded-md w-72"
            />
            <button
              type="submit"
              className="relative bg-blue-600 text-white px-6 py-2 rounded-md overflow-hidden transition hover:bg-blue-700"
            >
              <span className="relative z-10">Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Back to Top Button */}
      <button className="scrollToTopBtn fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition">
        <i className="fa fa-arrow-up" />
      </button>
    </section>
  )
}

export default ComingSoon
