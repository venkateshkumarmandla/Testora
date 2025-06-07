import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const isAuthenticated = !!token

  // Paths that require authentication
  const authRoutes = ["/dashboard", "/profile", "/my-courses"]
  const isAuthRoute = authRoutes.some((route) => req.nextUrl.pathname.startsWith(route))

  // Paths that are only for unauthenticated users
  const publicAuthRoutes = ["/login", "/signup", "/forgot-password"]
  const isPublicAuthRoute = publicAuthRoutes.some((route) => req.nextUrl.pathname.startsWith(route))

  // Redirect authenticated users away from login/signup pages
  if (isAuthenticated && isPublicAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  // Redirect unauthenticated users to login
  if (!isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/my-courses/:path*", "/login", "/signup", "/forgot-password"],
}
