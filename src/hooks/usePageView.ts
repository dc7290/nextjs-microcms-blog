import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { GA_ID, pageview } from '~/src/utils/gtag'

const usePageView = () => {
  const router = useRouter()
  useEffect(() => {
    if (GA_ID === undefined) {
      return
    }

    const handleRouteChange = (path: string) => {
      pageview(path)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])
}

export default usePageView
