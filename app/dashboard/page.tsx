import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import DashboardPage from "./DashboardPage"


export default async function page() {
    const session =await auth.api.getSession({
        headers:await headers(),
    })
    if(!session?.user){
        return redirect("/sign-in")
    }
  return (
    <DashboardPage />
  )
}
