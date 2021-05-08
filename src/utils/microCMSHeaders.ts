import { MicroCMSReqHeaders } from '../types/microCMS/Headers'

if (process.env.API_KEY === undefined) {
  throw Error('envファイルにAPI_KEYを設定してください。')
}

export const headers: MicroCMSReqHeaders = {
  'X-API-KEY': process.env.API_KEY,
}
