import React from "react"
import ProductImage2 from "/public/products/product-2.jpg"
import Image from "next/image"

const ArticleCardHeadline = () => {
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center rounded-lg w-[50rem] bg-blue-200 h-72">
        <div className="relative w-full h-full">
          <div className="absolute opacity-40 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
          <div className="z-10 flex flex-col justify-center items-center">
            <div className="font-bold text-lg text-white">
              Final Series of Northrop Grumman-Built C-Band Satellites
              Successfully Launch
            </div>
            <div className="text-xs text-white">12/02/23 12:02</div>
          </div>
          <Image
            src={ProductImage2}
            alt="Product 2"
            fill={true}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center p-5 bottom-0 bg-[#74290E] rounded-[0.5rem] ">
          <div className="text-white text-sm w-[80%]">
            Leveraging our decades of #definingpossible with advanced unmanned
            aircraft systems, we’ve teamed up with @shieldaitech to prototype a.
            Leveraging our decades of #definingpossible with advanced unmanned
            aircraft systems,..
          </div>
          <div className="underline text-orange-500 text-xs">Read More</div>
        </div>
      </div> */}

      <div className="relative flex flex-col h-[20rem] rounded-[1rem] overflow-hidden">
        <div className="absolute top-10 z-20 flex flex-col justify-center flex-1 w-full">
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <div className="text-md text-white font-bold w-[60%] ">
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
              borderRadius: "0.5rem",
            }}
          />
        </div>

        <div className="bg-[#74290E] w-full rounded-b-[1rem] p-5">
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <div className="text-sm text-white w-[80%] ">
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
