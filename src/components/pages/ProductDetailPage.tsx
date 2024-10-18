import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ImageCardSlider from "../containers/ImageCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import { ProductDetailPageType } from "@/types/ProductsType"
import ProductDescriptionSection from "../containers/ProductDescriptionSection"
import Navbar from "@/components/layouts/Nav"
import AnimatedComponent from "@/components/common/AnimatedComponent"

export default function ProductDetailPage({
  title,
  short_desc,
  description,
  image,
  specification,
  locale,
}: ProductDetailPageType) {
  return (
    <>
      <Navbar locale={locale} />
      <div className="flex flex-col bg-black min-h-screen">
        <PageHeader
          title={title}
          description={short_desc}
          backgroundImage={`${process.env.NEXT_PUBLIC_IMAGE}/image/banners/product-header-1.jpg`}
          type="tall"
        />
        <div className="content flex-1 flex flex-col py-10 gap-8 items-center justify-center">
          <ProductDescriptionSection
            description={description}
            color="white"
            background="black"
          />

          <div className="w-[95%] md:w-[75%] lg:w-[70%] xl:w-[65%] 2xl:w-[55%]">
            <AnimatedComponent>
              <ImageCardSlider images={image} />
            </AnimatedComponent>
          </div>

          {specification?.length > 0 && (
            <AnimatedComponent>
              <ProductDescriptionSection
                description={specification}
                color="white"
              />
            </AnimatedComponent>
          )}
        </div>
        {specification?.length > 0 ? (
          <FooterSection type={"black"} locale={locale} />
        ) : (
          <FooterSection type={"red"} locale={locale} />
        )}
      </div>
    </>
  )
}
