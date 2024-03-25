"use client"

import ServiceDetailPage from "@/components/pages/ServiceDetailPage"
import { useTranslations } from "next-intl"

async function getServiceDetail(id: string, lang: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/service/${id}`
  )
  if (!res.ok) {
    throw new Error("Failed to fetch Service data.")
  }
  return res.json()
}

export default async function ServiceDetail({
  params,
}: {
  params: { id: string }
}) {
  const t = useTranslations("data")
  const lang = t("Locale")
  const fetch = await getServiceDetail(params.id, lang)
  return (
    <>
      <ServiceDetailPage
        title={fetch.data.title}
        short_desc={fetch.data.short_desc}
        description={fetch.data.description}
        image={fetch.data.image}
        specification={fetch.data.spesification}
        locale={lang}
      />
    </>
  )
}
