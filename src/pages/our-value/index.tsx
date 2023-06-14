import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import FooterSection from "@/components/containers/FooterSection"

const data = {
  title: "our VALUE",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
}

export default function OurValue() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 pb-20 bg-black">
        <PageHeader title={data.title} description={data.description} />
        <div className="flex flex-col gap-4 justify-center items-center py-5">
          <div className="text-sm md:text-md text-white text-center w-[90%] md:w-[50%]">
            PT. OCWSB Pratama Indonesia is a local defence industry company
            established on April 30, 2020; officially registered as a Defence
            Industry by the Indonesian Ministry of Defence; hence officially
            approved to fulfil any offset obligation for any foreign defence
            industries.
          </div>
          <div className="text-sm md:text-md text-white text-center w-[90%] md:w-[50%]">
            PT. OCWSB Pratama Indonesia is a local defence industry company
            established on April 30, 2020; officially registered as a Defence
            Industry by the Indonesian Ministry of Defence; hence officially
            approved to fulfil any offset obligation for any foreign defence
            industries.
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <div className="text-[2rem] font-maqin text-white uppercase">
            Our Value
          </div>
          <ListGalery />
        </div>
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
