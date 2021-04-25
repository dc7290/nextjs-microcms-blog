import { MicroCMSCommonValue } from '../Common'
import { Image, TextArea, TextField } from '../Sceme'

export type Author = {
  name: TextField
  text: TextArea
  image: Image
} & MicroCMSCommonValue
