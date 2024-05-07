import React, { FC } from "react"
import { HomePageType } from "@/types/HomeType"
import Navbar from "@/components/layouts/Nav"
import ProductSlider from "@/components/containers/ProductCardSlider"
import ServiceCardSlider from "@/components/containers/ServiceCardSlider"
import BannerCardSlider from "@/components/containers/BannerCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import FormSection from "@/components/containers/FormSection"
import DesktopFormSection from "@/components/containers/DesktopFormSection"
import ProductAccordionSection from "@/components/containers/ProductAccordionSection"
import AnimatedComponent from "@/components/common/AnimatedComponent"
import ProductCardSlider from "@/components/containers/Home/ProductCardSlider"
import ServiceCardSliderProportion from "@/components/containers/Home/ServiceCardSlider"

const HomePage: FC<HomePageType> = ({
  homepage,
  banners,
  services,
  products,
  locale,
}) => {
  return (
    <>
      <Navbar locale={locale} />
      <div className=" bg-black">
        <div className=" mb-24">
          <AnimatedComponent>
            <BannerCardSlider banners={banners} />
          </AnimatedComponent>
        </div>
        <div className="mb-20 md:mb-32">
          <div className=" font-acumin text-4xl md:text-6xl mb-10 text-white text-center">
            <AnimatedComponent>{homepage.title_service}</AnimatedComponent>
          </div>
          <div className="ml-6 md:ml-10">
            <AnimatedComponent>
              <ServiceCardSlider services={services} />
            </AnimatedComponent>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <AnimatedComponent>
              <ServiceCardSliderProportion />
            </AnimatedComponent>
          </div>
        </div>
        <div className="py-10 bg-gradient-to-b from-black to-red-800">
          <div className=" font-acumin text-4xl md:text-6xl mb-6 md:mb-10 text-white text-center">
            <AnimatedComponent>{homepage.title_product}</AnimatedComponent>
          </div>
          <div className="hidden md:block py-5">
            <AnimatedComponent>
              <ProductSlider products={products} />
            </AnimatedComponent>
          </div>
          <div className="md:hidden p-6  flex flex-col gap-4">
            <AnimatedComponent>
              <ProductAccordionSection products={products} />
            </AnimatedComponent>
          </div>
          <div className="p-6  flex flex-col gap-4">
            <AnimatedComponent>
              <ProductCardSlider />
            </AnimatedComponent>
          </div>
          {/* <div className="font-maqin text-4xl md:text-6xl mt-16 md:mb-10 text-white w-full text-center md:w-4/6 lg:w-[40rem] ml-auto mr-24">
            <AnimatedComponent>{homepage.title_form}</AnimatedComponent>
          </div> */}
          {/* <div className="sm:block md:hidden">
            <AnimatedComponent>
              <FormSection locale={locale} />
            </AnimatedComponent>
          </div> */}
          {/* <div className="hidden md:block">
            <AnimatedComponent>
              <DesktopFormSection locale={locale} />
            </AnimatedComponent>
          </div> */}
        </div>
      </div>
      <FooterSection locale={locale} />
    </>
  )
}

export default HomePage
