import React, { FC } from "react"

interface SolidButtonProps {
  isMobile?: boolean
  onClick?: () => void
}

const SolidButton: FC<SolidButtonProps> = (props) => {
  const { isMobile = false, onClick = () => {} } = props
  return (
    <button
      className={
        isMobile
          ? " bg-orange-400 py-1 px-8 rounded-md text-white text-sm"
          : "bg-red-500"
      }
      onClick={() => onClick()}
    >
      Read More
    </button>
  )
}

export default SolidButton
