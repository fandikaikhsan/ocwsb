import { ListGaleryValueType } from "./CommonType"

export interface ServicesPageType {
  title: string
  short_desc: string
  description: string
  services: ListGaleryValueType[]
  video: {
    title: string
    url: string
  }
}
