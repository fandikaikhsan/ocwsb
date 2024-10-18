import React, { FC } from "react"
import ArticleCardList from "@/components/layouts/ArticleCardList"
import { ArticleCardSliderType } from "@/types/NewsType"

const ArticleCardSlider: FC<ArticleCardSliderType> = ({ articles }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 w-auto">
        {articles.map((article) => (
          <ArticleCardList
            key={article.id}
            title={article.title}
            image={article.image}
            short_desc={article.short_desc}
            date={article.date}
            path={article.path}
          />
        ))}
      </div>
    </>
  )
}

export default ArticleCardSlider
