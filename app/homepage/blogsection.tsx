import Image from "next/image"
import Link from "next/link"
import { User, Calendar } from "lucide-react"
import Blog1 from "@/public/media/blog/blog-1.png"
import Blog2 from "@/public/media/blog/blog-2.png"
import Blog3 from "@/public/media/blog/blog-3.png"

const blogPosts = [
  {
    id: 1,
    title: "Top Tips for Successful Online Learning",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..",
    author: "Lana Steiner",
    date: "18 Dec 2024",
    image: Blog1,
    slug: "top-tips-successful-online-learning",
  },
  {
    id: 2,
    title: "The Ultimate Guide E-Learning Success",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..",
    author: "Lana Steiner",
    date: "18 Dec 2024",
    image: Blog2,
    slug: "ultimate-guide-elearning-success",
  },
  {
    id: 3,
    title: "The Benefits of Interactive Learning Tools",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..",
    author: "Lana Steiner",
    date: "18 Dec 2024",
    image: Blog3,
    slug: "benefits-interactive-learning-tools",
  },
]

// Custom Arrow Icon Component
const CustomArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M19.6212 17.6941C18.2339 15.2911 18.6268 10.7924 21.1899 9.3126M21.1899 9.3126C19.7215 10.1604 15.9217 11.2863 13.147 6.48045M21.1899 9.3126L5.97147 18.099"
      stroke="#EA982B"
      strokeWidth="1.84977"
    />
  </svg>
)

export default function BlogSection() {
  return ( 
    <section className="py-16 md:py-20 lg:py-24 bg-amber-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-teal-700 font-medium mb-4">
            <span className="text-lg md:text-xl">✦</span>
            <span className="text-lg md:text-xl">Blogs</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700">
            Insights and <span className="text-amber-500">Articles</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Blog Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Author and Date */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-teal-700" />
                        <span className="text-slate-600 text-sm font-medium">{post.author}</span>
                      </div>

                      {/* Divider */}
                      <div className="w-px h-6 bg-slate-300"></div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-teal-700" />
                        <span className="text-slate-600 text-sm font-medium">{post.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4 group-hover:text-teal-700 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center gap-3 group/button">
                      <span className="text-amber-500 font-bold text-sm md:text-base group-hover/button:text-amber-600 transition-colors">
                        READ MORE
                      </span>
                      <div className="group-hover/button:translate-x-1 transition-transform duration-300">
                        <CustomArrowIcon />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and trends in online education. Our expert authors share
            valuable knowledge to help you succeed in your learning journey.
          </p>
        </div>
      </div>
    </section>
  )
}
