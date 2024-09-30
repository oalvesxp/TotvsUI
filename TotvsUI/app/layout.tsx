import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/providers/auth-provider'
import { NavLinks } from './ui/nav-links'

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
        <body className="h-full">
          <header className="w-full">
            <NavLinks />
          </header>
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  )
}
