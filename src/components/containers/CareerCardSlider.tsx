import React, { FC, useState, useEffect } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import CareerCardHeader from "../layouts/CareerCardHeader"

const CareerCardSlider: FC<any> = ({ careers }) => {
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
        {careers.map((index: any, career: any) => (
          <SwiperSlide
            key={index}
            style={{ width: "calc(2/3 * 100vw)", zIndex: 0 }}
          >
            <CareerCardHeader />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CareerCardSlider
