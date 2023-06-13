import React from "react"
import ListGalery from "@/components/layouts/ListGalery"
import ArticleCardList from "@/components/layouts/ArticleCardList"
import CertificationCardSlider from "@/components/containers/CertificationCardSlider"
import ArticleCardHeadline from "@/components/layouts/ArticleCardHeadline"
import PortfolioCard from "@/components/layouts/PortfolioCard"
import ContactUsBodySection from "@/components/containers/ContactUsBodySection"
import PageHeader from "@/components/containers/PageHeader"
import ContactUsCTABanner from "@/components/containers/ContactUsCTABanner"
import BannerImageCard from "@/components/layouts/BannerImageCard"
import VideoComponent from "@/components/common/VideoComponent"

export default function Components() {
  return (
    <>
      <div className="w-full">
        <PageHeader
          title="OUR CERTIFICATION"
          description="We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry."
        />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center bg-black p-5">
        <div className="">
          <ListGalery />
        </div>
        <div className="flex justify-center w-full">
          <ArticleCardHeadline />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center w-full lg:w-[70%]">
          <ArticleCardList />
          <ArticleCardList />
        </div>
        <div className="w-full">
          <CertificationCardSlider />
        </div>
        <div className="w-full">
          <PortfolioCard />
        </div>
        <div className="w-full md:w-[80%]">
          <ContactUsBodySection />
        </div>
        <div className="w-[95%] md:w-[80%]">
          <BannerImageCard />
        </div>
        <div className="w-full">
          <VideoComponent />
        </div>
      </div>
      <div className="w-full">
        <ContactUsCTABanner />
      </div>
    </>
  )
}
