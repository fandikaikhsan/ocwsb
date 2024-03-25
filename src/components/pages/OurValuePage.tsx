import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import FooterSection from "@/components/containers/FooterSection"
import { OurValuePageType } from "@/types/OurValueType"
import Navbar from "@/components/layouts/Nav"
import AnimatedComponent from "@/components/common/AnimatedComponent"

export default function OurValuePage({
  title,
  description,
  values,
  locale,
}: OurValuePageType) {
  return (
    <>
      <Navbar locale={locale} />
      <div className="flex flex-col bg-black min-h-screen">
        <PageHeader
          title={title}
          backgroundImage={`${process.env.NEXT_PUBLIC_IMAGE}/image/banners/partner-header-1.jpg`}
          type="tall"
        />
        <div className="text-[1rem] py-10 md:py-20 px-10 text-center font-acumin text-white md:w-[60%] mx-auto">
          <AnimatedComponent>{description}</AnimatedComponent>
        </div>
        <FooterSection type={"red"} locale={locale} />
      </div>
    </>
  )
}
