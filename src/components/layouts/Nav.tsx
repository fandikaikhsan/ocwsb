import React, { useState } from "react"
import LanguageDropdown from "../common/LanguageDropdown"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={`flex items-center justify-between flex-wrap fixed top-0 w-full z-10 ${
        isOpen ? "bg-opacity-70 bg-black" : " bg-opacity-70 bg-black"
      }`}
    >
      {/* <header className="bg-gray-800 px-2 md:p-3 w-full">
        <div className="flex flex-row justify-between container  mx-auto">
          <p className="text-white text-sm my-auto">
            Check out our latest job opportunities!
          </p>
          <button className="text-white p-2 md:p-2 text-sm border-white md:no-underline underline md:border-2 rounded-md ">
            Career Info
          </button>
        </div>
      </header> */}
      <div className="flex items-center py-1 md:py-2 px-6 md:px-16 flex-shrink-0 text-white">
        <a href="#">
          <img
            src="ocwsb-logo-4-nobg.png"
            alt="OCWSB"
            className="h-14 md:h-16"
          />
        </a>
      </div>
      <div className="block md:hidden px-6">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center px-4 py-3 border rounded text-white border-white hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow md:flex px-8 py-4 md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="md:flex md:gap-8 text-sm md:text-[1rem] md:ml-auto md:justify-end">
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-red-800"
          >
            About Us
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-red-800"
          >
            Product
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-red-800"
          >
            Services
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-red-800"
          >
            News
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-red-800"
          >
            Our Partners
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-red-800"
          >
            Contact Us
          </a>
          <div className="mt-6 md:mt-0">
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
