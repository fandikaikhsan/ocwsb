"use client"

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
    id: number
    title: string
    desc?: string
    desc_short: string
    image?: string
    cta?: {
      text: string
      url?: string
    }
  }[]
}

const ServiceCardSlider: FC<ServiceCardSliderProps> = ({ services }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [serviceData, setServiceData] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 800)
  }, [])

  const handleServiceClick = (service: any) => {
    setServiceData(service)
    setIsOpen(true)
  }

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      navigation={isMobile ? false : true}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      className="swiper-custom-navigation"
      breakpoints={{
        0: {
          slidesPerView: 0,
          spaceBetween: 10,
        },
        120: {
          slidesPerView: 0.5,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 0.9,
          spaceBetween: 30,
        },
        375: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        425: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        440: {
          slidesPerView: 1.4,
          spaceBetween: 10,
        },
        487: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        530: {
          slidesPerView: 1.65,
          spaceBetween: 10,
        },
        550: {
          slidesPerView: 1.75,
          spaceBetween: 10,
        },
        580: {
          slidesPerView: 1.9,
          spaceBetween: 10,
        },
        610: {
          slidesPerView: 1.9,
          spaceBetween: 10,
        },
        621: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        630: {
          slidesPerView: 1.9,
          spaceBetween: 10,
        },
        650: {
          slidesPerView: 1.7,
          spaceBetween: 10,
        },
        803: {
          slidesPerView: 1.9,
          spaceBetween: 80,
        },
        850: {
          slidesPerView: 2.1,
          spaceBetween: 80,
        },
        900: {
          slidesPerView: 2.2,
          spaceBetween: 80,
        },
        960: {
          slidesPerView: 2.3,
          spaceBetween: 80,
        },
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 80,
        },
        1100: {
          slidesPerView: 2.7,
          spaceBetween: 80,
        },
        1211: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
        1400: {
          slidesPerView: 3.2,
          spaceBetween: 100,
        },
        1600: {
          slidesPerView: 3.3,
          spaceBetween: 100,
        },
        1680: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
        1720: {
          slidesPerView: 3.7,
          spaceBetween: 40,
        },
        1860: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 4.4,
          spaceBetween: 40,
        },
        2190: {
          slidesPerView: 4.7,
          spaceBetween: 40,
        },
        2300: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        2400: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        2500: {
          slidesPerView: 5.5,
          spaceBetween: 40,
        },
      }}
    >
      {services.map((service: any) => (
        <SwiperSlide key={service.id}>
          <ServiceCard
            id={service.id}
            title={service.title}
            desc={service.desc_short}
            image={service.image}
            cta={service.cta}
            onClick={() => {
              handleServiceClick(service)
            }}
          />
        </SwiperSlide>
      ))}
      {isOpen && <ServiceModal props={serviceData} setIsOpen={setIsOpen} />}
    </Swiper>
  )
}

export default ServiceCardSlider
