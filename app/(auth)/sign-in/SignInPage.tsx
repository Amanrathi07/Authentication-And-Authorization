"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { SocialCredentials } from "../SocialCredentials";

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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  <div className="flex w-full max-w-sm flex-col gap-4">
    
    <Input
      placeholder="email"
      onChange={(e) => setEmail(e.target.value)}
    />

    <div className="flex flex-col gap-1">
      <Input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex justify-end">
        <Link
          href="/forget-password"
          className="text-xs underline cursor-pointer"
        >
          forget password
        </Link>
      </div>
    </div>

    <Button onClick={formHandel}>signin</Button>

    <div className="pt-4">
      <SocialCredentials />
    </div>

  </div>
  <div>
          alrady have an account <Link href="/sign-up">sign-up</Link>
        </div>
</div>

  );
}
