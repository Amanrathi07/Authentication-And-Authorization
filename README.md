# Authentication & Authorization

A production-ready authentication and authorization system built with modern tooling and best practices.

## ⚡ Stack

- **Runtime:** Bun  
- **Framework:** Next.js (App Router)  
- **Authentication:** Better Auth (session-based)  
- **Database:** Prisma ORM  
- **Email Services:** Nodemailer  
- **Language:** TypeScript  

---

## 🚀 Features

- ✅ Email & Password Authentication  
- 🔐 Secure Session-Based Auth (Better Auth)  
- 🧠 Role-Based Access Control (User / Admin)  
- 📧 Email Verification via Nodemailer  
- 🔁 Password Reset via Email  
- 🌐 OAuth Support (Google / GitHub)  
- 🗄 Prisma Database Integration  

---

## 📂 Project Structure
├── app/                  # Next.js App Router ├── components/           # UI components ├── lib/ │   ├── auth.ts           # Better Auth configuration │   ├── auth-client.ts    # Client-side auth hooks ├── prisma/ │   └── schema.prisma     # Database schema ├── nodemailer/ │   └── transporter.ts    # Email configuration ├── middleware.ts         # Route protection ├── .env.example └── package.json