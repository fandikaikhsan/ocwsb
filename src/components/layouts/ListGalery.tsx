import React, { FC } from "react"
import Image from "next/image"
import ProductImage1 from "/public/products/product-1.jpg"
import ProductImage2 from "/public/products/product-2.jpg"
import ProductImage3 from "/public/products/product-3.jpg"

const ListGalery: FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-fit m-auto">
        <div className="flex p-8 h-72 w-72 text-white text-md items-center">
          Product parts supplier for RAD to other customers (RAD outsourcing)
        </div>
        <div className="relative cursor-pointer bg-green-400 h-72 w-72">
          <div className="absolute opacity-20 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
          <Image
            src={ProductImage1}
            alt="Product 1"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative cursor-pointer bg-green-400 h-72 w-72">
          <div className="absolute opacity-20 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
          <Image
            src={ProductImage2}
            alt="Product 2"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex p-8 h-72 w-72 text-white text-md items-center">
          Product parts supplier for RAD to other customers (RAD outsourcing)
        </div>
        <div className="flex p-8 h-72 w-72 text-white text-md items-center">
          Product parts supplier for RAD to other customers (RAD outsourcing)
        </div>
        <div className="relative cursor-pointer bg-green-400 h-72 w-72">
          <div className="absolute opacity-20 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
          <Image
            src={ProductImage3}
            alt="Product 3"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  )
}

export default ListGalery
