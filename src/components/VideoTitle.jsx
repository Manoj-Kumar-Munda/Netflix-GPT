import React from "react";
import { FaPlay } from "react-icons/fa";
import {FaCircleInfo} from "react-icons/fa6"

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video bg-video-title pt-[20%] px-36">
      <div className="max-w-lg space-y-2">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="font-semibold text-white">{overview}</p>
      </div>
      <div className="my-2 space-x-2">
        <button className="inline-flex gap-2 items-center text-black rounded-lg pr-6 pl-5 py-3 font-bold bg-white transition-all hover:bg-opacity-80">
        
            <FaPlay />

            <span className="">Play</span>
        </button>
        <button className="inline-flex gap-2 items-center rounded-lg pr-6 pl-5 py-3 font-bold bg-red-500 text-white" >
            <FaCircleInfo />
            More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
