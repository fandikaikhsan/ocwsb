import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import FooterSection from "@/components/containers/FooterSection"
import { PartnersPageType } from "@/types/PartnersType"
import Navbar from "@/components/layouts/Nav"
import AnimatedComponent from "@/components/common/AnimatedComponent"

export default function PartnersPage({
  title,
  description,
  partners,
  locale,
}: PartnersPageType) {
  return (
    <>
      <Navbar locale={locale} />
      <PageHeader
        title={title}
        backgroundImage={
          "https://upload.ocwsb.com/image/banners/partner-header-1.jpg"
        }
        type="tall"
      />
      <div className="flex flex-col justify-center items-center gap-10 py-10 bg-black">
        <div className="flex flex-col gap-4 justify-center items-center py-5">
          <div className="text-sm text-white text-center w-[90%] md:w-[60%]">
            <AnimatedComponent>{description}</AnimatedComponent>
          </div>
        </div>
        <div>
          <AnimatedComponent>
            <ListGalery
              values={partners}
              page="partners"
              textposition="center"
              textdesktopsize="lg"
            />
          </AnimatedComponent>
        </div>
      </div>
      <FooterSection type={"red"} locale={locale} />
    </>
  )
}
