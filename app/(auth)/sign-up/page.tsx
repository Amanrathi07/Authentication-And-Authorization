import { redirect } from "next/navigation"
import { SignUpPage } from "./SignUpPage"
import { getServerSession } from "@/lib/getServerSession";



export  default async function SignUp() {

    const session = await getServerSession();
  

  if(session?.user){
    return redirect("/")
  }
  return <SignUpPage />
}