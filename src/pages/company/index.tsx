import React from "react"
import PageHeader from "@/components/containers/PageHeader"
import VideoComponent from "@/components/common/VideoComponent"
import FooterSection from "@/components/containers/FooterSection"
import PortfolioCardSlider from "@/components/containers/PortofolioCardSlider"

const data = {
  title: "OUR COMPANY",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
}

const portofolios = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    short_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos natus soluta rerum omnis sequi quia quis eligendi, quasi quam odit sunt tempore! Magnam, quis minima quae voluptatem ipsa repellat!",
    banner_image: "/public/products/product-1.jpg",
  },
  {
    id: 2,
    title: "Consectetur adipiscing elit.",
    short_desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos natus soluta rerum omnis sequi quia quis eligendi, quasi quam odit sunt tempore! Magnam, quis minima quae voluptatem ipsa repellat!",
    banner_image: "/../public/products/product-2.jpg",
  },
]

export default function Company() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 bg-black">
        <PageHeader title={data.title} description={data.description} />
        <div className="flex flex-col gap-4 justify-center items-center py-5">
          <div className="text-md text-white text-center w-[90%] md:w-[50%]">
            In cooperation with Rheinmetall Air Defence, Switzerland as the main
            Principal, work towards localizing production activities for
            military equipment in the form of Assembly, Maintenance, Repair,
            Overhaul, Training, and local spare parts sourcing.
          </div>
          <div className="text-md text-white text-center w-[90%] md:w-[50%]">
            PT. OCWSB Pratama Indonesia is a local defence industry company
            established on April 30, 2020; officially registered as a Defence
            Industry by the Indonesian Ministry of Defence; hence officially
            approved to fulfil any offset obligation for any foreign defence
            industries.
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center py-5">
          <div className="text-[2rem] font-maqin text-white uppercase">
            Company Profile
          </div>
          <VideoComponent />
        </div>
        <div className="text-[2rem] font-maqin text-white uppercase">
          Portofolio
        </div>
        <div className="w-[90%]">
          <PortfolioCardSlider portofolios={portofolios} />
        </div>
        <div></div>
      </div>
      <FooterSection type={"red"} />
    </>
  )
}
