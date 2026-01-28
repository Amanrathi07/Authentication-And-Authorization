"use client";

import { User } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ProfileInformationProps {
  user: User;
}

export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending || !session?.user) {
    return <ProfileSkeleton />;
  }

  return <ProfileCard user={session.user} />;
}

/* ----------------------------- */
/* Profile Card */
/* ----------------------------- */

function ProfileCard({ user }: ProfileInformationProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-black">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="text-lg font-semibold">
              {user.name?.[0]?.toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>

          <div>
            <CardTitle className="text-lg">{user.name}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-4 pt-4">
          <InfoRow
            label="Email status"
            value={
              <Badge variant={user.emailVerified ? "default" : "secondary"}>
                {user.emailVerified ? "Verified" : "Not verified"}
              </Badge>
            }
          />

          <InfoRow
            label="Role"
            value={
              <Badge variant="outline" className="capitalize">
                {user.role}
              </Badge>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}

/* ----------------------------- */
/* Reusable row */
/* ----------------------------- */

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}

/* ----------------------------- */
/* Skeleton */
/* ----------------------------- */

function ProfileSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-black">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-48" />
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-4 pt-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </CardContent>
      </Card>
    </div>
  );
}
