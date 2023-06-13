import React, { FC, useState, useEffect } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import PortfolioCard from "../layouts/PortfolioCard"

const PortfolioCardSlider: FC<any> = ({ portofolios }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        navigation
        centeredSlides
        style={{ zIndex: 0 }}
        loop
        className="swiper-custom-navigation"
      >
        {portofolios.map((index: any, headline: any) => (
          <SwiperSlide
            key={index}
            style={{ width: "calc(2/3 * 100vw)", zIndex: 0 }}
          >
            <PortfolioCard
              title={headline.title}
              short_desc={headline.short_desc}
              image={headline.banner_image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default PortfolioCardSlider
