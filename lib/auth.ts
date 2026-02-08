import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// import { sendEmail } from "@/nodemailer/resendEmal"; //for resend

import { sendEmail } from "@/nodemailer/transporter"; //for nodemon


const pool = new PrismaPg({connectionString:process.env.DATABASE_URL!})
const prisma = new PrismaClient({adapter:pool});
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: { 
    enabled: true, 
    sendResetPassword: async ({ user, url} ) => {
            await sendEmail({
                to: user.email,
                url: url,
                subject:"password reset",
                text:"click to reset the password"
            })
        }
  },
  emailVerification :{
    // sendOnSignUp:true,  
    autoSignInAfterVerification:true,
    async sendVerificationEmail({ user, url }) {
        await sendEmail({
          to: user.email,
          url: url ,
          subject:"Email Verification",
          text:"click to verify your email "
        })
}
  },
  user:{
    additionalFields:{
      role:{
        type:"string",
        input:false
      }
    }
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
         github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        }, 
    },
});

export type Session = typeof auth.$Infer.Session ;
export type User = typeof auth.$Infer.Session.user ;
