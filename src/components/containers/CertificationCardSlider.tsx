import React from "react"
import Image from "next/image"
import ProductImage1 from "/public/products/product-1.jpg"
import ProductImage2 from "/public/products/product-2.jpg"
import ProductImage3 from "/public/products/product-3.jpg"

const CertificationCardSlider = () => {
  return (
    <>
      <div className="flex gap-8 justify-center overflow-scroll w-full">
        <div className="relative w-64 h-64">
          <Image
            src={ProductImage1}
            alt="Product 1"
            fill={true}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
              aspectRatio: "1/1",
            }}
          />
        </div>
        <div className="relative w-64 h-64">
          <Image
            src={ProductImage1}
            alt="Product 1"
            fill={true}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
              aspectRatio: "1/1",
            }}
          />
        </div>
        <div className="relative w-64 h-64">
          <Image
            src={ProductImage1}
            alt="Product 1"
            fill={true}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
              aspectRatio: "1/1",
            }}
          />
        </div>
        <div className="relative w-64 h-64">
          <Image
            src={ProductImage1}
            alt="Product 1"
            fill={true}
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
              aspectRatio: "1/1",
            }}
          />
        </div>
      </div>
    </>
  )
}

export default CertificationCardSlider
