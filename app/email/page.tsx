"use client";

import { Button } from "@/components/ui/button";
import { sendEmail } from "@/nodemailer/transporter";

export default function Page() {

    function   hendelClick() {
        sendEmail()
    }

  return (
     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Button onClick={hendelClick}>SendEmail</Button>
    </div>
  )
}
