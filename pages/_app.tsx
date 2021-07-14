import '~/src/styles/reset.css'
import '~/src/styles/colors.css'
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
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            onLoad={() => {
              const script = document.createElement('script')
              script.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });`
              document.body.appendChild(script)
            }}
          />
        </>
      )}
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
        integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
        crossOrigin="anonymous"
      />
    </>
  )
}

export default MyApp
