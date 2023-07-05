import React, { FC } from "react"
import Image from "next/image"
import { ImageCardType } from "@/types/CommonType"

const BannerImageCard: FC<ImageCardType> = ({ title, image }) => {
  return (
    <>
      <div className="relative w-full h-[10rem] md:h-[15rem] lg:h-[20rem] rounded-[1rem]">
        <div className="absolute opacity-30 z-10 bg-black w-full h-full"></div>
        <Image
          src={image}
          alt={title}
          fill={true}
          style={{
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
        />
      </div>
    </>
  )
}

export default BannerImageCard
