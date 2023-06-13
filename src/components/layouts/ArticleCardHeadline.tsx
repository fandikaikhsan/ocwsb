import React, { FC } from "react"
import ProductImage2 from "/public/products/product-2.jpg"
import Image from "next/image"

const ArticleCardHeadline: FC<any> = ({ title, date, short_desc, image }) => {
  return (
    <>
      <div className="relative flex flex-col h-[25rem] md:h-[20rem] rounded-[1rem] overflow-hidden">
        <div className="absolute top-16 md:top-20 z-20 flex flex-col justify-center flex-1 w-full">
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <div className="text-md text-white font-bold w-[90%] md:w-[60%] ">
              Final Series of Northrop Grumman-Built C-Band Satellites
              Successfully Launch
            </div>
            <div className="text-xs text-white">12/02/23 12:02</div>
          </div>
        </div>

        <div className="relative w-full h-[20rem]">
          <div className="absolute opacity-30 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
          <Image
            src={ProductImage2}
            alt="Product 2"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="bg-[#74290E] w-full rounded-b-[1rem] p-5">
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <div className="text-sm text-white w-[95%] md:w-[80%] ">
              Leveraging our decades of #definingpossible with advanced unmanned
              aircraft systems, we’ve teamed up with @shieldaitech to prototype
              a. Leveraging our decades of #definingpossible with advanced
              unmanned aircraft systems,..
            </div>
            <div className="text-sm underline text-[#FF9068]">Read More</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleCardHeadline
