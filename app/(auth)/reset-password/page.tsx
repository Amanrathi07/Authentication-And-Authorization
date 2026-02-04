"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  async function onSubmit() {
    if (!password || !confPassword) {
      toast.error("Please fill in both password fields.");
      return;
    }

    if (password !== confPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!token) {
      toast.error("Invalid or expired reset link.");
      return;
    }

    const { error } = await authClient.resetPassword({
      newPassword: password,
      token,
    });

    setPassword("");
    setConfPassword("");

    if (error) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } else {
      toast.success("Your password has been reset successfully.");
      setTimeout(() => {
        router.push("/sign-in");
      }, 1000);
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-4 rounded-lg border bg-card p-8 shadow-sm">
        
        <div className="text-center space-y-1">
          <h1 className="text-xl font-semibold">Reset your password</h1>
          <p className="text-sm text-muted-foreground">
            Enter your new password below.
          </p>
        </div>

        <Input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Confirm new password"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />

        <Button className="w-full" onClick={onSubmit}>
          Reset password
        </Button>
      </div>
    </div>
  );
}
