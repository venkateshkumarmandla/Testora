import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
    console.log("Token from cookies:", token)

  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!)
    return NextResponse.json({ user })
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}
