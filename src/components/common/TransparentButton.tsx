import React, { FC } from "react"

interface TransparentButtonProps {
  onClick?: () => void
  text: string
}

const TransparentButton: FC<TransparentButtonProps> = (props) => {
  const { onClick = () => {}, text = "" } = props
  return (
    <button
      className="bg-transparent border-2 rounded-lg text-white text-sm py-1 px-8"
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default TransparentButton
