import React, { FC } from "react"
import MarkdownWrap from "../common/MarkdownWrap"

interface ServiceDescriptionSectionProps {
  description: string
  color?: string
  background?: string
}

const ServiceDescriptionSection: FC<ServiceDescriptionSectionProps> = ({
  description,
  color,
  background,
}) => {
  return (
    <div
      className={`${
        background ? "bg-" + background + "-500" : "bg-red-800"
      } flex flex-col justify-center items-center w-full`}
    >
      <div className="w-full sm:w[80%] md:w-[50%] p-5 text-center overflow-visible">
        <MarkdownWrap description={description} color={color} />
      </div>
    </div>
  )
}

export default ServiceDescriptionSection
