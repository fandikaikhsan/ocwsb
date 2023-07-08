import React from "react"
import Navbar from "@/components/layouts/Nav"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import VideoComponent from "@/components/common/VideoComponent"
import FooterSection from "@/components/containers/FooterSection"
import { ProductsPageType } from "@/types/ProductsType"
import ProductDescriptionSection from "../containers/ProductDescriptionSection"
import AnimatedComponent from "@/components/common/AnimatedComponent"

export default function ProductsPage({
  title,
  short_desc,
  description,
  products,
  video,
  locale,
}: ProductsPageType) {
  return (
    <>
      <Navbar locale={locale} />
      <PageHeader title={title} />
      <div className="flex flex-col justify-center items-center gap-10 py-10 bg-black">
        {short_desc?.length > 0 && (
          <div className="flex flex-col gap-4 justify-center items-center py-5">
            <div className="text-sm text-white text-center w-[90%] md:w-[60%]">
              {short_desc}
            </div>
          </div>
        )}

        <div>
          <AnimatedComponent>
            <ListGalery
              values={products}
              page="products"
              clickable={true}
              textposition="center"
              textdesktopsize="lg"
            />
          </AnimatedComponent>
        </div>

        <div className="flex flex-col gap-8 justify-center items-center py-5">
          <div className="text-[2rem] font-maqin text-white">
            <AnimatedComponent>{video.title}</AnimatedComponent>
          </div>
          <AnimatedComponent>
            <VideoComponent source={video.url} />
          </AnimatedComponent>
        </div>
        {description?.length > 0 && (
          <AnimatedComponent>
            <ProductDescriptionSection
              description={description}
              color="white"
            />
          </AnimatedComponent>
        )}
      </div>
      <FooterSection type={"red"} locale={locale} />
    </>
  )
}
