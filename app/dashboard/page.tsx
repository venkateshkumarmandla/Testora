import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  // Get user's enrollments
  const enrollments = await db.enrollment.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      course: {
        include: {
          instructor: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      updatedAt: "desc",
    },
  })

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome back, {session.user.name}!</CardTitle>
            <CardDescription>Here's an overview of your learning progress.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{enrollments.length}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {enrollments.filter((e) => e.status === "COMPLETED").length}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {enrollments.length > 0
                        ? `${Math.round(
                            enrollments.reduce((acc, curr) => acc + curr.progress, 0) / enrollments.length,
                          )}%`
                        : "0%"}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
                {enrollments.length > 0 ? (
                  <div className="grid gap-4">
                    {enrollments.map((enrollment) => (
                      <Card key={enrollment.id}>
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div>
                              <h3 className="font-semibold">{enrollment.course.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                Instructor: {enrollment.course.instructor.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-sm">Progress: {Math.round(enrollment.progress)}%</div>
                              <Link href={`/courses/${enrollment.course.id}`}>
                                <Button size="sm">Continue Learning</Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <h3 className="font-medium mb-2">You haven't enrolled in any courses yet</h3>
                    <p className="text-muted-foreground mb-4">Browse our catalog and start learning today!</p>
                    <Link href="/courses">
                      <Button>Explore Courses</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
