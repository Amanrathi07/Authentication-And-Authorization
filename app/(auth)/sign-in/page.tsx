import { redirect } from "next/navigation"
import { SignInPage } from "./SignInPage"
import { getServerSession } from "@/lib/getServerSession"



export default async function SignIn() {
  const session = await getServerSession();
 
   if(session?.user){
     return redirect("/")
   }
   return <SignInPage />
}