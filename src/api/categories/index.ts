import { MicroCMSCaptionValue } from '~/src/types/microCMS/Common'
import { MicroCMSReqHeaders } from '~/src/types/microCMS/Headers'
import { MicroCMSGetQuery } from '~/src/types/microCMS/Query'
import { Category } from '~/src/types/microCMS/api/Category'

export type Methods = {
  get: {
    resBody: {
      contents: Category[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
