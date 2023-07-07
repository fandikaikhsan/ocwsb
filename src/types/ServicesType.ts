import { ListGaleryValueType } from "./CommonType"
import { ImageCardType } from "./CommonType"

export interface ServicesPageType {
  title: string
  short_desc: string
  description: string
  services: ListGaleryValueType[]
  video: {
    title: string
    url: string
  }
  locale?: string
}

export interface ServiceDetailPageType {
  title: string
  short_desc: string
  description: string
  image: ImageCardType[]
  specification: string
}
