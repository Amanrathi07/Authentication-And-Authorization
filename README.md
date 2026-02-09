# Authentication & Authorization System

A modern, production-ready authentication system built with Next.js, Better Auth, and Prisma. Features email/password auth, OAuth (Google & GitHub), email verification, password reset, and role-based access control.

## ✨ Features

- 🔐 Email & Password Authentication
- 🌐 Google & GitHub OAuth
- ✉️ Email Verification
- 🔑 Password Reset Flow
- 👥 Role-Based Access Control (User/Admin)
- 🛡️ Protected Routes 
- 📱 Responsive Modern UI
- 🔒 Secure Session Management

## 🛠️ Tech Stack

- **Runtime:** Bun
- **Framework:** Next.js 14+ (App Router)
- **Auth:** Better Auth
- **Database:** Prisma ORM + PostgreSQL
- **Email:** Nodemailer
- **Language:** TypeScript

## 🚀 Quick Start

### Prerequisites

- Bun >= 1.0.0
- PostgreSQL database
- Google & GitHub OAuth apps

### Installation

```bash
# Clone repository
git clone https://github.com/Amanrathi07/Authentication-And-Authorization.git
cd Authentication-And-Authorization

# Install dependencies
bun install

# Setup environment variables
cp .env.example .env
# Edit .env.local with your credentials

# Setup database
bun run prisma generate
bun run prisma migrate dev

# Run development server
bun run dev
```

Visit `http://localhost:3000`

## 🔧 Environment Variables

```env
# Database
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/mydatabase"

# Better Auth
BETTER_AUTH_SECRET=""
BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# GitHub OAuth
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# Email (SMTP)
EMAIL=""
EMAIL_PASS=""
```

### OAuth Setup

**Google OAuth:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 credentials
3. Add redirect URI: `http://localhost:3000/api/auth/callback/google`

**GitHub OAuth:**
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create OAuth App
3. Set callback URL: `http://localhost:3000/api/auth/callback/github`

## 📝 Available Scripts

```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server


## 📁 Project Structure

```
app/
├── (auth)/          # Auth pages (login, register, etc.)
├── (protected)/     # Protected routes
├── api/auth/        # Auth API endpoints
components/
├── auth/            # Auth components
├── ui/              # UI components
lib/
├── auth.ts          # Better Auth configuration
├── prisma.ts        # Prisma client
prisma/
├── schema.prisma    # Database schema
middleware.ts        # Route protection
```

## 👨‍💻 Author

**Aman Rathi**
- GitHub: [@Amanrathi07](https://github.com/Amanrathi07)

---

#todo , last used 
#todo , admin hook

⭐ Star this repo if you find it helpful!
