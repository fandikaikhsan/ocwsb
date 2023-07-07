"use client"

import CompanyPage from "@/components/pages/CompanyPage"
import { useTranslations } from "next-intl"

async function getCompany(lang: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/company`,
    {
      cache: "no-cache",
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch Company data.")
  }
  return res.json()
}

export default async function Company() {
  const t = useTranslations("data")
  const lang = t("Locale")

  const fetch = await getCompany(lang)
  return (
    <CompanyPage
      title={fetch.data.title}
      description={fetch.data.description}
      video={fetch.data.video}
      portofolios={fetch.data.portofolios}
      locale={lang}
    />
  )
}
