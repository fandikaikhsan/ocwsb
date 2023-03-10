import React, { FC } from "react"

interface GradientBorderButtonProps {
  onClick?: () => void
}

const GradientBorderButton: FC<GradientBorderButtonProps> = (props) => {
  const { onClick = () => {} } = props
  return (
    <button
      className="bg-transparent border-2 border-y-black rounded-md text-white text-sm py-1 px-8"
      onClick={() => onClick()}
    >
      Read More
    </button>
  )
}

export default GradientBorderButton
