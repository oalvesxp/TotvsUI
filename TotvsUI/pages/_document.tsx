import { Html, Head, Main, NextScript } from 'next/document'
import { lato } from '../app/ui/fonts'

export default function Document() {
  return (
    <>
      <Html lang="pt-br">
        <Head />
        <body className={`${lato.className} antialiased`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  )
}
