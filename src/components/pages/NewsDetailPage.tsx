import React, { FC } from "react"
import PageHeader from "@/components/containers/PageHeader"
import ImageCardSlider from "../containers/ImageCardSlider"
import NewsContentSection from "@/components/containers/NewsContentSection"
import FooterSection from "@/components/containers/FooterSection"
import { NewsDetailPageType } from "@/types/NewsType"
import Navbar from "../layouts/Nav"
import AnimatedComponent from "@/components/common/AnimatedComponent"

const NewsDetailPage: FC<NewsDetailPageType> = ({
  title,
  author,
  date,
  content,
  image,
  locale,
}) => {
  const headerDesc = `${author} - ${date}`

  return (
    <>
      <Navbar locale={locale} />
      <div className="flex flex-col bg-black min-h-screen">
        <PageHeader title={title} description={headerDesc} type="detail" />
        <div className="content flex-1 flex flex-col gap-5 items-center py-10 justify-center">
          {image.length > 0 && (
            <div className="w-[95%] md:w-[70%]">
              <AnimatedComponent>
                <ImageCardSlider images={image} />
              </AnimatedComponent>
            </div>
          )}
          <AnimatedComponent>
            <NewsContentSection
              description={content}
              background="black"
              color="white"
            />
          </AnimatedComponent>
        </div>
        <FooterSection type={"red"} locale={locale} />
      </div>
    </>
  )
}

export default NewsDetailPage
