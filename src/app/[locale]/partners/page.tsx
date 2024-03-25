"use client"

import PartnersPage from "@/components/pages/PartnersPage"
import { useTranslations } from "next-intl"

async function getPartner(lang: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/partner`,
    {
      cache: "no-cache",
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch Partner data.")
  }

  return res.json()
}

export default async function Partners() {
  const t = useTranslations("data")
  const lang = t("Locale")
  const fetch = await getPartner(lang)

  return (
    <>
      <PartnersPage
        title={fetch.data.title}
        description={fetch.data.description}
        partners={fetch.data.partners}
        locale={lang}
      />
    </>
  )
}
