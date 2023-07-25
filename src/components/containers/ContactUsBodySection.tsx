import { ContactUsBodySectionType } from "@/types/ContactUsType"
import React, { FC } from "react"
import locales from "@/messages/locale"

const ContactUsBodySection: FC<ContactUsBodySectionType> = ({
  office_address,
  workshop_address,
  phone,
  email,
  locale,
}) => {
  locale = locale || "en"

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 md:gap-20 p-5 w-full">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="flex flex-col gap-4 w-[80%] md:w-[50%]">
            <div className="text-[2rem] md:text-[3rem] text-white font-maqin">
              {locales[locale]["ContactInfo"]["Where We Are"]}
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-[1.5rem] md:text-[2rem] text-white font-maqin">
                  {locales[locale]["ContactInfo"]["Office"]}
                </div>
                <p className="text-xs md:text-sm text-white">
                  {office_address}
                </p>
              </div>
              <div>
                <div className="text-[1.5rem] md:text-[2rem] text-white font-maqin">
                  {locales[locale]["ContactInfo"]["Workshop"]}
                </div>
                <p className="text-xs md:text-sm text-white">
                  {workshop_address}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[80%] md:w-[50%]">
            <div className="text-[2rem] md:text-[3rem] text-white font-maqin">
              {locales[locale]["ContactInfo"]["How To Connect"]}
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-[1.5rem] md:text-[2rem] text-white font-maqin">
                  {locales[locale]["ContactInfo"]["Phone"]}
                </div>
                <p className="text-xs md:text-sm text-white">{phone}</p>
              </div>
              <div>
                <div className="text-[1.5rem] md:text-[2rem] text-white font-maqin">
                  {locales[locale]["ContactInfo"]["Email"]}
                </div>
                <p className="text-xs md:text-sm text-white">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsBodySection
