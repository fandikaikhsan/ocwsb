import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import VideoComponent from "@/components/common/VideoComponent"
import FooterSection from "@/components/containers/FooterSection"
import { ServicesPageType } from "@/types/ServicesType"
import ServiceDescriptionSection from "../containers/ServiceDescriptionSection"
import Navbar from "@/components/layouts/Nav"

export default function ServicesPage({
  title,
  short_desc,
  description,
  services,
  video,
}: ServicesPageType) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-10 bg-black">
        <PageHeader title={title} />

        {short_desc?.length > 0 && (
          <div className="flex flex-col gap-4 justify-center items-center py-5">
            <div className="text-sm text-white text-center w-[90%] md:w-[60%]">
              {short_desc}
            </div>
          </div>
        )}

        <div className="py-5">
          <ListGalery values={services} page="services" clickable={true} />
        </div>

        {video?.url?.length > 0 && (
          <div className="flex flex-col gap-8 justify-center items-center py-5">
            <div className="text-[2rem] font-maqin text-white">
              {video.title}
            </div>
            <VideoComponent source={video.url} />
          </div>
        )}
        {description?.length > 0 && (
          <ServiceDescriptionSection description={description} color="white" />
        )}
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
