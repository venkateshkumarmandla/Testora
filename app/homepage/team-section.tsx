import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import Team1 from "@/public/media/team/team-1.png"
import Team2 from "@/public/media/team/team-2.png"

const teamMembers = [
  {
    id: 1,
    name: "Devon Lane",
    role: "Web Developer",
    image: Team1,
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: Team2,
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
]

// Custom Twitter/X Icon Component
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M14.2418 10.1624L22.9842 0H20.9125L13.3215 8.82384L7.25852 0H0.265625L9.43399 13.3432L0.265625 24H2.33742L10.3538 14.6817L16.7567 24H23.7496L14.2413 10.1624H14.2418ZM11.4042 13.4608L10.4752 12.1321L3.08391 1.55961H6.26607L12.2309 10.0919L13.1599 11.4206L20.9135 22.5113H17.7313L11.4042 13.4613V13.4608Z"
      fill="currentColor"
    />
  </svg>
)

export default function TeamSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-amber-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-amber-500 font-medium mb-4">
            <span className="text-lg md:text-xl">✦</span>
            <span className="text-lg md:text-xl">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700">
            Our Experienced <span className="text-teal-700">Teachers</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {teamMembers.map((member, index) => (
                <div key={member.id} className="relative">
                  {/* Team Card */}
                  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    {/* Decorative Vector - Top Right */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Team Member Image */}
                    <div className="relative h-80 md:h-96 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Team Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{member.name}</h4>
                      <p className="text-gray-200 mb-6 text-sm md:text-base">{member.role}</p>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3">
                        <a
                          href={member.socialLinks.facebook}
                          className="w-12 h-12 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300 group/social"
                        >
                          <Facebook className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={member.socialLinks.instagram}
                          className="w-12 h-12 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300 group/social"
                        >
                          <Instagram className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={member.socialLinks.twitter}
                          className="w-12 h-12 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300 group/social"
                        >
                          <TwitterIcon />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element - Bottom Left */}
                  <div className={`absolute -bottom-4 ${index === 0 ? "-left-4" : "-right-4"} z-20`}>
                    <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Meet our dedicated team of experienced educators who are passionate about helping students achieve their
            learning goals through innovative teaching methods and personalized guidance.
          </p>
        </div>
      </div>
    </section>
  )
}
