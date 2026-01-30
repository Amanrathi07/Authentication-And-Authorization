import { getServerSession } from "@/lib/getServerSession";
import { forbidden, unauthorized } from "next/navigation";

export default async function AdminPage() {
    const session= await getServerSession();
    if(!session?.user){
        return unauthorized()
    }
    if(session?.user.role!=="admin"){
        return forbidden();
    } 

  return (
    <div className="flex flex-col gap-6 min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-black">
            you have admin access
    </div>
  )
}
