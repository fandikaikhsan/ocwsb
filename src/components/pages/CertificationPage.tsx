import React, { FC } from "react"
import PageHeader from "@/components/containers/PageHeader"
import CertificationCardSlider from "@/components/containers/CertificationCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import { CertificationPageType } from "@/types/CertificationType"
import Navbar from "../layouts/Nav"
import AnimatedComponent from "@/components/common/AnimatedComponent"

export default function CertificationPage({
  title,
  description,
  certifications,
  locale,
}: CertificationPageType) {
  return (
    <>
      <Navbar locale={locale} />
      <div className="flex flex-col bg-black min-h-screen">
        <PageHeader title={title} description={description} />
        <div className="content flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-10 py-10">
            <div className="flex flex-col gap-8 justify-center items-center">
              <AnimatedComponent>
                <CertificationCardSlider certifications={certifications} />
              </AnimatedComponent>
            </div>
          </div>
        </div>
        <FooterSection type={"red"} locale={locale} />
      </div>
    </>
  )
}
