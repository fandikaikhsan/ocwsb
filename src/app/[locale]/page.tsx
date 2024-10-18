"use client"

import React, { useEffect, useState } from "react"
import HomePage from "@/components/pages/HomePage"
import { useTranslations } from "next-intl"
import LoadingPage from "@/components/pages/LoadingPage"

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
  const [fetchData, setFetchData] = useState(null)

  useEffect(() => {
    getHomeLocale(lang)
      .then((data) => setFetchData(data))
      .catch((err) => console.error(err))
  }, [lang])

  const fetch = await getHomeLocale(lang)

  if (!fetchData) return <LoadingPage />

  console.log("fetch data", fetch.data)

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
