"use client"

import PartnersPage from "@/components/pages/PartnersPage"
import { useTranslations } from "next-intl"

export default async function Home() {
  const navbarLang = useTranslations("data")

  return (
    <>
      <h1>{navbarLang("title")}</h1>
      {/* <h2>{bannerLang("Read More")}</h2> */}
    </>
  )
}
