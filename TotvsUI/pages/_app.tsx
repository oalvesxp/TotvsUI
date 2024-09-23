import Head from 'next/head'
import '../app/globals.css'
import ResetCSS from '../src/theme/ResetCSS'
import { StrictMode } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ResetCSS />
      <StrictMode>
        <Component {...pageProps} />
      </StrictMode>
    </>
  )
}
