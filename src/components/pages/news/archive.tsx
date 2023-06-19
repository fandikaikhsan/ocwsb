import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ArticleHeadlineSlider from "@/components/containers/ArticleHeadlineSlider"
import ArticleCardSlider from "@/components/containers/ArticleCardSlider"
import FooterSection from "@/components/containers/FooterSection"

const data = {
  title: "News",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
}

const headlines = [
  {
    title: "Headline 1",
    date: "2021-09-01",
    short_desc: "Short description 1",
    image: "https://picsum.photos/200/300",
    path: "/",
  },
  {
    title: "Headline 2",
    date: "2021-09-02",
    short_desc: "Short description 2",
    image: "https://picsum.photos/200/300",
    path: "/",
  },
]

export default function NewsPage() {
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center gap-10 bg-black">
        <PageHeader title={data.title} description={data.description} />
        <div className="w-[90%] md:w-[80%]">
          <ArticleHeadlineSlider headlines={headlines} />
        </div>
        <div className="w-full py-5 md:w-[80%]">
          <ArticleCardSlider articles={headlines} />
        </div>
        <div className="w-full h-[30rem] bg-[#74290E]">Description here</div>
      </div>
      <FooterSection type={"black"} /> */}
      <div>
        <h1>Welcome to my site</h1>
      </div>
    </>
  )
}
