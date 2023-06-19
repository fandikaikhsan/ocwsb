import React from "react"
import ProductImage1 from "/public/products/product-1.jpg"
import ProductImage2 from "/public/products/product-2.jpg"
import ProductImage3 from "/public/products/product-3.jpg"
import Image from "next/image"

// @TODO:
// - add props for data
// - image not aspect ratio 1/1
// - text-clamp not works (look to overflow-hidden)

const ArticleCardList = () => {
  return (
    <>
      <div className="flex gap-4 w-full md:px-4 h-36 md:h-52 text-white p-2">
        <div className="relative w- h-full aspect-1">
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

        <div className="flex flex-col gap-2 py-2 md:py-5">
          <div className="">
            <div className="text-sm md:text-md overflow-hidden font-bold">
              <p className=" line-clamp-2">
                Final Series of Northrop Grumman-Built C-Band Satellites
                Successfully Launch
              </p>
            </div>
            <div className="text-xs text-gray-500">12/02/23 12:02</div>
          </div>
          <div className="text-xs md:text-sm">
            <p className="line-clamp-2 md:line-clamp-3">
              Leveraging our Leveraging our decades of #definingpossible with
              advanced unmanned aircraft systems, we’ve teamed up with
              @shieldaitech to prototype a next generation V-BAT for the Future
              Tactical Unmanned Aircraft System Program.
            </p>
          </div>
          <div className="text-orange-600 underline text-xs">Read more</div>
        </div>
      </div>
    </>
  )
}

export default ArticleCardList
