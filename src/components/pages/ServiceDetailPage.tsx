import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ImageCardSlider from "../containers/ImageCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import { ServiceDetailPageType } from "@/types/ServicesType"
import ServiceDescriptionSection from "../containers/ServiceDescriptionSection"
import Navbar from "@/components/layouts/Nav"
import AnimatedComponent from "@/components/common/AnimatedComponent"

export default function ServiceDetailPage({
  title,
  short_desc,
  description,
  image,
  specification,
  locale,
}: ServiceDetailPageType) {
  return (
    <>
      <Navbar locale={locale} />
      <div className="flex flex-col bg-black min-h-screen">
        <PageHeader
          title={title}
          description={short_desc}
          type="tall"
          backgroundImage={`https://${process.env.NEXT_PUBLIC_IMAGE}/image/banners/service-header-1.jpg`}
        />
        <div className="content flex-1 flex flex-col py-10 gap-8 items-center justify-center">
          <ServiceDescriptionSection
            description={description}
            color="white"
            background="black"
          />

          <div className="w-[95%] md:w-[75%] lg:w-[70%] xl:w-[65%] 2xl:w-[55%]">
            <AnimatedComponent>
              <ImageCardSlider images={image} />
            </AnimatedComponent>
          </div>

          {specification?.length > 0 && (
            <AnimatedComponent>
              <ServiceDescriptionSection
                description={specification}
                color="white"
              />
            </AnimatedComponent>
          )}
        </div>
        {specification?.length > 0 ? (
          <FooterSection type={"black"} locale={locale} />
        ) : (
          <FooterSection type={"red"} locale={locale} />
        )}
      </div>
    </>
  )
}
