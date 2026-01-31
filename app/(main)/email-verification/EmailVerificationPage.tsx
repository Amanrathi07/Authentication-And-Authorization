"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { sendEmail } from "@/nodemailer/transporter";
import toast from "react-hot-toast";

export default function EmailVerificationPage() {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [loading, setLoading] = useState(false);

  async function handleEmail() {
    if (!user?.email) return;
    try {
      setLoading(true);
    //   await sendEmail();
      toast.success("Email sent successfully");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-8 space-y-6">
        
        {/* Top Section */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="h-14 w-14 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <span className="text-2xl">📧</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Verify your email
          </h1>
          
        </div>

        {/* Email Display */}
        <div className="rounded-lg bg-zinc-50 dark:bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {user?.email || "No email found"}
        </div>

        {/* Action Button */}
        <Button
          onClick={handleEmail}
          className="w-full h-11 rounded-xl bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          disabled={loading || !user?.email}
        >
          {loading ? "Sending..." : "Send Verification Email"}
        </Button>

        {/* Optional Info */}
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          Check your inbox after clicking the button.
        </p>
      </div>
    </div>
  );
}
