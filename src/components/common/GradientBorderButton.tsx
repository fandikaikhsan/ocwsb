import React, { FC } from "react"

interface GradientBorderButtonProps {
  onClick?: () => void
  text: string
}

const GradientBorderButton: FC<GradientBorderButtonProps> = (props) => {
  const { onClick = () => {}, text = "" } = props
  return (
    <button
      className=" bg-black bg-opacity-30 hover:bg-red-700 hover:border-red-700 border-2 md:border-4 border-y-gray-700 rounded-xl text-white text-md px-14 py-2 md:py-4 md:px-28"
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default GradientBorderButton
