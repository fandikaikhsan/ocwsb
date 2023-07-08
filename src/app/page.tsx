"use client"

import HomePage from "@/components/pages/HomePage"
import { useTranslations } from "next-intl"

async function getHome(locale: string) {
  const lang = locale || "en"

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/home`,
    {
      next: { revalidate: 60 },
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

  const fetch = await getHome(lang)

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
