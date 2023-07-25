import React, { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArticleCardHeadlineType } from "@/types/NewsType"

const ArticleCardHeadline: FC<ArticleCardHeadlineType> = ({
  title,
  date,
  short_desc,
  image,
  path,
}) => {
  return (
    <>
      <div className="relative flex flex-col h-[25rem] rounded-[1rem] overflow-hidden">
        <div className="absolute top-[5rem] md:top-32 z-20 flex flex-col justify-center flex-1 w-full">
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <div className="text-2xl font-maqin text-white font-bold w-[90%] md:w-[60%] ">
              <p className="line-clamp-2">{title}</p>
            </div>
            <div className="text-xs text-white">{date}</div>
          </div>
        </div>

        <div className="relative w-full h-[12rem] lg:h-[20rem] xl:h-[25rem]">
          <div className="absolute opacity-30 z-10 bg-black hover:bg-red-700 w-full h-full"></div>
          <Image
            src={image}
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
              <p className="line-clamp-4">{short_desc}</p>
            </div>
            <Link href={`/news/${path}`}>
              <div className="text-sm underline text-[#FF9068]">Read More</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleCardHeadline
