"use client"

import OurValuePage from "@/components/pages/OurValuePage"
import { useTranslations } from "next-intl"

async function getValue(lang: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/value`,
    {
      cache: "no-cache",
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch Product data.")
  }
  return res.json()
}

export default async function OurValue() {
  const t = useTranslations("data")
  const lang = t("Locale")

  const fetch = await getValue(lang)
  return (
    <>
      <OurValuePage
        title={fetch.data.title}
        description={fetch.data.description}
        values={fetch.data.values}
        locale={lang}
      />
    </>
  )
}
