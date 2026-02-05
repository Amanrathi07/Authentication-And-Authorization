import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

interface Props {
  user: {
    createdAt: Date
    updatedAt: Date
    email: string
    emailVerified: boolean
    name: string
    image?: string | null
    role: string
  }
}

export default function ProfilePage({ user }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center gap-3 text-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.image ?? undefined} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <CardTitle className="text-xl">{user.name}</CardTitle>

          <Badge variant="secondary" className="capitalize">
            {user.role}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium">{user.email}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Email verified</span>
              {user.emailVerified ? (
                <Badge variant="default">Verified</Badge>
              ) : (
                <Badge variant="destructive">Not verified</Badge>
              )}
            </div>
          </div>

          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Joined</span>
              <span>{user.createdAt.toLocaleDateString()}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Last updated</span>
              <span>{user.updatedAt.toLocaleDateString()}</span>
            </div>
          </div>

          <Separator />

          <div className="flex justify-end">
            <Button variant="outline">Edit Profile</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
