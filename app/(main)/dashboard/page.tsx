
import { redirect } from "next/navigation"
import DashboardPage from "./DashboardPage"
import { getServerSession } from "@/lib/getServerSession";


export default async function page() {
        const session = await getServerSession();
    
    if(!session?.user){
        return redirect("/sign-in")
    }
  return (
    <DashboardPage />
  )
}
