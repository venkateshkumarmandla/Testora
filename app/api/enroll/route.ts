import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (
      !session ||
      !session.user ||
      !(session.user as { id?: string }).id
    ) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { courseId } = await req.json()

    if (!courseId) {
      return new NextResponse("Course ID is required", { status: 400 })
    }

    // Check if course exists
    const course = await db.course.findUnique({
      where: {
        id: courseId,
        published: true,
      },
    })

    // Check if user is already enrolled
    const existingEnrollment = await db.enrollment.findFirst({
      where: {
        userId: (session.user as { id: string }).id,
        courseId,
      },
    })

    // Create enrollment
    const enrollment = await db.enrollment.create({
      data: {
        userId: (session.user as { id: string }).id,
        courseId,
      },
    })

    return NextResponse.json(enrollment)
  } catch (error) {
    console.error("[ENROLL_POST]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
