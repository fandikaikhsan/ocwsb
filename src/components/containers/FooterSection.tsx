import React, { FC } from "react"

const FooterSection = () => {
  return (
    <footer className=" bg-footer-pattern py-8">
      <div className="hidden md:block mx-auto lg:px-12 text-white">
        <div className="flex items-center flex-shrink-0 text-white mr-6 md:mr-0">
          <a href="#">
            <img
              src="ocwsb-logo.png"
              alt="OCWSB"
              className="ml-4 md:ml-0 mb-4 md:mb-0 h-20 md:h-16"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="md:hidden text-4xl ml-5 md:ml-0 mb-4 font-maqin text-white">
          OCWSB
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-start md:w-2/3">
            <div>
              <h3 className="text-lg font-medium text-white">Office</h3>
              <p className="md:mt-2 text-sm md:text-base text-gray-300">
                Rukan Puri Kencana Blok L6 No: 88P Jl. Kencana Utama II, Kel.
                Kembangan Selatan Kec. Kembangan,
                <br />
                Kota Adm. Jakarta Barat, Provinsi DKI Jakarta (11610)
              </p>
            </div>
          </div>
          <div className="flex justify-center md:w-1/3 mt-4 md:mt-0">
            <div>
              <h3 className="text-lg font-medium text-white">Workshop</h3>
              <p className="md:mt-2 text-sm md:text-base text-gray-300">
                Jalan Selayar VI Blok K21 Kawasan Industri MM2100 Desa Telajung
                Kecamatan Cikarang Barat
                <br />
                Kabupaten Bekasi, Jawa Barat (17530)
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4 md:mt-0 md:w-1/3">
            <div className="w-1/2 pr-4">
              <h3 className="text-lg font-medium text-white">Phone</h3>
              <p className="md:mt-2 text-sm md:text-base text-gray-300">
                (021) – 58303738
              </p>
            </div>
            <div className="w-1/2 mt-3 md:mt-0">
              <h3 className="text-lg font-medium text-white">Email</h3>
              <p className="md:mt-2 text-sm md:text-base text-gray-300">
                ocwsb.pratama.indonesia@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
