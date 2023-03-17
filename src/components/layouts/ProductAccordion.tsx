import React, { FC, useState } from "react"

interface ProductAccordionProps {
  title: string
  desc: string
  image: string
}

const ProductAccordion: FC<ProductAccordionProps> = (props) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false)
  const { title, desc, image } = props
  return (
    <div
      className="relative rounded-md shadow-md overflow-hidden"
      id="accordion-collapse"
      data-accordion="collapse"
      style={
        {
          // backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
          // backgroundSize: "cover",
        }
      }
      onClick={() => setAccordionOpen(!isAccordionOpen)}
    >
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          onClick={() => {
            isAccordionOpen ? setAccordionOpen(false) : setAccordionOpen(true)
          }}
          className="flex items-center justify-between w-full p-5 text-xl text-left text-white font-maqin border rounded-md "
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 shrink-0 ${
              isAccordionOpen ? "rotate-180" : ""
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={isAccordionOpen ? "block" : "hidden"}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div
          className="p-5 font-light border"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="mb-2 text-white font-bold">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductAccordion
