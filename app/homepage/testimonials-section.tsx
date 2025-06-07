"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"
import user from "@/public/media/user/image.png"
import user2 from "@/public/media/user/image2.png"
import user3 from "@/public/media/user/image3.png"
const testimonials = [
  {
    id: 1,
    name: "Amanda Martinez",
    role: "Student",
    rating: 5.0,
    course: "Front-End Web Development",
    testimonial:
      "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    image: user,
  },
  {
    id: 2,
    name: "Alexander Miller",
    role: "Student",
    rating: 5.0,
    course: "Front-End Web Development",
    testimonial:
      "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    image: user2,
  },
  {
    id: 3,
    name: "Daniel Hernandez",
    role: "Student",
    rating: 5.0,
    course: "Front-End Web Development",
    testimonial:
      "This course transformed my understanding of web design. The practical projects were invaluable. Highly recommend!",
    image: user3,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Student",
    rating: 5.0,
    course: "Digital Marketing",
    testimonial:
      "Amazing course content and excellent instructors. I learned so much and can apply it immediately to my work!",
    image: user,
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Student",
    rating: 5.0,
    course: "UI/UX Design",
    testimonial:
      "The hands-on approach and real-world projects made this course incredibly valuable. Highly recommended!",
    image: user2,
  },
  {
    id: 6,
    name: "Emily Davis",
    role: "Student",
    rating: 5.0,
    course: "Data Science",
    testimonial: "Comprehensive curriculum and supportive community. This course exceeded all my expectations!",
    image: user3,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3)

  // Update cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2) // Tablet: 2 cards
      } else {
        setCardsToShow(3) // Desktop: 3 cards
      }
    }

    updateCardsToShow()
    window.addEventListener("resize", updateCardsToShow)
    return () => window.removeEventListener("resize", updateCardsToShow)
  }, [])

  const totalSlides = Math.max(0, testimonials.length - cardsToShow + 1)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Reset current index when cards to show changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [cardsToShow])

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-amber-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 text-amber-500 font-medium mb-2">
            <span className="text-lg md:text-xl">✦</span>
            <span className="text-lg md:text-xl">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-slate-700">What Our</span> <span className="text-teal-700">Students Say</span>
          </h2>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-slate-800 text-white rounded-full p-2 md:p-3 hover:bg-slate-700 transition-colors z-10 shadow-lg"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-slate-800 text-white rounded-full p-2 md:p-3 hover:bg-slate-700 transition-colors z-10 shadow-lg"
            disabled={totalSlides <= 1}
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden mx-6 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-2 md:px-3 lg:px-4 ${
                    cardsToShow === 1 ? "w-full" : cardsToShow === 2 ? "w-1/2" : "w-1/3"
                  }`}
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                    {/* Header with user info and quote icon */}
                    <div className="flex gap-3 md:gap-4 items-start mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h6 className="text-base md:text-lg font-bold text-slate-800 mb-1 truncate">
                          {testimonial.name}
                        </h6>
                        <p className="text-slate-500 mb-2 md:mb-3 text-xs md:text-sm">{testimonial.role}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-800 font-medium text-sm md:text-base">{testimonial.rating}</span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-amber-500 text-amber-500" />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <Quote className="w-8 h-8 md:w-12 md:h-12 text-gray-300" />
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 mb-4 md:mb-6"></div>

                    {/* Course and testimonial */}
                    <div>
                      <p className="text-slate-800 font-semibold mb-3 md:mb-4 text-sm md:text-base">
                        {testimonial.course}
                      </p>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{testimonial.testimonial}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
