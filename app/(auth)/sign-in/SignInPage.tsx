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
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {
          toast.success("Signed in successfully.");
        },
        onError: (ctx) => {
          toast.error(
            ctx.error.message || "Something went wrong. Please try again."
          );
        },
      }
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6 rounded-lg border bg-card p-8 shadow-sm">
        
        <div className="space-y-1 text-center">
          <h1 className="text-xl font-semibold">Sign in to your account</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password below.
          </p>
        </div>

        <Input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="space-y-1">
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-end">
            <Link
              href="/forget-password"
              className="text-xs text-muted-foreground underline hover:text-foreground"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <Button className="w-full" onClick={formHandel}>
          Sign in
        </Button>

        <div className="pt-2">
          <SocialCredentials />
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="underline hover:text-foreground">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
