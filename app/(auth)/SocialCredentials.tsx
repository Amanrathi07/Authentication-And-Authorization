"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { Chrome, Github } from "lucide-react";

export function SocialCredentials() {

  async function socialHandel(provider: "google" | "github") {
    await authClient.signIn.social(
      {
        provider,
        callbackURL: "/dashboard",
      },
      {
        onError: (error) => {
          toast.error(
            error.error.message || "Something went wrong. Please try again."
          );
        },
        onSuccess: () => {
          toast.success("Signed in successfully.");
        },
      }
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => socialHandel("google")}
      >
        <Chrome className="h-4 w-4" />
        Continue with Google
      </Button>

      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => socialHandel("github")}
      >
        <Github className="h-4 w-4" />
        Continue with GitHub
      </Button>
    </div>
  );
}
