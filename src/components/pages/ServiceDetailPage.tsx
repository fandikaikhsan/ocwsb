import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ImageCardSlider from "../containers/ImageCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import { ServiceDetailPageType } from "@/types/ServicesType"
import ServiceDescriptionSection from "../containers/ServiceDescriptionSection"
import Navbar from "@/components/layouts/Nav"

export default function ServiceDetailPage({
  title,
  short_desc,
  description,
  image,
  specification,
}: ServiceDetailPageType) {
  console.log(image)

  return (
    <>
      <Navbar />
      <PageHeader title={title} description={short_desc} type="detail" />
      <div className="flex flex-col bg-black min-h-screen py-10">
        <div className="content flex-1 flex flex-col gap-8 items-center justify-center p">
          <ServiceDescriptionSection
            description={description}
            color="white"
            background="black"
          />
        </div>

        <div className="w-[95%] md:w-[80%] mx-auto">
          <ImageCardSlider images={image} />
        </div>

        {specification?.length > 0 && (
          <ServiceDescriptionSection
            description={specification}
            color="white"
          />
        )}
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
