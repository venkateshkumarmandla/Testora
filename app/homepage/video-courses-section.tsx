// "use client"

// import Image from "next/image"
// import { ChevronLeft, ChevronRight, Play } from "lucide-react"
// import { useState, useEffect, useRef } from "react"
// import courseimg1 from "@/public/media/course/brand-1.png"
// import courseimg2 from "@/public/media/course/brand-2.png"

// const videoCourses = [
//   {
//     id: 1,
//     instructor: "Andrea Guido",
//     subject: "Behavioral Science",
//     duration: "24:05",
//     thumbnail: courseimg1,
//     videoUrl: "/media/e-learning.mp4",
//   },
//   {
//     id: 2,
//     instructor: "Sarah Johnson",
//     subject: "Digital Marketing",
//     duration: "18:32",
//     thumbnail: courseimg2,
//     videoUrl: "#",
//   },
//   {
//     id: 3,
//     instructor: "Michael Chen",
//     subject: "Web Development",
//     duration: "32:15",
//     thumbnail: "/placeholder.svg?height=400&width=600",
//     videoUrl: "#",
//   },
//   {
//     id: 4,
//     instructor: "Emily Davis",
//     subject: "Data Science",
//     duration: "28:45",
//     thumbnail: "/placeholder.svg?height=400&width=600",
//     videoUrl: "#",
//   },
//   {
//     id: 5,
//     instructor: "David Wilson",
//     subject: "UI/UX Design",
//     duration: "22:18",
//     thumbnail: "/placeholder.svg?height=400&width=600",
//     videoUrl: "#",
//   },
// ]

// export default function VideoCoursesSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [cardsToShow, setCardsToShow] = useState(2)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const intervalRef = useRef<NodeJS.Timeout | null>(null)

//   // Update cards to show based on screen size
//   useEffect(() => {
//     const updateCardsToShow = () => {
//       if (window.innerWidth < 768) {
//         setCardsToShow(1) // Mobile: 1 card
//       } else if (window.innerWidth < 1024) {
//         setCardsToShow(1) // Tablet: 1 card
//       } else {
//         setCardsToShow(2) // Desktop: 2 cards
//       }
//     }

//     updateCardsToShow()
//     window.addEventListener("resize", updateCardsToShow)
//     return () => window.removeEventListener("resize", updateCardsToShow)
//   }, [])

//   const totalSlides = Math.max(0, videoCourses.length - cardsToShow + 1)

//   // Auto-scroll functionality
//   useEffect(() => {
//     const startAutoScroll = () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current)
//       }

//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prev) => {
//           const nextIndex = prev + 1
//           return nextIndex >= totalSlides ? 0 : nextIndex
//         })
//       }, 6000) // 6 seconds
//     }

//     const stopAutoScroll = () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current)
//         intervalRef.current = null
//       }
//     }

//     // Start auto-scroll when component mounts
//     startAutoScroll()

//     // Cleanup on unmount
//     return () => stopAutoScroll()
//   }, [totalSlides])

//   const nextSlide = () => {
//     // Reset auto-scroll when user manually navigates
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }

//     setCurrentIndex((prev) => {
//       const nextIndex = prev + 1
//       return nextIndex >= totalSlides ? 0 : nextIndex
//     })

//     // Restart auto-scroll after manual navigation
//     setTimeout(() => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current)
//       }
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prev) => {
//           const nextIndex = prev + 1
//           return nextIndex >= totalSlides ? 0 : nextIndex
//         })
//       }, 6000)
//     }, 1000)
//   }

//   const prevSlide = () => {
//     // Reset auto-scroll when user manually navigates
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }

//     setCurrentIndex((prev) => {
//       const prevIndex = prev - 1
//       return prevIndex < 0 ? totalSlides - 1 : prevIndex
//     })

//     // Restart auto-scroll after manual navigation
//     setTimeout(() => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current)
//       }
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prev) => {
//           const nextIndex = prev + 1
//           return nextIndex >= totalSlides ? 0 : nextIndex
//         })
//       }, 6000)
//     }, 1000)
//   }

//   const handleVideoClick = (course: (typeof videoCourses)[0]) => {
//     setIsPlaying(true)
//     // Here you would typically open a video modal or navigate to video page
//     console.log(`Playing video: ${course.instructor} - ${course.subject}`)

//     // Pause auto-scroll when video is clicked
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }

//     // For demo purposes, resume auto-scroll after 3 seconds
//     setTimeout(() => {
//       setIsPlaying(false)
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current)
//       }
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prev) => {
//           const nextIndex = prev + 1
//           return nextIndex >= totalSlides ? 0 : nextIndex
//         })
//       }, 6000)
//     }, 3000)
//   }

//   // Reset current index when cards to show changes
//   useEffect(() => {
//     setCurrentIndex(0)
//   }, [cardsToShow])

//   // Pause auto-scroll on hover
//   const handleMouseEnter = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current)
//     }
//   }

//   const handleMouseLeave = () => {
//     if (!isPlaying) {
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prev) => {
//           const nextIndex = prev + 1
//           return nextIndex >= totalSlides ? 0 : nextIndex
//         })
//       }, 6000)
//     }
//   }

//   return (
//     <section className="py-16 md:py-20 lg:py-24 bg-amber-50">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <div className="flex items-center justify-center gap-2 text-teal-700 font-medium mb-4">
//             <span className="text-lg md:text-xl">✦</span>
//             <span className="text-lg md:text-xl">Courses Video</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700">
//             Online <span className="text-amber-500">Video Courses</span>
//           </h2>
//         </div>

//         {/* Video Carousel */}
//         <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-black text-slate-700 rounded-full p-3 md:p-4 hover:bg-slate-50 transition-colors z-10 shadow-lg hidden md:flex"
//             disabled={totalSlides <= 1}
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-black text-slate-700 rounded-full p-3 md:p-4 hover:bg-slate-50 transition-colors z-10 shadow-lg hidden md:flex"
//             disabled={totalSlides <= 1}
//           >
//             <ChevronRight className="h-6 w-6" />
//           </button>

//           {/* Video Cards Container */}
//           <div className="overflow-hidden mx-4 md:mx-8 lg:mx-16">
//             <div
//               className="flex transition-transform duration-500 ease-in-out gap-6 md:gap-8"
//               style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
//             >
//               {videoCourses.map((course) => (
//                 <div
//                   key={course.id}
//                   className={`flex-shrink-0 ${cardsToShow === 1 ? "w-full" : "w-1/2"} max-w-lg mx-auto`}
//                 >
//                   <div className="relative group cursor-pointer" onClick={() => handleVideoClick(course)}>
//                     {/* Video Thumbnail */}
//                     <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200">
//                       <Image
//                         src={course.thumbnail || "/placeholder.svg"}
//                         alt={`${course.instructor} - ${course.subject}`}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-300"
//                       />

//                       {/* Play Button Overlay */}
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div
//                           className={`${isPlaying ? "bg-green-600" : "bg-purple-600"} hover:bg-purple-700 text-white rounded-full p-4 md:p-6 transition-colors shadow-lg`}
//                         >
//                           <Play className="h-8 w-8 md:h-12 md:w-12 fill-current" />
//                         </div>
//                       </div>

//                       {/* Duration Badge */}
//                       <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
//                         {course.duration}
//                       </div>

//                       {/* Bottom Overlay with Course Info */}
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
//                         <div className="flex items-end justify-between">
//                           <div>
//                             <h3 className="text-white font-bold text-lg md:text-xl mb-1">{course.instructor}</h3>
//                             <p className="text-gray-300 text-sm md:text-base">{course.subject}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

       
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import courseimg1 from "@/public/media/course/brand-1.png"
import courseimg2 from "@/public/media/course/brand-2.png"

const videoCourses = [
  {
    id: 1,
    instructor: "Andrea Guido",
    subject: "Behavioral Science",
    duration: "24:05",
    thumbnail: courseimg1,
    videoUrl: "/media/e-learning.mp4",
  },
  {
    id: 2,
    instructor: "Sarah Johnson",
    subject: "Digital Marketing",
    duration: "18:32",
    thumbnail: courseimg2,
    videoUrl: "/media/e-learning.mp4",
  },
  {
    id: 3,
    instructor: "Michael Chen",
    subject: "Web Development",
    duration: "32:15",
    thumbnail: courseimg1,
    videoUrl: "/media/e-learning.mp4",
  },
  {
    id: 4,
    instructor: "Emily Davis",
    subject: "Data Science",
    duration: "28:45",
    thumbnail: courseimg2,
    videoUrl: "/media/e-learning.mp4",
  },
  {
    id: 5,
    instructor: "David Wilson",
    subject: "UI/UX Design",
    duration: "22:18",
    thumbnail: courseimg1,
    videoUrl: "/media/e-learning.mp4",
  },
]

export default function VideoCoursesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(2)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<(typeof videoCourses)[0] | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Update cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsToShow(1) // Tablet: 1 card
      } else {
        setCardsToShow(2) // Desktop: 2 cards
      }
    }

    updateCardsToShow()
    window.addEventListener("resize", updateCardsToShow)
    return () => window.removeEventListener("resize", updateCardsToShow)
  }, [])

  const totalSlides = Math.max(0, videoCourses.length - cardsToShow + 1)

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1
          return nextIndex >= totalSlides ? 0 : nextIndex
        })
      }, 6000) // 6 seconds
    }

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    // Start auto-scroll when component mounts
    startAutoScroll()

    // Cleanup on unmount
    return () => stopAutoScroll()
  }, [totalSlides])

  const nextSlide = () => {
    // Reset auto-scroll when user manually navigates
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setCurrentIndex((prev) => {
      const nextIndex = prev + 1
      return nextIndex >= totalSlides ? 0 : nextIndex
    })

    // Restart auto-scroll after manual navigation
    setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1
          return nextIndex >= totalSlides ? 0 : nextIndex
        })
      }, 6000)
    }, 1000)
  }

  const prevSlide = () => {
    // Reset auto-scroll when user manually navigates
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setCurrentIndex((prev) => {
      const prevIndex = prev - 1
      return prevIndex < 0 ? totalSlides - 1 : prevIndex
    })

    // Restart auto-scroll after manual navigation
    setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1
          return nextIndex >= totalSlides ? 0 : nextIndex
        })
      }, 6000)
    }, 1000)
  }

  const handleVideoClick = (course: (typeof videoCourses)[0]) => {
    setSelectedVideo(course)
    setShowVideoModal(true)
    setIsPlaying(true)

    // Pause auto-scroll when video is clicked
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
    setSelectedVideo(null)
    setIsPlaying(false)

    // Pause video if playing
    if (videoRef.current) {
      videoRef.current.pause()
    }

    // Resume auto-scroll
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1
        return nextIndex >= totalSlides ? 0 : nextIndex
      })
    }, 6000)
  }

  // Reset current index when cards to show changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [cardsToShow])

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const handleMouseLeave = () => {
    if (!isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1
          return nextIndex >= totalSlides ? 0 : nextIndex
        })
      }, 6000)
    }
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showVideoModal) {
        closeVideoModal()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [showVideoModal])

  return (
    <>
      <section className="py-16 md:py-20 lg:py-24 bg-amber-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 text-teal-700 font-medium mb-4">
              <span className="text-lg md:text-xl">✦</span>
              <span className="text-lg md:text-xl">Courses Video</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700">
              Online <span className="text-amber-500">Video Courses</span>
            </h2>
          </div>

          {/* Video Carousel */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white text-slate-700 rounded-full p-3 md:p-4 hover:bg-slate-50 transition-colors z-10 shadow-lg hidden md:flex"
              disabled={totalSlides <= 1}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white text-slate-700 rounded-full p-3 md:p-4 hover:bg-slate-50 transition-colors z-10 shadow-lg hidden md:flex"
              disabled={totalSlides <= 1}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Video Cards Container */}
            <div className="overflow-hidden mx-4 md:mx-8 lg:mx-16">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6 md:gap-8"
                style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
              >
                {videoCourses.map((course) => (
                  <div
                    key={course.id}
                    className={`flex-shrink-0 ${cardsToShow === 1 ? "w-full" : "w-1/2"} max-w-lg mx-auto`}
                  >
                    <div className="relative group cursor-pointer" onClick={() => handleVideoClick(course)}>
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200">
                        <Image
                          src={course.thumbnail || "/placeholder.svg"}
                          alt={`${course.instructor} - ${course.subject}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 md:p-6 transition-colors shadow-lg">
                            <Play className="h-8 w-8 md:h-12 md:w-12 fill-current" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                          {course.duration}
                        </div>

                        {/* Bottom Overlay with Course Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                          <div className="flex items-end justify-between">
                            <div>
                              <h3 className="text-white font-bold text-lg md:text-xl mb-1">{course.instructor}</h3>
                              <p className="text-gray-300 text-sm md:text-base">{course.subject}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Black Navigation Buttons - Below carousel */}
            {/* <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevSlide}
                className="bg-black hover:bg-gray-800 text-white rounded-full p-4 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={totalSlides <= 1}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-black hover:bg-gray-800 text-white rounded-full p-4 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={totalSlides <= 1}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full"
                controls
                autoPlay
                src={selectedVideo.videoUrl}
                onError={(e) => {
                  console.error("Video failed to load:", e)
                  alert(
                    "Video could not be loaded. Please check if the video file exists at: " + selectedVideo.videoUrl,
                  )
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedVideo.instructor}</h3>
              <p className="text-gray-300 mb-2">{selectedVideo.subject}</p>
              <p className="text-gray-400 text-sm">Duration: {selectedVideo.duration}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
