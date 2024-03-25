import React, { FC } from "react"
import Image from "next/image"
import ProductImage2 from "/public/products/product-2.jpg"
import { ContactUsCTABannerType } from "@/types/ContactUsType"

const ContactUsCTABanner: FC<ContactUsCTABannerType> = ({
  title,
  image,
  button_text,
  path,
}) => {
  return (
    <>
      <div className="relative h-52 w-full">
        <div className="relative w-full h-52">
          <div className="absolute opacity-40 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
          <Image
            src={image}
            alt="Product 2"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="absolute z-10 top-0 flex flex-col justify-center items-center w-full h-52 gap-2 md:gap-4">
          <div className="text-white text-lg">{title}</div>
          <div className="bg-[#B47400] w-fit rounded-lg px-10 py-2 text-white text-sm mx-auto">
            {button_text}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsCTABanner
