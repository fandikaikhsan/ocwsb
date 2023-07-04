export interface VideoComponentType {
  source: string
}
export interface ListGaleryComponentType {
  values: ListGaleryValueType[]
  page: string
  clickable?: boolean
  paddingx?: number
  paddingy?: number
  textposition?: string
  textdesktopsize?: string
  type?: "default" | "wide"
}

export interface ListGaleryValueType {
  id?: number
  name: string
  image: string
  path?: string
}

export interface ImageCardSliderType {
  images: ImageCardType[]
}

export interface ImageCardType {
  id: number
  title: string
  image: string
  path?: string
}
