import { Button } from "@/components/ui/button"
import service1 from "@/public/media/user/banner-user-1.png"
import service2 from "@/public/media/user/banner-user-2.png"
import service3 from "@/public/media/user/banner-user-3.png"  
import service4 from "@/public/media/user/banner-user-4.png"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className=" bg-amber-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-teal-700 font-medium">
              <span className="text-xl">✦</span>
              <span className="text-xl">Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-700 leading-tight">
              Online Classes For Remote <span className="text-amber-500">Learning</span>
            </h1>

            <p className="text-slate-600 text-lg max-w-lg">
              We don&apos;t just work with concrete and steel. We work with people. We are Approachable, with even our
              highest work work with concrete and steel. We work with people.
            </p>

            <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-6 rounded-full text-lg font-medium">
              FIND OUT MORE
            </Button>
          </div>

          {/* Right Side - Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Card 1 */}
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow first:mt-[10%] last:mb-[10%]">
    <div className="w-16 h-16 mb-4">
      <Image src={service4} alt="Service 4" className="w-full h-full object-cover" width={64} height={64} />
    </div>
    <h3 className="text-xl font-bold text-slate-700 mb-3">Arts & Design</h3>
    <p className="text-slate-600 text-sm">
      Awesome hexagon themed stream pack, you can change hexagon stream pack.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-16 h-16 mb-4">
      <Image src={service3} alt="Service 3" className="w-full h-full object-cover" width={64} height={64} />
    </div>
    <h3 className="text-xl font-bold text-slate-700 mb-3">Health & Fitness</h3>
    <p className="text-slate-600 text-sm">
      Awesome hexagon themed stream pack, you can change hexagon stream pack.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-16 h-16 mb-4">
      <Image src={service2} alt="Service 2" className="w-full h-full object-cover" width={64} height={64} />
    </div>
    <h3 className="text-xl font-bold text-slate-700 mb-3">Health & Fitness</h3>
    <p className="text-slate-600 text-sm">
      Awesome hexagon themed stream pack, you can change hexagon stream pack.
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow last:mb-[10%]">
    <div className="w-16 h-16 mb-4">
      <Image src={service1} alt="Service 1" className="w-full h-full object-cover" width={64} height={64} />
    </div>
    <h3 className="text-xl font-bold text-slate-700 mb-3">Digital Marketing</h3>
    <p className="text-slate-600 text-sm">
      Awesome hexagon themed stream pack, you can change hexagon stream pack.
    </p>
  </div>
</div>

        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 opacity-10">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20L80 20M20 40L80 40M20 60L80 60M20 80L80 80" stroke="#0F766E" strokeWidth="1" />
              <circle cx="30" cy="30" r="5" fill="none" stroke="#0F766E" strokeWidth="1" />
              <path d="M60 25L70 35L60 45" fill="none" stroke="#0F766E" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 opacity-10">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10L70 10M10 25L70 25M10 40L70 40M10 55L70 55M10 70L70 70" stroke="#F59E0B" strokeWidth="1" />
              <circle cx="20" cy="20" r="3" fill="#F59E0B" />
              <circle cx="60" cy="60" r="3" fill="#F59E0B" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
