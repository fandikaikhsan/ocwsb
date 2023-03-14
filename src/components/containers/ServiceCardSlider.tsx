import React, { FC } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import ServiceCard from "../layouts/ServiceCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

interface ServiceCardSliderProps {
  products: {
    id: number
    title: string
    description: string
    path: string
  }[]
}

const ServiceCardSlider: FC<ServiceCardSliderProps> = ({ products }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {products.map((product: any) => (
        <SwiperSlide key={product.id}>
          <ServiceCard
            title={product.title}
            description={product.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ServiceCardSlider
