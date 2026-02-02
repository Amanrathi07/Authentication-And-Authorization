"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

export function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function formHandel() {
    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL:"/dashboard"
      },
      {
        onSuccess: () => {
          toast.success("sign-in successful");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "somthing went wrong");
        },
      },
    );
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      <div className="flex flex-col gap-4 absolute">
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
       <div className="flex flex-col gap-0">
         <Input 
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
          <span className="scale-70 cursor-pointer underline relative ml-34 "  >forget password</span>
       </div>

        <Button onClick={formHandel}>signin</Button>
      </div>
    </div>
  );
}
