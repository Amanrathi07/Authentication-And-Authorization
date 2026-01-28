"use client";

import { User } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";

interface ProfileInformationProps{
    user:User;
}

export default function DashboardPage() {
    const {data: session, } = authClient.useSession();
  return (
    <TestOnly user={session?.user}/> 
  )
}

export function TestOnly({user}:ProfileInformationProps){
    console.log(user)
    return(
        <div>
            aman
        </div>
    )
}

                                                                