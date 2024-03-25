export interface ContactUsPageType {
  title: string
  description: string
  body: ContactUsBodySectionType
  cta_banner: ContactUsCTABannerType
  title_form: string
  locale?: string
}

export interface ContactUsBodySectionType {
  office_address: string
  workshop_address: string
  phone: string
  email: string
  locale?: string
}

export interface ContactUsCTABannerType {
  title: string
  image: string
  button_text: string
  path: string
}
