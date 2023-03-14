import React, { FC } from "react"

interface ProductCardProps {
  image?: string
  title: string
  description: string
  path?: string
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { image = "", title = "", description = "", path = "" } = props
  return (
    <>
      <div className="flex flex-col justify-center p-6 rounded-lg border-2 w-full bg-green-500 ">
        <div className="pl-10 pt-52">
          <div className="flex flex-col gap-2 text-lg text-white pb-8">
            <div className="font-maqin text-4xl">{title}</div>
            <div>{description}</div>
          </div>
          <div className="text-white underline cursor-pointer">
            <div>Read more</div>{" "}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
