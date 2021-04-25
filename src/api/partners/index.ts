import { MicroCMSCaptionValue } from '~/src/types/microCMS/Common'
import { MicroCMSReqHeaders } from '~/src/types/microCMS/Headers'
import { MicroCMSGetQuery } from '~/src/types/microCMS/Query'
import { Partner } from '~/src/types/microCMS/api/Partner'

export type Methods = {
  get: {
    resBody: {
      contents: Partner[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
