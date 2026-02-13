import { createAuthClient } from "better-auth/react"
import {inferAdditionalFields } from "better-auth/client/plugins"
import { auth } from "./auth"
import { lastLoginMethodClient } from "better-auth/client/plugins"
export const authClient = createAuthClient({
  plugins:[
    inferAdditionalFields<typeof auth>(), lastLoginMethodClient() 
  ]
})


export type Session = typeof authClient.$Infer.Session
export type User = typeof authClient.$Infer.Session.user ;