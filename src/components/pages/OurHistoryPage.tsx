import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import OurHistoryDescriptionSection from "../containers/OurHistoryDescriptionSection"
import FooterSection from "../containers/FooterSection"
import OurHistoryPageType from "@/types/OurHistoryType"

export default function OurHistoryPage({ title, history }: OurHistoryPageType) {
  return (
    <>
      <PageHeader title={title} />
      <div className="flex flex-col justify-center items-center py-10 bg-black">
        <OurHistoryDescriptionSection
          description={history}
          background="black"
          color="white"
        />
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
