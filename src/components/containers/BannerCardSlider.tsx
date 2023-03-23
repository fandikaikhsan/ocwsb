import React, { FC, useState, useEffect } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import BannerCard from "../layouts/BannerCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

interface BannerCardSliderProps {
  banners: {
    id: number
    title: string
    subtitle: string
    image?: string
    cta?: {
      text: string
      url?: string
    }
  }[]
}

const BannerCardSlider: FC<BannerCardSliderProps> = ({ banners }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 800)
  }, [])

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={isMobile ? false : true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {banners.map((banner: any) => (
        <SwiperSlide key={banner.id}>
          <BannerCard
            title={banner.title}
            description={banner.subtitle}
            image={banner.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BannerCardSlider
