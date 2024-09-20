import Head from 'next/head'
import Layout from '../app/layout'
import ResetCSS from '../src/theme/ResetCSS'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <ResetCSS />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
