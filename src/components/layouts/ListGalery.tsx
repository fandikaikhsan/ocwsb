import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { ListGaleryComponentType } from "@/types/CommonType"

const ListGalery: FC<ListGaleryComponentType> = ({
  values,
  page,
  clickable = false,
  paddingy = "8",
  paddingx = "8",
  textposition,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 w-fit m-auto">
        {values.map((value, index) =>
          index % 2 === 0 ? (
            <>
              <div
                className={`${
                  clickable ? "cursor-pointer" : ""
                } relative h-40 w-40 md:h-64 md:w-64`}
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
              <div
                className={`${paddingx ? "px-" + paddingx : "px-8"} ${
                  paddingy ? "py-" + paddingy : "py-8"
                } ${
                  textposition ? "text-" + textposition : ""
                } flex h-40 w-40 md:h-64 md:w-64 text-white text-xs md:text-sm items-center`}
              >
                {value.name}
              </div>
            </>
          ) : (
            <>
              <div
                className={`${paddingx ? "px-" + paddingx : "px-8"} ${
                  paddingy ? "py-" + paddingy : "py-8"
                } ${
                  textposition ? "text-" + textposition : ""
                } flex h-40 w-40 md:h-64 md:w-64 text-white text-xs md:text-sm items-center`}
              >
                {value.name}
              </div>
              <div className={`relative h-40 w-40 md:h-64 md:w-64`}>
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
            </>
          )
        )}
      </div>
    </>
  )
}

export default ListGalery
