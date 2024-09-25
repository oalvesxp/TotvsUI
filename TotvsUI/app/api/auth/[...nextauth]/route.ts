import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'

const authOptions: NextAuthOptions = {
  providers: [],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
