import React, { FC } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import ServiceCard from "../layouts/ServiceCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

interface ServiceCardSliderProps {
  services: {
    id?: number
    title: string
    description: string
    image?: string
    path?: string
  }[]
  setIsOpen: (isOpen: boolean) => void
  // setServiceIndex: (serviceIndex: number) => void
}

const ServiceCardSlider: FC<ServiceCardSliderProps> = ({
  // setServiceIndex,
  setIsOpen,
  services,
}) => {
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
      {services.map((product: any) => (
        <SwiperSlide key={product.id}>
          <ServiceCard
            id={product.id}
            title={product.title}
            description={product.description}
            onClick={() => {
              // setServiceIndex(product.id)
              setIsOpen(true)
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ServiceCardSlider
