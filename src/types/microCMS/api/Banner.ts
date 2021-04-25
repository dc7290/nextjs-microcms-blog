import { MicroCMSCommonValue } from '../Common'
import { Image, TextField } from '../Sceme'

export type Banner = {
  image: Image
  url: TextField
  alt: TextField
} & MicroCMSCommonValue
