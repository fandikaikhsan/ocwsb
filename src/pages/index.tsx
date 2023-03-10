import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import SolidButton from "@/components/common/SolidButton"
import GradientBorderButton from "@/components/common/GradientBorderButton"
import TransparentButton from "@/components/common/TransparentButton"
import ServiceCard from "@/components/layouts/ServiceCard"
import ProductCard from "@/components/layouts/ProductCard"
import Navbar from "@/components/layouts/Nav"
import SliderBanner from "@/components/layouts/Banner"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const images = [
    "https://source.unsplash.com/1600x900/?nature,water",
    "https://source.unsplash.com/1600x900/?nature,forest",
    "https://source.unsplash.com/1600x900/?nature,mountain",
  ]
  return (
    <>
      <Navbar />
      <div className=" bg-gray-800 flex flex-col gap-2">
        <div className="pt-20">
          <div className="">
            <SliderBanner images={images} />
            <ServiceCard
              title="ASSEMBLY"
              description="Assemble components or materials or materials in a product to become a single unit of a production result"
              image="https://www.refactoringui.com/?ref=sidebar"
            />
            <ProductCard
              title="AFIAL"
              description="The most advanced forward illuminator aiming laser module"
            />
            <ProductCard
              title="AFIAL"
              description="The most advanced forward illuminator aiming laser module"
            />
            <ProductCard
              title="AFIAL"
              description="The most advanced forward illuminator aiming laser module"
            />
          </div>
        </div>
      </div>
    </>
  )
}
