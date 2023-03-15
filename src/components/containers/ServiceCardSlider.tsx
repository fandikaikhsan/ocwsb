import React, { useState, FC } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import ServiceCard from "../layouts/ServiceCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import ServiceModal from "./ServiceModal"

interface ServiceCardSliderProps {
  services: {
    id?: number
    title: string
    description: string
    image?: string
    path?: string
  }[]
}

const ServiceCardSlider: FC<ServiceCardSliderProps> = ({ services }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [serviceData, setServiceData] = useState(0)

  const handleServiceClick = (product: any) => {
    setServiceData(product)
    setIsOpen(true)
  }

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
        803: {
          slidesPerView: 2,
          spaceBetween: 80,
        },
        1211: {
          slidesPerView: 4,
          spaceBetween: 100,
        },
        1680: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1860: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        2190: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
    >
      {services.map((product: any) => (
        <SwiperSlide key={product.id}>
          <ServiceCard
            id={product.id}
            title={product.title}
            description={product.short_desc}
            onClick={() => {
              handleServiceClick(product)
            }}
          />
        </SwiperSlide>
      ))}
      {isOpen && <ServiceModal props={serviceData} setIsOpen={setIsOpen} />}
    </Swiper>
  )
}

export default ServiceCardSlider
