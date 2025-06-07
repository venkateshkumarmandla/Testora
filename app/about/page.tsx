// "use client"
// import React, { useState, useEffect } from 'react'
// import PageLoader from '@/components/ui/PageLoader'
// import Image from 'next/image'
// import OnlineLearningHero from '../homepage/online-learning-hero'

// const about = () => {
//     const [loading, setLoading] = useState(true)
    
//       useEffect(() => {
//         // Hide loader after 5 seconds
//         const timer = setTimeout(() => {
//           setLoading(false)
//         }, 3000)
    
//         // Clear timeout if component unmounts early
//         return () => clearTimeout(timer)
//       }, [])
    
//       if (loading) {
//         return <PageLoader />
//       }
//   return (
//  <>
//   <div
//        className="title-wrapper bg-no-repeat bg-cover bg-center py-8"
//        style={{ backgroundImage: "url('/media/backgrounds/title-bg.png')" }}
//      >
//        <div className="flex flex-col sm:flex-row items-center px-4 sm:px-12">
//          {/* Left Side */}
//          <div className="w-full sm:w-1/2">
//            <div className="title-content flex items-center gap-3">
//              <Image
//                src="/media/user/star.png"
//                alt="star"
//                width={32}
//                height={32}
//                className="h-8 w-8"
//              />
//              <h1 className="text-gray-800 font-bold text-4xl">Courses</h1>
//            </div>
//          </div>
 
//          {/* Right Side (Hidden on small devices) */}
//          <div className="w-full sm:w-1/2 hidden sm:flex justify-end">
//            <div className="title-image">
//              <Image
//                src="/media/backgrounds/title-banner.png"
//                alt="Title Banner"
//                width={250}
//                height={140}
//                className="h-auto w-auto"
//              />
//            </div>
//          </div>
//        </div>
//       <OnlineLearningHero/>

//       <div
//   className="video-section bg-center bg-no-repeat bg-cover grid place-items-center"
//   style={{
//     backgroundImage: "url('/media/hero/video.png')",
//     height: 'clamp(700px, 42.76vw, 900px)',
//   }}
// >
//   <a href="/media/e-learning.mp4" className="play-btn">
//     <img
//       src="/media/user/video.png"
//       alt="Play Video"
//       className="w-[clamp(100px,9.167vw,250px)] cursor-pointer"
//     />
//   </a>
// </div>

//      </div>
//  </>
//   )
// }

// export default about




// "use client"
// import React, { useState, useEffect } from 'react'
// import PageLoader from '@/components/ui/PageLoader'
// import Image from 'next/image'
// import OnlineLearningHero from '../homepage/online-learning-hero'

// const About = () => {
//   const [loading, setLoading] = useState(true)
//   const [isVideoOpen, setIsVideoOpen] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//     }, 3000)

//     return () => clearTimeout(timer)
//   }, [])

//   if (loading) {
//     return <PageLoader />
//   }

//   return (
//     <>
//       <div
//         className="title-wrapper bg-no-repeat bg-cover bg-center py-8"
//         style={{ backgroundImage: "url('/media/backgrounds/title-bg.png')" }}
//       >
//         <div className="flex flex-col sm:flex-row items-center px-4 sm:px-12">
//           {/* Left Side */}
//           <div className="w-full sm:w-1/2">
//             <div className="title-content flex items-center gap-3">
//               <Image
//                 src="/media/user/star.png"
//                 alt="star"
//                 width={32}
//                 height={32}
//                 className="h-8 w-8"
//               />
//               <h1 className="text-gray-800 font-bold text-4xl">Courses</h1>
//             </div>
//           </div>

//           {/* Right Side (Hidden on small devices) */}
//           <div className="w-full sm:w-1/2 hidden sm:flex justify-end">
//             <div className="title-image">
//               <Image
//                 src="/media/backgrounds/title-banner.png"
//                 alt="Title Banner"
//                 width={250}
//                 height={140}
//                 className="h-auto w-auto"
//               />
//             </div>
//           </div>
//         </div>

//         <OnlineLearningHero />

//         {/* Video thumbnail */}
//         <div
//           className="video-section bg-center bg-no-repeat bg-cover grid place-items-center mx-auto rounded-md shadow-md cursor-pointer"
//           style={{
//             backgroundImage: "url('/media/hero/video.png')",
//             height: 'clamp(300px, 25vw, 400px)', // smaller height
//             width: 'clamp(300px, 40vw, 600px)',  // smaller width
//             maxWidth: '100%',
//           }}
//           onClick={() => setIsVideoOpen(true)}
//         >
//           <img
//             src="/media/user/video.png"
//             alt="Play Video"
//             className="w-[clamp(60px,6vw,150px)]"
//           />
//         </div>
//       </div>

//       {/* Video modal */}
//       {isVideoOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
//           <div className="relative max-w-4xl w-full rounded-lg overflow-hidden shadow-lg">
//             {/* Close button */}
//             <button
//               onClick={() => setIsVideoOpen(false)}
//               aria-label="Close video"
//               className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-red-500 z-50"
//             >
//               &times;
//             </button>

//             {/* Video player */}
//             <video
//               src="/media/e-learning.mp4"
//               controls
//               autoPlay
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default About




"use client"
import React, { useState, useEffect } from 'react'
import PageLoader from '@/components/ui/PageLoader'
import Image from 'next/image'
import OnlineLearningHero from '../homepage/online-learning-hero'
import ServicesPage from '../homepage/service'
import TestimonialsSection from '../homepage/testimonials-section'
import BlogSection from '../homepage/blogsection'

const About = () => {
  const [loading, setLoading] = useState(true)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <PageLoader />
  }

  return (
    <>
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
              <h1 className="text-gray-800 font-bold text-4xl">About Us</h1>
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

        <OnlineLearningHero />

        {/* Video thumbnail - KEEP original size */}
        <div
          className="video-section bg-center bg-no-repeat bg-cover grid place-items-center mx-auto rounded-md shadow-md cursor-pointer"
          style={{
            backgroundImage: "url('/media/hero/video.png')",
            height: 'clamp(700px, 42.76vw, 900px)', // original height
            width: '100%', // full width container
            maxWidth: '900px',
          }}
          onClick={() => setIsVideoOpen(true)}
        >
          <img
            src="/media/user/video.png"
            alt="Play Video"
            className="w-[clamp(100px,9.167vw,250px)]"
          />
        </div>
      </div>

      {/* Video modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full rounded-lg overflow-hidden shadow-lg">
            {/* Close button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
              className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-red-500 z-50"
            >
              &times;
            </button>

            {/* Video player - smaller height */}
            <video
              src="/media/e-learning.mp4"
              controls
              autoPlay
              className="w-full h-[400px] rounded-lg object-cover"
            />
          </div>
        </div>
      )}
            <ServicesPage/>
            <TestimonialsSection/>
<BlogSection/>
    </>
  )
}

export default About
