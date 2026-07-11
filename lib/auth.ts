import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth"

import connect from '@/lib/mongoose';
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        try {

          console.log("Attempting to authorize user with email:", credentials?.email, credentials?.password);

          // MongoDB connection disabled - uncomment to re-enable
          // await connect()

          // const user = await User.findOne({ email: credentials?.email });

          // console.log(user)

          // if (user && user.password === credentials?.password) {
          //   return {
          //     id: user.id,
          //     name: user.name,
          //   }
          // }

          return null
        } catch(e) {
          console.log(`the error is ${e}`)
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id as string
      }
      return session
    }
  }
}