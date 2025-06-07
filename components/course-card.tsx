import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Course } from "@/lib/types"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video">
        <Image
          src={course.thumbnail || "/placeholder.svg?height=200&width=400"}
          alt={course.title}
          fill
          className="object-cover"
        />
        {course.featured && <Badge className="absolute top-2 right-2 bg-orange-500">Featured</Badge>}
      </div>
      <CardHeader>
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="text-emerald-700 border-emerald-200 bg-emerald-50">
            {course.category}
          </Badge>
          <div className="flex items-center text-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-1"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
        </div>
        <h3 className="font-bold text-lg mt-2">{course.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm line-clamp-2">{course.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src={course.instructor.avatar || "/placeholder.svg?height=32&width=32"}
              alt={course.instructor.name}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-sm font-medium">{course.instructor.name}</span>
        </div>
        <div className="text-orange-500 font-bold">${course.price}</div>
      </CardFooter>
    </Card>
  )
}
