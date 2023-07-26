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

  const headerClass = `relative ${
    type === "tall" ? "pt-60 pb-48" : "pt-32 pb-16"
  } flex flex-col gap-4 justify-center items-center text-center w-full ${
    backgroundImage
      ? "bg-cover bg-center bg-no-repeat bg-opacity-100 bg-blend-multiply"
      : "bg-red-800"
  }`

  const darkOverlayClass = `absolute inset-0 ${
    backgroundImage ? "bg-black opacity-30" : "bg-transparent"
  }`

  return (
    <>
      <div
        className={headerClass}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
        }}
      >
        {backgroundImage && <div className={darkOverlayClass}></div>}
        <div className="text-[2rem] w-[90%] text-white font-maqin uppercase z-10">
          {title}
        </div>
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
