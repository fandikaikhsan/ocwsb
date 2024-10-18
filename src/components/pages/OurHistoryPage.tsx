import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import OurHistoryDescriptionSection from "../containers/OurHistoryDescriptionSection"
import FooterSection from "../containers/FooterSection"
import OurHistoryPageType from "@/types/OurHistoryType"
import Navbar from "@/components/layouts/Nav"
import AnimatedComponent from "@/components/common/AnimatedComponent"

export default function OurHistoryPage({ title, history }: OurHistoryPageType) {
  return (
    <>
      <Navbar />
      <PageHeader title={title} />
      <div className="flex flex-col justify-center items-center py-10 bg-black">
        <AnimatedComponent>
          <OurHistoryDescriptionSection
            description={history}
            background="black"
            color="white"
          />
        </AnimatedComponent>
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
