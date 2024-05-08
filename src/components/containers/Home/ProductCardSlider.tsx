import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface ProductCardSliderProps {
  products: {
    id: number
    title: string
    desc?: string
    image?: string
    desc_short: string
    cta: {
      text: string
      url?: string
    }
  }[]
}

export default function ProductCardSlider({
  products,
}: ProductCardSliderProps) {
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
          className="w-full h-full swiper-custom-navigation shadow-[rgba(0,_0,_0,_0.1)_0px_0px_30px_3px] shadow-[#868686] rounded-xl"
        >
          {products.map((product, index) => (
            <SwiperSlide
              className=" text-center h-[10rem] p-[5rem] py-[8rem] bg-blue-400"
              style={{
                backgroundImage: `linear-gradient(rgba(55,50,55,0.3), rgba(55,55,55,0.3)), url(${product.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-left">
                <h3 className=" text-white font-maqin font-semibold text-4xl mb-2">
                  {product.title}
                </h3>
                <p className="text-white font-maqin text-2xl mb-4">
                  {product.desc_short}
                </p>
                <a href={product.cta.url ?? "/"}>
                  <div className="hover:cursor-pointer text-white text-xl underline">
                    {product.cta.text}
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
