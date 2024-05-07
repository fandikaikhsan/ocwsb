import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ProductCardSlider() {
  //   const { data, error } = useQuery("products", () => fetchProducts())
  //   if (error) return <div>Error loading products</div>
  //   if (!data) return <div>Loading products</div>
  return (
    <>
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="w-full h-full swiper-custom-navigation"
        >
          <SwiperSlide className=" text-center h-[10rem] p-[13rem] rounded-xl bg-blue-400">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className=" text-center h-[10rem] p-[13rem] rounded-xl bg-blue-400">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className=" text-center h-[10rem] p-[13rem] rounded-xl bg-blue-400">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className=" text-center h-[10rem] p-[13rem] rounded-xl bg-blue-400">
            Slide 4
          </SwiperSlide>
        </Swiper>
      </div>
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
