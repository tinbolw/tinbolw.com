import { betterAuth } from "better-auth";

export const auth = betterAuth({
  baseURL: "https://tinbolw.com",
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }
  }
});