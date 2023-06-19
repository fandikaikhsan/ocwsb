import { ListGaleryValueType } from "./CommonType"

export interface ProductsPageType {
  title: string
  short_desc: string
  description: string
  products: ListGaleryValueType[]
  video: {
    title: string
    url: string
  }
}
