import type { Metadata } from 'next'
import { Header } from '@/components/header'
import './globals.css'
import { AuthProvider } from '@/providers/auth-provider'

export const metadata: Metadata = {
  title: {
    template: '%s | Totvs',
    default: 'Protheus',
  },
  description: 'Interface Web para consumir API de sistemas Totvs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body>
          <Header />
          <main className="h-full flex justify-center items-center">
            {children}
          </main>
        </body>
      </html>
    </AuthProvider>
  )
}
