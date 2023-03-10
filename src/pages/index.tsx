import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import SolidButton from "@/components/common/SolidButton"
import GradientBorderButton from "@/components/common/GradientBorderButton"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <div className=" bg-gray-800 flex gap-2">
        <h1 className="text-blue-500">Hello world</h1>
        <SolidButton onClick={() => console.log("clicked")} isMobile={true} />
        <GradientBorderButton onClick={() => console.log("clicked")} />
      </div>
    </>
  )
}
