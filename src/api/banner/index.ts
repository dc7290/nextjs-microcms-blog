import { MicroCMSCaptionValue } from '~/src/types/microCMS/Common'
import { MicroCMSReqHeaders } from '~/src/types/microCMS/Headers'
import { MicroCMSGetSingularQuery } from '~/src/types/microCMS/Query'
import { Banner } from '~/src/types/microCMS/api/Banner'

export type Methods = {
  get: {
    resBody: {
      contents: Banner
    } & MicroCMSCaptionValue
    query?: MicroCMSGetSingularQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
