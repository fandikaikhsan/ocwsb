"use client"

import React, { FC } from "react"
import { Navigation, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import PortfolioCard from "../layouts/PortfolioCard"
import { PortofolioCardSliderType } from "@/types/CompanyType"

const PortfolioCardSlider: FC<PortofolioCardSliderType> = ({ portofolios }) => {
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
        {portofolios.map((portofolio: any) => (
          <SwiperSlide style={{ width: "calc(2/3 * 100vw)", zIndex: 0 }}>
            <PortfolioCard
              title={portofolio.title}
              short_desc={portofolio.short_desc}
              image={portofolio.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default PortfolioCardSlider
