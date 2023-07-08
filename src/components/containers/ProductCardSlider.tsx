"use client"

import React, { FC, useState, useEffect } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import ProductCard from "../layouts/ProductCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import ProductModal from "./ProductModal"

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

const ProductCardSlider: FC<ProductCardSliderProps> = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [serviceData, setServiceData] = useState(0)

  const handleServiceClick = (service: any) => {
    setServiceData(service)
    setIsOpen(true)
  }

  console.log(products)

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
              onClick={() => handleServiceClick(product)}
              path={product.cta?.url}
            />
          </SwiperSlide>
        ))}
        {isOpen && <ProductModal props={serviceData} setIsOpen={setIsOpen} />}
      </Swiper>
    </>
  )
}

export default ProductCardSlider
