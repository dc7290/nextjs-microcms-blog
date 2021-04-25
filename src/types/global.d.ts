interface Window {
  gtag(
    type: 'config',
    googleAnalyticsId: string,
    options: {
      page_path: string
    }
  )
}
