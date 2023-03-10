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
          ? " bg-orange-400 py-1 px-8 rounded-md text-white text-sm"
          : "bg-red-500"
      }
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default SolidButton
