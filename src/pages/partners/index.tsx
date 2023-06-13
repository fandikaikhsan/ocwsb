import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import ContactUsCTABanner from "@/components/containers/ContactUsCTABanner"
import FooterSection from "@/components/containers/FooterSection"

const data = {
  title: "PARTNERS",
  description:
    "Either of a pair of people engaged together in the same activity.",
}

export default function Services() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 bg-black">
        <PageHeader title={data.title} description={data.description} />
        <div className="flex flex-col gap-4 justify-center items-center py-2">
          <div className="text-[2rem] font-maqin text-white">PARTNER LIST</div>
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
        <ContactUsCTABanner />
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
