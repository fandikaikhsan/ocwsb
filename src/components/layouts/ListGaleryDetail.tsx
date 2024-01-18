import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { ListGaleryComponentType } from "@/types/CommonType"

const ListGaleryDetail: FC<ListGaleryComponentType> = ({ values, page }) => {
  return (
    <>
      <div className="flex flex-col gap-10 px-5">
        {values.map((value, index) => (
          <Link href={`/${page}/${value.id}`}>
            <div
              className={
                index % 2 === 0
                  ? `flex flex-row-reverse shadow-[rgba(5,_0,_0,_5)_10px_10px_15px_0.5px] shadow-[#9c9c9c] h-[14rem] md:h-[18rem]`
                  : `flex flex-row shadow-[rgba(0,_0,_0,_0.1)_10px_10px_15px_0.5px] shadow-[#9c9c9c] h-[14rem] md:h-[18rem]`
              }
            >
              <div className="flex flex-col items-start justify-center gap-2 bg-[#0A0A0A]  flex-1">
                <div className="p-10 flex flex-col gap-3">
                  <div className="text-white font-bold lg:text-lg 2xl:text-xl">
                    {value.name}
                  </div>
                  <div className="text-white font-base text-sm lg:text-base">
                    {value.short_desc}
                  </div>
                  <div className="underline text-red-800 lg:text-base xl:text-base">
                    Learn More
                  </div>
                </div>
              </div>
              <div className="bg-red-300 overflow-hidden flex-1">
                <Image
                  src={value.image}
                  alt={value.name}
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default ListGaleryDetail
