import React, { FC } from "react"
import MarkdownWrap from "../common/MarkdownWrap"

interface ProductDescriptionSectionProps {
  description: string
  color?: string
  background?: string
}

const ProductDescriptionSection: FC<ProductDescriptionSectionProps> = ({
  description,
  color,
  background,
}) => {
  return (
    <div
      className={`${
        background ? "bg-" + background : "bg-[#74290E]"
      } flex flex-col justify-center items-center w-full`}
    >
      <div className="w-full md:w-[70%] p-5 text-center overflow-visible">
        <MarkdownWrap description={description} color={color} />
      </div>
    </div>
  )
}

export default ProductDescriptionSection
