import React, { FC } from "react"
import Image from "next/image"
import ProductImage3 from "/public/products/product-3.jpg"

const BannerImageCard: FC = () => {
  return (
    <>
      <div className="relative w-full h-[10rem] md:h-[20rem] rounded-[1rem]">
        <div className="absolute opacity-20 z-10 bg-black w-full h-full"></div>
        <Image
          src={ProductImage3}
          alt="Product 3"
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
