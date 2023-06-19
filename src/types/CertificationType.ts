export interface CertificationPageType {
  title: string
  description: string
  certifications: CertificationType[]
}

export interface CertificationCardSliderType {
  id?: number
  certifications: CertificationType[]
}

export interface CertificationType {
  id: number
  name: string
  image: string
}
