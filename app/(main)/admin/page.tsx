import { Button } from "@/components/ui/button"
import { getServerSession } from "@/lib/getServerSession"
import { unauthorized } from "next/navigation"

export default async function AdminPage() {
  const session = await getServerSession()

  if (!session?.user) {
    return unauthorized()
  }

  if (session.user.role !== "admin") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="flex max-w-md flex-col items-center gap-4 rounded-lg border bg-card p-8 text-center shadow-sm">
          <h1 className="text-lg font-semibold text-foreground">
            Admin access required
          </h1>

          <p className="text-sm text-muted-foreground">
            You don’t have admin permissions yet.  
            You can apply for admin access below.
          </p>

          <Button className="mt-2">
            Apply for access
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="rounded-lg border bg-card p-8 shadow-sm">
        <h1 className="text-xl font-semibold text-foreground">
           You have admin access
        </h1>
      </div>
    </div>
  )
}
