import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
// @ts-ignore
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!; // Make sure to set this in your .env

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const user = await db.user.findUnique({
      where: { email },
    });

    if (
      !user ||
      !user.password ||
      !(await bcrypt.compare(password, user.password))
    ) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "7d",
    });
const response = new NextResponse(
  JSON.stringify({ message: "Login successful" }),
  { status: 200, headers: { "Content-Type": "application/json" } }
);

response.cookies.set("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 days
});

return response;

  } catch (error) {
    console.error("[LOGIN_POST]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
