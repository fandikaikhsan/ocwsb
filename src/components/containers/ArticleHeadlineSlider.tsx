import React, { FC, useState, useEffect } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import ArticleCardHeadline from "../layouts/ArticleCardHeadline"
import {
  ArticleCardHeadlineType,
  ArticleHeadlineSliderType,
} from "@/types/ArticleType"

const ArticleHeadlineSlider: FC<ArticleHeadlineSliderType> = ({
  headlines,
}) => {
  console.log("headline: ", headlines)
  headlines.map((headline: any) => console.log("headline: ", headline.title))

  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        navigation
        // slidesPerView="auto"
        centeredSlides
        style={{ zIndex: 0 }}
        loop
        className="swiper-custom-navigation"
      >
        {headlines.map((headline: ArticleCardHeadlineType) => (
          <SwiperSlide style={{ width: "calc(2/3 * 100vw)", zIndex: 0 }}>
            <ArticleCardHeadline
              title={headline.title}
              date={headline.date}
              short_desc={headline.short_desc}
              image={headline.image}
              path={headline.path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ArticleHeadlineSlider
