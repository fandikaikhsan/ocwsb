import { Inter } from "next/font/google"
import React, { useState } from "react"
import Navbar from "@/components/layouts/Nav"
import ProductSlider from "@/components/containers/ProductCardSlider"
import ServiceCardSlider from "@/components/containers/ServiceCardSlider"
import { products, services, banners } from "./api/data"
import BannerCardSlider from "@/components/containers/BannerCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import ProductAccordion from "@/components/layouts/ProductAccordion"
import FormSection from "@/components/containers/FormSection"
import DesktopFormSection from "@/components/containers/DesktopFormSection"
import ProductAccordionSection from "@/components/containers/ProductAccordionSection"
import AnimatedComponent from "@/components/common/AnimatedComponent"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900">
        <div className=" mb-12">
          <AnimatedComponent>
            <BannerCardSlider banners={banners} />
          </AnimatedComponent>
        </div>
        <div className="mb-20 md:mb-32">
          <div className=" font-maqin text-4xl md:text-6xl mb-10 text-white text-center">
            <AnimatedComponent>OUR SERVICES</AnimatedComponent>
          </div>
          <div className="ml-6 md:ml-10">
            <AnimatedComponent>
              <ServiceCardSlider services={services} />
            </AnimatedComponent>
          </div>
        </div>
        <div className="">
          <div className="font-maqin text-4xl md:text-6xl mb-6 md:mb-10 text-white text-center">
            <AnimatedComponent>OUR PRODUCTS</AnimatedComponent>
          </div>
          <div className="hidden md:block mx-10">
            <AnimatedComponent>
              <ProductSlider products={products} />
            </AnimatedComponent>
          </div>
          <div className="md:hidden m-4 flex flex-col gap-4">
            <AnimatedComponent>
              <ProductAccordionSection products={products} />
            </AnimatedComponent>
          </div>
          <div className="font-maqin text-4xl md:text-6xl mt-16 md:mb-10 text-white text-center">
            <AnimatedComponent>LETS TALK!</AnimatedComponent>
          </div>
          <div className="sm:block md:hidden">
            <AnimatedComponent>
              <FormSection />
            </AnimatedComponent>
          </div>
          <div className="hidden md:block">
            <AnimatedComponent>
              <DesktopFormSection />
            </AnimatedComponent>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  )
}
