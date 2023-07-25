"use client"

import NewsPage from "@/components/pages/NewsPage"
import { useTranslations } from "next-intl"

async function getNews(lang: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/news`,
    {
      next: {
        revalidate: 60,
      },
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch News data.")
  }
  return res.json()
}

export default async function News() {
  const t = useTranslations("data")
  const lang = t("Locale")
  const fetch = await getNews(lang)

  return (
    <>
      <NewsPage
        title={fetch.data.title}
        headlines={fetch.data.headlines}
        recents={fetch.data.recents}
        locale={lang}
      />
    </>
  )
}
