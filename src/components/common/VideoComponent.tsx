import React, { FC } from "react"

const VideoComponent: FC = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full ">
        <iframe
          //   width="560"
          //   height="315"
          src="https://www.youtube.com/embed/2Vv-BfVoq4g"
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
