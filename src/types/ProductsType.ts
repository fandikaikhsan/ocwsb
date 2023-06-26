import { ListGaleryValueType } from "./CommonType"
import { ImageCardType } from "./CommonType"

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

export interface ProductDetailPageType {
  title: string
  short_desc: string
  description: string
  image: ImageCardType[]
  specification: string
}
