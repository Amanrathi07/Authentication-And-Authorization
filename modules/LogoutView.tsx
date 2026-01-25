"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";



export default function LogoutView() {

    const router = useRouter()

    async function logoutHandel(){
        await authClient.signOut({
            fetchOptions:{
                onSuccess:()=>{
                    alert("logout sussesful")
                    router.push("/sign-in")
                },
                onError:()=>{
                    alert("somthing went worng")
                }
            }
        })
    }

  return (
        <Button onClick={logoutHandel} variant={"destructive"}>logout</Button>
  )
}
