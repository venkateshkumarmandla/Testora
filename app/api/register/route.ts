// import { NextResponse } from "next/server"
// import { db } from "@/lib/db"
// import bcrypt from "bcryptjs"

// export async function POST(req: Request) {
//   try {
//     const { name, email, password } = await req.json()

//     if (!name || !email || !password) {
//       return new NextResponse("Missing required fields", { status: 400 })
//     }

//     // Check if user already exists
//     const existingUser = await db.user.findUnique({
//       where: {
//         email,
//       },
//     })

//     if (existingUser) {
//       return new NextResponse("User already exists", { status: 400 })
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10)

//     // Create user
//     const user = await db.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//       },
//     })

//     // Remove password from response
//     const { password: _, ...userWithoutPassword } = user

//     return NextResponse.json(userWithoutPassword)
//   } catch (error) {
//     console.error("[REGISTER_POST]", error)
//     return new NextResponse("Internal Error", { status: 500 })
//   }
// }



import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    console.error("[REGISTER_POST]", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
