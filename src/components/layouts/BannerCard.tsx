import React, { FC } from "react"
import SolidButton from "../common/SolidButton"

interface BannerCardProps {
  title: string
  description: string
  image?: string
  cta?: string
  url?: string
}

const BannerCard: FC<BannerCardProps> = (props) => {
  const { title = "", description = "", image = "", url = "", cta = "" } = props
  const backgroundImage = "https://via.placeholder.com/1920x1080"
  return (
    <>
      <div className="relative w-full h-[52rem]  overflow-hidden">
        <img
          src={image}
          alt="Banner"
          className="absolute top-1/2 left-1/2 opacity-50 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col text-center items-center justify-center px-4">
          <h1 className="text-white font-maqin font-semibold mb-2 text-2xl sm:text-4xl md:text-6xl">
            {title}
          </h1>
          <h2 className="text-white font-maqin mb-8 text-xl sm:text-2xl">
            {description}
          </h2>
          <SolidButton text="Read more" />
        </div>
      </div>
    </>
  )
}

export default BannerCard
