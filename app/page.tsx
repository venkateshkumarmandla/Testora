



import Image from "next/image"
import { Button } from "@/components/ui/button"
// import { getCourses } from "@/lib/data"
// import { CourseCard } from "@/components/course-card"

import herobanner from "@/public/media/hero/hero-banner.png"
import user1 from "@/public/media/user/user-1.png"
import user2 from "@/public/media/user/user-2.png"
import user3 from "@/public/media/user/user-3.png"
import user4 from "@/public/media/user/user-4.png"
import heroBg from "@/public/media/hero/hero-bg.png"
import heroMobileBg from "@/public/media/hero/hero-mobile.png"
import heroIpadBg from "@/public/media/hero/hero-ipad.png"
import OnlineLearningHero from "@/app/homepage/online-learning-hero"
import PopularCoursesPage from "@/app/homepage/popularcoursehome"
import ServicesPage from "./homepage/service"
import TestimonialsSection from "./homepage/testimonials-section"
import PricingPage from "./homepage/course-pricing"
import CoursePromotionSection from "./homepage/course-promotion-section"
import VideoCoursesSection from "./homepage/video-courses-section"
import TeamSection from "./homepage/team-section"
import InsightsPage from "./homepage/insightpage"
import BlogSection from "./homepage/blogsection"

export default async function Home() {
  const userImages = [user1, user2, user3, user4]
  // const featuredCourses = await getCourses({ featured: true, limit: 3 })

  return (
    <>  
    
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        className="relative bg-amber-50 py-20 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg.src})`, // default for mobile
        }}
      >
        {/* iPad background */}
        <div
          className="hidden sm:block md:hidden absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroIpadBg.src})`,
            zIndex: -1,
          }}
        ></div>

        {/* Laptop/Desktop background */}
        <div
          className="hidden md:block absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroMobileBg.src})`,
            zIndex: -1,
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center text-emerald-700 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>Guaranteed & Certified</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Your Future Starts
                <span className="block text-orange-500">Online Learning</span>
              </h1>
              <p className="text-gray-600 max-w-md">
                Expand your skills and advance your career with our comprehensive online courses taught by industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  EXPLORE COURSES
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  READ MORE
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {userImages.map((userImg, i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <Image
                        src={userImg}
                        alt={`Student ${i + 1}`}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-orange-500 font-bold text-xl">50,000+</span>{" "}
                  <span className="text-gray-700 font-medium">Students</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src={herobanner}
                  alt="Students learning online"
                  width={600}
                  height={600}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-orange-100 rounded-full -z-10 transform translate-x-4 translate-y-4"></div>
              <div className="absolute top-1/4 right-0 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="absolute bottom-1/4 left-0 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <OnlineLearningHero/>
      <PopularCoursesPage/>
      <ServicesPage/>
      <TestimonialsSection/>
            <PricingPage/>
            <CoursePromotionSection/>
            < VideoCoursesSection/>
            <TeamSection/>
      {/* <InsightsPage/> */}
      <BlogSection/>

      {/* Featured Courses Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-center">Featured Courses</h2>
            <div className="h-1 w-20 bg-orange-500 mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/courses">
              <Button variant="outline" size="lg">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

    
    </main>
</>



  )
}
