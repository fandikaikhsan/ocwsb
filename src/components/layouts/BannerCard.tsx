import React, { FC } from "react"
import SolidButton from "../common/SolidButton"

interface BannerCardProps {
  title: string
  description: string
  image?: string
  image_mobile?: string
  cta?: string
  url?: string
}

const BannerCard: FC<BannerCardProps> = (props) => {
  const {
    title = "",
    description = "",
    image = "",
    image_mobile = "",
    url = "",
    cta = "",
  } = props
  const backgroundImage = "https://via.placeholder.com/1920x1080"
  return (
    <>
      <div className="relative w-full h-[40rem] md:h-[52rem] overflow-hidden">
        <img
          src={image}
          alt="Banner"
          className="hidden md:block absolute top-1/2 left-1/2 opacity-80 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        />
        <img
          src={image_mobile}
          alt="Banner"
          className="absolute md:hidden top-1/2 left-1/2 opacity-70 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        />
        <div className="absolute inset-0 md:top-1/2 md:left-1/2 flex flex-col text-center md:text-right items-center md:items-end justify-center px-4 md:pr-16">
          <h1 className=" text-white font-maqin font-semibold mb-3 text-2xl sm:text-3xl md:text-5xl">
            {title}
          </h1>
          {/* <h2 className="text-white font-maqin mb-8 text-xl sm:text-2xl">
            {description}
          </h2> */}
          <SolidButton text="Read more" />
        </div>
      </div>
    </>
  )
}

export default BannerCard
