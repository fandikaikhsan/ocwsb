import React, { FC, useState, useEffect } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import BannerImageCard from "../layouts/BannerImageCard"

const ImageCardSlider: FC<any> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [serviceData, setServiceData] = useState(0)

  const handleServiceClick = (service: any) => {
    setServiceData(service)
    setIsOpen(true)
  }

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
        {images.map((image: any, index: any) => (
          <SwiperSlide
            key={index}
            style={{ width: "calc(2/3 * 100vw)", zIndex: 0 }}
          >
            <BannerImageCard image={image.path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ImageCardSlider
