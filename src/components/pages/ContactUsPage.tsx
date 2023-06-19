import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import ContactUsCTABanner from "@/components/containers/ContactUsCTABanner"
import FooterSection from "@/components/containers/FooterSection"
import ContactUsBodySection from "@/components/containers/ContactUsBodySection"
import FormSection from "@/components/containers/FormSection"
import DesktopFormSection from "@/components/containers/DesktopFormSection"
import AnimatedComponent from "@/components/common/AnimatedComponent"
import { ContactUsPageType } from "@/types/ContactUsType"

export default function ContactUsPage({
  title,
  description,
  body,
  cta_banner,
}: ContactUsPageType) {
  return (
    <>
      <div className="bg-black">
        <div className="flex flex-col justify-center items-center gap-10 bg-black">
          <PageHeader title={title} />
          <div className="flex flex-col gap-4 justify-center items-center py-2">
            <div className="text-sm md:text-lg text-white text-center w-[90%] md:w-[60%]">
              {description}
            </div>
          </div>
          <div className="w-[90%] md:w-[80%]">
            <ContactUsBodySection
              office_address={body.office_address}
              workshop_address={body.workshop_address}
              phone={body.phone}
              email={body.email}
            />
          </div>
        </div>
        <div className="font-maqin text-4xl md:text-6xl mt-16 md:mb-10 text-white w-full text-center md:w-4/6 lg:w-[40rem] ml-auto mr-24">
          <AnimatedComponent>LETS TALK!</AnimatedComponent>
        </div>
        <div className="sm:block md:hidden">
          <AnimatedComponent>
            <FormSection />
          </AnimatedComponent>
        </div>
        <div className="hidden md:block">
          <AnimatedComponent>
            <DesktopFormSection />
          </AnimatedComponent>
        </div>
        <ContactUsCTABanner
          title={cta_banner.title}
          image={cta_banner.image}
          button_text={cta_banner.button_text}
          path={cta_banner.path}
        />
        <FooterSection type={"red"} />
      </div>
    </>
  )
}
