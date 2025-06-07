export interface User {
  id: string
  name: string
  email: string
  image?: string
  role: "STUDENT" | "INSTRUCTOR" | "ADMIN"
  createdAt: Date
  updatedAt: Date
}

export interface Course {
  id: string
  title: string
  description: string
  price: number
  thumbnail?: string
  featured: boolean
  category: string
  rating: number
  instructor: {
    id: string
    name: string
    avatar?: string
  }
  createdAt: Date
  updatedAt: Date
}

export interface Enrollment {
  id: string
  userId: string
  courseId: string
  status: "ACTIVE" | "COMPLETED" | "CANCELLED"
  progress: number
  createdAt: Date
  updatedAt: Date
}

export interface Lesson {
  id: string
  title: string
  description: string
  courseId: string
  order: number
  videoUrl?: string
  duration: number
  createdAt: Date
  updatedAt: Date
}
