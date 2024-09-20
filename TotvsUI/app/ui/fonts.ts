import { Lato, Inter } from 'next/font/google'

/** Fonte Primária */
export const lato = Lato({
  weight: ['100', '300', '400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
})

/** Fonte Secundária */
export const inter = Inter({ subsets: ['latin'] })
