"use client"

import React, { useEffect, useState } from "react"
import ProductsPage from "@/components/pages/ProductsPage"
import { useTranslations } from "next-intl"
import LoadingPage from "@/components/pages/LoadingPage"

async function getProduct(lang: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/product`,
    {
      cache: "no-cache",
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch Product data.")
  }
  return res.json()
}

export default async function Products() {
  const t = useTranslations("data")
  const lang = t("Locale")
  const [fetchData, setFetchData] = useState(null)

  useEffect(() => {
    getProduct(lang)
      .then((data) => setFetchData(data))
      .catch((err) => console.error(err))
  }, [lang])

  const fetch = await getProduct(lang)

  if (!fetchData) return <LoadingPage />

  return (
    <>
      <ProductsPage
        title={fetch.data.title}
        short_desc={fetch.data.short_desc}
        description={fetch.data.description}
        products={fetch.data.products}
        video={fetch.data.video}
        locale={lang}
      />
    </>
  )
}
