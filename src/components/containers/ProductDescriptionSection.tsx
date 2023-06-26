import React, { FC } from "react"
import MarkdownWrap from "../common/MarkdownWrap"

interface ProductDescriptionSectionProps {
  description: string
  color?: string
}

const ProductDescriptionSection: FC<ProductDescriptionSectionProps> = ({
  description,
  color,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#74290E]">
      <div className="w-full md:w-[70%] bg-[#74290E] p-5 text-center overflow-visible">
        <MarkdownWrap description={description} color={color} />
      </div>
    </div>
  )
}

export default ProductDescriptionSection
