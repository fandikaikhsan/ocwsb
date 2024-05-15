import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules

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

export default function ServiceCardSliderProportion({
  services,
}: ServiceCardSliderProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="h-full w-full swiper-custom-navigation"
      >
        {services.map((service) => (
          <SwiperSlide
            key={service.id}
            className=" text-center flex justify-center items-center rounded-xl py-[18rem] px-[10rem] shadow-[rgba(0,_0,_0,_0.1)_0px_0px_15px_3px] shadow-[#868686] my-2"
            style={{
              backgroundImage: `linear-gradient(rgba(55,50,55,0.3), rgba(55,55,55,0.3)), url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-between items-start p-4 space-y-4">
              <div className="flex flex-col items-start justify-start pt-[18rem] md:pt-[24rem] flex-grow">
                <div className="text-3xl font-maqin text-white md:text-4xl">
                  {service.title}
                </div>
                <div className="text-md font-maqin text-left text-white md:text-lg">
                  {service.desc_short}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
