import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { ListGaleryComponentType } from "@/types/CommonType"

const ListGaleryDetail: FC<ListGaleryComponentType> = ({
  values,
  page,
  clickable = false,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 w-fit m-auto ">
        {values.map((value, index) =>
          index % 2 === 0 ? (
            <React.Fragment key={value.name}>
              <div
                // here
                className={`${
                  clickable ? "cursor-pointer" : ""
                } relative h-44 w-44 md:h-64 md:w-96 lg:h-[22rem] lg:w-[30rem] mb-8 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_30px_1px] shadow-[#868686]`}
              >
                {clickable ? (
                  <Link href={`/${page}/${value.id}`}>
                    <div className="absolute opacity-20 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
                    <Image
                      src={value.image}
                      alt={value.name}
                      fill={true}
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                ) : (
                  <>
                    <div className="absolute cursor-default opacity-20 z-10 bg-black w-full h-full"></div>
                    <Image
                      src={value.image}
                      alt={value.name}
                      fill={true}
                      style={{ objectFit: "cover" }}
                    />
                  </>
                )}
              </div>
              {clickable ? (
                <Link href={`/${page}/${value.id}`}>
                  <div className="flex flex-col gap-2">
                    <div className="px-8 py-8 md:text-sm flex flex-col gap-5 h-44 w-44 md:h-64 md:w-96 lg:h-[22rem] lg:w-[30rem] mb-8 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_30px_1px] shadow-[#868686] bg-[#0A0A0A] text-white text-xs items-start justify-center">
                      <div className="font-bold lg:text-lg xl:text-2xl">
                        {value.name}
                      </div>
                      <div className="font-thin lg:text-base xl:text-lg">
                        {value.short_desc}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="px-8 py-8 md:text-sm flex flex-col gap-5 h-44 w-44 md:h-64 md:w-96 lg:h-[22rem] lg:w-[30rem] mb-8 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_30px_1px] shadow-[#868686] bg-[#0A0A0A] text-white text-xs items-start justify-center">
                  <div className="font-bold lg:text-lg xl:text-2xl">
                    {value.name}
                  </div>
                  <div className="font-thin lg:text-base xl:text-lg">
                    {value.short_desc}
                  </div>
                </div>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment key={value.name}>
              {clickable ? (
                <Link href={`/${page}/${value.id}`}>
                  <div className="px-8 py-8 md:text-sm flex flex-col gap-5 h-44 w-44 md:h-64 md:w-96 lg:h-[22rem] lg:w-[30rem] mb-8 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_30px_1px] shadow-[#868686] bg-[#0A0A0A] text-white text-xs items-start justify-center">
                    <div className="font-bold lg:text-lg xl:text-2xl">
                      {value.name}
                    </div>
                    <div className="font-thin lg:text-base xl:text-lg">
                      {value.short_desc}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="px-8 py-8 md:text-sm flex flex-col gap-5 h-44 w-44 md:h-64 md:w-96 lg:h-[22rem] lg:w-[30rem] mb-8 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_30px_1px] shadow-[#868686] bg-[#0A0A0A] text-white text-xs items-start justify-center">
                  <div className="font-bold lg:text-lg xl:text-2xl">
                    {value.name}
                  </div>
                  <div className="font-thin lg:text-base xl:text-lg">
                    {value.short_desc}
                  </div>
                </div>
              )}
              <div
                className={`relative h-44 w-44 md:h-64 md:w-96 lg:h-[22rem] lg:w-[30rem] shadow-[rgba(0,_0,_0,_0.1)_0px_0px_30px_1px] shadow-[#868686] bg-[#0A0A0A] mb-8`}
              >
                {clickable ? (
                  <Link href={`/${page}/${value.id}`}>
                    <div className="absolute opacity-20 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
                    <Image
                      src={value.image}
                      alt={value.name}
                      fill={true}
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                ) : (
                  <>
                    <div className="absolute cursor-default opacity-20 z-10 bg-black w-full h-full"></div>
                    <Image
                      src={value.image}
                      alt={value.name}
                      fill={true}
                      style={{ objectFit: "cover" }}
                    />
                  </>
                )}
              </div>
            </React.Fragment>
          )
        )}
      </div>
    </>
  )
}

export default ListGaleryDetail
