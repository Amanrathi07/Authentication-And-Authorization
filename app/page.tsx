import { Button } from "@/components/ui/button"
import { auth } from "@/lib/auth"
import LogoutView from "@/modules/LogoutView"
import { Navbar } from "@/modules/Navbar"
import { headers } from "next/headers"
import Link from "next/link"

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session?.user) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4">
          <div className="flex flex-col items-center gap-4 rounded-lg border bg-card p-8 shadow-sm">
            <p className="text-sm text-muted-foreground">
              You are logged in as
            </p>

            <p className="text-lg font-semibold text-foreground">
              {session.user.name}
            </p>

            <LogoutView />
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex gap-6 rounded-lg border bg-card p-8 shadow-sm">
        <Button asChild>
          <Link href="/sign-up">Sign up</Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    </div>
  )
}
