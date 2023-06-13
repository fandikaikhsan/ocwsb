import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import VideoComponent from "@/components/common/VideoComponent"
import FooterSection from "@/components/containers/FooterSection"

const data = {
  title: "SERVICES",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
}

export default function Services() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 bg-black">
        <PageHeader title={data.title} description={data.description} />
        <div className="flex flex-col gap-4 justify-center items-center py-5">
          <div className="text-[2rem] font-maqin text-white">SERVICES LIST</div>
          <div className="text-sm text-white text-center w-[90%] md:w-[60%]">
            In cooperation with Rheinmetall Air Defence, Switzerland as the main
            Principal, work towards localizing production activities for
            military equipment in the form of Assembly, Maintenance, Repair,
            Overhaul, Training, and local spare parts sourcing.
          </div>
        </div>
        <div>
          <ListGalery />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center py-5">
          <div className="text-[2rem] font-maqin text-white">
            Delighted Service
          </div>
          <VideoComponent />
        </div>
        <div className="w-full h-[30rem] bg-[#74290E]">Description here</div>
      </div>
      <FooterSection type={"black"} />
    </>
  )
}
