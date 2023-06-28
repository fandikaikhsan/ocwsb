import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArticleCardListType } from "@/types/NewsType"

const ArticleCardList: FC<ArticleCardListType> = ({
  title,
  image,
  short_desc,
  date,
  path,
}) => {
  return (
    <>
      <div className="flex gap-4 w-full md:px-4 h-36 md:h-52 text-white p-2">
        <div className="relative w- h-full aspect-1">
          <Image
            src={image}
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
              <p className=" line-clamp-2">{title}</p>
            </div>
            <div className="text-xs text-gray-500">{date}</div>
          </div>
          <div className="text-xs md:text-sm">
            <p className="line-clamp-2 md:line-clamp-3">{short_desc}</p>
          </div>
          <Link href={`/news/${path}`}>
            <div className="text-orange-600 underline text-xs">Read more</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ArticleCardList
