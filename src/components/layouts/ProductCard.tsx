import React, { FC } from "react"
import GradientBorderButton from "../common/GradientBorderButton"

interface ProductCardProps {
  title: string
  description: string
  image?: string
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { title = "", description = "", image = "" } = props
  return (
    <>
      <div
        className={`flex flex-co pt-60 w-72 rounded-lg ${
          image ? `bg-purple-500` : "bg-purple-500"
        }`}
      >
        <div className="flex flex-col items-center justify-center p-6 border-white ">
          <div className="flex flex-col gap-2 text-sm text-white pb-10">
            <div>{title}</div>
            <div>{description}</div>
          </div>
          <GradientBorderButton text="Read more" />
        </div>
      </div>
    </>
  )
}

export default ProductCard
