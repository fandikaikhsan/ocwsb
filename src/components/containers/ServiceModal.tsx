import React from "react"

interface ModalProps {
  props: {
    title: string
    imageSrc?: string
    desc?: string
    isOpen?: boolean
    onClose?: () => void
  }
  setIsOpen: (isOpen: boolean) => void
}

const ServiceModal: React.FC<any> = ({ props, setIsOpen }) => {
  const {
    title = "",
    imageSrc = "",
    desc = "",
    isOpen = true,
    onClose = () => {},
  } = props

  if (!isOpen) return null

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="relative bg-white rounded-lg max-w-md w-full mx-auto">
          <div className="relative">
            <img
              src={imageSrc}
              className="w-full h-48 object-cover opacity-70 rounded-t-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl font-maqin font-bold text-black">
                {title}
              </h2>
            </div>
          </div>
          <div className="p-4">
            <p className="font-maqin text-xl text-gray-700">{desc}</p>
          </div>
          <button
            className="absolute top-2 right-2 text-black hover:text-orange-700"
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

export default ServiceModal
