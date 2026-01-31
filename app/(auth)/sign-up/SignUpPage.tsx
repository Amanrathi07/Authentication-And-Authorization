"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function SignUpPage() {
  const [loading,setLoading] = useState<boolean>(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter();

  async function formHandel() {
    try {
      setLoading(true)
      await authClient.signUp.email(
      {
        name,
        email,
        password,
        callbackURL:"/dashboard"
      },
      {
        onSuccess: () => {
          toast.success("sign-up successful");
          router.push("/dashboard")
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      },
    );
    } catch (error) {
      toast.error("internal server error")
    }finally{
      setLoading(false);
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-4">
        <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button disabled={loading} onClick={formHandel}>create user</Button>
      </div>
    </div>
  );
}
