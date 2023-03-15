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
        "bg-orange-500 text-md md:text-2xl text-white py-2 px-12 md:px-16 rounded-lg"
      }
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default SolidButton
