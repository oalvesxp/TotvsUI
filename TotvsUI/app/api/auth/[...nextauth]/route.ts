import NextAuth from 'next-auth/next'
import CredentialProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
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
        const username = credentials?.username
        const password = credentials?.password

        const res = await fetch(
          `${process.env.TOTVS_API_URL}/api/oauth2/v1/token?grant_type=password&username=${username}&password=${password}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
          }
        )

        const user = await res.json()
        if (!res.ok && !user) return null

        return user
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
