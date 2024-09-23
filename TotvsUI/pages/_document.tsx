import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <>
      <Html lang="pt-br">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  )
}
