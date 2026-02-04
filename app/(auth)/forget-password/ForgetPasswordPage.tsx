"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function ForgetPasswordPage() {
    const [email, setEmail] = useState("");
    const router = useRouter()
    async function onSubmit(){
        const {} = await authClient.requestPasswordReset({
            email,
            redirectTo:"/reset-password"
        },{
          onSuccess:()=>{
            toast.success("email is send to registered email");
            setTimeout(() => {
              router.push('/sign-in')
            }, 2000);
          },
          onError:(error)=>{
            toast.error(error.error.message || "somthing gone wrong pls try again ")
          }
        })
    }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-8 flex flex-col gap-3">
        <Input 
          placeholder=" Enter your email for password reset"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={onSubmit}>Send rest link</Button>
      </div>
    </div>
  );
}
