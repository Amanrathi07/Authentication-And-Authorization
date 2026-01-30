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


export async function sendEmail(){
    await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: "amanrathi4321@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

}
