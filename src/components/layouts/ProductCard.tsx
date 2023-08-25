import React, { FC } from "react"
import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  title: string
  description: string
  image?: string
  path?: string
  onClick?: () => void
  cta_text?: string
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    image = "",
    title = "",
    description = "",
    path = "",
    onClick = () => {},
    cta_text = "Find Out More",
  } = props
  return (
    <>
      <div className="relative w-full h-[30rem] rounded-lg m-10 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_30px_3px] shadow-[#868686] overflow-hidden">
        <img
          src={image}
          alt="Card background"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 p-12 lg:p-28 flex flex-col justify-end">
          <div>
            <h3 className=" text-white font-maqin font-semibold text-4xl mb-2">
              {title}
            </h3>
            <p className="text-white font-maqin text-2xl mb-4">{description}</p>
          </div>
          {/* <a
            onClick={onClick}
            className=" hover:cursor-pointer text-white text-xl underline"
          > */}
          <Link href={path ?? "/"}>
            <div className="hover:cursor-pointer text-white text-xl underline">
              {cta_text}
            </div>
          </Link>
          {/* </a> */}
        </div>
      </div>
    </>
  )
}

export default ProductCard
