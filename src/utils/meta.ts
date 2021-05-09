export const OG_TITLE = 'og:title'
export const DESCRIPTION = 'description'
export const OG_DESCRIPTION = 'og:description'
export const OG_TYPE = 'og:type'
export const OG_IMAGE = 'og:image'

export const domainName = ''

const title = ''

export const returnTitle = (pageTitle?: string) => {
  if (pageTitle !== undefined) {
    return `${pageTitle} | ${title}`
  } else {
    return title
  }
}
