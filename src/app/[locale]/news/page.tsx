"use client"

import NewsPage from "@/components/pages/NewsPage"
import { useTranslations } from "next-intl"
import axios from "axios"

async function getNews(lang: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/news`
  )

  return res.data
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
