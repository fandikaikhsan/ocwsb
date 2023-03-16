import { Inter } from "next/font/google"
import React, { useState } from "react"
import Navbar from "@/components/layouts/Nav"
import ProductSlider from "@/components/containers/ProductCardSlider"
import ServiceCardSlider from "@/components/containers/ServiceCardSlider"
import { products, contents, dummy } from "@/pages/api/dummy"
import BannerCard from "@/components/layouts/BannerCard"
import BannerCardSlider from "@/components/containers/BannerCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import ProductAccordion from "@/components/layouts/ProductAccordion"
import FormSection from "@/components/containers/FormSection"
import DesktopFormSection from "@/components/containers/DesktopFormSection"

// const inter = Inter({ subsets: ["latin"] })

const dummyBanner = {
  title: "Welcome to our website",
  description:
    "We are a team of talented designers making websites with Next.js",
  image: "https://source.unsplash.com/user/wsanter",
  cta: "Contact Us",
  url: "/contact",
}

const dummyModal = {
  title: "Maintenance",
  imageSrc: "https://source.unsplash.com/user/wsanter",
  description:
    "The technical meaning of maintenance involves functional checks, servicing, repairing or replacing of necessary devices, equipment, machinery, building infrastructure, and supporting utilities in industrial, business, and residential installations This type of maintenance, also referred to as preventive maintenance, is implemented on a fixed schedule and typically includes activities such as inspecting, cleaning, washing, replacing, and checking. It is typically performed in the downtime between shifts or on weekends to avoid affecting productivity goals.",
  isOpen: true,
  onclose: () => {},
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 pt-24">
        <div className=" mb-12">
          <BannerCardSlider contents={contents} />
        </div>
        <div className="mb-20 md:mb-32">
          <div className=" font-maqin text-4xl md:text-6xl mb-10 text-white text-center">
            OUR SERVICES
          </div>
          <div className="ml-6 md:ml-10">
            <ServiceCardSlider services={dummy} />
          </div>
        </div>
        <div className="">
          <div className="font-maqin text-4xl md:text-6xl mb-6 md:mb-10 text-white text-center">
            OUR PRODUCTS
          </div>
          <div className="hidden md:block mx-10">
            <ProductSlider products={products} />
          </div>
          <div className="md:hidden m-4 flex flex-col gap-4">
            <ProductAccordion />
            <ProductAccordion />
            <ProductAccordion />
          </div>
          <div className="font-maqin text-4xl md:text-6xl mt-16 md:mb-10 text-white text-center">
            LETS TALK
          </div>
          <div className="md:hidden">
            <FormSection />
          </div>
          <div className="sm:hidden md:block">
            <DesktopFormSection />
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  )
}
