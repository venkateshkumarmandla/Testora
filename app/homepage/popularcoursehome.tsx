import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import course1 from "@/public/media/teachers/teacher-1.png"
import course2 from "@/public/media/teachers/teacher-2.png"
import course3 from "@/public/media/teachers/teacher-3.png" 
import course4 from "@/public/media/teachers/teacher-4.png"
import User from "@/public/media/teachers/user.png"

export default function PopularCoursesPage() {
  return (
    <div className="bg-amber-50/50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-medium mb-2">
              <span className="text-xl">✦</span>
              <span className="text-xl">Courses</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-slate-700">Most Popular</span> <span className="text-teal-700">Courses</span>
            </h1>
          </div>

          {/* Category Tabs */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-purple-900 text-white px-4 py-2 rounded-full text-sm font-medium">Web Development</div>
            <div className="text-slate-700 px-4 py-2 text-sm font-medium">Marketing</div>
            <div className="text-slate-700 px-4 py-2 text-sm font-medium">IT & Technology</div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-6 mb-12">
          {/* Course Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <Image
                src={course1}
                alt="Web Development Course"
                width={300}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="absolute top-3 right-3 bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                $120
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-800 mb-2">The Full Stack Web Developer: HTML</h3>
              <div className="flex items-center gap-2 text-amber-500 mb-3">
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">1 Lesson</span>
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">1 Week</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                    <Image
                      src={User}
                      alt="Instructor"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-slate-500">By John Smith</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">(20 Reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <Image
                src={course2}
                alt="Web Development Course"
                width={300}
                height={200}
                className="w-full h-52 object-cover"
              />
              <div className="absolute top-3 right-3 bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                $105
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Become a Certified Web Developer: HTML</h3>
              <div className="flex items-center gap-2 text-amber-500 mb-3">
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">1 Lesson</span>
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">1 Week</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                    <Image
                      src={User}
                      alt="Instructor"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-slate-500">By John Smith</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">(20 Reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <Image
                src={course3}
                alt="Graphic Design Course"
                width={300}
                height={200}
                className="w-full h-52 object-cover"
              />
              <div className="absolute top-3 right-3 bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                $195
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Graphic Designer Master Class Learn Great</h3>
              <div className="flex items-center gap-2 text-amber-500 mb-3">
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">1 Lesson</span>
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">1 Week</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                    <Image
                      src={User}
                      alt="Instructor"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-slate-500">By John Smith</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">(20 Reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <Image
                src={course4}
                alt="Pixel Art Course"
                width={300}
                height={200}
                className="w-full h-52 object-cover"
              />
              <div className="absolute top-3 right-3 bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                $155
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Pixel Art Mastery Course: Beginner To</h3>
              <div className="flex items-center gap-2 text-amber-500 mb-3">
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">1 Lesson</span>
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">1 Week</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Dive into mobile app development. Learn to build native iOS and Android apps using Swift and Kotlin.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                    <Image
                      src={User}
                      alt="Instructor"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-slate-500">By John Smith</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">(20 Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-4">
            We Help Your find the perfect tutor, it&apos;s completely free.{" "}
            <Link href="/courses" className="text-teal-700 font-medium inline-flex items-center">
              Explore all Courses <span className="ml-1">→</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
