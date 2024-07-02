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
          : "md:flex md:flex-row justify-around bg-black"
      } bg-cover py-8`}
    >
      {/* MD */}
      <div className="flex flex-col mr-8 md:mb-4 pl-12 pr-4 px-12 text-white">
        <div className="hidden md:flex flex-col gap-6 items-start flex-shrink-0 text-white md:mr-2">
          <Image
            src="/ocwsb-logo-9.png"
            alt="OCWSB"
            width={350}
            height={20}
            className="ml-4 md:ml-0 mb-4 md:mb-0 h-24 md:h-16"
          />
          <div className="flex flex-row gap-2">
            <Image
              src="/iso-9001-transparent.png"
              alt="ISO"
              width={75}
              height={120}
              className="ml-4 md:ml-0 mb-4 md:mb-0 md:h-[5.7rem]"
            />
          </div>
        </div>
        <div className="hidden text-xs md:block mt-auto mb-0">
          Copyright ® 2023. PT OCWSB Pratama Indonesia
        </div>
      </div>

      {/* SMALL */}
      <div className="md:flex md:flex-row ">
        <div className="flex md:hidden flex-col gap-3 items-start text-white md:mr-2 px-2 sm:px-4">
          <Image
            src="/ocwsb-logo-9.png"
            alt="OCWSB"
            width={200}
            height={20}
            className="ml-4 md:ml-0 mb-4 md:mb-0 h-10 md:h-16"
          />
          <div className="flex flex-shrink-0 flex-row">
            <Image
              src="/iso-9001-transparent.png"
              alt="ISO"
              width={60}
              height={100}
              className="ml-4 md:ml-0 mb-4 md:mb-0 h-18"
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

        <div className="md:hidden text-xs text-white px-4 sm:px-6 mt-10">
          Copyright ® 2023. PT OCWSB Pratama Indonesia
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
