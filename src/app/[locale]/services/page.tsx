"use client"

import ServicesPage from "@/components/pages/ServicesPage"
import { useTranslations } from "next-intl"

async function getService(lang: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/service`,
    {
      cache: "no-cache",
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch Service data.")
  }
  return res.json()
}

export default async function Services() {
  const t = useTranslations("data")
  const lang = t("Locale")
  const fetch = await getService(lang)

  return (
    <>
      <ServicesPage
        title={fetch.data.title}
        short_desc={fetch.data.short_desc}
        description={fetch.data.description}
        services={fetch.data.services}
        video={fetch.data.video}
        locale={lang}
      />
    </>
  )
}
