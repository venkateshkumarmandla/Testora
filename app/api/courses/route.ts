import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const featured = searchParams.get("featured") === "true"
    const categoryId = searchParams.get("categoryId")
    const search = searchParams.get("search") || ""
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    const courses = await db.course.findMany({
      where: {
        published: true,
        featured: featured ? true : undefined,
        categoryId: categoryId || undefined,
        OR: search
          ? [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
            ]
          : undefined,
      },
      take: limit,
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        category: true,
      },
    })

    return NextResponse.json(courses)
  } catch (error) {
    console.error("[COURSES_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (
      !session.user ||
      !("role" in session.user) ||
      (session.user.role !== "INSTRUCTOR" && session.user.role !== "ADMIN") ||
      !("id" in session.user)
    ) {
      return new NextResponse("Forbidden", { status: 403 })
    }

    const { title, description, price, categoryId, thumbnail } = await req.json()

    if (!title || !description || !price || !categoryId) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    const course = await db.course.create({
      data: {
        title,
        description,
        price: Number.parseFloat(price),
        categoryId,
        thumbnail,
        instructorId: (session.user as { id: string }).id,
        slug: title.toLowerCase().replace(/ /g, "-"),
      },
    })

    return NextResponse.json(course)
  } catch (error) {
    console.error("[COURSES_POST]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
