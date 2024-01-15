import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import VideoComponent from "@/components/common/VideoComponent"
import FooterSection from "@/components/containers/FooterSection"
import PortfolioCardSlider from "@/components/containers/PortofolioCardSlider"
import { CompanyPageType } from "@/types/CompanyType"
import CompanyDescriptionSection from "../containers/CompanyDescriptionSection"
import Navbar from "../layouts/Nav"
import AnimatedComponent from "@/components/common/AnimatedComponent"
import locales from "@/messages/locale"

export default function CompanyPage({
  title,
  description,
  video,
  portofolios,
  locale,
}: CompanyPageType) {
  locale = locale || "en"

  return (
    <>
      <Navbar locale={locale} />
      <div className="flex flex-col justify-center items-center gap-8 bg-black">
        <PageHeader
          title={title}
          backgroundImage={`https://${process.env.NEXT_PUBLIC_IMAGE}/image/banners/about-header-1.jpg`}
          type="tall"
        />

        <div className="flex flex-col gap-4 justify-center items-center">
          <AnimatedComponent>
            <CompanyDescriptionSection
              description={description}
              color="white"
              background="black"
            />
          </AnimatedComponent>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center py-5">
          <div className="text-[2rem] font-maqin text-white uppercase">
            <AnimatedComponent>
              {locales[locale]["Company"]["Company Profile"]}
            </AnimatedComponent>
          </div>
          <AnimatedComponent>
            <VideoComponent source={video} />
          </AnimatedComponent>
        </div>
        <div className="text-[2rem] font-maqin text-white uppercase">
          <AnimatedComponent>Portofolio</AnimatedComponent>
        </div>
        <div className="w-[90%]">
          <AnimatedComponent>
            <PortfolioCardSlider portofolios={portofolios} />
          </AnimatedComponent>
        </div>
        <div></div>
      </div>
      <FooterSection type={"red"} locale={locale} />
    </>
  )
}
