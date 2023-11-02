"use client"

import React, { useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import LanguageDropdown from "../common/LanguageDropdown"
import Link from "next/link"
import Image from "next/image"
import locales from "@/messages/locale"

const Navbar = ({ locale }: { locale?: string }) => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  }

  const backgroundAnimation = useSpring({
    backgroundColor: scrolled ? "transparent" : "red-800",
    height: scrolled ? 0 : 100,
  })

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  locale = locale || "en"

  return (
    <>
      <div
        className={`flex items-center justify-between flex-wrap fixed top-0 w-full z-10 ${
          scrolled ? "bg-opacity-70 bg-black" : `bg-opacity-70 bg-red-800}`
        } ${isOpen && "bg-opacity-70 bg-black"}`}
      >
        <div className="flex items-center py-1 md:py-2 pl-6 pr-2 flex-shrink-0 text-white">
          <Link href="/">
            <Image
              src="/ocwsb-logo-8.png"
              width={270}
              height={24}
              alt="OCWSB"
              className="h-14 md:h-15"
            />
          </Link>
        </div>
        <div className="block lg:hidden px-6">
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
          className={`w-full flex-grow lg:flex pl-4 md:pl-0 pr-4 py-4 md:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="lg:flex lg:gap-8 text-sm lg:text-[1rem] md:ml-auto md:justify-end">
            <div className="relative block mt-4 md:inline-block lg:mt-0 text-white hover:text-red-800 cursor-pointer">
              <span
                onMouseEnter={() => setDropdownOpen(true)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {locales[locale]["Navbar"]["About Us"]}
              </span>
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className={`absolute left-0 mt-2 w-48 rounded-md bg-gray-800 shadow-lg py-1 ring-1 ring-black ring-opacity-5 ${
                  dropdownOpen ? "block" : "hidden"
                }`}
              >
                <Link
                  href="/company"
                  className="block px-4 py-2 text-sm text-white hover:bg-red-800"
                >
                  {locales[locale]["Navbar"]["Our Company"]}
                </Link>
                <Link
                  href="/our-value"
                  className="block px-4 py-2 text-sm text-white hover:bg-red-800"
                >
                  {locales[locale]["Navbar"]["Our Value"]}
                </Link>
                <Link
                  href="/certification"
                  className="block px-4 py-2 text-sm text-white hover:bg-red-800"
                >
                  {locales[locale]["Navbar"]["Certifications"]}
                </Link>
              </div>
            </div>
            <Link
              href="/products"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-800"
            >
              {locales[locale]["Navbar"]["Products"]}
            </Link>
            <Link
              href="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-800"
            >
              {locales[locale]["Navbar"]["Services"]}
            </Link>
            <Link
              href="/news"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-800"
            >
              {locales[locale]["Navbar"]["News"]}
            </Link>
            <Link
              href="/partners"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-800"
            >
              {locales[locale]["Navbar"]["Our Partners"]}
            </Link>
            <Link
              href="/contact-us"
              className="block mt-4 md:inline-block lg:mt-0 text-white hover:text-red-800"
            >
              {locales[locale]["Navbar"]["Contact Us"]}
            </Link>
            <div className="mt-6 lg:mt-0">
              <LanguageDropdown locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
