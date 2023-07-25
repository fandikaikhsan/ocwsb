"use client"

import React, { useEffect, useState } from "react"
import HomePage from "@/components/pages/HomePage"
import { useTranslations } from "next-intl"
import LoadingPage from "@/components/pages/LoadingPage"
import { HomePageFetchType } from "@/types/HomeType"

async function getHome(lang: string) {
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

export default function Home() {
  // remove the async keyword here
  const t = useTranslations("data")
  const lang = t("Locale")
  const [fetchData, setFetchData] = useState<HomePageFetchType | null>(null)

  useEffect(() => {
    getHome(lang)
      .then((data) => setFetchData(data))
      .catch((err) => console.error(err))
  }, [lang])

  // remove the direct await getHome(lang) call here

  if (!fetchData) return <LoadingPage />

  return (
    <HomePage
      homepage={fetchData.data.homepage} // use fetchData here
      banners={fetchData.data.banners}
      products={fetchData.data.products}
      services={fetchData.data.services}
      locale={lang}
    />
  )
}
