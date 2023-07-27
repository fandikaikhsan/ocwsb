import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { ListGaleryComponentType } from "@/types/CommonType"

const ListGalery: FC<ListGaleryComponentType> = ({
  values,
  page,
  clickable = false,
  paddingy,
  paddingx,
  textposition,
  textdesktopsize,
  type,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 w-fit m-auto">
        {values.map((value, index) =>
          index % 2 === 0 ? (
            <React.Fragment key={value.name}>
              <div
                className={`${
                  clickable ? "cursor-pointer" : ""
                } relative h-44 w-44 md:h-96 md:w-96`}
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
                  <div
                    className={`${paddingx ? "px-" + paddingx : "px-8"} ${
                      paddingy ? "py-" + paddingy : "py-8"
                    } ${
                      textposition
                        ? "text-" + textposition + " justify-" + textposition
                        : ""
                    } ${
                      textdesktopsize
                        ? "md:text-" + textdesktopsize
                        : "md:text-sm"
                    } flex h-44 w-44 md:h-96 md:w-96 text-white text-xs items-center`}
                  >
                    {value.name}
                  </div>
                </Link>
              ) : (
                <div
                  className={`${paddingx ? "px-" + paddingx : "px-8"} ${
                    paddingy ? "py-" + paddingy : "py-8"
                  } ${
                    textposition
                      ? "text-" + textposition + " justify-" + textposition
                      : ""
                  } ${
                    textdesktopsize
                      ? "md:text-" + textdesktopsize
                      : "md:text-sm"
                  } flex h-44 w-44 md:h-96 md:w-96 text-white text-xs items-center`}
                >
                  {value.name}
                </div>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment key={value.name}>
              {clickable ? (
                <Link href={`/${page}/${value.id}`}>
                  <div
                    className={`${paddingx ? "px-" + paddingx : "px-8"} ${
                      paddingy ? "py-" + paddingy : "py-8"
                    } ${
                      textposition
                        ? "text-" + textposition + " justify-" + textposition
                        : ""
                    } ${
                      textdesktopsize
                        ? "md:text-" + textdesktopsize
                        : "md:text-sm"
                    } flex h-44 w-44 md:h-96 md:w-96 text-white text-xs items-center`}
                  >
                    {value.name}
                  </div>
                </Link>
              ) : (
                <div
                  className={`${paddingx ? "px-" + paddingx : "px-8"} ${
                    paddingy ? "py-" + paddingy : "py-8"
                  } ${
                    textposition
                      ? "text-" + textposition + " justify-" + textposition
                      : ""
                  } ${
                    textdesktopsize
                      ? "md:text-" + textdesktopsize
                      : "md:text-sm"
                  } flex h-44 w-44 md:h-96 md:w-96 text-white text-xs items-center`}
                >
                  {value.name}
                </div>
              )}
              <div className={`relative h-44 w-44 md:h-96 md:w-96`}>
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

export default ListGalery
