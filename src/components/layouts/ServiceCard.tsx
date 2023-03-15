import React, { FC } from "react"
import GradientBorderButton from "../common/GradientBorderButton"

interface ServiceCardProps {
  id: number
  title: string
  description: string
  image?: string
  path?: string
  onClick?: () => void
}

const ServiceCard: FC<ServiceCardProps> = (props) => {
  const {
    id = 0,
    title = "",
    description = "",
    image = "",
    onClick = () => {},
  } = props

  return (
    <>
      <div
        className={`flex flex-col items-center pt-60 h-[30em] md:h-[38em]  w-[18em] md:w-[26em] rounded-lg ${
          image ? `bg-purple-500` : "bg-purple-500"
        }`}
      >
        <div className="flex flex-col justify-center px-6 border-white ">
          <div className="flex flex-col gap-2  text-white pb-2 md:pb-14">
            <div className="text-3xl font-maqin md:text-4xl">{title}</div>
            <div className="text-md font-maqin md:text-lg">{description}</div>
          </div>
        </div>
        <div className=" mt-auto mb-4 justify-center">
          <GradientBorderButton onClick={onClick} text="Read more" />
        </div>
      </div>
    </>
  )
}

export default ServiceCard
