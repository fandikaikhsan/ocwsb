"use client"

import React, { FC } from "react"
import ProductAccordion from "../layouts/ProductAccordion"

interface ProductAccordionSectionProps {
  products: {
    id?: number
    title: string
    desc: string
    image: string
    desc_short: string
    cta: {
      text: string
      url?: string
    }
  }[]
}

const ProductAccordionSection: FC<ProductAccordionSectionProps> = ({
  products,
}) => {
  return (
    <>
      {products.map((product, index) => (
        <div key={index} className="w-full">
          <ProductAccordion
            title={product.title}
            desc={product.desc}
            image={product.image}
          />
        </div>
      ))}
    </>
  )
}

export default ProductAccordionSection
