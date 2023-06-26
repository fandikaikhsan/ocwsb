import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ImageCardSlider from "../containers/ImageCardSlider"
import VideoComponent from "@/components/common/VideoComponent"
import FooterSection from "@/components/containers/FooterSection"
import { ProductsPageType } from "@/types/ProductsType"
import ProductDescriptionSection from "../containers/ProductDescriptionSection"

export default function ProductDetailPage({
  title,
  short_desc,
  description,
  products,
  video,
}: ProductsPageType) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 bg-black">
        <PageHeader title={title} description={short_desc} />
        <div className="flex flex-col gap-4 justify-center items-center py-5">
          <ProductDescriptionSection description={description} color="white" />
        </div>
        <div></div>
        <div className="flex flex-col gap-8 justify-center items-center py-5">
          <div className="text-[2rem] font-maqin text-white">{video.title}</div>
          <VideoComponent source={video.url} />
        </div>
        <ProductDescriptionSection description={description} color="white" />
      </div>
      <FooterSection type={"black"} />
    </>
  )
}
