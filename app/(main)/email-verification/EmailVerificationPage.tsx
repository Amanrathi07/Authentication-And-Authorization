"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { sendEmail } from "@/nodemailer/transporter";
import toast from "react-hot-toast";

export default function EmailVerificationPage() {
    const {data : {user}} = authClient.useSession();
    console.log(user.emailVerified)
  return (
   
     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Button onClick={()=>sendEmail()}>SendEmail</Button>
    </div>
  )
}
