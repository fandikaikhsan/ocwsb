import React, { FC } from "react"

interface PageHeaderProps {
  title: string
  description: string
  type: "title" | "detail"
}

const PageHeader: FC<PageHeaderProps> = ({ title, description, type }) => {
  type = type || "title"

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center w-full bg-[#74290E] h-56">
        <div className="text-[2rem] text-white font-maqin">{title}</div>
        {type === "detail" ? (
          <div className="text-sm text-white text-center w-[75%] md:w-[50%]">
            {description}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default PageHeader
