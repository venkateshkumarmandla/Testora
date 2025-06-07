import Image from "next/image"
import { Button } from "@/components/ui/button"
import course1 from "@/public/media/course/course-1.png"
import course2 from "@/public/media/course/course-2.png"
import course3 from "@/public/media/course/course-3.png"
import course4 from "@/public/media/course/course-4.png"
import TestUser1 from "@/public/media/user/test-user-1.png"
import TestUser2 from "@/public/media/user/test-user-2.png" 
import TestUser3 from "@/public/media/user/test-user-3.png"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"

import  Certificate  from "@/public/media/user/banner-user-1.png"
import OnlineCourse from "@/public/media/user/banner-user-2.png"
import CourseCatalog from "@/public/media/user/banner-user-3.png"
import ProgressTrack from "@/public/media/user/banner-user-4.png"



export default function OnlineLearningHero() {
  return (
    <>
    <div className="container mx-auto  py-12 max-w-7xl bg-amber-50/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Images section - now on the left */}
       <div className="grid grid-cols-2 gap-4">
  {/* Image 1 */}
  <div className="rounded-lg overflow-hidden ">
    <Image
      src={course1}
      alt="Student coding with headphones"
      width={80}
      height={80}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Image 2 */}
  <div className="rounded-lg overflow-hidden ">
    <Image
      src={course2}
      alt="Student studying with laptop"
      width={80}
      height={80}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Image 3 */}
  <div className="rounded-lg overflow-hidden ">
    <Image
      src={course3}
      alt="Student with headphones"
      width={120}
      height={120}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Certified Badge Image */}
  <div className="flex items-center justify-center">
    <div className="rounded-full border-4 border-gray-200 p-2  flex items-center justify-center">
      <Image
        src={course4}
        alt="Certified Badge"
        width={80}
        height={80}
        className="object-contain"
      />
    </div>
  </div>
</div>

        {/* Text section - now on the right */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-amber-500 font-medium">
            <span className="text-xl">✦</span>
            <span className="text-xl">Guaranteed & Certified</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-700 leading-tight">
            Online Learning Wherever And <span className="text-teal-700 block">Whenever.</span>
          </h1>

          <p className="text-slate-600 mt-4 max-w-lg">
            We don&apos;t just work with concrete and steel. We work with people. We are Approachable, with even our
            highest work work with concrete and steel. We work with people.
          </p>
             <div className="grid grid-cols-3 gap-2 mt-12">
  {/* Left Image */}
  <div className="flex justify-center items-center">
    <div className="rounded-full overflow-hidden w-16 h-16">
      <Image
        src={TestUser1}
        alt="Instructor"
        width={64}
        height={64}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Middle Image - Wider */}
  <div className="flex justify-center items-center">
    <div className="rounded-lg overflow-hidden w-24 h-16">
      <Image
        src={TestUser2}
        alt="Course dashboard"
        width={96}
        height={64}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Right Image */}
  <div className="flex justify-center items-center">
    <div className="rounded-full overflow-hidden w-16 h-16">
      <Image
        src={TestUser3}
        alt="Student"
        width={64}
        height={64}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 amber-50">
  {/* Column 1 */}
  <div className="space-y-2">
    <div className="flex items-center gap-2 text-teal-700 font-medium">
      <Check className="w-5 h-5" />
      <span className="whitespace-nowrap">Top Instructors</span>
    </div>
    <div className="flex items-center gap-2 text-teal-700 font-medium">
      <Check className="w-5 h-5" />
      <span className="whitespace-nowrap">3020 Online Courses</span>
    </div>
  </div>

  {/* Column 2 */}
  <div className="space-y-2">
    <div className="flex items-center gap-2 text-teal-700 font-medium">
      <Check className="w-5 h-5" />
      <span className="whitespace-nowrap">6,000 Membership</span>
    </div>
    <div className="flex items-center gap-2 text-teal-700 font-medium">
      <Check className="w-5 h-5" />
      <span className="whitespace-nowrap">Online Certifications</span>
    </div>
  </div>
</div>

        </div>
        
      </div>

   

      <div className="mt-12 flex justify-center">
        <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-6 rounded-full text-lg font-medium">
          FIND OUT MORE
        </Button>
      </div>
    </div>


{/* Features Section - Added as requested */}
      <div className="bg-amber-50/50 py-16 px-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-teal-700 font-medium mb-2">
              <span className="text-xl">✦</span>
              <span className="text-xl">Features</span>
            </div>
            <h2 className="text-4xl font-bold">
              <span className="text-slate-700">Exclusive</span> <span className="text-amber-500">Features</span>
            </h2>
          </div>

          <div className="relative ">
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-800 text-white rounded-full p-2 z-10 hidden md:flex">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-800 text-white rounded-full p-2 z-10 hidden md:flex">
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {/* Card 1 */}
              <div className="bg-amber-50 border border-gray-100 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow ">
                <div className="w-16 h-16 mb-4">
                    <Image src={Certificate} alt="Certificate" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Certification</h3>
                <p className="text-slate-600 text-sm">
                  Define and Develop Digital Strategies to Deliver Business Growth
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-amber-50 border border-gray-100 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mb-4">
                    <Image src={OnlineCourse} alt="Online Course" className="w-full h-full object-cover" width={64} height={64} />

                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Online Courses</h3>
                <p className="text-slate-600 text-sm">
                  Define and Develop Digital Strategies to Deliver Business Growth
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-amber-50 border border-gray-100 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mb-4">
                    <Image src={CourseCatalog} alt="Course Catalog" className="w-full h-full object-cover" width={64} height={64} />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Course Catalog</h3>
                <p className="text-slate-600 text-sm">
                  Define and Develop Digital Strategies to Deliver Business Growth
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-amber-50 border border-gray-100 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mb-4">
                    <Image src={ProgressTrack} alt="Progress Track" className="w-full h-full object-cover" width={64} height={64} />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Progress Track</h3>
                <p className="text-slate-600 text-sm">
                  Define and Develop Digital Strategies to Deliver Business Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>


  )
}





// "use client"

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Check, ChevronLeft, ChevronRight } from "lucide-react"
// import { useState, useEffect } from "react"

// const features = [
//   {
//     id: 1,
//     title: "Certification",
//     description: "Define and Develop Digital Strategies to Deliver Business Growth",
//     icon: "/placeholder.svg?height=64&width=64",
//     alt: "Certificate",
//   },
//   {
//     id: 2,
//     title: "Online Courses",
//     description: "Define and Develop Digital Strategies to Deliver Business Growth",
//     icon: "/placeholder.svg?height=64&width=64",
//     alt: "Online Course",
//   },
//   {
//     id: 3,
//     title: "Course Catalog",
//     description: "Define and Develop Digital Strategies to Deliver Business Growth",
//     icon: "/placeholder.svg?height=64&width=64",
//     alt: "Course Catalog",
//   },
//   {
//     id: 4,
//     title: "Progress Track",
//     description: "Define and Develop Digital Strategies to Deliver Business Growth",
//     icon: "/placeholder.svg?height=64&width=64",
//     alt: "Progress Track",
//   },
// ]

// export default function OnlineLearningHero() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [cardsToShow, setCardsToShow] = useState(4)

//   // Update cards to show based on screen size
//   useEffect(() => {
//     const updateCardsToShow = () => {
//       if (window.innerWidth < 768) {
//         setCardsToShow(1) // Mobile: 1 card
//       } else if (window.innerWidth < 1024) {
//         setCardsToShow(2) // Tablet: 2 cards
//       } else {
//         setCardsToShow(4) // Desktop: 4 cards
//       }
//     }

//     updateCardsToShow()
//     window.addEventListener("resize", updateCardsToShow)
//     return () => window.removeEventListener("resize", updateCardsToShow)
//   }, [])

//   const totalSlides = Math.max(0, features.length - cardsToShow + 1)

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalSlides)
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
//   }

//   // Reset current index when cards to show changes
//   useEffect(() => {
//     setCurrentIndex(0)
//   }, [cardsToShow])

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="container mx-auto py-8 md:py-12 max-w-7xl bg-amber-50/50 px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
//           {/* Images section - left side */}
//           <div className="grid grid-cols-2 gap-3 md:gap-4 order-2 lg:order-1">
//             {/* Image 1 */}
//             <div className="rounded-lg overflow-hidden">
//               <Image
//                 src="/placeholder.svg?height=80&width=80"
//                 alt="Student coding with headphones"
//                 width={80}
//                 height={80}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Image 2 */}
//             <div className="rounded-lg overflow-hidden">
//               <Image
//                 src="/placeholder.svg?height=80&width=80"
//                 alt="Student studying with laptop"
//                 width={80}
//                 height={80}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Image 3 */}
//             <div className="rounded-lg overflow-hidden">
//               <Image
//                 src="/placeholder.svg?height=120&width=120"
//                 alt="Student with headphones"
//                 width={120}
//                 height={120}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Certified Badge Image */}
//             <div className="flex items-center justify-center">
//               <div className="rounded-full border-4 border-gray-200 p-2 flex items-center justify-center">
//                 <Image
//                   src="/placeholder.svg?height=80&width=80"
//                   alt="Certified Badge"
//                   width={80}
//                   height={80}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Text section - right side */}
//           <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
//             <div className="flex items-center gap-2 text-amber-500 font-medium">
//               <span className="text-lg md:text-xl">✦</span>
//               <span className="text-lg md:text-xl">Guaranteed & Certified</span>
//             </div>

//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 leading-tight">
//               Online Learning Wherever And <span className="text-teal-700 block">Whenever.</span>
//             </h1>

//             <p className="text-slate-600 text-sm md:text-base max-w-lg">
//               We don&apos;t just work with concrete and steel. We work with people. We are Approachable, with even our
//               highest work work with concrete and steel. We work with people.
//             </p>

//             {/* User Images Row */}
//             <div className="grid grid-cols-3 gap-2 mt-8 md:mt-12">
//               {/* Left Image */}
//               <div className="flex justify-center items-center">
//                 <div className="rounded-full overflow-hidden w-12 h-12 md:w-16 md:h-16">
//                   <Image
//                     src="/placeholder.svg?height=64&width=64"
//                     alt="Instructor"
//                     width={64}
//                     height={64}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Middle Image - Wider */}
//               <div className="flex justify-center items-center">
//                 <div className="rounded-lg overflow-hidden w-20 h-12 md:w-24 md:h-16">
//                   <Image
//                     src="/placeholder.svg?height=64&width=96"
//                     alt="Course dashboard"
//                     width={96}
//                     height={64}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Right Image */}
//               <div className="flex justify-center items-center">
//                 <div className="rounded-full overflow-hidden w-12 h-12 md:w-16 md:h-16">
//                   <Image
//                     src="/placeholder.svg?height=64&width=64"
//                     alt="Student"
//                     width={64}
//                     height={64}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Features List */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
//               {/* Column 1 */}
//               <div className="space-y-2 md:space-y-3">
//                 <div className="flex items-center gap-2 text-teal-700 font-medium">
//                   <Check className="w-4 h-4 md:w-5 md:h-5" />
//                   <span className="text-sm md:text-base whitespace-nowrap">Top Instructors</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-teal-700 font-medium">
//                   <Check className="w-4 h-4 md:w-5 md:h-5" />
//                   <span className="text-sm md:text-base whitespace-nowrap">3020 Online Courses</span>
//                 </div>
//               </div>

//               {/* Column 2 */}
//               <div className="space-y-2 md:space-y-3">
//                 <div className="flex items-center gap-2 text-teal-700 font-medium">
//                   <Check className="w-4 h-4 md:w-5 md:h-5" />
//                   <span className="text-sm md:text-base whitespace-nowrap">6,000 Membership</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-teal-700 font-medium">
//                   <Check className="w-4 h-4 md:w-5 md:h-5" />
//                   <span className="text-sm md:text-base whitespace-nowrap">Online Certifications</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <div className="mt-8 md:mt-12 flex justify-center">
//           <Button className="bg-teal-700 hover:bg-teal-800 text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-base md:text-lg font-medium">
//             FIND OUT MORE
//           </Button>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-amber-50/50 py-12 md:py-16">
//         <div className="container mx-auto px-4 max-w-7xl">
//           <div className="text-center mb-8 md:mb-12">
//             <div className="flex items-center justify-center gap-2 text-teal-700 font-medium mb-2">
//               <span className="text-lg md:text-xl">✦</span>
//               <span className="text-lg md:text-xl">Features</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold">
//               <span className="text-slate-700">Exclusive</span> <span className="text-amber-500">Features</span>
//             </h2>
//           </div>

//           <div className="relative">
//             {/* Navigation Arrows */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-slate-800 text-white rounded-full p-2 md:p-3 hover:bg-slate-700 transition-colors z-10 shadow-lg"
//               disabled={totalSlides <= 1}
//             >
//               <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-slate-800 text-white rounded-full p-2 md:p-3 hover:bg-slate-700 transition-colors z-10 shadow-lg"
//               disabled={totalSlides <= 1}
//             >
//               <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
//             </button>

//             {/* Feature Cards */}
//             <div className="overflow-hidden mx-6 md:mx-8">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
//               >
//                 {features.map((feature) => (
//                   <div
//                     key={feature.id}
//                     className={`flex-shrink-0 px-2 md:px-3 ${
//                       cardsToShow === 1 ? "w-full" : cardsToShow === 2 ? "w-1/2" : "w-1/4"
//                     }`}
//                   >
//                     <div className="bg-white border border-gray-100 rounded-lg p-4 md:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow h-full">
//                       <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4">
//                         <Image
//                           src={feature.icon || "/placeholder.svg"}
//                           alt={feature.alt}
//                           className="w-full h-full object-cover"
//                           width={64}
//                           height={64}
//                         />
//                       </div>
//                       <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-2">{feature.title}</h3>
//                       <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }



