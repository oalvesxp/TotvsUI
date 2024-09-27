import NextAuth from 'next-auth/next'
import CredentialProvider from 'next-auth/providers/credentials'
import { TokenSVC } from './tokenSVC'
import { UserSVC } from './userSVC'
import { NextResponse } from 'next/server'

export const authOptions = {
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Insira seu usuário',
          type: 'text',
          placeholder: 'Ex: sp01\\nome.sobrenome',
        },
        password: { label: 'Insira sua senha', type: 'password' },
      },
      async authorize(credentials) {
        /** Autenticando o usuário */
        const res = await TokenSVC.get(
          `${process.env.TOTVS_API_URL}/api/oauth2/v1/token`,
          credentials?.username,
          credentials?.password
        )

        console.log(res)

        const tokens = await res.json()
        if (!res.ok && tokens.code !== 201) return null

        /** Salvando os Tokens do usuário nos Cookies */
        TokenSVC.save(NextResponse, tokens.access_token, tokens.refresh_token)

        const data = await UserSVC(
          `${process.env.TOTVS_API_URL}/api/framework/v1/users/`,
          tokens.access_token
        )

        return {
          id: data.items.id,
          username: data.items.userName,
          name: data.items.displayName,
          department: data.items.department,
          active: data.items.active,
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id
        token.username = user.username
        token.name = user.name
        token.department = user.department
        token.active = user.active
        token.access_token = user.access_token
        token.refresh_token = user.refresh_token
      }

      return token
    },
    async session({ session, token }: any) {
      session.user.id = token.id
      session.user.username = token.username
      session.user.name = token.name
      session.user.department = token.department
      session.user.active = token.active
      session.user.access_token = token.access_token
      session.user.refresh_token - token.refresh_token

      return session
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
