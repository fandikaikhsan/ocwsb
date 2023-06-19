export interface VideoComponentType {
  source: string
}
export interface ListGaleryComponentType {
  values: ListGaleryValueType[]
}

export interface ListGaleryValueType {
  id?: number
  title: string
  image: string
  path: string
}
