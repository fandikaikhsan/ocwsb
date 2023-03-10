import React, { FC } from "react"

interface ReadMeButtonProps {
  isMobile?: boolean
  onClick?: () => void
}

const ReadMeButton: FC<ReadMeButtonProps> = (props) => {
  const { isMobile = false, onClick = () => {} } = props
  return (
    <button
      className={isMobile ? "bg-blue-500" : "bg-red-500"}
      onClick={() => onClick()}
    >
      Read More
    </button>
  )
}

export default ReadMeButton
