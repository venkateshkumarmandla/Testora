"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import img1 from "@/public/media/hero/user.png"

const contactInfo = [
  {
    id: 1,
    icon: Mail,
    title: "Contact Us",
    details: [
      { label: "Call us:", value: "+1834 123 456 789", type: "phone" },
      { label: "Email:", value: "support@example.com", type: "email" },
    ],
  },
  {
    id: 2,
    icon: Clock,
    title: "Opening Hours",
    details: [
      { label: "Mon - Sat:", value: "7.00 am - 8.00 pm", type: "text" },
      { label: "Sunday:", value: "8.00 am - 6.00 pm", type: "text" },
    ],
  },
  {
    id: 3,
    icon: MapPin,
    title: "Our Location",
    details: [
      { label: "", value: "2972 Westheimer Rd. Santa", type: "text" },
      { label: "", value: "Ana, Illinois, USA", type: "text" },
    ],
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
    saveInfo: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <>
      {/* Contact Info Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-4">
              Have a Question? <span className="text-amber-500">Contact Us!</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Aliquet in faucibus adipiscing id scelerisque gravida. Ultricies
              duis elit pellentesque rhoncus hac sed ipsum viverra vel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {contactInfo.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div className="w-12 h-12 md:w-15 md:h-15 bg-teal-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                  {item.details.map((detail, index) => (
                    <div key={index} className="mb-2">
                      {detail.type === "phone" ? (
                        <p className="text-slate-600 text-sm md:text-base">
                          {detail.label}{" "}
                          <a href={`tel:${detail.value}`} className="text-teal-700 font-bold hover:text-teal-800">
                            {detail.value}
                          </a>
                        </p>
                      ) : detail.type === "email" ? (
                        <p className="text-slate-600 text-sm md:text-base">
                          {detail.label}{" "}
                          <a href={`mailto:${detail.value}`} className="text-teal-700 hover:text-teal-800">
                            {detail.value}
                          </a>
                        </p>
                      ) : (
                        <p className="text-slate-600 text-sm md:text-base">
                          {detail.label} {detail.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.05176831636!2d-95.73093531411777!3d29.81736469329602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1716960714220!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-16 md:pb-20 lg:pb-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contact Image */}
            <div className="order-2 lg:order-1">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden">
                <img
                  src={img1.src}
                  alt="Contact us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-200 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Have Any Questions</h3>
                <p className="text-slate-600 mb-8">
                  Please feel free to get in touch with us using the contact form below. We&apos;d love to hear from
                  you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700 placeholder-slate-400 resize-vertical"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-amber-500 bg-white border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
                    />
                    <label className="text-slate-600 text-sm">
                      Save my name, email, and website in this browser for the next time.
                    </label>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
