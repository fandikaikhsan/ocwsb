import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ListGalery from "@/components/layouts/ListGalery"
import FooterSection from "@/components/containers/FooterSection"
import { OurValuePageType } from "@/types/OurValueType"
import Navbar from "@/components/layouts/Nav"
import AnimatedComponent from "@/components/common/AnimatedComponent"

export default function OurValuePage({
  title,
  description,
  values,
  locale,
}: OurValuePageType) {
  return (
    <>
      <Navbar locale={locale} />
      <div className="flex flex-col bg-black min-h-screen">
        <PageHeader title={title} />
        <div className="content flex-1 flex flex-col py-10 items-center justify-center">
          <AnimatedComponent>
            <ListGalery
              values={values}
              page="our-value"
              paddingy={2}
              paddingx={4}
            />
          </AnimatedComponent>
        </div>
        <FooterSection type={"red"} locale={locale} />
      </div>
    </>
  )
}
