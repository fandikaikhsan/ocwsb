import React from "react"
import Image from "next/image"

interface ModalProps {
  props: {
    id?: number
    position?: number
    title: string
    desc_title?: string
    desc_short?: string
    desc?: string
    image?: string
    image_mobile?: string
    cta?: {
      text?: string
      url?: string
    }
    isOpen?: boolean
    onClose?: () => void
  }
  setIsOpen: (isOpen: boolean) => void
}

const ProductModal: React.FC<any> = ({ props, setIsOpen }) => {
  const {
    title = "",
    image = "",
    desc_title = "",
    desc = "",
    isOpen = true,
    onClose = () => {},
  } = props

  if (!isOpen) return null

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex z-50 items-center justify-center min-h-screen p-6">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="relative bg-gray-900 rounded-lg max-w-md w-full mx-auto">
          <div className="relative">
            <img
              src={props.image}
              alt={props.title}
              className="w-full h-48 object-cover opacity-40 rounded-t-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl text-center font-maqin font-bold text-white">
                {props.desc_title}
              </h2>
            </div>
          </div>
          <div className="p-4">
            <p className="font-maqin text-xl text-white">{props.desc}</p>
          </div>
          <button
            className="absolute top-2 right-2 text-white hover:text-orange-700"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
