import React from "react"
import ArticleCardList from "@/components/layouts/ArticleCardList"

const ArticleCardSlider = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 w-auto">
        <ArticleCardList />
        <ArticleCardList />
        <ArticleCardList />
      </div>
    </>
  )
}

export default ArticleCardSlider
