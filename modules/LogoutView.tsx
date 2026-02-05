"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



export default function LogoutView() {

    const router = useRouter()

    async function logoutHandel(){
        await authClient.signOut({
            fetchOptions:{
                onSuccess:()=>{
                    toast.success("logout sussesful")
                    router.push("/sign-in")
                    router.refresh()
                },
                onError:({error})=>{
                    toast.error(error.message || "somthing went worng")
                }
            }
        })
    }

  return (
        <Button onClick={logoutHandel} variant={"destructive"}>logout</Button>
  )
}
