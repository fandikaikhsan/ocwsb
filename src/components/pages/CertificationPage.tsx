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
      <div className="flex flex-col bg-black min-h-screen">
        <PageHeader title={title} description={description} />
        <div className="content flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-10 py-10">
            <div className="flex flex-col gap-8 justify-center items-center">
              <CertificationCardSlider certifications={certifications} />
            </div>
          </div>
        </div>
        <FooterSection type={"red"} />
      </div>
    </>
  )
}
