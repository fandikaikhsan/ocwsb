export interface VideoComponentType {
  source: string
}
export interface ListGaleryComponentType {
  values: ListGaleryValueType[]
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
  path: string
}
