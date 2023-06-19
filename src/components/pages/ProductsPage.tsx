import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import VideoComponent from "@/components/common/VideoComponent"
import FooterSection from "@/components/containers/FooterSection"
import { ProductsPageType } from "@/types/ProductsType"

export default function ProductsPage({
  title,
  short_desc,
  description,
  products,
  video,
}: ProductsPageType) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 bg-black">
        <PageHeader title={title} />
        <div className="flex flex-col gap-4 justify-center items-center py-5">
          <div className="text-sm text-white text-center w-[90%] md:w-[60%]">
            {short_desc}
          </div>
        </div>
        <div>
          <ListGalery values={products} />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center py-5">
          <div className="text-[2rem] font-maqin text-white">{video.title}</div>
          <VideoComponent source={video.url} />
        </div>
        {/* @TODO: Markdown component here */}
        <div className="w-full h-[30rem] bg-[#74290E]">{description}</div>
      </div>
      <FooterSection type={"black"} />
    </>
  )
}
