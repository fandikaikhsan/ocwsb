import { Inter } from "next/font/google"
import Navbar from "@/components/layouts/Nav"
import SliderBanner from "@/components/layouts/Banner"
import ProductSlider from "@/components/containers/ProductCardSlider"
import ServiceCardSlider from "@/components/containers/ServiceCardSlider"
import { products } from "@/pages/api/dummy"

// const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-700 pt-24">
        <ServiceCardSlider products={products} />
        <ProductSlider products={products} />
      </div>
    </>
  )
}
