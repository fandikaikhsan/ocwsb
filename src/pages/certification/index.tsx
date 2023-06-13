import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import CertificationCardSlider from "@/components/containers/CertificationCardSlider"
import FooterSection from "@/components/containers/FooterSection"

const data = {
  title: "OUR CERTIFICATION",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
}

export default function Services() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="flex flex-col justify-center items-center gap-10">
          <PageHeader title={data.title} description={data.description} />
          <div className="flex flex-col gap-4 justify-center items-center py-5">
            <div className="text-sm text-white text-center w-[90%] md:w-[60%]">
              In cooperation with Rheinmetall Air Defence, Switzerland as the
              main Principal, work towards localizing production activities for
              military equipment in the form of Assembly, Maintenance, Repair,
              Overhaul, Training, and local spare parts sourcing.
            </div>
            <div className="text-sm text-white text-center w-[90%] md:w-[60%]">
              PT. OCWSB Pratama Indonesia is a local defence industry company
              established on April 30, 2020; officially registered as a Defence
              Industry by the Indonesian Ministry of Defence; hence officially
              approved to fulfil any offset obligation for any foreign defence
              industries.
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="text-center text-[2rem] text-white font-maqin">
              CERITIFICATION LIST
            </div>
            <CertificationCardSlider />
          </div>
          <div className="md:absolute bottom-0">
            <FooterSection type={"red"} />
          </div>
        </div>
      </div>
    </>
  )
}
