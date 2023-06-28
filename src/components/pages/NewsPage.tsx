import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ArticleHeadlineSlider from "@/components/containers/ArticleHeadlineSlider"
import ArticleCardSlider from "@/components/containers/ArticleCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import { NewsPageType } from "@/types/NewsType"
import Navbar from "@/components/layouts/Nav"

export default function NewsPage({ title, headlines, recents }: NewsPageType) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-10 bg-black">
        <PageHeader title={title} />
        <div className="w-[90%] md:w-[80%]">
          <ArticleHeadlineSlider headlines={headlines} />
        </div>
        <div className="w-full py-5 md:w-[80%]">
          <ArticleCardSlider articles={recents} />
        </div>
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
