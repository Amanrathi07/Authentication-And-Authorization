"use client";

import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
    const {data: session, } = authClient.useSession();
    console.log(session?.user)
  return (
    <div>amana</div>
  )
}
