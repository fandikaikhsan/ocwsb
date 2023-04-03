import React, { FC } from "react"

interface ProductCardProps {
  title: string
  description: string
  image?: string
  path?: string
  onClick?: () => void
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    image = "",
    title = "",
    description = "",
    path = "",
    onClick = () => {},
  } = props
  return (
    <>
      <div className="relative w-full h-[30rem] rounded-md shadow-md overflow-hidden">
        <img
          src={image}
          alt="Card background"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 p-12 lg:p-24 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-maqin font-semibold text-4xl mb-2">
              {title}
            </h3>
            <p className="text-white font-maqin text-2xl mb-4">{description}</p>
          </div>
          <a
            onClick={onClick}
            className=" hover:cursor-pointer text-white text-xl underline"
          >
            Find Out More
          </a>
        </div>
      </div>
    </>
  )
}

export default ProductCard
