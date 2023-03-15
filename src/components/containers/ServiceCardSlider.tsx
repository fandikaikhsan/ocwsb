import React, { useState, FC, useEffect } from "react"
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 800)
    console.log(isMobile)
  }, [])

  const handleServiceClick = (product: any) => {
    setServiceData(product)
    setIsOpen(true)
  }
  console.log(isMobile)

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      navigation={isMobile ? false : true}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        803: {
          slidesPerView: 2,
          spaceBetween: 80,
        },
        1211: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 100,
        },
        1680: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1860: {
          slidesPerView: 5,
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
