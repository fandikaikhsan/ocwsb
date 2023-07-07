"use client"

import ProductsPage from "@/components/pages/ProductsPage"
import { useTranslations } from "next-intl"

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
  const fetch = await getProduct(lang)
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
