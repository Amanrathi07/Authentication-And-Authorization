"use server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface props{
  to: string ;
  text : string ; 
  url? : string ;
}

export async function sendEmail({to,text}:props){
    await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: `${to}`,
    subject: "Hello ✔",
    text: `${text}`, 
  });

}
