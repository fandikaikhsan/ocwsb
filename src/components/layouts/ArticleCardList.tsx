import React from "react"
import ProductImage1 from "/public/products/product-1.jpg"
import ProductImage2 from "/public/products/product-2.jpg"
import ProductImage3 from "/public/products/product-3.jpg"
import Image from "next/image"

const ArticleCardList = () => {
  return (
    <>
      <div className="flex gap-4 md:w-[95%] w-[80%] px-4 h-48 text-white">
        <div className="relative min-w-[20%] rounded-lg ">
          <Image
            src={ProductImage1}
            alt="Product 1"
            fill={true}
            style={{
              objectFit: "cover",
              borderRadius: "1rem",
              aspectRatio: "1/1",
            }}
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="">
            <div className="text-md font-bold">
              Final Series of Northrop Grumman-Built C-Band Satellites
              Successfully Launch
            </div>
            <div className="text-xs text-gray-500">12/02/23 12:02</div>
          </div>
          <div className="text-sm">
            <p className="line-clamp-3">
              Leveraging our decades of #definingpossible with advanced unmanned
              aircraft systems, we’ve teamed up with @shieldaitech to prototype
              a next generation V-BAT for the Future Tactical Unmanned Aircraft
              System Program.
            </p>
          </div>
          <div className="text-orange-600 underline text-xs">Read more</div>
        </div>
      </div>
    </>
  )
}

export default ArticleCardList
