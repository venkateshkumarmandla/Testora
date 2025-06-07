import type { Course } from "./types"

// This is a mock function that would be replaced with actual Prisma queries
export async function getCourses({
  featured = false,
  limit = 10,
  category = "",
  search = "",
}: {
  featured?: boolean
  limit?: number
  category?: string
  search?: string
}) {
  // In a real app, this would be a Prisma query
  // return prisma.course.findMany({
  //   where: {
  //     featured: featured ? true : undefined,
  //     category: category ? category : undefined,
  //     title: search ? { contains: search, mode: 'insensitive' } : undefined
  //   },
  //   take: limit,
  //   include: {
  //     instructor: {
  //       select: {
  //         id: true,
  //         name: true,
  //         image: true
  //       }
  //     }
  //   }
  // })

  // Mock data for now
  const mockCourses: Course[] = [
    {
      id: "1",
      title: "Web Development Fundamentals",
      description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
      price: 49.99,
      thumbnail: "/placeholder.svg?height=200&width=400",
      featured: true,
      category: "Development",
      rating: 4.8,
      instructor: {
        id: "1",
        name: "John Smith",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      title: "Advanced React Patterns",
      description: "Master advanced React concepts and patterns for building scalable applications.",
      price: 79.99,
      thumbnail: "/placeholder.svg?height=200&width=400",
      featured: true,
      category: "Development",
      rating: 4.9,
      instructor: {
        id: "2",
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      title: "Data Science Essentials",
      description: "Learn the fundamentals of data science, statistics, and machine learning.",
      price: 69.99,
      thumbnail: "/placeholder.svg?height=200&width=400",
      featured: true,
      category: "Data Science",
      rating: 4.7,
      instructor: {
        id: "3",
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  return mockCourses
    .filter((course) => {
      if (featured && !course.featured) return false
      if (category && course.category !== category) return false
      if (search && !course.title.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
    .slice(0, limit)
}

export async function getCourseById(id: string) {
  // In a real app, this would be a Prisma query
  // return prisma.course.findUnique({
  //   where: { id },
  //   include: {
  //     instructor: true,
  //     lessons: {
  //       orderBy: { order: 'asc' }
  //     }
  //   }
  // })

  const courses = await getCourses({})
  return courses.find((course) => course.id === id)
}
