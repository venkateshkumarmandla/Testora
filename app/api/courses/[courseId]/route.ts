import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET(req: Request, { params }: { params: { courseId: string } }) {
  try {
    if (!params.courseId) {
      return new NextResponse("Course ID is required", { status: 400 })
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
      },
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        category: true,
        lessons: {
          orderBy: {
            order: "asc",
          },
        },
      },
    })

    return NextResponse.json(course)
  } catch (error) {
    console.error("[COURSE_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: { params: { courseId: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { title, description, price, categoryId, thumbnail, published } = await req.json()

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
      },
    })

    if (!course) {
      return new NextResponse("Course not found", { status: 404 })
    }

    if (course.instructorId !== session.user.id && session.user.role !== "ADMIN") {
      return new NextResponse("Forbidden", { status: 403 })
    }

    const updatedCourse = await db.course.update({
      where: {
        id: params.courseId,
      },
      data: {
        title,
        description,
        price: price ? Number.parseFloat(price) : undefined,
        categoryId,
        thumbnail,
        published,
        slug: title ? title.toLowerCase().replace(/ /g, "-") : undefined,
      },
    })

    return NextResponse.json(updatedCourse)
  } catch (error) {
    console.error("[COURSE_PATCH]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { courseId: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
      },
    })

    if (!course) {
      return new NextResponse("Course not found", { status: 404 })
    }

    if (course.instructorId !== session.user.id && session.user.role !== "ADMIN") {
      return new NextResponse("Forbidden", { status: 403 })
    }

    await db.course.delete({
      where: {
        id: params.courseId,
      },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error("[COURSE_DELETE]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
