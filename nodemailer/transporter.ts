"use server"
import nodemailer from "nodemailer"



const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
    auth: {
      user:process.env.EMAIL,
      pass:process.env.EMAIL_PASS
    },
});

interface props{
  to?: string ;
  text? : string ; 
  url? : string ;
}

export async function sendEmail({to,text}:props){
    await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: `${to}`,
    subject: "Email Verification",
    html:`click to verify your email <a href="${text}">click me</a>`
  });

}
