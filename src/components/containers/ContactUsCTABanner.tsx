import React, { FC } from "react"
import Image from "next/image"
import ProductImage2 from "/public/products/product-2.jpg"

const ContactUsCTABanner: FC = () => {
  return (
    <>
      <div className="relative h-44 w-full">
        <div className="relative w-full h-44">
          <div className="absolute opacity-30 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
          <Image
            src={ProductImage2}
            alt="Product 2"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="absolute z-10 top-0 flex flex-col justify-center items-center w-full h-44 gap-4">
          <div className="text-white text-lg">Ready to talk to us?</div>
          <div className="bg-[#B47400] w-fit rounded-lg px-10 py-2 text-white text-sm mx-auto">
            Contact Us
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsCTABanner
