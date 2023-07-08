import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ArticleHeadlineSlider from "@/components/containers/ArticleHeadlineSlider"
import ArticleCardSlider from "@/components/containers/ArticleCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import { NewsPageType } from "@/types/NewsType"
import Navbar from "@/components/layouts/Nav"
import AnimatedComponent from "@/components/common/AnimatedComponent"
import locales from "@/messages/locale"

export default function NewsPage({
  title,
  headlines,
  recents,
  locale,
}: NewsPageType) {
  return (
    <>
      <Navbar locale={locale} />
      <PageHeader title={title} />
      <div className="flex flex-col justify-center items-center gap-10 py-10 bg-black">
        <div className="w-[90%] md:w-[80%]">
          <AnimatedComponent>
            <ArticleHeadlineSlider headlines={headlines} />
          </AnimatedComponent>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className=" font-maqin text-4xl text-white">
            {locales[locale]["News"]["Recent News"]}
          </div>
          <div className="w-[95%] md:w-[80%]">
            <AnimatedComponent>
              <ArticleCardSlider articles={recents} />
            </AnimatedComponent>
          </div>
        </div>
      </div>
      <FooterSection type={"red"} locale={locale} />
    </>
  )
}
