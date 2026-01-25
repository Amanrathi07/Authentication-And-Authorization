import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { SignInPage } from "./SignInPage"



export default async function SignIn() {
  const session = await auth.api.getSession({
     headers: await headers() 
   })
 
   if(session?.user){
     return redirect("/")
   }
   return <SignInPage />
}