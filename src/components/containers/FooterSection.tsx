import React, { FC } from "react"
import Image from "next/image"
import locales from "@/messages/locale"

const FooterSection: FC<any> = (props) => {
  const { type = "red", locale = "en" } = props

  return (
    <footer
      className={`${
        type == "red"
          ? "md:flex md:flex-row justify-around bg-footer-pattern bg-cover"
          : "bg-black"
      } bg-cover py-8`}
    >
      <div className=" mx-auto mr-8 md:mb-4 px-12 text-white">
        <div className="hidden md:flex flex-col gap-6 items-start flex-shrink-0 text-white md:mr-2">
          <Image
            src="/ocwsb-logo.png"
            alt="OCWSB"
            width={60}
            height={150}
            className="ml-4 md:ml-0 mb-4 md:mb-0 h-24 md:h-16"
          />
          <div className="flex flex-row gap-2">
            <Image
              src="/iso-9001.png"
              alt="ISO"
              width={60}
              height={100}
              className="ml-4 md:ml-0 mb-4 md:mb-0 h-20 md:h-16"
            />
            <Image
              src="/iso-9001.png"
              alt="ISO"
              width={60}
              height={100}
              className="ml-4 md:ml-0 mb-4 md:mb-0 h-20 md:h-16"
            />
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-row">
        <div className="flex md:hidden flex-row gap-3 items-center flex-shrink-0 text-white md:mr-2">
          <Image
            src="/ocwsb-logo.png"
            alt="OCWSB"
            width={60}
            height={100}
            className="ml-4 md:ml-0 mb-4 md:mb-0 h-20 md:h-16"
          />
          <div className="flex flex-row">
            <Image
              src="/iso-9001.png"
              alt="ISO"
              width={60}
              height={100}
              className="ml-4 md:ml-0 mb-4 md:mb-0 h-20 md:h-16"
            />
            <Image
              src="/iso-9001.png"
              alt="ISO"
              width={60}
              height={100}
              className="ml-4 md:ml-0 mb-4 md:mb-0 h-20 md:h-16"
            />
          </div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="md:flex md:flex-col items-center gap-8">
            <div className="flex justify-start md:w-[70%]">
              <div>
                <h3 className="text-lg font-medium text-white">
                  {locales[locale]["Footer"]["Office"]}
                </h3>
                <p className="md:mt-2 text-sm text-gray-300">
                  Rukan Puri Kencana Blok L6 No: 88P Jl. Kencana Utama II, Kel.
                  Kembangan Selatan Kec. Kembangan,
                  <br />
                  Kota Adm. Jakarta Barat, Provinsi DKI Jakarta (11610)
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start md:w-[70%] mt-4 md:mt-0">
              <div>
                <h3 className="text-lg font-medium text-white">
                  {locales[locale]["Footer"]["Workshop"]}
                </h3>
                <p className="md:mt-2 text-sm text-gray-300">
                  Jalan Selayar VI Blok K21 Kawasan Industri MM2100 Desa
                  Telajung Kecamatan Cikarang Barat
                  <br />
                  Kabupaten Bekasi, Jawa Barat (17530)
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-2 mt-4 md:mt-0 md:w-[70%]">
              <div className="w-1/2 pr-4 md:pr-0">
                <h3 className="text-lg font-medium text-white">
                  {locales[locale]["Footer"]["Phone"]}
                </h3>
                <p className="md:mt-2 text-sm text-gray-300">
                  (021) – 58303738
                </p>
              </div>
              <div className="w-1/2 mt-3 md:mt-0">
                <h3 className="text-lg font-medium text-white">
                  {locales[locale]["Footer"]["Email"]}
                </h3>
                <p className="md:mt-2 text-sm text-gray-300">
                  ocwsb.pratama.indonesia@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
