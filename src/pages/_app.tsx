import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/gobal-styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />.
    </>
  )
}

export default MyApp
