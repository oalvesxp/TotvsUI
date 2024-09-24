import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="pt-br">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
