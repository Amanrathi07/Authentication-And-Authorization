"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { SocialCredentials } from "../SocialCredentials";
import Link from "next/link";

export function SignUpPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function formHandel() {
    try {
      setLoading(true);

      await authClient.signUp.email(
        {
          name,
          email,
          password,
          callbackURL: "/dashboard",
        },
        {
          onSuccess: () => {
            toast.success("Account created successfully.");
            router.push("/dashboard");
          },
          onError: (ctx) => {
            toast.error(
              ctx.error.message || "Something went wrong. Please try again."
            );
          },
        }
      );
    } catch {
      toast.error("Internal server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6 rounded-lg border bg-card p-8 shadow-sm">
        
        <div className="space-y-1 text-center">
          <h1 className="text-xl font-semibold">Create your account</h1>
          <p className="text-sm text-muted-foreground">
            Enter your details to get started.
          </p>
        </div>

        <Input
          placeholder="Full name"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button className="w-full" disabled={loading} onClick={formHandel}>
          {loading ? "Creating account…" : "Create account"}
        </Button>

        <SocialCredentials />

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline hover:text-foreground">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
