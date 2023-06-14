import React, { FC } from "react"
import Image from "next/image"
import ProductImage3 from "/public/products/product-3.jpg"

const PortfolioCard: FC<any> = ({ title, short_desc, image }) => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center w-full h-72 rounded-[1rem] overflow-hidden">
        <div className="absolute z-20 p-5 flex flex-col justify-center items-center gap-5 w-[95%] md:w-[70%]">
          <div className="text-center text-md font-bold text-white">
            Final Series of Northrop Grumman-Built C-Band Satellites
            Successfully Launch
          </div>
          <div className="text-center text-sm text-white">
            Leveraging our decades of #definingpossible with advanced unmanned
            aircraft systems, we’ve teamed up with @shieldaitech to prototype
            a....
          </div>
        </div>
        <div className="absolute opacity-50 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
        <Image
          src={ProductImage3}
          alt="Product 3"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  )
}

export default PortfolioCard
