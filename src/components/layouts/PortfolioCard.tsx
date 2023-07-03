import React, { FC } from "react"
import Image from "next/image"
import { PortofolioCardType } from "@/types/CompanyType"

const PortfolioCard: FC<PortofolioCardType> = ({
  title,
  short_desc,
  image,
}) => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center w-full h-72 rounded-[1rem] overflow-hidden">
        <div className="absolute z-20 p-5 flex flex-col justify-center items-center gap-5 w-[95%] md:w-[70%]">
          <div className="text-center text-md font-bold text-white">
            {title}
          </div>
          <div className="text-center text-sm text-white">{short_desc}</div>
        </div>
        <div className="absolute opacity-50 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
        <div className="absolute opacity-50 -z-10 bg-white w-full h-full"></div>
        <Image
          src={image}
          alt="Product 3"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  )
}

export default PortfolioCard
