import NextAuth from 'next-auth/next'
import CredentialProvider from 'next-auth/providers/credentials'
import { TokenSVC, UserSVC } from './sessionSVC'

export const authOptions = {
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        const username = credentials?.username
        const password = credentials?.password

        /** API oAuth: /api/oauth2/v1/token */
        const tokenRES = await TokenSVC.get(username, password)
        const tokens = await tokenRES.json()

        /** API users: /api/framework/v1/users */
        const dataRES = await UserSVC.get(tokens.access_token)
        const data = await dataRES.json()

        /** Mapeando dados do user totvs */
        return {
          id: data.items[0].id,
          name: data.items[0].displayName,
          username: data.items[0].userName,
          department: data.items[0].department,
          active: data.items[0].active,
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      /** Sobrescrevendo o user padrão */
      const totvs = user as unknown as any

      if (user) {
        /** Mapeando os dados do Token */
        return {
          ...token,
          id: totvs.id,
          name: totvs.name,
          username: totvs.username,
          department: totvs.department,
          active: totvs.active,
          access_token: totvs.access_token,
          refresh_token: totvs.refresh_token,
        }
      }

      return token
    },
    session: async ({ session, token }: any) => {
      /** Mapeando os dados da Session */
      return {
        ...session,
        user: {
          id: token.id,
          name: token.name,
          username: token.username,
          department: token.department,
          active: token.active,
        },
        tokens: {
          access_token: token.access_token,
          refresh_token: token.refresh_token,
        },
      }
    },
  },
  pages: {
    signIn: '/',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
