import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ImageCardSlider from "../containers/ImageCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import { ProductDetailPageType } from "@/types/ProductsType"
import ProductDescriptionSection from "../containers/ProductDescriptionSection"

export default function ProductDetailPage({
  title,
  short_desc,
  description,
  image,
  specification,
}: ProductDetailPageType) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 bg-black">
        <PageHeader title={title} description={short_desc} type="detail" />
        <div className="flex flex-col w-full gap-4 justify-center items-center py-5">
          <ProductDescriptionSection
            description={description}
            color="white"
            background="black"
          />
        </div>
        <div className="w-[95%] md:w-[80%]">
          <ImageCardSlider images={image} />
        </div>
        <ProductDescriptionSection description={specification} color="white" />
      </div>
      <FooterSection type={"black"} />
    </>
  )
}
