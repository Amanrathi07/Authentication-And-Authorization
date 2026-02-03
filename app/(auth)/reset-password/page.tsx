"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

export default function page() {
    const [password,setPassword] = useState("")
    const [confPassword,setConfPassword] = useState("")

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    async function onSubmit() {
        if(password!==confPassword) return
        if(!token) return 

       const {error}=await authClient.resetPassword({
          newPassword:password,
          token ,          
        })
        if(error){
          toast.error(error.message || "somthing went worng")
        }else{
          toast.success("password reset sussesful") ;
          useRouter().push("/sign-in")
        }

        
    }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <Input placeholder="set new password " onChange={(e)=>setPassword(e.target.value)}/>
         <Input placeholder="conferm new password " onChange={(e)=>setConfPassword(e.target.value)}/>
          <Button onClick={onSubmit}>reset password</Button>
        </div>
    </div>
  )
}
