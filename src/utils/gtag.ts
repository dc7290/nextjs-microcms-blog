export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

export const pageview = (path: string) => {
  if (GA_ID !== undefined) {
    window.gtag('config', GA_ID, {
      page_path: path,
    })
  }
}
