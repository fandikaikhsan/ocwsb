import React, { FC } from "react"
import GradientBorderButton from "../common/GradientBorderButton"
import Link from "next/link"
import Image from "next/image"

interface ServiceCardProps {
  id: number
  title: string
  desc: string
  image?: string
  cta?: {
    text: string
    url?: string
  }
  onClick?: () => void
}

const ServiceCard: FC<ServiceCardProps> = (props) => {
  const {
    id = 0,
    title = "",
    desc = "",
    image = "",
    cta = { text: "", url: "" },
    onClick = () => {},
  } = props

  return (
    <>
      <Link href={cta.url ?? "/"}>
        <div
          className={`relative items-center h-[30em] md:h-[38em] hover:bg-orange-900 transition-opacity duration-200 w-[18em] md:w-[26em] rounded-[1rem] overflow-hidden`}
        >
          <img
            src={image}
            alt="Card background"
            className="absolute top-1/2 opacity-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover rounded-[1rem]"
          />
          <div className="absolute inset-0 flex flex-col justify-between items-start p-4 space-y-4">
            <div className="flex flex-col items-start justify-start pt-[18rem] md:pt-[24rem] flex-grow">
              <div className="text-3xl font-maqin text-white md:text-4xl">
                {title}
              </div>
              <div className="text-md font-maqin text-white md:text-lg">
                {desc}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ServiceCard
