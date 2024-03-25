import React, { FC } from "react"

interface PageHeaderProps {
  title: string
  backgroundImage?: string
  description?: string
  type?: "title" | "detail" | "tall"
}

const PageHeader: FC<PageHeaderProps> = ({
  title,
  description,
  type,
  backgroundImage,
}) => {
  type = type || "title"

  return (
    <>
      <div
        className={`${
          type === "tall" ? "pt-60 pb-48 md:pt-[20rem] md:pb-64" : "pt-32 pb-16"
        } flex flex-col gap-4 justify-center items-center text-center w-full `}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: backgroundImage ? "transparent" : "#9b2c2c",
        }}
      >
        <div
          className={`${
            type === "tall" ? "md:text-[4rem] text-[2rem]" : "text-[2rem]"
          }  w-[90%] text-white font-acumin uppercase`}
        >
          {title}
        </div>
        {type === "detail" ? (
          <div className="text-sm text-white text-center w-[75%] md:w-[50%]">
            {description}
          </div>
        ) : type == "tall" && description && description?.length > 0 ? (
          <div className="text-[0.75rem] md:text-[1.25rem] text-white text-center w-[75%] md:w-[50%]">
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
