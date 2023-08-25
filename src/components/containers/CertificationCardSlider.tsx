import React, { FC } from "react"
import Image from "next/image"
import { CertificationCardSliderType } from "@/types/CertificationType"

const CertificationCardSlider: FC<CertificationCardSliderType> = ({
  certifications,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px_5px] shadow-[#868686] overflow-hidden w-full">
        {certifications.map((certification) => (
          <div
            key={certification.id}
            className="relative w-80 h-44 md:w-[30rem] md:h-[30rem] overflow-hidden"
          >
            <Image
              src={certification.image}
              alt={certification.name}
              fill={true}
              style={{
                objectFit: "contain",
                borderRadius: "0.5rem",
                border: "5px solid #74290E",
                aspectRatio: "1/1",
                overflow: "hidden",
                backgroundColor: "white",
              }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default CertificationCardSlider
