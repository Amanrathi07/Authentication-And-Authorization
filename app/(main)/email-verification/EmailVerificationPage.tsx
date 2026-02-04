"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function EmailVerificationPage() {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [loading, setLoading] = useState(false);

  async function handleEmail() {
    if (!user?.email) {
      toast.error("No email address found for this account.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await authClient.sendVerificationEmail({
        email: user.email,
        callbackURL: "/dashboard",
      });

      if (error?.message) {
        toast.error(error.message);
      } else {
        toast.success("Verification email sent. Please check your inbox.");
      }
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-4 dark:bg-zinc-900">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
            <span className="text-2xl">📧</span>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight">
            Verify your email address
          </h1>

          <p className="text-sm text-muted-foreground">
            We’ll send a verification link to your email.
          </p>
        </div>

        {/* Email */}
        <div className="rounded-lg bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          {user?.email ?? "Email address not available"}
        </div>

        {/* Action */}
        <Button
          onClick={handleEmail}
          className="h-11 w-full rounded-xl"
          disabled={loading || !user?.email}
        >
          {loading ? "Sending email…" : "Send verification email"}
        </Button>

        {/* Footer text */}
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          Check your inbox and spam folder after sending.
        </p>
      </div>
    </div>
  );
}
