"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export function SocialCredentials() {

  async function socialHandel(provider:"google"|"github") {
    await authClient.signIn.social({
        provider: provider,
        callbackURL:"/dashboard"
      },{
        onError:(error)=>{
          toast.error(error.error.message)
        },
        onSuccess:()=>{
          toast.success("geting data successful ")
        }
      });
  }

  return (
    <div className="flex gap-10 items-center justify-around">
      <Button onClick={()=>socialHandel("google")}>google</Button>
      <Button onClick={()=>socialHandel("github")}>github</Button>
    </div>
  )
}
