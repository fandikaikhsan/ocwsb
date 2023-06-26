import React, { FC } from "react"
import PageHeader from "@/components/containers/PageHeader"
import NewsContentSection from "@/components/containers/NewsContentSection"
import FooterSection from "@/components/containers/FooterSection"
import { NewsDetailPageType } from "@/types/NewsType"

const NewsDetailPage: FC<NewsDetailPageType> = ({
  title,
  author,
  date,
  content,
}) => {
  const headerDesc = `${author} - ${date}`

  return (
    <>
      <PageHeader title={title} description={headerDesc} type="detail" />
      <div className="flex flex-col items-center justify-center">
        <NewsContentSection
          description={content}
          background="black"
          color="white"
        />
      </div>
      <FooterSection type={"red"} />
    </>
  )
}

export default NewsDetailPage
