import { Inter } from "next/font/google"
import Navbar from "@/components/layouts/Nav"
import ProductSlider from "@/components/containers/ProductCardSlider"
import ServiceCardSlider from "@/components/containers/ServiceCardSlider"
import { products, contents, dummy } from "@/pages/api/dummy"
import BannerCard from "@/components/layouts/BannerCard"
import BannerCardSlider from "@/components/containers/BannerCardSlider"
import FooterSection from "@/components/containers/FooterSection"
import ServiceModal from "@/components/containers/ServiceModal"

// const inter = Inter({ subsets: ["latin"] })

const dummyBanner = {
  title: "Welcome to our website",
  description:
    "We are a team of talented designers making websites with Next.js",
  image: "https://source.unsplash.com/user/wsanter",
  cta: "Contact Us",
  url: "/contact",
}

const dummyModal = {
  title: "Maintenance",
  imageSrc: "https://source.unsplash.com/user/wsanter",
  description:
    "The technical meaning of maintenance involves functional checks, servicing, repairing or replacing of necessary devices, equipment, machinery, building infrastructure, and supporting utilities in industrial, business, and residential installations This type of maintenance, also referred to as preventive maintenance, is implemented on a fixed schedule and typically includes activities such as inspecting, cleaning, washing, replacing, and checking. It is typically performed in the downtime between shifts or on weekends to avoid affecting productivity goals.",
  isOpen: true,
  onclose: () => {},
}

export default function Home() {
  return (
    <>
      <div className="text-white mt-24 bg-gray-600 font-maqin text-center m-auto">
        <div className="text-4xl">HBD MANG</div>
        <div className="text-2xl">
          Sing soleh sing digampilkeun rejekina, punten telat
        </div>
      </div>
    </>
  )
}
