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
      <PageHeader
        title={title}
        backgroundImage={`https://${process.env.NEXT_PUBLIC_IMAGE}/image/banners/contact-header-1.jpg`}
        type="tall"
      />
      <div className="md:py-10 bg-gradient-to-b from-black to-red-800">
        <div className="flex flex-col md:flex-row md:w-[90%] lg:w-[70%] md:mx-auto justify-center items-start gap-10 bg-black md:bg-transparent">
          <div className="w-[90%] p-5 md:p-0 md:w-full">
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
          <div className="flex justify-center items-start w-full bg-gradient-to-b from-black to-red-800 md:bg-none">
            <div className="w-full lg:w-[90%] xl:w-[90%] 2xl:w-[80%]">
              <div className="sm:block md:hidden">
                <AnimatedComponent>
                  <FormSection title_form={title_form} locale={locale} />
                </AnimatedComponent>
              </div>
              <div className="hidden md:block py-5">
                <AnimatedComponent>
                  <DesktopFormSection title_form={title_form} locale={locale} />
                </AnimatedComponent>
              </div>
            </div>
          </div>
        </div>
        {/* <ContactUsCTABanner
          title={cta_banner.title}
          image={cta_banner.image}
          button_text={cta_banner.button_text}
          path={cta_banner.path}
        /> */}
      </div>
      <FooterSection type={"red"} locale={locale} />
    </>
  )
}
