import React, { useState } from "react"

interface SliderBannerProps {
  images: string[]
  title: string
  description: string
}

const SliderBanner = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    const nextSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(nextSlide)
  }

  const handlePrevSlide = () => {
    const prevSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1
    setCurrentSlide(prevSlide)
  }

  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : ""
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full bg-gray-300 cursor-pointer ${
              index === currentSlide ? "bg-white" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white font-bold px-3 py-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        onClick={handlePrevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white font-bold px-3 py-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        onClick={handleNextSlide}
      >
        &#8250;
      </button>
    </div>
  )
}

export default SliderBanner
