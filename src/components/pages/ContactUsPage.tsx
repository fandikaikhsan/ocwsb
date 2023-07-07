import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import FooterSection from "@/components/containers/FooterSection"
import ContactUsBodySection from "@/components/containers/ContactUsBodySection"
import FormSection from "@/components/containers/FormSection"
import DesktopFormSection from "@/components/containers/DesktopFormSection"
import AnimatedComponent from "@/components/common/AnimatedComponent"
import { ContactUsPageType } from "@/types/ContactUsType"
import Navbar from "../layouts/Nav"

export default function ContactUsPage({
  title,
  description,
  body,
  cta_banner,
  title_form,
  locale,
}: ContactUsPageType) {
  return (
    <>
      <Navbar locale={locale} />
      <div className="bg-black">
        <div className="flex flex-col justify-center items-center gap-10 bg-black">
          <PageHeader title={title} />
          <div className="w-[90%] md:w-[80%]">
            <AnimatedComponent>
              <ContactUsBodySection
                office_address={body.office_address}
                workshop_address={body.workshop_address}
                phone={body.phone}
                email={body.email}
                locale={locale}
              />
            </AnimatedComponent>
          </div>
        </div>
        <div className="font-maqin text-4xl md:text-6xl mt-16 md:mb-10 text-white w-full text-center md:w-4/6 lg:w-[40rem] ml-auto mr-24">
          <AnimatedComponent>{title_form}</AnimatedComponent>
        </div>
        <div className="sm:block md:hidden">
          <AnimatedComponent>
            <FormSection locale={locale} />
          </AnimatedComponent>
        </div>
        <div className="hidden md:block">
          <AnimatedComponent>
            <DesktopFormSection locale={locale} />
          </AnimatedComponent>
        </div>
        {/* <ContactUsCTABanner
          title={cta_banner.title}
          image={cta_banner.image}
          button_text={cta_banner.button_text}
          path={cta_banner.path}
        /> */}
        <FooterSection type={"red"} />
      </div>
    </>
  )
}
