import React, { FC } from "react"

interface GradientBorderButtonProps {
  onClick?: () => void
  text: string
}

const GradientBorderButton: FC<GradientBorderButtonProps> = (props) => {
  const { onClick = () => {}, text = "" } = props
  return (
    <button
      className="bg-transparent hover:bg-orange-500 hover:border-orange-500 border-2 border-y-black rounded-lg text-white text-sm py-2 px-16"
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default GradientBorderButton
