"use client"

import HomePage from "@/components/pages/HomePage"
import { useTranslations } from "next-intl"

async function getHomeLocale(lang: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/home`,
    {
      cache: "no-cache",
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch Product data.")
  }
  return res.json()
}

export default async function Home() {
  const t = useTranslations("data")
  const lang = t("Locale")
  const fetch = await getHomeLocale(lang)

  return (
    <>
      <HomePage
        homepage={fetch.data.homepage}
        banners={fetch.data.banners}
        products={fetch.data.products}
        services={fetch.data.services}
        locale={lang}
      />
    </>
  )
}
