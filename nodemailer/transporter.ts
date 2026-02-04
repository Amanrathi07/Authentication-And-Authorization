"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

interface props {
  to?: string;
  text?: string;
  url?: string;
  subject?: string;
}

export async function sendEmail({ to, url, text, subject }: props) {
  await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: `${to}`,
    subject: `${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <div style="background-color: #4f46e5; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">${subject}</h1>
          </div>

          <div style="padding: 20px; color: #1f2937; line-height: 1.6; font-size: 16px;">
            <p>${text}</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${url}" 
                 style="background-color: #4f46e5; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; display: inline-block; font-weight: bold;">
                Click Here
              </a>
            </div>
            <p style="font-size: 14px; color: #6b7280;">If you didn’t request this, you can safely ignore this email.</p>
          </div>

          <div style="background-color: #f3f4f6; text-align: center; padding: 10px; font-size: 12px; color: #9ca3af;">
            &copy; 2026 Maddison Foo Koch. All rights reserved.
          </div>

        </div>
      </div>
    `,
  });
}
