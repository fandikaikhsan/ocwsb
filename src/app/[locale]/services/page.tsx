"use client"

import React, { useEffect, useState } from "react"
import ServicesPage from "@/components/pages/ServicesPage"
import { useTranslations } from "next-intl"
import LoadingPage from "@/components/pages/LoadingPage"

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
  const [fetchData, setFetchData] = useState(null)

  useEffect(() => {
    getService(lang)
      .then((data) => setFetchData(data))
      .catch((err) => console.error(err))
  }, [lang])

  const fetch = await getService(lang)

  if (!fetchData) return <LoadingPage />

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
