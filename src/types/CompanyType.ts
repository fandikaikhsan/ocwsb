export interface CompanyPageType {
  title: string
  description: string
  video: string
  portofolios: PortofolioCardType[]
}

export interface PortofolioCardSliderType {
  id?: number
  portofolios: PortofolioCardType[]
}

export interface PortofolioCardType {
  id?: number
  title: string
  image: string
  short_desc: string
  path?: string
}
