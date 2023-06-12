import React from "react"
import ListGalery from "@/components/layouts/ListGalery"
import ArticleCardList from "@/components/layouts/ArticleCardList"
import CertificationCardSlider from "@/components/containers/CertificationCardSlider"

export default function Products() {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center bg-black p-5">
        <div className="">
          <ListGalery />
        </div>
        <div className="flex justify-center w-full lg:w-[70%]">
          <ArticleCardList />
        </div>
        <div className="w-[80%]">
          <CertificationCardSlider />
        </div>
      </div>
    </>
  )
}
