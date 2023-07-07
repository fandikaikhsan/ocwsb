export interface HomePageType {
  homepage: {
    title_product: string
    title_service: string
    title_form: string
  }
  banners: HomeBannerType[]
  services: HomeServiceType[]
  products: HomeProductType[]
  locale?: string
}

export interface HomeBannerType {
  id: number
  position: number
  title: string
  subtitle: string
  image: string
  image_mobile: string
  cta: {
    text: string
    url: string
  }
}

export interface HomeServiceType {
  id: number
  position: number
  title: string
  desc_short: string
  desc: string
  image: string
  image_mobile: string
  cta: {
    text: string
    url: string
  }
}

export interface HomeProductType {
  id: number
  position: number
  title: string
  desc_title: string
  desc_short: string
  desc: string
  image: string
  image_mobile: string
  cta: {
    text: string
    url: string
  }
}
