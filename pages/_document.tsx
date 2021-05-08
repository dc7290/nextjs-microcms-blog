import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_ID } from '~/src/utils/gtag'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {GA_ID !== undefined && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '${GA_ID}', {
                            page_path: window.location.pathname,
                          });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
            integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
            crossOrigin="anonymous"
            async
          ></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
