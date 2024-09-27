import NextAuth from 'next-auth/next'
import CredentialProvider from 'next-auth/providers/credentials'
import { TokenSVC } from './tokenSVC'

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

        if (!res.ok) {
          console.log('[FETCH TOKEN FAIL]', res.status, res.statusText)
          return null
        }

        const user = await res.json()
        console.log('[TOKENS]', user)

        return user
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      const totvs = user as unknown as any

      if (user) {
        return {
          ...token,
          access_token: totvs.access_token,
          refresh_token: totvs.refresh_token,
        }
      }

      return token
    },
    session: async ({ session, token }: any) => {
      return {
        ...session,
        user: {},
        tokens: {
          access_token: token.access_token,
          refresh_token: token.refresh_token,
        },
      }
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
