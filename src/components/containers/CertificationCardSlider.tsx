import React, { FC } from "react"
import Image from "next/image"
import { CertificationCardSliderType } from "@/types/CertificationType"

const CertificationCardSlider: FC<CertificationCardSliderType> = ({
  certifications,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center overflow-hidden w-full">
        {certifications.map((certification) => (
          <div
            key={certification.id}
            className="relative w-80 h-80 md:w-[30rem] md:h-[30rem]"
          >
            <Image
              src={certification.image}
              alt={certification.name}
              fill={true}
              style={{
                objectFit: "cover",
                borderRadius: "0.5rem",
                aspectRatio: "1/1",
              }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default CertificationCardSlider
