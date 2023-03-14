import { Inter } from "next/font/google"
import Navbar from "@/components/layouts/Nav"
import ProductSlider from "@/components/containers/ProductCardSlider"
import ServiceCardSlider from "@/components/containers/ServiceCardSlider"
import { products, contents } from "@/pages/api/dummy"
import BannerCard from "@/components/layouts/BannerCard"
import BannerCardSlider from "@/components/containers/BannerCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import InqueryForm from "@/components/layouts/InqueryForm"

// const inter = Inter({ subsets: ["latin"] })

const dummyBanner = {
  title: "Welcome to our website",
  description:
    "We are a team of talented designers making websites with Next.js",
  image: "https://source.unsplash.com/user/wsanter",
  cta: "Contact Us",
  url: "/contact",
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-700 pt-24 pb-24">
        <div className="">
          <BannerCardSlider contents={contents} />
        </div>
        <div className="mb-36">
          <div className="text-5xl mb-10 text-white text-center">
            OUR SERVICES
          </div>
          <ServiceCardSlider products={products} />
        </div>
        <div className="">
          <div className="text-5xl mb-10 text-white text-center">
            OUR PRODUCTS
          </div>
          <div className="">
            <ProductSlider products={products} />
          </div>
        </div>
      </div>
      <div className=" p-10 mx-auto items-center object-center max-w-4xl">
        <InqueryForm />
      </div>
      <FooterSection />
    </>
  )
}
