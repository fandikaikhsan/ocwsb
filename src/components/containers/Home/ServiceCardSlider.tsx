import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules

export default function ServiceCardSliderProportion() {
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
        <SwiperSlide className=" text-center flex justify-center items-center rounded-xl py-[18rem] px-[10rem] bg-green-300">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className=" text-center flex justify-center items-center rounded-xl py-[18rem] px-[10rem] bg-green-300">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className=" text-center flex justify-center items-center rounded-xl py-[18rem] px-[10rem] bg-green-300">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className=" text-center flex justify-center items-center rounded-xl py-[18rem] px-[10rem] bg-green-300">
          Slide 4
        </SwiperSlide>
      </Swiper>
    </>
  )
}

// #app {
//   height: 100%;
// }
// html,
// body {
//   position: relative;
//   height: 100%;
// }

// body {
//   background: #eee;
//   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 14px;
//   color: #000;
//   margin: 0;
//   padding: 0;
// }

// .swiper {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }
