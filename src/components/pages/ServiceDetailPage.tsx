import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ImageCardSlider from "../containers/ImageCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import { ServiceDetailPageType } from "@/types/ServicesType"
import ServiceDescriptionSection from "../containers/ServiceDescriptionSection"

export default function ServiceDetailPage({
  title,
  short_desc,
  description,
  image,
  specification,
}: ServiceDetailPageType) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 bg-black">
        <PageHeader title={title} description={short_desc} type="detail" />
        <div className="flex flex-col w-full gap-4 justify-center items-center py-5">
          <ServiceDescriptionSection
            description={description}
            color="white"
            background="black"
          />
        </div>
        <div className="w-[95%] md:w-[80%]">
          <ImageCardSlider images={image} />
        </div>
        <ServiceDescriptionSection description={specification} color="white" />
      </div>
      <FooterSection type={"black"} />
    </>
  )
}
