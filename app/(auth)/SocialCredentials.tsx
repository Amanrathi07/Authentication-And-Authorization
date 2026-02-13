"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export function SocialCredentials() {
  const lastMethod = authClient.getLastUsedLoginMethod();
  async function socialHandel(provider: "google" | "github") {
    await authClient.signIn.social(
      {
        provider,
        callbackURL: "/dashboard",
      },
      {
        onError: (error) => {
          toast.error(
            error.error.message || "Something went wrong. Please try again.",
          );
        },
        onSuccess: () => {
          toast.success("Signed in successfully.");
        },
      },
    );
  }


  return (
    <div className="flex flex-col gap-3">
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => socialHandel("google")}
      >
        <FaGoogle className="h-4 w-4" />
        Continue with Google
        {lastMethod === "google" && <Badge  variant={"outline"} className="ml-2">Last used</Badge>}
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => socialHandel("github")}
      >
        <FaGithub className="h-4 w-4" />
        Continue with GitHub
        {lastMethod === "github" && <Badge  variant={"outline"} className="ml-2">Last used</Badge>}
      </Button>
    </div>
  );
}
