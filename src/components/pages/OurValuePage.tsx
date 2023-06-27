import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import FooterSection from "@/components/containers/FooterSection"
import { OurValuePageType } from "@/types/OurValueType"

export default function OurValuePage({
  title,
  description,
  values,
}: OurValuePageType) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 pb-20 bg-black">
        <PageHeader title={title} />
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <ListGalery values={values} page="our-value" />
        </div>
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
