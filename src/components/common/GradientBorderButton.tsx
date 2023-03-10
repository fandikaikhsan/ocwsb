import React, { FC } from "react"

interface GradientBorderButtonProps {
  onClick?: () => void
  text: string
}

const GradientBorderButton: FC<GradientBorderButtonProps> = (props) => {
  const { onClick = () => {}, text = "" } = props
  return (
    <button
      className="bg-transparent border-2 border-y-black rounded-md text-white text-sm py-1 px-8"
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default GradientBorderButton
