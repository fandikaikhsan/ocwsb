"use client"
import CertificationPage from "@/components/pages/CertificationPage"
import { useTranslations } from "next-intl"

async function getCertification(lang: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/certification`,
    {
      cache: "no-cache",
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch Certification data.")
  }

  return res.json()
}

export default async function Certification() {
  const t = useTranslations("data")
  const lang = t("Locale")
  const fetch = await getCertification(lang)

  return (
    <CertificationPage
      title={fetch.data.title}
      description={fetch.data.description}
      certifications={fetch.data.certifications}
      locale={lang}
    />
  )
}