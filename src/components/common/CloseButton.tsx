import React, { FC } from "react"

interface CloseButtonProps {
  onClick?: () => void
}

const CloseButton: FC<CloseButtonProps> = (props) => {
  const { onClick = () => {} } = props
  return (
    <button
      className="bg-transparent border-2 border-white rounded-lg text-white text-sm py-1 px-8"
      onClick={() => onClick()}
    ></button>
  )
}
