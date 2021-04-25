import '~/src/styles/reset.css'
import '~/src/styles/colors.css'

import { AppProps } from 'next/app'

import usePageView from '~/src/hooks/usePageView'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  return <Component {...pageProps} />
}

export default MyApp
