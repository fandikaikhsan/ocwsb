import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ArticleHeadlineSlider from "@/components/containers/ArticleHeadlineSlider"
import ArticleCardSlider from "@/components/containers/ArticleCardSlider"
import FooterSection from "@/components/containers/FooterSection"

const data = {
  title: "PRODUCTS",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
}

const headlines = [
  {
    title: "Headline 1",
    date: "2021-09-01",
    short_desc: "Short description 1",
    banner_image: "https://picsum.photos/200/300",
  },
  {
    title: "Headline 2",
    date: "2021-09-02",
    short_desc: "Short description 2",
    banner_image: "https://picsum.photos/200/300",
  },
]

export default function Products() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 bg-black">
        <PageHeader title={data.title} description={data.description} />
        <div className="w-[90%] md:w-[80%]">
          <ArticleHeadlineSlider headlines={headlines} />
        </div>
        <div className="w-full py-5 md:w-[80%]">
          <ArticleCardSlider />
        </div>
        <div className="w-full h-[30rem] bg-[#74290E]">Description here</div>
      </div>
      <FooterSection type={"black"} />
    </>
  )
}
