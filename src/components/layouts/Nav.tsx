import React, { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={`flex items-center justify-between flex-wrap py-4 md:py-6 px-4 md:px-12 fixed top-0 w-full z-10 ${
        isOpen ? "bg-gray-700" : "bg-transparent"
      }`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="#">
          <img src="ocwsb-logo.png" alt="OCWSB" className="h-8 md:h-10" />
        </a>
      </div>
      <div className="block md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-800 hover:border-gray-800"
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
        className={`w-full flex-grow md:flex md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm md:flex-grow md:justify-end">
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-gray-800"
          >
            About Us
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-gray-800"
          >
            Product
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-gray-800"
          >
            Services
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-gray-800"
          >
            News
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-white hover:text-gray-800"
          >
            Our Parners
          </a>
          <a
            href="#"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-800"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
