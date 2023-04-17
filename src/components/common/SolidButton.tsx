import React, { FC } from "react"

interface SolidButtonProps {
  text: string
  onClick?: () => void
}

const SolidButton: FC<SolidButtonProps> = (props) => {
  const { text = "", onClick = () => {} } = props
  return (
    <button
      className={
        "bg-red-700 text-md md:text-xl text-white py-2 px-12 md:px-16 rounded-lg"
      }
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default SolidButton
