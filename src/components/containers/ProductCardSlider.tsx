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
    description: string
    path: string
  }[]
}

const ServiceCardSlider: FC<ProductCardSliderProps> = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 800
  }, [])

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {products.map((product: any) => (
        <SwiperSlide key={product.id}>
          <ProductCard
            title={product.title}
            description={product.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ServiceCardSlider
