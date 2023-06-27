import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import VideoComponent from "@/components/common/VideoComponent"
import FooterSection from "@/components/containers/FooterSection"
import PortfolioCardSlider from "@/components/containers/PortofolioCardSlider"
import { CompanyPageType } from "@/types/CompanyType"
import CompanyDescriptionSection from "../containers/CompanyDescriptionSection"

export default function CompanyPage({
  title,
  description,
  video,
  portofolios,
}: CompanyPageType) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 bg-black">
        <PageHeader title={title} />
        <div className="flex flex-col gap-4 justify-center items-center">
          <CompanyDescriptionSection
            description={description}
            color="white"
            background="black"
          />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center py-5">
          <div className="text-[2rem] font-maqin text-white uppercase">
            Company Profile
          </div>
          <VideoComponent source={video} />
        </div>
        <div className="text-[2rem] font-maqin text-white uppercase">
          Portofolio
        </div>
        <div className="w-[90%]">
          <PortfolioCardSlider portofolios={portofolios} />
        </div>
        <div></div>
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
