import React, { FC } from "react"

interface SolidButtonProps {
  isMobile?: boolean
  onClick?: () => void
  text: string
}

const SolidButton: FC<SolidButtonProps> = (props) => {
  const { isMobile = false, onClick = () => {}, text = "" } = props
  return (
    <button
      className={
        isMobile
          ? " bg-orange-400 py-1 px-8 rounded-md text-white text-lg"
          : "bg-orange-500 text-2xl text-white py-2 px-16 rounded-lg"
      }
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default SolidButton
