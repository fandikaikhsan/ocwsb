import React from "react"

const ContactUsBodySection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-20 p-5 w-full">
        <div className="text-lg w-[70%] text-center text-white">
          In cooperation with Rheinmetall Air Defence, Switzerland as the main
          Principal, work towards localizing production activities for military
          equipment in the form of Assembly, Maintenance, Repair, Overhaul,
          Training, and local spare parts sourcing.
        </div>
        <div className="flex gap-16 items-start">
          <div className="flex flex-col gap-4 w-[50%]">
            <div className="text-[3rem] text-white font-maqin">
              Where We Are
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-[2rem] text-white font-maqin">Office</div>
                <p className="text-white">
                  Jalan Selayar VI Blok K21 Kawasan Industri MM2100 Desa
                  Telajung Kecamatan Cikarang Barat Kabupaten Bekasi – Jawa
                  Barat (17530)
                </p>
              </div>
              <div>
                <div className="text-[2rem] text-white font-maqin">
                  Workshop
                </div>
                <p className="text-white">
                  Rukan Puri Kencana Blok L6 No: 88P Jl. Kencana Utama II, Kel.
                  Kembangan Selatan Kec. Kembangan, Kota Adm. Jakarta Barat,
                  Provinsi DKI Jakarta (11610)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[50%]">
            <div className="text-[3rem] text-white font-maqin">
              How to Connect
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-[2rem] text-white font-maqin">Phone</div>
                <p className="text-white">(021) – 58303738</p>
              </div>
              <div>
                <div className="text-[2rem] text-white font-maqin">Email</div>
                <p className="text-white">ocwsb.pratama.indonesia@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsBodySection
