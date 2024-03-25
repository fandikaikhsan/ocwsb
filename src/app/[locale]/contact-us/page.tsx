"use client"

import ContactUsPage from "@/components/pages/ContactUsPage"
import { useTranslations } from "next-intl"

async function getContactUs(lang: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/${lang}/contact`
  )
  if (!res.ok) {
    throw new Error("Failed to fetch Contact Us data.")
  }
  return res.json()
}

export default async function ContactUs() {
  const t = useTranslations("data")
  const lang = t("Locale")

  const fetch = await getContactUs(lang)
  return (
    <>
      <ContactUsPage
        title={fetch.data.title}
        description={fetch.data.description}
        title_form={fetch.data.title_form}
        body={fetch.data.body}
        cta_banner={fetch.data.cta_banner}
        locale={lang}
      />
    </>
  )
}
