import { Resend } from 'resend';

interface props {
  to: string;
  text: string;
  url: string;
  subject: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, url, text, subject }: props){
    await resend.emails.send({
        from:"onboarding@resend.dev",
        to,
        subject,
        text:`pls click ${url}`

    })
}