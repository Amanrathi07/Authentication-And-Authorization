"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export function ForgetPasswordPage() {
    const [email, setEmail] = useState("");

    async function onSubmit(){
        const {} = await authClient.requestPasswordReset({
            email,
            redirectTo:"/reset-password"
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
