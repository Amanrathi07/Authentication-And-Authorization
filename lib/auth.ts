import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { sendEmail } from "@/nodemailer/transporter";


const pool = new PrismaPg({connectionString:process.env.DATABASE_URL!})
const prisma = new PrismaClient({adapter:pool});
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
     emailAndPassword: { 
    enabled: true, 
  },emailVerification :{
    sendOnSignUp:true,
    autoSignInAfterVerification:true,
    async sendVerificationEmail({ user, url }) {
        await sendEmail({
          to: user.email,
          text: url
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
  }
});

export type Session = typeof auth.$Infer.Session ;
export type User = typeof auth.$Infer.Session.user ;
