import React, { FC, useState, useEffect } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import ProductCard from "../layouts/ProductCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

interface ProductCardSliderProps {
  products: {
    id: number
    title: string
    desc?: string
    image?: string
    desc_short: string
    cta: {
      text: string
      url?: string
    }
  }[]
}

const ServiceCardSlider: FC<ProductCardSliderProps> = ({ products }) => {
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
      >
        {products.map((product, index) => (
          <SwiperSlide
            key={index}
            // className="z-0"
            style={{ width: "calc(2/3 * 100vw)", zIndex: 0 }}
          >
            <ProductCard
              title={product.title}
              description={product.desc_short}
              image={product.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ServiceCardSlider
