import React from "react";

export default function ProjectItem({ src, text, video }) {
  return (
    <div className="w-full h-full bg-[#086775] flex flex-col justify-center items-center gap-6 rounded-md">
      <div className="w-full p-2 rounded-2xl">
        {src && (
          <img
            src={src}
            alt="projectImg"
            className="rounded-2xl w-full xl:h-[350px]"
          />
        )}
        {video && (
          <video controls className="w-full rounded-2xl">
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] h-[1px] bg-[#C1F6ED] rounded-lg"></div>
      </div>

      <div className="w-full h-[70px] text-center">
        <span className="w-full text-white text-[10px] md:text-lg 2xl:text-2xl">
          {text}
        </span>
      </div>
    </div>
  );
}
