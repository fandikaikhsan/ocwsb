import { VideoComponentType } from "@/types/CommonType"
import React, { FC } from "react"

const VideoComponent: FC<VideoComponentType> = ({ source }) => {
  return (
    <>
      <div className="flex justify-center items-center w-full ">
        <iframe
          src={source}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "1rem" }}
          className="w-[300px] h-[200px] md:w-[560px] md:h-[315px]"
        ></iframe>
      </div>
    </>
  )
}
export default VideoComponent
