import { MicroCMSReqHeaders } from '../types/microCMS/Headers'

export const headers: MicroCMSReqHeaders = {
  'X-API-KEY': process.env.API_KEY ?? '',
}
