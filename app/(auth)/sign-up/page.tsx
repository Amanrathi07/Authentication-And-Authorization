import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { SignUpPage } from "./SignUpPage"



export  default async function SignUp() {

  const session = await auth.api.getSession({
    headers: await headers() 
  })

  if(session?.user){
    return redirect("/")
  }
  return <SignUpPage />
}