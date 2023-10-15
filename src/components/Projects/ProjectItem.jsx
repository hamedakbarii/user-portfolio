import React from "react";

export default function ProjectItem({ src, text, video }) {
  return (
    <div className="bg-[#086775] flex flex-col justify-center items-center px-6 py-3 rounded-md gap-2 w-full h-full">
      {src && <img src={src} alt="projectImg" />}
      {video && (
        <video controls className="md:w-2/4 rounded-2xl">
          <source src={video} type="video/mp4" />
        </video>
      )}

      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] h-[1px] bg-[#C1F6ED] rounded-lg"></div>
      </div>

      <span className="text-white text-[10px] w-64 md:text-xs">{text}</span>
    </div>
  );
}
