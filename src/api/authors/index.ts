import { MicroCMSCaptionValue } from '~/src/types/microCMS/Common'
import { MicroCMSReqHeaders } from '~/src/types/microCMS/Headers'
import { MicroCMSGetQuery } from '~/src/types/microCMS/Query'
import { Author } from '~/src/types/microCMS/api/Author'

export type Methods = {
  get: {
    resBody: {
      contents: Author[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
