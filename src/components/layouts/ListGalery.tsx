import React, { FC } from "react"
import Image from "next/image"
import ProductImage1 from "/public/products/product-1.jpg"
import ProductImage2 from "/public/products/product-2.jpg"
import ProductImage3 from "/public/products/product-3.jpg"
import { ListGaleryComponentType } from "@/types/CommonType"

// @TODO:
// - add props for data
// - add dynamics layout based on data available
// - add dynamics layout for odd and even

const ListGalery: FC<ListGaleryComponentType> = ({ values }) => {
  return (
    <>
      <div className="grid grid-cols-2 w-fit m-auto">
        {values.map((value, index) =>
          index % 2 === 0 ? (
            <>
              <div className="relative cursor-pointer bg-green-400 h-40 w-40 md:h-64 md:w-64">
                <div className="absolute opacity-20 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
                <Image
                  src={value.image}
                  alt={value.title}
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex p-8 h-40 w-40 md:h-64 md:w-64 text-white text-xs md:text-sm items-center">
                {value.title}
              </div>
            </>
          ) : (
            <>
              <div className="flex p-8 h-40 w-40 md:h-64 md:w-64 text-white text-xs md:text-sm items-center">
                {value.title}
              </div>
              <div className="relative cursor-pointer bg-green-400 h-40 w-40 md:h-64 md:w-64">
                <div className="absolute opacity-20 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
                <Image
                  src={value.image}
                  alt={value.title}
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </>
          )
        )}
      </div>
    </>
  )
}

export default ListGalery
