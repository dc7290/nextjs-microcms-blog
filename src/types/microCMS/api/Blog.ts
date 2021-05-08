import { MicroCMSCommonValue } from '../Common'
import { Image, RichEdit, TextField } from '../Sceme'

import { Author } from './Author'
import { Category } from './Category'
import { Partner } from './Partner'

export type Blog = {
  title: TextField
  category: Category
  toc_visible: boolean
  body: RichEdit
  description: TextField
  ogimage: Image
  writer: Author | null
  partner: Partner | null
  related_blogs: Blog[]
} & MicroCMSCommonValue
