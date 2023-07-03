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
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-black min-h-screen">
        <PageHeader title={title} description={short_desc} type="detail" />
        <div className="content flex-1 flex flex-col py-10 gap-8 items-center justify-center">
          <ServiceDescriptionSection
            description={description}
            color="white"
            background="black"
          />

          <div className="w-[95%] md:w-[80%]">
            <ImageCardSlider images={image} />
          </div>

          {specification?.length > 0 && (
            <ServiceDescriptionSection
              description={specification}
              color="white"
            />
          )}
        </div>
        {specification?.length > 0 ? (
          <FooterSection type={"black"} />
        ) : (
          <FooterSection type={"red"} />
        )}
      </div>
    </>
  )
}
