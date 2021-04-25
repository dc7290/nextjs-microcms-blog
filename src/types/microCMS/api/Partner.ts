import { MicroCMSCommonValue } from '../Common'
import { Image, TextField } from '../Sceme'

export type Partner = {
  company: TextField
  url: TextField
  description: TextField
  logo: Image
} & MicroCMSCommonValue
