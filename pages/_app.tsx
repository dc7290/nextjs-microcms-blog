import '~/src/styles/reset.css'
import '~/src/styles/colors.css'
import 'lazysizes'
import 'highlight.js/styles/hybrid.css'

import { AppProps } from 'next/app'
import Script from 'next/script'

import usePageView from '~/src/hooks/usePageView'
import { GA_ID } from '~/src/utils/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <>
      <Component {...pageProps} />
      {GA_ID !== undefined && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <Script
            id="gtag"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', {
  page_path: window.location.pathname,
});`,
            }}
          />
        </>
      )}
    </>
  )
}

export default MyApp
