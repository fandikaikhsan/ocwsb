import React, { FC, useState } from "react"

const ProductAccordion = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false)
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          onClick={() => {
            isAccordionOpen ? setAccordionOpen(false) : setAccordionOpen(true)
          }}
          className="flex items-center justify-between w-full p-5 bg-green-900 text-xl text-left text-white font-maqin border ring-gray-800 border-0 "
          //   data-accordion-target="#accordion-collapse-body-1"
          //   aria-expanded="true"
          //   aria-controls="accordion-collapse-body-1"
        >
          <span>What is Flowbite?</span>
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
        <div className="p-5 font-light border dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductAccordion
