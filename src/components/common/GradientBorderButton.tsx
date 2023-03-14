import React, { FC } from "react"

interface GradientBorderButtonProps {
  onClick?: () => void
  text: string
}

const GradientBorderButton: FC<GradientBorderButtonProps> = (props) => {
  const { onClick = () => {}, text = "" } = props
  return (
    <button
      className=" bg-black bg-opacity-30 hover:bg-orange-500 hover:border-orange-500 border-4 border-y-gray-700 rounded-xl text-white text-md py-4 px-32"
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default GradientBorderButton