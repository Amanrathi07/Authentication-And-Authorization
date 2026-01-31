"use server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: "amanrathi4321@gmail.com",
    pass: "qbqp izhv qegg qlnq",
  },
});

interface props{
  to: string ;
  text? : string ; 
  url? : string ;
}

export async function sendEmail({to,text}:props){
    await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: `${to}`,
    subject: "Email Verification",
    text: `${text}`, 
  });

}
