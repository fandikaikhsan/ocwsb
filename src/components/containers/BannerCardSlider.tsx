import React, { FC } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import BannerCard from "../layouts/BannerCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

interface BannerCardSliderProps {
  contents: {
    id: number
    title: string
    description: string
    image?: string
    cta?: string
    url?: string
  }[]
}

const BannerCardSlider: FC<BannerCardSliderProps> = ({ contents }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {contents.map((product: any) => (
        <SwiperSlide key={product.id}>
          <BannerCard title={product.title} description={product.description} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BannerCardSlider
