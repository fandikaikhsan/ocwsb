import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import FooterSection from "@/components/containers/FooterSection"
import { PartnersPageType } from "@/types/PartnersType"

export default function PartnersPage({
  title,
  description,
  partners,
}: PartnersPageType) {
  return (
    <>
      <PageHeader title={title} />
      <div className="flex flex-col justify-center items-center gap-10 bg-black py-10">
        <div className="flex flex-col gap-4 justify-center items-center py-2">
          <div className="text-sm text-white text-center w-[90%] md:w-[60%]">
            {description}
          </div>
        </div>
        <div>
          <ListGalery values={partners} page="partners" />
        </div>
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
