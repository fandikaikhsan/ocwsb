import React, { FC } from "react"
import PageHeader from "@/components/containers/PageHeader"
import CertificationCardSlider from "@/components/containers/CertificationCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import { CertificationPageType } from "@/types/CertificationType"

export default function CertificationPage({
  title,
  description,
  certifications,
}: CertificationPageType) {
  return (
    <>
      <div className="bg-black min-h-screen">
        <PageHeader title={title} description={description} />
        <div className="flex flex-col justify-center items-center gap-10 py-10">
          <div className="flex flex-col gap-4 justify-center items-center py-5">
            <div className="text-sm text-white text-center w-[90%] md:w-[60%]">
              {description}
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="text-center text-[2rem] text-white font-maqin">
              CERITIFICATION LIST
            </div>
            <CertificationCardSlider certifications={certifications} />
          </div>
        </div>
        <FooterSection type={"red"} />
      </div>
    </>
  )
}
