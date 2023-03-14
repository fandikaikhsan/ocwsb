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
  return (
    <>
      <div
        className="h-[58em] bg-blend-darken"
        style={{
          backgroundImage: `url(${image})`,
          opacity: 0.6,
        }}
      >
        <div className="p-52">
          <div className=" flex flex-col gap-4">
            <div className="text-7xl  text-white">{title}</div>
            <div className="text-5xl text-white">{description}</div>
          </div>
          <div className="mt-12">
            <SolidButton text="Read More" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerCard
