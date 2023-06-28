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
      <div className="flex flex-col bg-black min-h-screen">
        <PageHeader title={title} />
        <div className="content flex-1 flex flex-col py-10 items-center justify-center">
          <ListGalery values={values} page="our-value" />
        </div>
        <FooterSection type={"red"} />
      </div>
    </>
  )
}
